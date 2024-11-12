// Fetch data from the API when the page loads
fetch("/api/fetch")
    .then((response) => {
        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }
        return response.json(); // Parse the response as JSON
    })
    .then((data) => {
        console.log(data); // Log data to the console or use it as needed

        // Display data in the HTML
        const container = document.getElementById("data-container");
        container.textContent = JSON.stringify(data, null, 2); // Simple display
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });

// Fetch data from your API (adjust the URL if needed)
fetch('https://your-api-url/api/fetch')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data-container');
    container.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

