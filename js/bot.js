function SendTelegram() {
    // Replace with your bot token and chat ID
    const botToken = "7018216487:AAGp7Mbtj0Nx9BS255ITbB6WnvN2-KhGGQU";
    const chatId = "8161814294";

    // Fetch form values    
    const firstName = document.getElementById("firstName").value;
    // const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const Data = document.getElementById("Data").value;
    const subject = document.getElementById("subject").value;
    // const description = document.getElementById("description").value;

    console.log(firstName, email, Data, subject);


    // Construct the message
    const message = `
📬 New Submission:

👤 Name: ${firstName}  
📧 Email: ${email}
📞 Phone: ${Data}
📝 Subject: ${subject}
    `;

    // Telegram API URL
    const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}
`;

    // Send data using fetch API
    fetch(telegramAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown" // Allows bold, italics, and emojis
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset(); // Clear form
            } else {
                alert("Please try again!");
            }
        })
    console.log(data)
        .catch(error => {
            console.error("Error:", error);
            alert("Error occurred while sending the message.");
        });
    console.log(data);


    return false; // Prevent form reload
    // console.log("Data Is Send");
}