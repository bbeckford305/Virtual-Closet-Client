#!/bin/sh

API="https://virtual-closet-api.herokuapp.com"
URL_PATH="/garments"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data ' {
  }''

echo