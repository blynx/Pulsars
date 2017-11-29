defmodule Psrex.EPN do
    
    @epn_ascii_root "http://www.epta.eu.org/epndb/ascii/"

    def go do
        HTTPoison.start
        profile_pile = scrape_epn_profiles(@epn_ascii_root)
        # export_profiles(profile_pile)
    end

    def scrape_epn_profiles(url, last_href \\ "") do
        IO.puts "processing " <> url <> " ..."
        case HTTPoison.get(url) do
            {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
                pile = Enum.each(Floki.find(body, "a"), fn(anchor) ->
                    {"a", [{"href", href}], [content]} = anchor
                    if href == content do
                        new_url = url <> href
                        if String.ends_with?(href, ".txt") do
                            pulsar_name = binary_part(last_href, 0, byte_size(last_href)-1)
                            pulsar_profile_url = new_url
                            reference_file_name = href
                            reference_name = String.replace(reference_file_name, ".txt", "")
                            wavelength = Enum.at(String.split(reference_name, "_"), 1)
                            epn_psr_profile = %{
                                name: pulsar_name, 
                                reference_name: reference_name, 
                                wavelength: wavelength, 
                                url: pulsar_profile_url
                            }
                            export_profile(epn_psr_profile)
                        else
                            scrape_epn_profiles(new_url, href)
                        end
                    end
                end)
        end
        {:ok}
    end

    def export_profile(epn_psr_profile) do
        folder_name = "db_epn/#{epn_psr_profile.name}/"
        file_name = "#{epn_psr_profile.name}__#{epn_psr_profile.reference_name}__#{epn_psr_profile.wavelength}.txt"
        file_path = "#{folder_name}#{file_name}"
        IO.puts "Downloading #{epn_psr_profile.url} to #{file_path}"
        case HTTPoison.get(epn_psr_profile.url) do
            {:ok, resp} ->
                File.mkdir_p(folder_name)
                File.write!(file_path, file_blob)
            {:error, error} ->
                IO.inspect(error)
                raise "error"
        end
        IO.puts "ok"
    end

    # def export_profiles(profile_pile) do
    #     IO.inspect profile_pile
    # end

end