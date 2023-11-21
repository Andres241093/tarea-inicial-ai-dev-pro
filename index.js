function sendData(e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  e.preventDefault();
  
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: name,
      body: `${email} ${country}`,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      showContent(json);
    });
}

function showContent(data) {
  const contentContainer = document.getElementById('content');
  contentContainer.innerHTML = `
    <p>Title: ${data['title']}</p>
    <p>Body: ${data['body']}</p>
  `;
}
