document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Send a POST request to the server using the form data
    fetch('process.php', {
      method: 'POST',
      body: new FormData(event.target)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Clear the form and show a success message
      event.target.reset();
      alert('Thank you for subscribing!');
    })
    .catch(function(error) {
      console.error(error);
    });
  });
  