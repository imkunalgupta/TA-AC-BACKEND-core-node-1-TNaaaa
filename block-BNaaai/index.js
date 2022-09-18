var url = require('url');
const parsedUrl = url.parse(
  'https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',
  true
);
console.log(parsedUrl);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

const googleParsedUrl = url.parse('https://google.com', true);
console.log(googleParsedUrl);
console.log(googleParsedUrl.pathname);
console.log(googleParsedUrl.query);
console.log(googleParsedUrl.host);
console.log(googleParsedUrl.protocol);
