defmodule Psrex.CLI do    
    
    @moduledoc """
    # Psrex.CLI

    """

    def main(args) do 
        args |> parse_args |> process
    end

    def process({[], _, []}) do
        IO.puts "No arguments given."
    end

    def process({[], _, failed}) do
        IO.puts "Failed arguments:"
        IO.inspect failed
    end

    def process({[help: true], _, _}) do
        IO.puts @moduledoc
    end

    def process({[epn_go: true], _, _}) do
        Psrex.EPN.go
    end

    def process({options, remaining, invalid}) do
        IO.inspect options
        IO.inspect remaining
        IO.inspect invalid
    end

    defp parse_args(args) do
        OptionParser.parse(args, 
            switches: [
                help: :boolean,
                epn_go: :boolean
            ],
            aliases: [
                h: :help
            ])
    end
end