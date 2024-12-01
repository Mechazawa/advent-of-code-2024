#!/usr/bin/env bash

echo $((0$(for l in $(cut -d\  -f1<$1|sort -n);do echo +$(($(grep -c \ $l $1)*$l));done)))
