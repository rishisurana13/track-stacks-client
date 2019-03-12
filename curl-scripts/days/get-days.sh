#!/bin/bash

curl "http://localhost:4741/days" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
