fetch('http://localhost:5000/commits')
  .then(res => res.json())
  .then(commits => {
    commits.forEach(c => console.log(`${c.author} → ${c.message}`));
  });
