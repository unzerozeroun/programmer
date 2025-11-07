const apiUrl = encodeURIComponent('https://api.example.com/data');

fetch(`proxy.php?url=${apiUrl}`)
  .then(response => response.json())
  .then(data => {
    console.log('Données reçues via le proxy PHP :', data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération :', error);
  });
