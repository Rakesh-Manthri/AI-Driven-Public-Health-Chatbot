const router = require('express').Router();
const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

router.post('/', async (req,res)=>{
  const { phone, message } = req.body;
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_NUMBER,
      to: phone
    });
    res.json({message:'Reminder sent'});
  } catch(err){ res.status(500).json(err); }
});

module.exports = router;

