require("dotenv").config();

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORTHOST,

  secure: true,

  auth: {
    user: process.env.USERMAIL, // generated ethereal user
    pass: process.env.USERPASS, // generated ethereal password
  },
});

const CryptoJS = require("crypto-js");

const db = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});

exports.post = async (req, res) => {
  try {
    const email = req.body.email;
    const phone = req.body.phone;
    // Encrypt
    const ciphertext = CryptoJS.AES.encrypt(
      email,
      process.env.CRYPTOSECRET
    ).toString();
    const ciphertext2 = CryptoJS.AES.encrypt(
      phone,
      process.env.CRYPTOSECRET
    ).toString();
    if (!email) {
      res.status(400).json(`Missing ${!email}!`);
    }

    await db("form").insert({
      email: ciphertext,
      nom: req.body.nom,
      message: req.body.message,
      phone: ciphertext2,
      date_cree: new Date(),
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: req.body.email, // sender address
      to: process.env.USERMAIL, // list of receivers
      subject: "Mon Nom est : " + req.body.nom, // Subject line
      text: req.body.message + " Mon numéro de tel est : " + req.body.phone, // plain text body
    });

    console.log("Message sent: %s", info.messageId);

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
    /*
    for (i = 0; i < data.length; i++) {
      var bytes = CryptoJS.AES.decrypt(data[i].email, "process.env.CRYPTOSECRET);
      var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      var bytes2 = CryptoJS.AES.decrypt(data[i].phone, process.env.CRYPTOSECRET");
      var decryptedData2 = bytes2.toString(CryptoJS.enc.Utf8);

      var dataId = data[i].id;
      var dataMessage = data[i].message;
      var dataNom = data[i].nom;

      var tableau = [
        dataId,
        decryptedData,
        dataNom,
        dataMessage,
        decryptedData2,
      ];
      console.log(tableau);
    }
    */
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
