const express = require('express');
const low = require('lowdb');
const cors = require('cors');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const adapter = new FileSync('db.json');
const db = low(adapter);

app.use(express.json());
app.use(cors());

db.defaults({ visitors: 0 }).write();

app.use(express.json());

app.get('/', (req, res) => {
  // 접속자 수 증가
  db.update('visitors', n => n + 1).write();
  
  const visitors = db.get('visitors').value();
  
  res.json({ message: 'Hello, welcome to the website!', visitors });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});