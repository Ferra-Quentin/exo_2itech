const {Sequelize, DataTypes} = require('sequelize')
const formationModel = require('../models/formation.model')
const participantModel = require('../models/participant.model')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const {hash} = require("bcrypt");

let formations = [
    {
        id : 1,
        nom : "Angular",
        date : new Date(),
        duree : 3,
        version : "14.2.6",
        icon: './assets/img/angular.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langage : ["TypeScript","Html", "Css"]
    },
    {
        id : 2,
        nom : "NodeJs",
        date : new Date(),
        duree : 1,
        version : "16.18.0",
        icon: './assets/img/nodejs.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langage : ["JavaScript"]

    },
    {
        id : 3,
        nom : "Symfony",
        date : new Date(),
        duree : 5,
        version : "6.1",
        icon: './assets/img/symfony.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langage : ["Php", "Twig"]

    },
    {
        id : 4,
        nom : "Spring",
        date : new Date(),
        duree : 5,
        version : "5.3.23",
        icon: './assets/img/spring.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langage : ["JavaEE"]
    }

];

let participants = [
    {
        id:1,
        nom:'Ferra',
        prenom:'Quentin',
        sexe:'Homme',
        age:20
    },
    {
        id:2,
        nom:'Lebrun',
        prenom:'Vincent',
        sexe:null,
        age:30
    },
    {
        id:3,
        nom:'Jean',
        prenom:null,
        sexe:'Homme',
        age:80
    },
    {
        id:4,
        nom:'Borderland',
        prenom:'Alice',
        sexe:'Femme',
        age:null
    },
];

const sequelize = new Sequelize(
    "nodejs",
    "quentin",
    "quentin",
    {
        host:"localhost",
        port:3305,
        dialect:"mysql"
    }
);

const formationList = formationModel(sequelize,DataTypes)
const participantList = participantModel(sequelize,DataTypes)
const user = userModel(sequelize,DataTypes)


const connect = () =>{
    sequelize.authenticate().then(()=>{
        console.log('connexion réussi')
    }).catch((error)=>{
        console.log('Problème de connexion',error)
    })
}

const initDb = () => {
    sequelize.sync({force:true}).then(()=>{
        console.log('base de donnée à jour')
        bcrypt.hash('quentin',10).then(hash=>{
            user.create({
                username:'quentin',
                password:hash
            })
        })

        formations.map(formation=>{
            formationList.create({
                nom: formation.nom,
                version:formation.version,
                duree: formation.duree,
                date: formation.date,
                formateur:formation.formateur,
                icon:formation.icon,
                langages: formation.langage.join()
            })
        })
        participants.map(participant=>{
            participantList.create({
                nom:participant.nom,
                prenom:participant.prenom,
                sexe:participant.sexe,
                age:participant.age
            })
        })
    }).catch((error)=>{
        console.log('Erreur lors de la mise à jour',error)
    })
}

module.exports= {connect,initDb,formationList,participantList,user};
