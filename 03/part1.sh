#!/usr/bin/env bash

echo $(($(grep -oE 'mul\([0-9]+,[0-9]+)'<$1|tr -s ,mul \*+)))
