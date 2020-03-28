const ex = {};
const authData = require('../data/auth-data');
ex.signup = (username,email,age,password) => {
	return new Promise((resolve, reject) => {
		authData.signup(username,email,age ,password).then(result => {
			return resolve(result);
		}, err => {
			return reject(err);
		});
	});
};

module.exports = ex;