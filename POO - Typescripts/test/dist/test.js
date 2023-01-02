"use strict";
class Departement {
    constructor(id, nom, employes) {
        this.employes = [];
        this.id = id;
        this.nom = nom;
        this.employes = employes;
    }
    addEmploye(nom) {
        // @ts-ignore
        this.employes.push(nom);
    }
}
class DepartementComptabilite extends Departement {
    constructor(id, admin, employes) {
        super(id, "comptabilité", employes);
        this.admin = admin;
    }
}
const compta = new DepartementComptabilite("COMPTA2", "Quentin", ["Vincent", "David", "Michelle"]);
console.log(compta);
