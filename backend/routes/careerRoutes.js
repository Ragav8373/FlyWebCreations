const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { submitCareerForm } = require('../controllers/careerController');

// Multer setup
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('resume'), submitCareerForm);

module.exports = router;
