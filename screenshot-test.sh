#!/bin/bash

docker build . -t ui-kit:screenshot-test
docker run -it --rm --mount type=bind,source="$(pwd)/src",target=/app/src ui-kit:screenshot-test
