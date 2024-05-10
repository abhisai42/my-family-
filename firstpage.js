 // JavaScript

  function toggleDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
}

    // Define the speak function
function speak(text) {
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    } else {
        console.error('Speech Synthesis API is not supported in this browser.');
    }
}
// Define the listen function
function listen() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; // Set the language (adjust as needed)

    // When speech is recognized
  // When speech is recognized
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('input-area').textContent = transcript;

    // Perform specific actions based on voice commands
    if (transcript.toLowerCase().includes('hello')) {
        const response = 'Hello this sai assistent how can i help you!';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    } else if (transcript.toLowerCase().includes('open website')) {
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const response = 'Opening website...';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    } else if (transcript.toLowerCase().includes('open family')) {
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const filePath = './page.html';
        window.location.href = filePath;
    }else if (transcript.toLowerCase().includes('what is Sai study')) {
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const response = 'B tech 3rd year';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }else if (transcript.toLowerCase().includes('where is Sai love')) {
        const response = 'in sai heart';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }else if (transcript.toLowerCase().includes('who created you')) {
        const response = 'gandesri saikumar';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }else if (transcript.toLowerCase().includes('who is Sai best friend')) {
        const response = 'gandesri sanjay';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }else if (transcript.toLowerCase().includes('Jarvis speak up')) {
        const response = 'hello boss how is your day';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }
    else if (transcript.toLowerCase().includes('open face')) {
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const websiteUrl = 'https://example.com';
        window.location.href = websiteUrl;
    } else if (transcript.toLowerCase().includes('who is your boss')) {
        const response = 'sai kumar';
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }else if (transcript.toLowerCase().includes('open insta')) {
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const response = 'opening instagram';
        document.getElementById('output-area').textContent = response;
        speak(response);
        const websiteUrl = 'https://www.instagram.com';
        window.open(websiteUrl, '_blank');
    }else if (transcript.toLowerCase().includes('open Facebook')) {
        const response = 'opening facebook';
        document.getElementById('output-area').textContent = response;
        speak(response);
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const websiteUrl = 'https://www.facebook.com/';
        window.open(websiteUrl, '_blank');
    }else if (transcript.toLowerCase().includes('open Snapchat')) {
        const response = 'opening sanpchart';
        document.getElementById('output-area').textContent = response;
        speak(response);
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const websiteUrl = 'https://www.snapchat.com';
        window.open(websiteUrl, '_blank');
    }else if (transcript.toLowerCase().includes('open Google')) {
        const response = 'opening google';
        document.getElementById('output-area').textContent = response;
        speak(response);
        // Implement your action here (e.g., window.location.href = 'https://example.com')
        const websiteUrl = 'https://www.google.com';
        window.open(websiteUrl, '_blank');}
    else {
        const response = "I didn't understand.";
        document.getElementById('output-area').textContent = response;
        speak(response); // Speak the response
    }
};


    // Start listening
    recognition.start();
}

const questionInput = document.getElementById("questionInput");
const answerOutput = document.getElementById("answerOutput");


// Event listener for Enter key
questionInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const userQuestion = questionInput.value;
        const answer = getAnswer(userQuestion); // Replace with your logic to get answers
        answerOutput.textContent = answer;
        questionInput.value = ""; // Clear the input field
    }
});

// Replace this function with your logic to get answers
function getAnswer(question) {
    // Example: Return hardcoded answers based on the question
    
    switch (question.toLowerCase()) {
        case "what is your name?":
            return "jarvous";
        case "how does this work?":
            return "This is a simple Q&A example.";
        case "my favourite curry":
            return "mom potato fry";
        case "who is your boss":
            return "gandesri saikumar";
        case "hello jarvis":
            return "hello boss how is your day";
        case "open facebook":
            let link = window.open('https://www.facebook.com', '_blank');
            return link;
        default:
            return "I don't have an answer for that.";
    }
}


