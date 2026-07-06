// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    };

    try {

      const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
});

        if (response.ok) {
            alert("Message submitted successfully!");
            form.reset();
        } else {
            alert("Failed to submit message.");
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }

});