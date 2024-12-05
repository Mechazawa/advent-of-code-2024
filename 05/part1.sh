#!/usr/bin/env bash

echo $(($(grep -v \|<$1|grep -vE `grep \|<$1|sed -r 's/(..)\|(..)/\2.+\1/g'|tr '\n' \|`A|xargs -L1 -I: sh -c 'echo +`cut -d, -f$(($(grep -o ,<<<:|wc -l)/2+1))<<<:`')))
