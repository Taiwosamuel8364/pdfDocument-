const fs = require("fs");
const generatePDF = require("./pdfDocument.js");

// Read student information from a JSON file
const jsonData = JSON.parse(fs.readFileSync("studentData.json", "utf-8"));

// Call the function with the obtained data
generatePDF(jsonData);
