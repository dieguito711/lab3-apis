// The API requires each client to use OAuth 2 authentication. 
// https://aaronparecki.com/oauth-2-simplified/
// https://tools.ietf.org/html/rfc6749
// This means you'll have to register your application, and generate an access_code if you'd like to log in as a user. 

// For public read-only and anonymous resources, such as getting image info, looking up user comments, etc. 
// all you need to do is send an authorization header with your client_id in your requests. 
// This also works if you'd like to upload images anonymously (without the image being tied to an account), 
// or if you'd like to create an anonymous album. 
// This lets us know which application is accessing the API.