#!/usr/bin/env bash

echo $(($(grep -oE 'mul\(\d+,\d+)'<$1|tr -s ,mul \*+)))
