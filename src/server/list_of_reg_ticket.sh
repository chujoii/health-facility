#!/bin/sh

# Danger: do not use shell scripts in real server!
# Danger: script generate list of files in /tmp directory!

echo Content-type: application/json
echo

echo -n '{"registered_tickets":['

separator=''
for i in /tmp/*.*.txt
do
    asenam=`basename -s .txt $i`
    echo -n "$separator\"$asenam\""
    separator=','
done

echo ']}'

