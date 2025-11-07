from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/commits')
def get_commits():
    response = requests.get('https://mon-api.com/commits')  # à adapter
    response.raise_for_status()
    data = response.json()

    # Ne renvoyer que ce qui est utile
    result = [
        {
            'author': commit['author']['displayName'],
            'message': commit['message']
        }
        for commit in data['values']
    ]
    return jsonify(result)

# Lancer le serveur Flask
if __name__ == '__main__':
    app.run(port=5000)
