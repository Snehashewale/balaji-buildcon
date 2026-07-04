const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.post("/", (req, res) => {

    const { name, email, phone, message } = req.body;

    const newMessage = {
        name,
        email,
        phone,
        message,
        date: new Date().toLocaleString()
    };

    const filePath = path.join(__dirname, "../data/messages.json");

    let messages = [];

    if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath);

        messages = JSON.parse(fileData);
    }

    messages.push(newMessage);

    fs.writeFileSync(filePath, JSON.stringify(messages, null, 4));

    res.json({
        success: true,
        message: "Message submitted successfully!"
    });

});

module.exports = router;