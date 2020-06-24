#!/bin/bash

declare -a arr_images=($(curl -H "Authorization: Bearer $1" https://container-registry.api.cloud.yandex.net/container-registry/v1/images\?repositoryName\=crpo9tj76o3c7pi8i72n/dev_new_frontend/$2 | jq '.images[].id' | sed 's/"//g'))

for i in "${arr_images[@]}"
do
   curl -X DELETE -H "Authorization: Bearer $1" https://container-registry.api.cloud.yandex.net/container-registry/v1/images/$i
done
