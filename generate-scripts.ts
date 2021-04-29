import * as fs from 'fs-extra';

const bashTemplate = `#!/bin/bash

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Meme: {{template}}
# @raycast.mode silent

# @raycast.icon ✨
# @raycast.argument1 { "type": "text", "placeholder": "text|text", "optional": false }

IMAGE_FILE=$(~/go/bin/meme -i {{template}} -t "$1")
./copy.osa $IMAGE_FILE

echo 'Meme copied to clipboard'`

const templates = [
  'advice-mallard',
  'all-the-things',
  'am-i-the-only-one',
  'ancient-aliens',
  'archer-do-you-want',
  'awkward-sealion',
  'baby-insanity-wolf',
  'back-in-my-day',
  'bad-guy-boss',
  'bad-luck-brian',
  'brace-yourselves',
  'college-liberal',
  'condescending-wonka',
  'confession-bear',
  'confession-kid',
  'dicaprio-cheers',
  'disaster-girl',
  'doge',
  'dr-evil-lasers',
  'everywhere',
  'first-world-problems',
  'fuck-me-right',
  'futurama-fry',
  'good-guy-boss',
  'good-guy-greg',
  'grumpy-cat',
  'high-guy',
  'how-do-they-work',
  'i-should-buy-a-boat-cat',
  'kirk-khan',
  'laughing-men-in-suits',
  'look-at-me',
  'minor-mistake-marvin',
  'mocking-spongebob',
  'morpheus',
  'most-interesting-man',
  'none-of-my-business',
  'one-does-not-simply',
  'oprah-you-get-a',
  'overly-attached-girlfriend',
  'pepperidge-farm-remembers',
  'peter-griffin-news',
  'philosoraptor',
  'picard-facepalm',
  'picard-wtf',
  'politically-correct-redneck',
  'roll-safe',
  'satisfied-seal',
  'scumbag-stacy',
  'scumbag-steve',
  'so-hot-right-now',
  'so-i-got-that-goin-for-me',
  'success-kid',
  'sudden-clarity-clarence',
  'that-would-be-great',
  'third-world-skeptical-kid',
  'too-damn-high',
  'unhelpful-highschool-teacher',
  'unpopular-opinion-puffin',
  'waiting-skeleton',
  'y-u-no',
  'yall-got-any-more-of',
]

function renderScript(template: string): void {
  const code = bashTemplate.split('{{template}}').join(template);
  const filename = `scripts/meme-${template}.sh`;
  fs.writeFileSync(filename, code);
  fs.chmodSync(filename, '755');
  console.log(filename);
}

fs.emptyDirSync('./scripts');
fs.copyFileSync('./copy.osa', './scripts/copy.osa');
templates.forEach(renderScript);

