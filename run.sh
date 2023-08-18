#!/bin/bash

# Get the current timestamp
timestamp=$(date +"%Y%m%d%H%M%S")

# Define the filename with the timestamp
filename="${timestamp}.txt"

# Create the file
touch "$filename"

# Print a message
echo "Created file: $filename"