function archiveUrl() {
  const url = document.getElementById('urlInput').value;
  fetch('/archive', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: url })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('result').innerText = 'URL archived successfully!';
    } else {
      document.getElementById('result').innerText = 'Failed to archive URL.';
    }
  })
  .catch(error => {
    document.getElementById('result').innerText = 'Error: ' + error;
  });
}
