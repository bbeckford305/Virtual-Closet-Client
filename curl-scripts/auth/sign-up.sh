#!/bin/bash

curl "https://bbeckford305.github.io/Virtual-Closet-Client/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "first_name": "'"${FNAME}"'",
      "last_name": "'"${LNAME}"'",
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
