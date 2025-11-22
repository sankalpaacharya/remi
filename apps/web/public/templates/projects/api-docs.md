# API Name

RESTful API for [purpose]

## 📚 Table of Contents

- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## 🔐 Authentication

```bash
Authorization: Bearer YOUR_API_KEY
```

## 🔌 Endpoints

### GET /api/resource

Returns a list of resources.

**Parameters:**

| Name     | Type    | Required | Description               |
| -------- | ------- | -------- | ------------------------- |
| `limit`  | integer | No       | Number of items to return |
| `offset` | integer | No       | Offset for pagination     |

**Response:**

```json
{
  "data": [],
  "total": 100,
  "limit": 10,
  "offset": 0
}
```

### POST /api/resource

Creates a new resource.

**Request Body:**

```json
{
  "name": "string",
  "description": "string"
}
```

## ⚠️ Error Handling

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

## ⏱️ Rate Limiting

- 100 requests per minute
- 1000 requests per hour
