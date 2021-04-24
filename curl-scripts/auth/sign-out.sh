
#!/bin/bash

curl "https://bbeckford305.github.io/Virtual-Closet-Client/" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"

echo
