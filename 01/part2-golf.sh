#!/usr/bin/env bash
# Make sure to pass the file as the first argument of this script

cat>a
echo $(($(for l in $(cut -d\  -f1<a);do echo +$(($(grep -c \ $l a)*$l));done)))
