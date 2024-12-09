#!/usr/bin/env bash

cat>a
echo $(($(grep -v \|<a|grep -vE `grep \|<a|sed -r 's/(..)\|(..)/\2.+\1/g'|tr '\n' \|`A|xargs -L1 -I: sh -c 'echo +`cut -d, -f$(($(grep -o ,<<<:|wc -l)/2+1))<<<:`')))
