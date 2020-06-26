#!/bin/bash

HUB_TOKEN=$(curl -s -H "Content-Type: application/json" -X POST -d {"$(echo $1 | base64 --decode)"} https://hub.docker.com/v2/users/login/ | jq -r .token)

curl -i -X DELETE \
  -H "Accept: application/json" \
  -H "Authorization: JWT $HUB_TOKEN" \
  https://hub.docker.com/v2/repositories/itmindbox/dev_ui_kit-$2/
