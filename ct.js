var userInputs = [
    "Hi",
    "plumber number",
    "Mechanic Number",
    "Electrician Number",
    "Exit"
];

var botResponses = [
    "Hello!,I'm a Local Chatbot",
    "plumber:Raghavan-9847554211,John Doe - 1234567890,Jane Smith - 9876543210,David Johnson - 4567890123, Emily Brown - 8901234567,Michael Wilson - 2345678901",
    "Mechanic: Anitha Nair - 9876543210,Rajesh Menon - 8765432109,Deepa Pillai - 7654321098,Arjun Kumar - 6543210987,Sujatha Suresh - 5432109876",
    "electrician : Vineetha Rajan - 4321098765,Harish Nambiar - 3210987654,Divya Krishnan - 2109876543,Sanjay Nair - 1098765432, Aparna Das - 0987654321",
    "Goodbye!"
];

// Function to generate bot response based on user input
function generateResponse(userInput) {
    if (userInput.toLowerCase() === "exit") {
        return botResponses[4];
    } else if(userInput.toLowerCase() === "plumber number") {
        return botResponses[1];
    }
    else if(userInput.toLowerCase() === "mechanic number") {
        return botResponses[2];
    }
    else if(userInput.toLowerCase() === "electrician number") {
        return botResponses[3];
    }
    else if(userInput.toLowerCase() === "hi") {
        return botResponses[0];
    }
    
}

// Function to append message to the chat log
function appendMessage(message, sender) {
    var chatLog = document.getElementById("chat-log");
    var messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.innerHTML = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Main chat function
function chat() {
    var userInput = document.getElementById("user-input").value;
    appendMessage("User: " + userInput, "user");

    var botResponse = generateResponse(userInput);
    appendMessage("Bot: " + botResponse, "bot");

    document.getElementById("user-input").value = "";

    if (botResponse === "Goodbye!") {
        document.getElementById("user-input").disabled = true;
    }
}

// Event listener for Enter key press
document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("chat-log").innerHTML = "";
        chat();
    }
});