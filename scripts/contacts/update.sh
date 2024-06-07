#!/usr/bin/env bash

curl -X PUT "http://localhost:3000/contacts/$1" \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "'${2:-'Matheus Alves Pereira'}'",
    "email": "'${3:-'matttalves@gmail.com'}'",
    "phone": "'${4:-'48991837181'}'",
    "category_id": "'${5:-'8b808041-ce32-4322-bda4-1969241183f9'}'"
  }' \
  | jq .
