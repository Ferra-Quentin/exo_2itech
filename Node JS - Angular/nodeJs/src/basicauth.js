const auth = require('basic-auth')
const sequelize = require('./db/sequelize')
const bcrypt = require('bcrypt')

const basicAuth = async (req, res, next) => {
    const user = auth(req);
    if (user == null) {
        return res.status(401).send('Authentification requise')
    }

    const userFound = await sequelize.user.findOne({where: {username: user.name}})
    if (userFound == null) {
        return res.status(401).send('Utilisateur inconnu')
    }
    console.log(user.pass)

    try {
        if (await bcrypt.compare(user.pass, userFound.password)) {
            console.log('Authentification OK');
            next();
        }
        else{
            res.end('Access Denied');
        }
    } catch {
        res.status(300).send();
    }
}

module.exports = basicAuth;
