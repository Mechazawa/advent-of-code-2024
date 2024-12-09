#!/usr/bin/env bash

echo $(($(cat | grep -oE mul\\\(\\d+,\\d+\)|tr -s ,mul \*+)))
