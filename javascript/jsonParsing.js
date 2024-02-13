const jsonData = {
    "permissions": [
      {
        "id": 1,
        "permission": "read"
      },
      {
        "id": 2,
        "permission": "write"
      },
      {
        "id": 3,
        "permission": "execute"
      },
      {
        "id": 4,
        "permission": "read"
      },
      {
        "id": 5,
        "permission": "write"
      },
      {
        "id": 6,
        "permission": "execute"
      }
    ]
  };
  
  const permissions = [...new Set(jsonData.permissions.map(permission => permission.permission))];
  // Ordonner les permissions
  console.log(permissions.sort());
  