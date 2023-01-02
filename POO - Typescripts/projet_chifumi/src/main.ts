
enum typeCoups {PIERRE="PIERRE",FEUILLE="FEUILLE",CISEAU="CISEAU"}
let username:string ="";


/*

Class CoupPossible qui permet de créer les coups (Pierre, feuille, ciseau)

*/
export class CoupPossible{
    private readonly typeCoup:typeCoups;
    private readonly faible:typeCoups;
    private readonly fort:typeCoups;

    constructor(typeCoup:typeCoups,faible:typeCoups,fort:typeCoups) {
        this.typeCoup=typeCoup;
        this.faible=faible;
        this.fort=fort;
    }

    get getTypeCoup(){
        return this.typeCoup;
    }

    get getWeaker(){
        return this.faible;
    }

    get getStronger(){
        return this.fort;
    }
}

/*

Class Ordinateur qui stoke le coup choisi par l'IA ainsi que le nombre de manche qu'elle a gagné

*/
class Ordinateur{
    private mancheGagner:number = 0;
    private coupChoisie:CoupPossible;

    constructor() {
        const listeCoup:CoupPossible[] = [new CoupPossible(typeCoups.PIERRE,typeCoups.FEUILLE,typeCoups.CISEAU),new CoupPossible(typeCoups.FEUILLE,typeCoups.CISEAU,typeCoups.PIERRE),new CoupPossible(typeCoups.CISEAU,typeCoups.PIERRE,typeCoups.FEUILLE)];
        let indexRandomCoup = Math.floor(Math.random() * listeCoup.length);
        this.coupChoisie=listeCoup[indexRandomCoup];
    }

    get coupChoisi(){
        return this.coupChoisie.getTypeCoup
    }

    get plusFort(){
        return this.coupChoisie.getStronger
    }

    get plusFaible(){
        return this.coupChoisie.getWeaker
    }
}


//Transforme le choix de l'utilisateur en objet CoupPossible
function getChoice(coupChoisi:string) {

    switch (coupChoisi){
        case "PIERRE":{
            return (new CoupPossible(typeCoups.PIERRE,typeCoups.FEUILLE,typeCoups.CISEAU));
        }
        case "FEUILLE":{
            return (new CoupPossible(typeCoups.FEUILLE,typeCoups.CISEAU,typeCoups.PIERRE));
        }
        case "CISEAU":{
            return (new CoupPossible(typeCoups.CISEAU,typeCoups.PIERRE,typeCoups.FEUILLE));
        }
    }
}

//Recupere le choix de l'utilisateur et appel la fonction qui gère les resultats
function setChoice(coupChoisi:string){
    // @ts-ignore
    let coup:CoupPossible = getChoice(coupChoisi);
    getResult(coup)
}

//Affiche les resultats de la partie
function getResult(monCoup:CoupPossible):void{
    let robotCoup = new Ordinateur();
    const resultatP = document.getElementById("resultatGame") as HTMLParagraphElement;

    // const divGame = document.getElementById('gameElement') as HTMLDivElement;
    // // let pVictoire = document.createElement("p");
    // // let victoryText = document.createTextNode("Victoire, félicitation");
    // // pVictoire.appendChild(victoryText);
    // // let pDefaite = document.createElement("p");
    // // let defaiteText = document.createTextNode("Défaite, l'ordinateur à été plus fort !");
    // // pDefaite.appendChild(defaiteText);

    if(monCoup.getTypeCoup == robotCoup.plusFaible){
        resultatP.textContent="Victoire, félicitation";

    }
    else{
        if(monCoup.getTypeCoup == robotCoup.plusFort){
            // divGame.appendChild(pDefaite);
            resultatP.textContent="Défaite, l'ordinateur a été plus fort !";
        }
        else{
            // divGame.appendChild(pVictoire);
            resultatP.textContent="Égalité";
        }
    }
}

function getUserName(usernameChoice:string){
    username=usernameChoice;
    // @ts-ignore
    document.getElementById("gameElement").style.display=('flex');
    // @ts-ignore
    document.getElementById('bodyForm').style.display=('none') as HTMLDivElement;
    // @ts-ignore
    document.getElementById("userName").textContent=`Bonjour ${username.toUpperCase()}, je te laisse choisir Pierre, Feuille ou Ciseau`
}
