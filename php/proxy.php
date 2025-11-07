<?php
// Affichage des erreurs (à désactiver en prod)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Autoriser l'accès depuis n'importe quelle origine (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Liste blanche des domaines autorisés
$allowed_domains = [
    'api.example.com',
    'jsonplaceholder.typicode.com',
    'api.github.com'
];

// Vérifie que le paramètre `url` est présent
if (!isset($_GET['url'])) {
    http_response_code(400);
    echo json_encode(["error" => "Paramètre 'url' manquant"]);
    exit;
}

// Nettoie et valide l’URL
$url = filter_var($_GET['url'], FILTER_VALIDATE_URL);
if (!$url) {
    http_response_code(400);
    echo json_encode(["error" => "URL invalide"]);
    exit;
}

// Analyse le domaine de l’URL
$parsed_url = parse_url($url);
$host = $parsed_url['host'] ?? '';

if (!in_array($host, $allowed_domains)) {
    http_response_code(403);
    echo json_encode(["error" => "Accès au domaine interdit : $host"]);
    exit;
}

// Construit un contexte HTTP pour l'en-tête
$context = stream_context_create([
    "http" => [
        "method" => "GET",
        "header" => "User-Agent: PHPProxy/1.0\r\n"
    ]
]);

// Exécute la requête distante
$response = @file_get_contents($url, false, $context);

if ($response === false) {
    http_response_code(502);
    echo json_encode(["error" => "Impossible de contacter la ressource distante"]);
    exit;
}

// Renvoie la réponse brute (JSON supposé)
echo $response;
