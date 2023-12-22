const formData = require('form-data');
const Mailgun = require('mailgun-js')({
	apiKey: process.env.MAILGUN_API_KEY,
	domain: "sandbox3f37bcca0b8047a0ae1067367b17dde8.mailgun.org"
});

// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY })

module.exports = Mailgun;