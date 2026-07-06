const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

router.post("/", (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        const dataDir = path.join(__dirname, "../data");

        // Create data folder if it doesn't exist
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        const filePath = path.join(dataDir, "messages.json");

        let messages = [];

        // Read existing messages
        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath, "utf8");

            if (fileData.trim()) {
                messages = JSON.parse(fileData);
            }
        }

        // Add new message
        messages.push({
            name,
            email,
            phone,
            message,
            date: new Date().toLocaleString()
        });

        // Save messages
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 4));

        res.json({
            success: true,
            message: "Message submitted successfully!"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
});

module.exports = router;