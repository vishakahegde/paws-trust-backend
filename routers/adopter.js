const { Router } = require("express");
const Dog = require("../models/").dog;
const Adopter = require("../models/").adopter;
const authMiddleware = require("../auth/middleware");

const sgMail = require("@sendgrid/mail");
const { SENDGRID_APIKEY, FROM_EMAIL } = require("../config/constants");

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

    sgMail.setApiKey(SENDGRID_APIKEY);
    const msg = {
      to: email,
      //to: "hegde.vishaka@gmail.com",
      from: FROM_EMAIL,
      subject: `Adoption request received for ${dog.name}`,
      //text: "We have received the adoption request",
      html: `<h2>Hi There!</h2><h4>We have received your adoption request for 
      <a href="http://localhost:3000/dogs/${dogId}">${dog.name}</a></h4>
      <p> We will review your request for adoption and contact you as soon as possible.</p>`,
    };
    //https://stackoverflow.com/questions/61171243/unhandledpromiserejectionwarning-error-forbidden-while-sending-email-from-se
    sgMail
      .send(msg)
      .then(() => {
        console.log("Message sent");
      })
      .catch((error) => {
        console.log(error.response.body);
        // console.log(error.response.body.errors[0].message)
      });

    res.status(200).send(adopter);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
