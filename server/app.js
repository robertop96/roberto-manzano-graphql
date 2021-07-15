const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const PORT = 5050;

const app = express();

app.use('/graphql', graphqlHTTP({}));
// Listening for server
app.listen(PORT, () => {
  console.log(`Now listening for request on port ${PORT}`);
});
