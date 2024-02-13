import json

# Remplacez `json_str` par votre chaîne JSON
json_str = '''
{
    "permissions": [
        {
            "permission": "read"
        },
        {
            "permission": "write"
        },
        {
            "permission": "execute"
        }
    ]
}
'''

data = json.loads(json_str)
permissions = {permission['permission'] for permission in data['permissions']}
print(sorted(permissions))
