#!/bin/sh

# Danger: do not use shell scripts in real server!
# Danger: script delete files from /tmp directory!

echo Content-type: text/html
echo

echo '<!DOCTYPE html>'
echo '<html>'
echo '<head>'
echo '<title>test</title>'
echo '<meta http-equiv=content-type content="text/html; charset=utf-8">'
echo '</head>'
echo '<body>'

echo '<h1>Query string POST:</h1>'
echo '<pre>'

# save POST variables
[ -z "$QUERY_STRING_POST"  -a "$REQUEST_METHOD" = "POST" -a ! -z "$CONTENT_LENGTH" ] && read -n $CONTENT_LENGTH QUERY_STRING_POST
echo $QUERY_STRING_POST

FILE_NAME=`echo $QUERY_STRING_POST | egrep -o '[0-9]+\.[0-9]+'`
rm -f "/tmp/$FILE_NAME.txt"

echo '</pre>'

echo '</body>'
echo '</html>'
