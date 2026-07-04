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

        const response = await fetch("/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)

        });

        const data = await response.json();

        alert(data.message);

        form.reset();

    } catch (error) {

        alert("Something went wrong.");

    }

});