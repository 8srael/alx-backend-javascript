/**
 * Task 5. more complex HTTP server using Node's HTTP module
 */

const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const dbPath = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      const dataLines = data.trim().split('\n');
      const csStudents = dataLines
        .filter((line) => line.includes('CS'))
        .map((line) => line.substring(0, line.indexOf(',')));
      const sweStudents = dataLines
        .filter((line) => line.includes('SWE'))
        .map((line) => line.substring(0, line.indexOf(',')));

      resolve([csStudents, sweStudents]);
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(dbPath)
      .then((data) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students
Number of students: ${data[0].length + data[1].length}
Number of students in CS: ${data[0].length}. List: ${data[0].join(', ')}
Number of students in SWE: ${data[1].length}. List: ${data[1].join(', ')}`);
      })
      .catch((error) => {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Not found');
  }
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server running at http://${hostname}:${port}\n`);
});

module.exports = app;
