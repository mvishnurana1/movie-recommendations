const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// movie genre
// year
// mood
app.post('/recommendations', (req, res) => {
    const movieCategory = req.body;

    console.log(movieCategory);

    res.send(movieCategory);
});

app.listen(PORT, () => {
    console.log(`${PORT}`);
});
