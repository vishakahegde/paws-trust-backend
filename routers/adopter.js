const { Router } = require("express");
const Dog = require("../models/").dog;
const Adopter = require("../models/").adopter;
const authMiddleware = require("../auth/middleware");
require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      province,
      postcode,
      country,
      dogId,
    } = req.body;
    console.log(req.body);
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !province ||
      !postcode ||
      !country ||
      !dogId
    ) {
      return res.status(400).send("Please provide all input data");
    }
    const adopter = await Adopter.create({
      name,
      email,
      phone,
      address,
      city,
      province,
      postcode,
      country,
      dogId,
    });

    const dog = await Dog.findByPk(dogId);

    console.log(process.env.SENDGRID_APIKEY);
    console.log(process.env.FROM_EMAIL);

    sgMail.setApiKey(process.env.SENDGRID_APIKEY);
    const msg = {
      to: email,
      //to: "hegde.vishaka@gmail.com",
      from: process.env.FROM_EMAIL,
      subject: `Adoption request received for ${dog.name}`,
      //text: "We have received the adoption request",
      html: `<h2>Hi There!</h2><h4>We have received your adoption request for 
      ${dog.name}.</h4>
      <p> We will review your request for adoption and contact you as soon as possible.</p>
      <br/>
      <p>Warm Regards,</p>
      <p>Paws Trust Team</p>`,
    };
    //https://stackoverflow.com/questions/61171243/unhandledpromiserejectionwarning-error-forbidden-while-sending-email-from-se
    sgMail
      .send(msg)
      .then(() => {
        console.log("Message sent");
      })
      .catch((error) => {
        console.log(error.response.body);
      });

    res.status(200).send(adopter);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
