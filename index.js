function handleAction(action) {
  return function () {
    action();
  };
}

const sendMessage = async () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let status = document.getElementById("status");
  let form = document.getElementById("contactForm");

  if (!name || !email || !message) {
    return alert("⚠️ Please fill in all fields before sending your message.");
  }

  let data = new FormData(form);

  let response = await fetch("https://formspree.io/f/meolygzr", {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  });

//   console.log(response);

  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ Oops! Something went wrong.";
  }
};

document.getElementById("sendBtn").onclick = handleAction(sendMessage);
