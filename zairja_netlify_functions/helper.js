const querystring = require("querystring");

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  const name = params.firstname || "Emptiness";
  const likesTacos = params.likesTacos;
  const gender = params.gender;

  return {
    statusCode: 200,
    body: `Hello, ${name}. You chose ${gender}. Your taco preference is '${likesTacos}'.
            Here is the raw data:
            ${event.body}`
  };
};