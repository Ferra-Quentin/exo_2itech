const express = require('express');
const sequelize = require("../db/sequelize");
const router = express.Router();


//Route API pour récupérer la liste des participant
router.get('/participants',(req,res)=>{
    sequelize.participantList.findAll().then((resultat)=>{
        res.json(resultat)
    }).catch((err)=>{
        res.json(err)
    })
})

//Route api pour récupérer une participant par id
router.get('/participants/:id',(req,res)=>{
    const participantId = req.params.id;
    sequelize.participantList.findOne({where: { id: participantId }}).then((resultat)=>{
        res.json(resultat)
    }).catch(error=>{
        res.json(error)
    });
})

//Ajouter / Modifier une participant
router.post('/participants',(req,res)=>{
    sequelize.participantList.create(req.body).then(resultat=>{
        res.json({message: 'Resultat créer', resultat})
    }).catch(error=>{
        res.json(error)
    });
})


//Modifier une participant
router.put('/participants/:id',(req,res)=>{
    const participantId = req.params.id;
    sequelize.participantList.update(req.body,{where: { id: participantId }}).then((resultat)=>{
        res.json(resultat)
    }).catch(error=>{
        res.json(error)
    })
})



//Supprimer une participant
router.delete('/participants/:id',(req,res)=>{
    const participantId = req.params.id;
    sequelize.participantList.destroy({where:{id:participantId}}).then(resultat=>{
        res.json({message:'Supprimé',resultat})
    }).catch(error=>{
        res.json(error)
    })
})


module.exports = router;
