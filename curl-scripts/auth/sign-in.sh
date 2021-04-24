#!/bin/bash

curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
     "credentials": {
       "email": "'"${EMAIL}"'",
       "password": "'"${PASSWORD}"'"
     }
   }'

echo
