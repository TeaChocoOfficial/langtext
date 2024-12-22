//-Path: "langtext/app/webpack.config.js"
const path = require("path");

module.exports = {
    entry: "./view/app/script.js",
    output: {
        filename: "./index.js",
        path: path.resolve(__dirname, "view"),
    },
};
