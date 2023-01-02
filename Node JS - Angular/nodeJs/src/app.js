const express = require('express');
const formationApi = require('./service/formation');
const participantApi = require('./service/participant')
const sequelize = require('./db/sequelize')
const basicAuth = require('./basicauth')
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

app.use(basicAuth)

sequelize.connect();
sequelize.initDb();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Bonjour M2i');
});
app.get('/test/:id',(req,res) => {
    res.send(`Paramétre id : ${req.params.id}`);
});

app.use('/api',formationApi)
app.use('/api',participantApi)

app.listen(port,()=>{console.log(`projet démarré sur : http://localhost:${port}`)});
