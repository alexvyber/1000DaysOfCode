const repl = require("node:repl");
const colors = require("colors");

const name = "Mike";

const isEven = (uInput, context, filename, callback) => {
  callback(null, uInput % 2 == 0 ? "Even" : "Odd");
};

const modifyOutput = (output) => output.toUpperCase().green;

// Init object for repl.start
const init = {
  prompt: "-> ",
  eval: isEven,
  writer: modifyOutput,
};

const r = repl.start(init);

// Define custom command
r.defineCommand("cat", {
  help: "Cat Command help message",
  action(input) {
    this.clearBufferedCommand();
    console.log(`Hello! You typed ${input}`);
    this.displayPrompt();
  },
});

r.defineCommand("bey", function bey() {
  this.close();
});

// Just close it after some time
const timeToClose = 10000;
// setTimeout(() => r.close(), timeToClose);

// Define IMMUTABLE property in context object
Object.defineProperty(r.context, "name", {
  configurable: false,
  enumerable: true,
  value: name,
});
