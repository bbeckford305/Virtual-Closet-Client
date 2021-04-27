#!/bin/sh

API="https://virtual-closet-api.herokuapp.com"
URL_PATH="/garments/color"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
      "garment": {
        "color": "'"${COLOR}"'"
      }
    }'

echo
