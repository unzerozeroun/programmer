// Déclaration d'une fonction asynchrone pour pouvoir utiliser "await"
async function fetchData() {
    try {
        // Envoie une requête HTTP GET à l'URL spécifiée
        const response = await fetch('http://...');

        // Récupère le type de contenu renvoyé par le serveur (ex : "application/json")
        const contentType = response.headers.get('content-type');

        // Vérifie que le contenu est bien au format JSON
        if (!contentType || !contentType.includes('application/json')) {
            // Si ce n’est pas du JSON, on arrête avec une erreur personnalisée
            throw new Error('La réponse n\'est pas au format JSON.');
        }

        // Tente de convertir la réponse en objet JavaScript (en parsant le JSON)
        const respData = await response.json();

        // Affiche le contenu JSON reçu dans la console
        console.log(respData);

    } catch (error) {
        // Si une erreur survient (connexion impossible, réponse invalide, JSON mal formé, etc.)
        // elle est capturée ici, et un message est affiché
        console.error('Erreur lors du fetch ou du parsing JSON :', error.message);
    }
}

// Appel de la fonction pour démarrer le processus de récupération de données
fetchData();
