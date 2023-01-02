class groupe {
    constructor(number,point) {
        this.number = number;
        this.participants =[]
        this.niveaux=[]
        this.point=point
    }

    addPersonne(personne){
        this.participants.push(personne)
    }

    nbPersonne(){
        return this.participants.length
    }

    getNiveaux(){
        return this.niveaux()
    }

    static getMoyenne(){
        let moyenne = 0
        let nbNiveaux =0
        for (const niveau of (nbNiveaux)) {
            moyenne+=niveau
            nbNiveaux++
        }
        return moyenne/nbNiveaux
    }

    ajoutNiveau(niveau){
        this.niveaux.push(niveau)
    }

}





let i = 5

function addOneMoreParticipant(newChild){
    let child = document.getElementById('list');

    let label = document.createElement("label")
    let input = document.createElement("input")
    let nom = document.createTextNode("Nom")
    let divPrincipale = document.createElement("div")
    let divNom = document.createElement("div")
    let divNiveaux = document.createElement("div")
    let btn1 = document.createElement("button")
    let btn1text = document.createTextNode("1")
    let btn2 = document.createElement("button")
    let btn2text = document.createTextNode("2")
    let btn3 = document.createElement("button")
    let btn3text = document.createTextNode("3")
    let btn4 = document.createElement("button")
    let btn4text = document.createTextNode("4")
    let btn5 = document.createElement("button")
    let btn5text = document.createTextNode("5")

    btn1.appendChild(btn1text)
    btn2.appendChild(btn2text)
    btn3.appendChild(btn3text)
    btn4.appendChild(btn4text)
    btn5.appendChild(btn5text)



    divPrincipale.appendChild(divNom)
    divPrincipale.appendChild(divNiveaux)

    divNom.appendChild(label)
    divPrincipale.className="participant"
    label.for="nomParti"+i
    label.appendChild(nom)

    divNom.appendChild(input)
    input.type="text"
    input.id="nomParti"+i
    input.className="nomParti"

    divNom.style.width="50%"

    divNiveaux.className="niveau"
    divNiveaux.appendChild(btn1)
    divNiveaux.appendChild(btn2)
    divNiveaux.appendChild(btn3)
    divNiveaux.appendChild(btn4)
    divNiveaux.appendChild(btn5)

    divNiveaux.style.width="50%"

    divNiveaux.id="niveauPaticipant"+i



    child.append(divPrincipale)

    btn1.addEventListener("click",()=>{
        niveauSelected(btn1,document.getElementById(divNiveaux.id))
    })
    btn2.addEventListener("click",()=>{
        niveauSelected(btn2,document.getElementById(divNiveaux.id))
    })
    btn3.addEventListener("click",()=>{
        niveauSelected(btn3,document.getElementById(divNiveaux.id))
    })
    btn4.addEventListener("click",()=>{
        niveauSelected(btn4,document.getElementById(divNiveaux.id))
    })
    btn5.addEventListener("click",()=>{
        niveauSelected(btn5,document.getElementById(divNiveaux.id))
    })

    i++;
    afficheNiveau()

}



function niveauSelected(button,div){

    let buttons = div.querySelectorAll("button")
    buttons.forEach(but=>but.style.backgroundColor="#EFEFEF")

    button.style.backgroundColor="#34A4BA"
    div.setAttribute('niveau',button.textContent)
}


function afficheNiveau(){
    let choix = document.getElementById("typeTirage").options[document.getElementById('typeTirage').selectedIndex].text;
    let button = document.getElementsByClassName("niveau");
    if(choix==="Tirage pondéré"){
        for (const buttonElement of button) {
            buttonElement.style.display="flex";
        }
        // button.forEach(but=>but.)
    }
    else{
        for (const buttonElement of button) {
            buttonElement.style.display="none";
        }
    }
}


function genereteGroupe(){
    let type = document.getElementById("typeTirage").options[document.getElementById('typeTirage').selectedIndex].text;
    if(type==="Tirage aléatoire"){
        let participants = document.querySelectorAll(".nomParti")
        let nbGroupe = document.getElementById('nbGroupe').value
        let nomParticipants= []

        participants.forEach(participant => {nomParticipants.push(participant.value)}
        )

        let lesGroupes=[]
        let nombreParticipant = nomParticipants.length

        for(let x=1;x<=nbGroupe;x++){
            lesGroupes.push(new groupe(x))
        }

        while(nomParticipants.length !== 0){
            let indexPersonne = Math.floor(Math.random() * nomParticipants.length);
            let indexGroupe = Math.floor(Math.random() * lesGroupes.length);

            //On vérifie que les groupes on le même nombre de personne
            if (lesGroupes[indexGroupe].nbPersonne() === nombreParticipant/2){
                let indexGroupe = Math.floor(Math.random() * lesGroupes.length);
            }
            else{
                //On ajoute la personne dans un groupe
                lesGroupes[indexGroupe].addPersonne(nomParticipants[indexPersonne]);
                //On la supprime de la liste des participants
                nomParticipants.splice(indexPersonne,1);
            }

        }

        let text = ['test','test2']


        document.body.innerHTML += "<div id='resultat'>" +
            "<h2>Les groupes générés </h2>"+
            "<div id='groupes'>"
            +"</div>"
            +"</div>"

        lesGroupes.forEach(groupe=>{
            let titreGroupe = document.createElement("h3")
            let h3Text = document.createTextNode("Groupe "+groupe.number)
            let div = document.createElement("div")
            div.className="groupe"
            div.id='groupe'+groupe.number
            div.appendChild(titreGroupe)
            titreGroupe.appendChild(h3Text)


            document.getElementById('groupes').appendChild(div)

            groupe.participants.forEach(personne=>{
                document.getElementById('groupe'+groupe.number).innerHTML+='<p>'+personne+'</p>'
            })
        })

    //     <div id = "resultat">
    //         <h2>Les groupes générés </h2>
    //         <div id="groupes">
        //         <div className="groupe">
        //             <h3>Groupe numero</h3>
        //             <p>particpant</p>
        //         </div>
    //         </div>
    //      </div>


    }
    else{
        let participant = document.getElementsByClassName("participant")
        let total=0
        let moyenneGlobal = 0
        let nbNiveau =0
        let userNiveau = []
        let userNiveauCroissant = []
        let nbGroupe = document.getElementById('nbGroupe').value

        let lesGroupes=[]


        //Donne la moyenne de niveau global et stocke les participants avec leur niveau
        for (const participantElement of participant) {
            total += parseInt(participantElement.children[1].getAttribute('niveau'))
            nbNiveau++;
            userNiveau.push(
                [participantElement.children[0].children[1].value , parseInt(participantElement.children[1].getAttribute('niveau'))]
            )
        }

        let nbrPointGroupe = total/nbGroupe

        for(let x=1;x<=nbGroupe;x++){
            lesGroupes.push(new groupe(x,nbrPointGroupe))
        }


        console.log(lesGroupes)

        //
        //
        // J'ai essayé de faire des groupes homogènes en therme de nombre et de niveaux mais trop dur
        //
        //
        // while(userNiveau.length!==0){
        //     let min=5
        //     let userMin
        //     let indexUserMin = 0
        //     userNiveau.forEach(user=>{
        //         if(user[1]<min){
        //             userMin=user
        //             min=user[1]
        //             indexUserMin++
        //         }
        //     })
        //     userNiveauCroissant.push(userNiveau[indexUserMin])
        //     userNiveau.splice(indexUserMin,1)
        // }
        //
        // console.log(userNiveauCroissant)
        //
        //
        // let personneplace = 0
        // let nbGroupe = document.getElementById('nbGroupe').value
        //
        // let lesGroupes=[]
        //
        // for(let x=1;x<=nbGroupe;x++){
        //     lesGroupes.push(new groupe(x))
        // }
        //
        //
        // userNiveauCroissant.forEach(userMin=>{
        //     personneplace++
        //     let indexGroupe = Math.floor(Math.random() * lesGroupes.length);
        //     if(lesGroupes[indexGroupe].nbPersonne() === 0){
        //         lesGroupes[indexGroupe].addPersonne(userMin[0])
        //         userNiveauCroissant.splice(personneplace,1)
        //     }
        // })
        //



    }
}
