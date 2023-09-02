// Import the express in typescript file
import express from 'express';
 
// Initialize the express engine
const app: express.Application = express();
 
const port: number = 3002;

// Handling '/' Request
app.get('/', (req, res) => {
    res.send("TypeScript With Express");
});
 
// Server setup
app.listen(port, () => {
    console.log(`started server on [::]:${port}, url: http://localhost:${port}`);
});