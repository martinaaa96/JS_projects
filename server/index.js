const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Helloooo rest api')
});


app.use(routes);
app.listen(3030, () => console.log('Server is listening on port 3030... '))