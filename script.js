document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(entries.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    alert("Form submitted successfully!");
    console.log(entries);

    // Reset form
    form.reset();
  });
});
