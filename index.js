#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const j2s = require("./j2s");
const argv = yargs(hideBin(process.argv))
  .alias("v", "validator")
  .alias("o", "output")
  .alias("h", "header")
  .alias("b", "baseUrl")
  .alias("m", "mapPath")
  .describe("v", "Location of validator file or directory of the folder")
  .describe("o", "Location of the output file location")
  .describe("h", "Location of the header file in json format")
  .describe("b", "Override base url")
  .describe("m", "Override redirect path")
  .describe(
    "r",
    "For multiple files, will recursively search for .validator.js file in that directory"
  )
  .demandOption(["v", "o", "h"])
  .help("help")
  .example(
    "joi2swagger",
    "joi2swagger -r -v ./validators -h ./header.json -o ./swagger.json"
  ).argv;

j2s.joi2swagger(argv);