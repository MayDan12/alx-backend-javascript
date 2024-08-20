// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  // For TTY input (interactive input)
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  });
} else {
  // For non-TTY input (piped input)
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
