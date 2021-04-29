#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Meme: so-i-got-that-goin-for-me
# @raycast.mode silent

# @raycast.icon ✨
# @raycast.argument1 { "type": "text", "placeholder": "text|text", "optional": false }

IMAGE_FILE=$(~/go/bin/meme -i so-i-got-that-goin-for-me -t "$1")
./copy.osa $IMAGE_FILE

echo 'Meme copied to clipboard'