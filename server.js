const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express();
const port = 4000;
const secret = 'yufusdwdydf723td8732gd8723gd83832gd8g23d';
app.use(cors())

app.post('/token', (req, res) => {
    const accessToken = jwt.sign({
        userName:"Roshan",
        profileImage:"https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg",
        token:"moCRuQLAQwOP8o4IypfeYC_VvAJCU4Tp"
    },secret, { expiresIn: '2 days' })
    return res.send({
        accessToken:accessToken,
        refreshToken:accessToken
    });
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);