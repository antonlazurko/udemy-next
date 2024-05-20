require('dotenv').config();
const app = require('./src/app');
const dbInit = require('./src/config/dbInit');

const startServer = async () => {
  try {
    await dbInit();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to sync database:', error);
    process.exit(1);
  }
};

startServer();
