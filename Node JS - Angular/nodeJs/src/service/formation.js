const express = require('express');
const router = express.Router();
const sequelize = require('../db/sequelize')

let formations;


//Route API pour récupérer la liste des formations
router.get('/formations',(req,res)=>{
    sequelize.formationList.findAll().then((resultat)=>{
        resultat.forEach(element =>{
            element.langages = element.langages.split(',')
        })
        res.json(resultat)
    }).catch((err)=>{
        res.json(err)
    })

})

//Route api pour récupérer une formation par id
router.get('/formations/:id',(req,res)=>{
    const formationId = req.params.id;
    sequelize.formationList.findOne({where: { id: formationId }}).then((resultat)=>{
        resultat.langages = resultat.langages.split(',')
        res.json(resultat)
    })
})

//Ajouter / Modifier une formation
router.post('/formations',(req,res)=>{
    console.log(req.body)
    req.body.langages = req.body.langages.join();
    console.log('On est dans le post')
    sequelize.formationList.create(req.body).then(resultat=>{
        res.json({message: 'Resultat créer', resultat})
    }).catch(error=>{
        console.log(error)
    });
})


//Modifier une formation
router.put('/formations/:id',(req,res)=>{
    const formationId = req.params.id;
    req.body.langages = req.body.langages.join();
    sequelize.formationList.update(req.body,{where: { id: formationId }}).then((resultat)=>{
        res.json(resultat)
    })
})



//Supprimer une formation
router.delete('/formations/:id',(req,res)=>{
    console.log(req.params.id)
    const formationId = req.params.id;
    sequelize.formationList.destroy({where:{id:formationId}}).then(resultat=>{
        res.json({message:'Supprimé',resultat})
    }).catch(error=>{
        res.json(error)
    })
})


module.exports = router;
