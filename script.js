function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = ""; 

    const chatBox = document.getElementById("chat-box");
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);

    chatBox.scrollTop = chatBox.scrollHeight; 

    
    setTimeout(() => {
        const botResponse = document.createElement("div");
        botResponse.classList.add("bot-response");
        botResponse.textContent = "Bot: " + getBotResponse(userInput);
        chatBox.appendChild(botResponse);

        chatBox.scrollTop = chatBox.scrollHeight; 
    }, 2000); 
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input == "hello") {
        return "Hi there!";
    } else if (input == "how are you") {
        return "I'm good, thank you! How can I assist you today?";
    } else if (input == "i want to take admission in saylani it courses") { 
        return "In which course do you want admission?";
    }else if (input == "which it courses are avaliable") { 
        return "There are various courses related to IT:\n1) Web and App Development\n2) Graphic Designing\n3) 3D Animation\n4) Video Animation";
    }else if (input == "web and app development" || input == "graphic designing" || input == "3d animation" || input == "video animation") {
        return "The eligibility criteria for " + input + " is matric";
    } else if (input == "bye") {
        return "Goodbye! Have a nice day!";
    } else {
        return "I'm sorry, I don't understand that.";
    }
}
