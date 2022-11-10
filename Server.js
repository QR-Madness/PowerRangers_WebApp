const app = require('./Config/App');

// Opening Server
const port = process.env.PORT || 3000
app.listen(port);
console.log('Server running at http://localhost:3000/');