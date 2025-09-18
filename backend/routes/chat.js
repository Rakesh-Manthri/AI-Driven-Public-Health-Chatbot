const router = require('express').Router();
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

router.post('/', async (req,res)=>{
  const { message } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{role:"user",content:message}],
    });
    res.json({reply: response.choices[0].message.content});
  } catch(err){ res.status(500).json(err); }
});

module.exports = router;

