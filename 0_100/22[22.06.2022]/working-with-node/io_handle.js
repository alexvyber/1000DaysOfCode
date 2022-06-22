process.stdin.on("data", (data) => {
  const output = data.toString().trim();
  if (output !== "") {
    process.stdout.write(`This is the ${output}` + "\n");
  } else {
    process.stderr.write("Input empty");
  }
});
