#!/usr/bin/env bash

echo int C=$(wc -l <$1)\;int L[]=\{0,$(while read l; do echo ${l// /,},0,;done<$1)}\;
