curl --request POST \
  --url https://example.tld/wp-json/llms/v1/api-keys/%7Bid%7D \
  --user ck_XXXXXX:sk_XXXXXX \
  --header 'content-type: application/json' \
  --data '{"user_id":456,"description":"My API Key","permissions":"read"}'