document.getElementById('detectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var url = document.getElementById('urlInput').value;
    
    // Send URL to backend for analysis
    fetch('/analyze-url', {
        method: 'POST',
        body: JSON.stringify({ url: url }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display result
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('fileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var fileInput = document.getElementById('fileInput').files[0];
    var formData = new FormData();
    formData.append('file', fileInput);

    // Send file to backend for analysis
    fetch('/analyze-file', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display result
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('ipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var ip = document.getElementById('ipInput').value;
    
    // Send IP address to backend for analysis
    fetch('/analyze-ip', {
        method: 'POST',
        body: JSON.stringify({ ip: ip }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display result
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => console.error('Error:', error));
});
