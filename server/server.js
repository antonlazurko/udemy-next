require('dotenv').config();
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Quotes API server is listening on port ${port}`);
});
