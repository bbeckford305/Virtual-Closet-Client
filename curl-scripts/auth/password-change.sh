#!/bin/bash

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
     "password": {
       "passwords[old]": "'"${PASSWORD}"'",
       "passwords[new]": "'"${PASSWORD}"'"
     }
   }'
