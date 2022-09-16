const burger =["pain","cheddar","steack","cornichon","ketchup","salade","tomate","oignon"];

/*
Burger végétarien
Burger Vegan
Burger carnivore
Burger perso

Système de commande (prompt)
 */


const burgerPerso = [...burger]

const burgerCarni = [...burger]

burgerCarni.splice(3,1)
burgerCarni.splice(4,3)

const burgerVega=[...burger]
burgerVega.splice(1,2)

const burgerVegi =[...burger]

burgerVegi.splice(2,1)


let choix = prompt('Quel menu voulez-vous ? ' +
    '(1: Végétarien, 2: Vegan, 3: Carnivore, 4: Personnel)');

switch (choix){
    case '1':
        console.log(burgerVegi)
        break
    case '2':
        console.log(burgerVega)
        break
    case '3':
        console.log(burgerCarni)
        break
    case '4':
        console.log(burgerPerso)
        break
}
