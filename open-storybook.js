const { spawn } = require("child_process");
const version = process.argv[2];

console.log("Starting " + version + " storybook...");

spawn("npm", ["run", version], { stdio: "inherit" });
