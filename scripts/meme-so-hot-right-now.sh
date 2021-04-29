#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Meme: so-hot-right-now
# @raycast.mode silent

# @raycast.icon ✨
# @raycast.argument1 { "type": "text", "placeholder": "text|text", "optional": false }

IMAGE_FILE=$(~/go/bin/meme -i so-hot-right-now -t "$1")
./copy.osa $IMAGE_FILE

echo 'Meme copied to clipboard'