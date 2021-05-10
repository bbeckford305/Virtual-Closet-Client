
#!/bin/bash

curl "${API}${URL_PATH}" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"

echo
