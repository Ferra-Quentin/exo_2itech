const burger =["pain","cheddar","steack","cornichon","ketchup","salade","tomate","oignon"];

/*
Burger végétarien
Burger Vegan
Burger carnivore
Burger perso

Système de commande (prompt)
 */

let burgerVegi = burger[0]+' '+burger[1]+' '+burger[3]+' '+burger[4]+' '+burger[5]+' '+ burger[6]+' '+burger[7];

let burgerVega= burger[0]+' '+burger[3]+' '+burger[4]+' '+burger[5]+' '+ burger[6]+' '+burger[7];

let burgerCarni = burger[0]+' '+burger[1]+' '+burger[2]+' '+burger[4];

let burgerPerso = '';
burger.map(ingredient => burgerPerso+=ingredient);

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
