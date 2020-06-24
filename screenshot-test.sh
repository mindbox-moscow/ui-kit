#!/bin/bash

docker build . -t -f screenshot.Dockerfile ui-kit:screenshot-test
docker run -t --rm --mount type=bind,source="$(pwd)",target=/app ui-kit:screenshot-test
