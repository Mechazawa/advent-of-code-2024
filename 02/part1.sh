#!/usr/bin/env bash

rm input.h input.c

bash prepare.sh input.txt > input.h
gcc -O3 -o part1.out part1.c
./part1.out