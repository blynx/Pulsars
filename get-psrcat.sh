#!/bin/sh

PSRCAT_REMOTE_SRC="http://www.atnf.csiro.au/people/pulsar/psrcat/downloads/psrcat_pkg.tar.gz"

# psrcat directory

mkdir "db_psrcat"

# get remote psrcat
# unpack and remove all files except psrcat.db

wget $PSRCAT_REMOTE_SRC -O "db_psrcat/psrcat_pkg.tar.gz"
gunzip -f "db_psrcat/psrcat_pkg.tar.gz"
tar -xvf "db_psrcat/psrcat_pkg.tar" -C "db_psrcat/"
cd "db_psrcat/psrcat_tar"
source makeit
cd ../

mv "psrcat_tar/psrcat" "psrcat"
mv "psrcat_tar/psrcat.db" "psrcat.db"
mv "psrcat_tar/glitch.db" "glitch.db"
mv "psrcat_tar/README" "README.txt"

rm -rf "psrcat_tar"
# rm "psrcat_pkg.tar"