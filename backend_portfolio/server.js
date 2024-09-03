const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  // Import the cors middleware

const app = express();
const PORT = 5000;

app.use(cors());  // Enable CORS for all routes

app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

  fs.appendFile(path.join(__dirname, 'contacts.txt'), data, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    res.status(200).json({ message: 'Data saved successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
