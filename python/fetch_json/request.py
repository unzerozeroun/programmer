import requests

try:
    response = requests.get('https://api.example.com/data')
    response.raise_for_status()  # Lève une erreur si HTTP != 200
    data = response.json()       # Convertit automatiquement le JSON
    print(data)
except requests.exceptions.RequestException as e:
    print("Erreur :", e)
