
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  const formNote = document.getElementById("formNote");

  const GOOGLE_SHEET_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbylu-yEXKWjSdaeHV223ARyu3GjGAQ_lc_Za6L6Q1un4uIyCKcYZiTeQdTfnFVTPt2A/exec";


  form.addEventListener("submit", async (e) => {

    e.preventDefault();

    formNote.textContent = "Submitting enquiry...";

    const formData = new FormData(form);

    try {

      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        body: new URLSearchParams(formData)
      });

      formNote.textContent =
        "Thank you! Your enquiry has been submitted successfully.";

      form.reset();

    } catch (error) {

      console.error(error);

      formNote.textContent =
        "Unable to submit enquiry. Please call us directly.";
    }

  });

});


