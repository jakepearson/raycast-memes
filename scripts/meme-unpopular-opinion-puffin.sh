#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Meme: unpopular-opinion-puffin
# @raycast.mode silent

# @raycast.icon ✨
# @raycast.argument1 { "type": "text", "placeholder": "text|text", "optional": false }

IMAGE_FILE=$(~/go/bin/meme -i unpopular-opinion-puffin -t "$1")
./copy.osa $IMAGE_FILE

echo 'Meme copied to clipboard'