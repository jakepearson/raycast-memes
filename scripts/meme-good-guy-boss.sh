#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Meme: good-guy-boss
# @raycast.mode silent

# @raycast.icon ✨
# @raycast.argument1 { "type": "text", "placeholder": "text|text", "optional": false }

IMAGE_FILE=$(~/go/bin/meme -i good-guy-boss -t "$1")
./copy.osa $IMAGE_FILE

echo 'Meme copied to clipboard'