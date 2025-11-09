document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let company = document.getElementById("company").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  // Encode message
  let whatsappMessage = `Hello Garima! 👋%0A
  You have a new message from your Portfolio:%0A%0A
  👩 Name: ${name}%0A
  💼 Company: ${company}%0A
  📧 Email: ${email}%0A
  📞 Phone: ${phone}%0A
  📝 Message: ${message}`;

  // WhatsApp number with country code (e.g. 91XXXXXXXXXX)
  let phoneNumber = "918816029116";

  // Open WhatsApp chat in new tab
  let whatsappURL = `https://wa.me/${8816029116}?text=${whatsappMessage}`;
  window.open(whatsappURL, "_blank");
});



alert("Redirecting to WhatsApp to send your message...");
