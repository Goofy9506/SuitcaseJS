#!/usr/bin/env node

// pain -TBroz15

import { compile } from "./compiler.js";
import { onHelp } from "./cli/onHelp.js";
import { italic } from "./utils/picocolors.js";
import { getRuntime } from "./utils/check_version.js";

console.log(`
 ❓ undefined ${italic("v0.1.0")}
`);

if (typeof process.argv[2] === "undefined") process.exit(0);
switch (process.argv[2]) {
  case "-v":
  case "--version":
    console.log(` Using ${getRuntime()}\n`);
    break;

  case "-c":
  case "--compile":
    await compile();
    break;

  case "-h":
  case "--help":
  default:
    onHelp();
    break;
}
