const requestType = document.getElementById("request-type");
const itemDetails = document.getElementById("item-details");
const submitButton = document.querySelector('button[type="submit"]');

requestType.addEventListener("change", function () {

  if (requestType.value === "pre-order") {
    itemDetails.placeholder =
      "Please describe the bread, pastry, or cake you would like to order.";
  } else {
    itemDetails.placeholder =
      "Please enter your question or comment.";
  }

});

requestType.addEventListener("change", function() {

    if (requestType.value === "pre-order") {
        submitButton.textContent = "Submit Pre-Order";
    } else if (requestType.value === "general-question") {
        submitButton.textContent = "Send Question";
    } else {
        submitButton.textContent = "Submit Request";
    }

});

// error messages
const form = document.querySelector("form");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const detailsField = document.getElementById("item-details");

function showError(field, errorId, message) {
    field.classList.add("input-error");
    document.getElementById(errorId).textContent = message;
}

function clearError(field, errorId) {
    field.classList.remove("input-error");
    document.getElementById(errorId).textContent = "";
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clearError(nameField, "nameError");
    clearError(emailField, "emailError");
    clearError(detailsField, "detailsError");

    let isValid = true;

    // Required Name Check
    if (nameField.value.trim() === "") {
        showError(
            nameField,
            "nameError",
            "Please enter your name."
        );
        isValid = false;
    }

    // Email Validation
    if (
        emailField.value.trim() === "" ||
        !emailField.value.includes("@")
    ) {
        showError(
            emailField,
            "emailError",
            "Please enter a valid email address."
        );
        isValid = false;
    }

    // Minimum Length Validation
    if (detailsField.value.trim().length < 10) {
        showError(
            detailsField,
            "detailsError",
            "Item details must be at least 10 characters."
        );
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.submit();
    }
});
