const fs = require("fs");

// render header
console.log("-- header --");

//render body
const filePath = "function\\CallbackFunctions\\data.txt";
fs.readFile(filePath, (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("body : " + data);
  }
});

//render footer
console.log("-- footer --");
