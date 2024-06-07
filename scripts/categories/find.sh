#!/usr/bin/env bash

curl "http://localhost:3000/categories/$1" | jq
