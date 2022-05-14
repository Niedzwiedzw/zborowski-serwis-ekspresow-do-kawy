#!/usr/bin/env bash
set -e
ffmpeg -i ./src/assets/video.mp4  -vf monochrome ./src/assets/video-compressed.webm