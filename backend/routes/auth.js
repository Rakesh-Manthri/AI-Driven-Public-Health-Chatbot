const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup
router.post('/signup', async (req,res)=>{
  const {username,email,password}=req.body;
  try {
    const user = new User({username,email,password});
    await user.save();
    res.json({message:'User created'});
  } catch(err){ res.status(500).json(err); }
});

// Login
router.post('/login', async (req,res)=>{
  const {email,password}=req.body;
  try {
    const user = await User.findOne({email,password});
    if(!user) return res.status(400).json({error:'Invalid credentials'});
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({token});
  } catch(err){ res.status(500).json(err); }
});

module.exports = router;

