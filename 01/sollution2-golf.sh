#!/usr/bin/env bash
# Make sure to pass the file as the first argument of this script

echo $(($(for l in $(cut -d\  -f1<$1);do echo +$(($(grep -c \ $l $1)*$l));done)))
