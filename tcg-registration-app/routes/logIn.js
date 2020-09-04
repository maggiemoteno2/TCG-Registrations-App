const StudentModel = require('./../models/credentials')
const { checkPassword } = require('./../security/hashedPassword')
const { createToken } = require('./../security/token')

const signIn = (server) => {
  server.post('/students', async (req, res) => {
    const { email, password } = req.body;

    try {
      const student = await StudentModel.findOne({ email });
      if (student) {
        const isVerified = await checkPassword(password, email);
        const token = await createToken(student.email);
        if (isVerified) {
          return res.json({ token });
        }
        if (!isVerified) {
          return res.json({ error: "password or email is incorrect" });
        }
      } else {
        return res.json({ error: "student does not exist" });
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports = { signIn }  