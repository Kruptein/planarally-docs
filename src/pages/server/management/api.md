---
layout: ../../../layouts/docs.astro
---

# Management API

Since 0.23 PA includes a management API server that is separate to the main webserver.
This management API can be used to perform some administrative operations.

## Configuration

Configuration of the API server is exactly similar to the Webserver section in the save file, and is described further in [server configuration](../configuration/).

The only change in the default config is that the management API server is not by default exposed to external networks (i.e. `localhost` instead of `0.0.0.0`) and that it targets port 8001 instead of 8000.

## Interaction

The server uses standard REST operations and you are thus very free in which tools you use to contact the server.
Popular choices are either the commandline curl command, the postman tool or some websites like apitester or reqbin.

As an added security measure, you need to provide the correct API bearer token when you perform requests.
To retrieve the token you can either look into the database manually or use the following python snippet:

```python
import src.auth
print(auth.get_api_token())
```

## System notifications

### List all notifications

endpoint: `/api/notifications`
operation: `GET`

Returns all notifications currently being broadcasted to all players.

Example curl command:

```bash
curl -X GET http://localhost:8001/api/notifications -H 'Authorization: Bearer 0b9f515e153e0e07782e9e41a0ebf0bf7137d0fd655a03ebc4991f24302c313e'
```

### Add a notification

endpoint: `/api/notifications`
operation: `POST`

Example curl command:

```bash
curl -X POST http://localhost:8001/api/notifications -H 'Authorization: Bearer 0b9f515e153e0e07782e9e41a0ebf0bf7137d0fd655a03ebc4991f24302c313e' -d '{"message": "EXPECTED SERVER MAINTENANCE SUNDAY 11/10/2020 AT 15:50 GMT+2"}'
```

### Remove a notification

endpoint: `/api/notifications/<notification_uuid>`
operation: `DELETE`

Example curl command:

```bash
curl -X DELETE http://localhost:8001/api/notifications/527f2493-6c18-4760-8c19-6a63b70c2961 -H 'Authorization: Bearer 0b9f515e153e0e07782e9e41a0ebf0bf7137d0fd655a03ebc4991f24302c313e'
```
