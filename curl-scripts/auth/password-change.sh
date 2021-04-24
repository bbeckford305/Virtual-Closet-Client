#!/bin/bash

curl "https://bbeckford305.github.io/Virtual-Closet-Client/" \
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
