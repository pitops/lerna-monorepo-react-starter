const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

const dotenvFilePath = path.resolve(__dirname, "../.env");

if (fs.existsSync(dotenvFilePath)) {
  dotenv.config({
    path: dotenvFilePath,
    encoding: "utf8"
  });
}

module.exports = {
  ui: {
    port: parseInt(process.env.UI_PORT) || 3000
  }
};
