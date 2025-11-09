
<script>
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let company = document.getElementById("company").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Encode message for WhatsApp
  let whatsappMessage = `Hello Garima! 👋%0A
You have a new message from your Portfolio:%0A%0A
👩 Name: ${name}%0A
💼 Company: ${company}%0A
📧 Email: ${email}%0A
📞 Phone: ${phone}%0A
📝 Message: ${message}`;

  // Replace this with your WhatsApp number (without + sign)
  let phoneNumber = "918816029116";

  // Open WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");

  alert("Redirecting to WhatsApp to send your message...");
});
</script>
