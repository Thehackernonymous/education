function openForm(formId) {
    const form = document.getElementById(`${formId}Form`);
    form.style.display = 'flex';
}

function closeForm(formId) {
    const form = document.getElementById(`${formId}`);
    form.style.display = 'none';
}

function saveContent(contentType) {
    const content = getContent(contentType);
    const topic = getSelectedTopic();

    // Implement logic to save the content and topic to the server or storage
    console.log(`Saved ${contentType} for topic ${topic}: ${content}`);
    
    // Show a popup message
    alert(`${contentType} saved for ${topic}`);

    // Redirect to the selected topic page (for 'video' content type)
    if (contentType === 'video') {
        navigateTo(topic);
    }

    closeForm(`${contentType}Form`);
}

function getContent(contentType) {
    if (contentType === 'video') {
        return document.getElementById('videoLink').value;
    } else if (contentType === 'question') {
        const questionText = document.getElementById('questionText').value;
        const answerText = document.getElementById('answerText').value;
        return `Question: ${questionText}, Answer: ${answerText}`;
    }
    // Add cases for other content types as needed
    return '';
}

function getSelectedTopic() {
    return document.getElementById('topicSelect').value;
}

function navigateTo(page) {
    window.location.href = `${page}.html`;
}///admin panel
function openForm(formId) {
    const form = document.getElementById(`${formId}Form`);
    form.style.display = 'flex';
}

function closeForm(formId) {
    const form = document.getElementById(`${formId}`);
    form.style.display = 'none';
}

// ... Previous JavaScript code ...
// ... Previous JavaScript code ...

function saveContent(contentType) {
    const content = getContent(contentType);
    const topic = getSelectedTopic();

    // Implement logic to save the content and topic to the server or storage
    console.log(`Saved ${contentType} for topic ${topic}: ${content}`);
     // Show a popup message
     alert(`${contentType} saved for ${topic}`);
     // Redirect to the selected topic page
    window.location.href = topic;
    closeForm(`${contentType}Form`);
    if (contentType === 'question') {
        const questionText = document.getElementById('questionText').value;
        const answerText = document.getElementById('answerText').value;

        // Implement logic to save the question and answer to the server or storage
        console.log(`Saved Question: ${questionText} - Answer: ${answerText}`);
        closeForm('questionForm');
    } else {
        const content = document.getElementById(`${contentType}Link`).value;
        // Implement logic to save the content to the server or storage
        console.log(`Saved ${contentType}: ${content}`);
        closeForm(`${contentType}Form`);
    }
}

function getContent(contentType) {
    if (contentType === 'video') {
        return document.getElementById('videoLink').value;
    } else if (contentType === 'question') {
        const questionText = document.getElementById('questionText').value;
        const answerText = document.getElementById('answerText').value;
        return `Question: ${questionText}, Answer: ${answerText}`;
    }
    // Add cases for other content types as needed
    return '';
}

function getSelectedTopic() {
    return document.getElementById('topicSelect').value;
}

// script.js
function search() {
    const searchInput = document.getElementById('searchInput').value;
    console.log(`Search Query: ${searchInput}`);
    // Perform a search request to your server
    fetch(`/search?query=${searchInput}`)
        .then(response => response.json())
        .then(data => displayResults(data));
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No results found';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.textContent = result.title; // Adjust this based on your data structure
            resultsContainer.appendChild(resultItem);
        });
    }
}


function navigateTo(page) {
    window.location.href = `${page}.html`;
}

function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Implement actual search and redirection logic here based on the search input
    // For simplicity, this example uses hardcoded topics
    if (searchInput === 'docker') {
        navigateTo('/docker/docker');
    } else if (searchInput === 'podman') {
        navigateTo('/podman/podman');
    } else if (searchInput === 'css') {
        navigateTo('/css/css');
    } else if (searchInput === 'html') {
        navigateTo('/html/html');
    } else {
        alert('No results found');
    }
}

