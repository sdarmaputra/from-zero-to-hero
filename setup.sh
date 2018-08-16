#!/bin/sh

ln -s $(pwd)/git-hooks/* $(pwd)/.git/hooks
npm install
