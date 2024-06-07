#!/usr/bin/env bash

curl -X POST 'http://localhost:3000/categories' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "'${1:-Sport}'"
  }' \
  | jq .
