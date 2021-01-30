require("dotenv").config();

const maskData = require("maskdata");

// methode masquage email
const emailMaskOptions = {
  maskWith: "*",
  unmaskedStartCharactersBeforeAt: 2,
  unmaskedEndCharactersAfterAt: 1,
  maskAtTheRate: false,
};

const maskPhoneOptions = {
  maskWith: "*",
  unmaskedStartDigits: 3,
  unmaskedEndDigits: 1,
};

const db = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "portfolio",
  },
});

exports.post = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      res.status(400).json(`Missing ${!email}!`);
    }

    await db("form").insert({
      email: maskData.maskEmail2(req.body.email, emailMaskOptions),
      nom: req.body.nom,
      message: req.body.message,
      phone: maskData.maskPhone(req.body.phone, maskPhoneOptions),
      date_cree: new Date(),
    });

    res.status(200).json("all good");
  } catch (error) {
    if (error.errno === 19) {
      res.status(400).json("A user with that email already exists!");
    } else console.log(error);
    res.status(500).send("something broke");
  }
};

exports.getAll = async (req, res) => {
  try {
    data = await db("form").select("*");
    res.send(data);
  } catch (error) {
    if (error.errno === 19) {
      res.status(400).json({
        message: err.message || "Some error occurred while retrieving users.",
      });
    } else console.log(error);
    res.status(500).send("something broke with server");
  }
};
