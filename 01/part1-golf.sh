#!/usr/bin/env bash
# Make sure to pass the file as the first argument of this script

cat>a
f(){ cut -d\  -f$1<a|sort -n;}
echo $(($(for l in $(paste -d- <(f 1) <(f 4));do l=$((l));echo +${l/-/};done)))
