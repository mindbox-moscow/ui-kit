#!/bin/bash

docker build . -t ui-kit:screenshot-test
docker run -t --rm --mount type=bind,source="$(pwd)",target=/app ui-kit:screenshot-test
