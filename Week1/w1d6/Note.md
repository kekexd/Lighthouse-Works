## Note w1d6

#### HTTP status codes

- 1xx: Informational, reserved for experimental purposes only.

- 2xx: Successful
  - 200 OK
  - Means that the server did whatever the client wanted it to, and all is well.

- 3xx: Redirection, the resource is somewhere else and that the client should try again at a new address.
  - 301 Moved permanently
  - 302 Moved temporarily
  - 304 Not modified

- 4xx: Client error, the client ask for something it should not have asked for.
  - 400: Bad request
  - 401: Unauthorized
  - 403: Forbidden
  - 404: Not found. Seen this one before? :) It means that the server has not heard of the resource and has no further clues as to what the client should do about it. In other words: dead link.

- 5xx: Server error, the server screwed up or that it couldn't do as the client requested.
  - 500: Internal server error
  - 501: Not implemented
  - 503: Service unavailable



#### HTTP Statelessness

- every HTTP request happens in complete isolation.
- When the client makes an HTTP request, it includes all the information necessary for the server to fulfill that request. The server never relies on information from previous requests. If that information was important, the client would have to send it again in subsequent request.
- Statelessness also brings new features. It’s easier to distribute a stateless application across load-balanced servers. A stateless application is also easy to cache.

#### JSON
- JSON.parse() is for "parsing" something that was received as JSON.
- JSON.stringify() is to create a JSON string out of an object/array.
- They are the inverse of each other. JSON.stringify() serializes a JS object into a JSON string, whereas JSON.parse() will deserialize a JSON string into a JS object.

#### API

- API stands for Application Programming Interface through which softwares can interact with each other. Note not a human interaction.

- An example, You are buying an item in online through your credit card. You will provide credit card details and press continue button. It will tell you whether your information is correct or not. To provide these results, there are lot of things in the background.The application will send your credit card details to a remote application which will validate your information and send the result back your application. API is used in this scenario.

- ANOTHER EXAMPLE. Weather application
  - Without API - Weather application must open weather.com site and read the details as human does.
  - With API - Weather application will send a message to weather.com and receives the result and then display it.
