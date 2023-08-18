#!/bin/bash

rm *.txt
# Get the current timestamp
timestamp=$(date +"%Y_%m_%d_%I_%M_%p")

# Define the filename with the timestamp
filename="${timestamp}.txt"

# Create the file
touch "$filename"

# Print a message
echo "Created file: $filename"