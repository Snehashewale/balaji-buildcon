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

        const response = await fetch("https://script.google.com/macros/s/AKfycbzMdSfsgU-8_oYYhFBsIPszLY1OYUm98h4_aF2TkbGQA1dUVgyySs0jhI3acBgIXAvb/exec", {
            method: "POST",
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