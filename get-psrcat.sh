#!/bin/sh

$PSRCAT_REMOTE_SRC="http://www.atnf.csiro.au/people/pulsar/psrcat/downloads/psrcat_pkg.tar.gz"
$PSRCAT_DIR="psrcat"
$PSRCAT_DEST_FILE="$PSRCAT_DIR/psrcat_pkg.tar.gz"

# psrcat directory

if [ ! -d $PSRCAT_DIR ]; then
  mkdir $PSRCAT_DIR
fi

# get files

# wget $PSRCAT_REMOTE_SRC -O $PSRCAT_DEST_FILE
# tar xf $PSRCAT_DEST_FILE
