document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    let errors = [];

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const nameRegex = /^[a-zA-Z\s\-']+$/;
    if (!nameRegex.test(nameInput.value)) {
      errors.push(
        "Name can only contain letters, spaces, hyphens, and apostrophes."
      );
    }

    const inputsToCheckForScripts = [
      nameInput,
      emailInput,
      subjectInput,
      messageInput,
    ];

    inputsToCheckForScripts.forEach((input) => {
      const value = input.value;
      if (
        /<script>/i.test(value) ||
        /onerror/i.test(value) ||
        /javascript:/i.test(value) ||
        /data:text\/html/i.test(value)
      ) {
        errors.push(
          `Potential script injection detected in "${input.name}" field. Please remove suspicious characters.`
        );
      }
    });

    if (errors.length > 0) {
      event.preventDefault();
      alert("Form Submission Error:\n\n" + errors.join("\n"));
    }
  });
});
