#!/usr/bin/env bash

curl -X PUT "http://localhost:3000/categories/$1" \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "'${2:-Sport}'"
  }' \
  | jq .
