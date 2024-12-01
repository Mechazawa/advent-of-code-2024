#!/usr/bin/env bash

i="input.txt"
a=$(cut -d' ' -f1 < $i | sort -n)
b=$(cut -d' ' -f4 < $i | sort -n)

diffs=$(paste -d'-' <(echo -e "$a") <(echo -e "$b") | sed "s/-$/-$(tail -n 1 <<<"$b")/g")

sum="0"

for l in $diffs
do
  sum="$sum+"$(sed s/-// <<<$(($l)))
done

echo $sum=$((sum))
