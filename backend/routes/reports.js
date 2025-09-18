const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const Report = require('../models/Report');

const storage = multer.diskStorage({
  destination:'./uploads/',
  filename:(req,file,cb)=>cb(null,Date.now()+path.extname(file.originalname))
});

const upload = multer({storage});

router.post('/', upload.single('report'), async (req,res)=>{
  try {
    const report = new Report({ userId:req.body.userId, filePath:req.file.path });
    await report.save();
    res.json({message:'Report uploaded'});
  } catch(err){ res.status(500).json(err); }
});

module.exports = router;

