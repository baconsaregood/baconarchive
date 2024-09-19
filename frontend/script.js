function decodeBase64() {
  const input = document.getElementById('base64Input').value;
  try {
    const decodedCID = atob(input);
    fetchFromIPFS(decodedCID);
  } catch (error) {
    document.getElementById('output').innerText = 'Invalid Base64 string';
  }
}

async function fetchFromIPFS(cid) {
  const url = `https://ipfs.io/ipfs/${cid}`;
  try {
    const response = await fetch(url);
    const data = await response.text();
    document.getElementById('output').innerText = data;
  } catch (error) {
    document.getElementById('output').innerText = 'Error fetching data from IPFS';
  }
}
