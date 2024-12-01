#!/usr/bin/env bash
# Make sure to pass the file as the first argument of this script

i=$1;f(){ cut -d\  -f$1<$i|sort -n;}
echo $(($(for l in $(paste -d- <(f 1) <(f 4));do l=$((l));echo +${l/-/};done)))
