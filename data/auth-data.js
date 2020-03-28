const ex = {};

const pool = require("../db/db");
ex.signup = (username, email, age, password) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "INSERT INTO users ( username, email, age,password) VALUES ($1, $2, $3,$4)",
      [username, email, age, password],
      (error, result) => {
        if (error) return reject(error);

        return resolve(result);
      }
    );
  });
};

module.exports = ex;

// const createUser = (request, response) => {
// 	const { user_name, email, age, password } = request.body
//   ​
// 	pool.query('INSERT INTO users ( user_name, email, age,password) VALUES ($1, $2, $3,$4)', [user_name, email, age, bcrypt.hashSync(password, salt)], (error, result) => {
// 	  if (error) {
// 		throw error
// 	  }
//    response.status(201).send(`User added `)
// 	  var hash = bcrypt.hashSync(password, salt);
// 	  console.log(hash)
// 	})
