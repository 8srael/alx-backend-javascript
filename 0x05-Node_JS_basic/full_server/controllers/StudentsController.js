import readDatabase from '../utils';

/**
 * StudentsController class for managing students
 */

const dbPath = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    if (!dbPath) {
      response.status(500).send('Cannot load the database');
    }
    readDatabase(dbPath)
      .then((data) => {
        response.end(`This is the list of our students
Number of students in ${Object.keys(data)[0]}: ${data.CS.length}. List: ${data.CS.join(', ')}
Number of students in ${Object.keys(data)[1]}: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`);
      })
      .catch((err) => {
        response.statusCode = 500;
        response.end(err.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    readDatabase(dbPath)
      .then((data) => {
        const { major } = request.params;
        if (Object.keys(data).includes(major)) {
          response.status(200).send(`List: ${data[major].join(', ')}`);
        } else {
          response.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch((err) => {
        response.statusCode = 500;
        response.end(err.message);
      });
  }
}

export default StudentsController;
