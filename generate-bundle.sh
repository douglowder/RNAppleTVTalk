#!/bin/sh

CURRENT_DIR=`pwd`

echo 'Generating JS bundle...'
curl -o $CURRENT_DIR/RNAppleTVTalk.bundle.js http://localhost:8081/index.ios.bundle?dev=false
