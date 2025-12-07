const Contact = require('../models/Contact');

const submitContactForm = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit contact form." });
  }
};

module.exports = { submitContactForm };
