#!/usr/bin/env bash

cat>a
f(){ cut -d\  -f$1<a|sort -n;}
echo $(($(for l in $(paste -d- <(f 1) <(f 4));do echo +$((l));done|tr -d -)))
