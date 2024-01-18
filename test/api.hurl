# Retrieve the list of todos
GET {{host}}/todo
HTTP 200
[Asserts]
header "Content-Type" contains "application/json"
jsonpath "$" isCollection

# Create a todo
POST {{host}}/todo
{
    "description": "test create endpoint",
    "done": false
}
HTTP 201
[Captures]
next_url: header "Location"
[Asserts]
header "Location" matches /^\/todo\/\d+$/

# Fetch the created todo
GET {{host}}{{next_url}}
HTTP 200
[Asserts]
header "Content-Type" contains "application/json"
jsonpath "$.id" isInteger
jsonpath "$.description" isString
jsonpath "$.done" isBoolean

# Update the created todo
PUT {{host}}{{next_url}}
{
    "description": "test updated endpoint",
    "done": true
}
HTTP 204

# Remove the created todo
DELETE {{host}}{{next_url}}
HTTP 204
