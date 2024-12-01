#!/usr/bin/env bash
# Make sure to pass the file as the first argument of this script

echo $((0$(for l in $(cut -d\  -f1<$1|sort -n);do echo +$(($(grep -c \ $l $1)*$l));done)))
