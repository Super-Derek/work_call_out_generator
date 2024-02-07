# Work Call Out Generator

## Description

Work Call Out Generator is a small, self-guided project based on the simple prompt of creating a message generator program. No longer will users have to struggle to find the words to call out of work. Simply fill in a few attributes to dictate the tone of the message or allow the program to operate fully in default mode. Work Call Out Generator will create a simple message remixed with 15 possible greetings, 15 unique body contents, and 15 closings. Just paste the resulting message into an email and send!

## Features

Enter your name and your boss's name for a truly custom experience. Work Call Out Generator also offers 3 distinct tones for each of the message elements, so users can mix and match to suit their mood. Possible message element tones include:

* greeting
    1. respectful
    2. disrespectful
    3. cringe

* body
    1. professional
    2. unprofessional
    3. weird

* closing
    1. sincere
    2. rude
    3. nonsense

*Note: Leaving these attributes blank will default to a message that is respectful, professional, and sincere.*

## How to Use

This program runs in Node,js. Before running, please install node by following the instructions here:
 [Node.js](https://nodejs.org/en/download)

 Once Node.js is installed and the Work Call Out Generator is downloaded, you can call the default function simply by typing `generateCallOut();`.

 For more control, include the available string attributes within the function call. The order for these attributes is bossName, greetingTone, bodyTone, employeeName, closingTone. An example of this would be:
 `generateCallOut('Mrs. Coy', 'respectful', 'weird', 'Frank Chadwick', 'rude');`

 The code can be run with the node command `node work_call_out_generator.js`.

 If you're not satisfied with the result, simply run the node command again to generate a new, random message. Finally, copy the message and email your boss. Enjoy your day off!

> [!CAUTION]
> Not all jobs appreciate a creative call out message. Use at your own risk!

## Technologies

Work Call Out Generator is a very simple program relying solely on Node JavaScript. This program was written in Visual Studio Code for Mac.

## Collaborators

Derek Lewis is the sole writer of this code. Project is based on an open prompt from [codecademy.com](codecademy.com).

## License

MIT License

Copyright (c) [2024] [Derek Lewis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
