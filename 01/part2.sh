#!/usr/bin/env bash

i="input.txt"
a=$(cut -d' ' -f1 < $i | sort -n)
b=$(cut -d' ' -f4 < $i | sort -n)

sum=0

for l in $a
do
  sum+=+$(($(grep -c $l <<<$b)*$l))
done

echo "Score: $((sum))"