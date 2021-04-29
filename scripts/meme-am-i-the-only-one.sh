#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Meme: am-i-the-only-one
# @raycast.mode silent

# @raycast.icon ✨
# @raycast.argument1 { "type": "text", "placeholder": "text|text", "optional": false }

IMAGE_FILE=$(~/go/bin/meme -i am-i-the-only-one -t "$1")
./copy.osa $IMAGE_FILE

echo 'Meme copied to clipboard'