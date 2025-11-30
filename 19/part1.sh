#!/usr/bin/env bash
# Usage bash part1.sh input.txt

grep -cE '^('`head -n1 $1|sed 's/, /|/g'`')+$' $1
