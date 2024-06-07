#!/usr/bin/env bash

curl -X POST 'http://localhost:3000/contacts' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "'${1:-'Matheus Alves Pereira'}'",
    "email": "'${2:-'matttalves@gmail.com'}'",
    "phone": "'${3:-'48991837181'}'",
    "category_id": "'${4:-'8b808041-ce32-4322-bda4-1969241183f9'}'"
  }' \
  | jq .
