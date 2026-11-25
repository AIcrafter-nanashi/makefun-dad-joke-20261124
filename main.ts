import * as fs from "fs";
import * as path from "path";

// Generate a dad joke
const joke = "My wife held up a paint chip called Agreeable Gray and asked, 'Well?' 'Honey,' I said, 'I've been that color for years.'";

// Determine output directory
const outputDir = process.env.MAKEFUN_TEST_OUTPUT || "/output";

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the joke to entry.txt
const outputPath = path.join(outputDir, "entry.txt");
fs.writeFileSync(outputPath, joke, "utf-8");

console.log(`Joke written to ${outputPath}`);
