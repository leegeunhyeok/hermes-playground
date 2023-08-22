#!/bin/bash

cd hermes
cmake -S . -B ../build -G Ninja
cmake --build ../build
