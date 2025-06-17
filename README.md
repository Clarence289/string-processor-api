# String Processing API Endpoint

This is a simple API endpoint that processes a string by converting it into an array of characters, sorting them alphabetically, and returning the result.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Usage

### Process String
- **Endpoint:** POST `/process`
- **Request Body:**
```json
{
    "data": "example"
}
```
- **Response:**
```json
{
    "word": ["a", "e", "e", "l", "m", "p", "x"]
}
```

## Testing

You can test the endpoint by sending a POST request to:
```
http://localhost:3000/process
```

Example using curl:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"data":"example"}' http://localhost:3000/process
```

## Deployment

To deploy this API:
1. Choose a hosting platform (e.g., Heroku, Vercel, Railway)
2. Deploy your code
3. Update the test endpoint URL with your deployed API URL:
```
https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/junior-dev?url=YOUR_API_ENDPOINT_URL&email=YOUR_EMAIL_ADDRESS
``` 