#!/bin/bash

rm *.txt
rm *.json
# Get the current timestamp
timestamp=$(date +"%Y_%m_%d_%I_%M_%p")

# Define the filename with the timestamp
touch ${timestamp}.txt
