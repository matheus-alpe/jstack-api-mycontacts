#!/usr/bin/env bash

curl "http://localhost:3000/contacts/$1" | jq
