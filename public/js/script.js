// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }

});

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

const response = await fetch("https://script.google.com/macros/s/AKfycbzMdSfsgU-8_oYYhFBsIPszLY1OYUm98h4_aF2TkbGQA1dUVgyySs0jhI3acBgIXAvb/exec", {            method: "POST",

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

        alert("Something went wrong.");

    }

});