const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");
// console.log(process.argv);
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "List every item",
  handler: function () {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read the items",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});
yargs.version("1.1.0");
// console.log(yargs.argv);
yargs.parse();
