const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {

    try {

        const { name, email, phone, message } = req.body;

        const response = await axios.post(
            process.env.GOOGLE_SCRIPT_URL,
            {
                name,
                email,
                phone,
                message
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({
            success: true,
            message: "Message submitted successfully!"
        });

    } catch (error) {

        console.error("Google Sheets Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to submit message."
        });

    }

});

module.exports = router;