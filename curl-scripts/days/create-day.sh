#!/bin/bash

curl "http://localhost:4741/days" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "day": {
      "today": "'"${DAY}"'",
      "date": "'"${DATE}"'",
      "spend": "'"${SPEND}"'"




    }
  }'

echo
