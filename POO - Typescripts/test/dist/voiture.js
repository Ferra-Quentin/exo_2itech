"use strict";
var typeVehicule;
(function (typeVehicule) {
    typeVehicule["AUTO"] = "AUTO";
    typeVehicule["CAMION"] = "CAMION";
    typeVehicule["MOTO"] = "MOTO";
})(typeVehicule || (typeVehicule = {}));
;
class Vehicule {
    constructor(nbRoue, poidVehicule, volumeTransportable, marque, typeVehicule) {
        this.nbRoues = nbRoue;
        this.poidVehicule = poidVehicule;
        this.volumeTransportabele = volumeTransportable;
        this.marque = marque;
        this.typeVehicule = typeVehicule;
    }
    display() {
        console.log(this);
    }
}
class NewVehicule extends Vehicule {
    constructor(nbRoue, poidVehicule, volumeTransportable, marque, typeVehicule, bruitMoteur) {
        super(nbRoue, poidVehicule, volumeTransportable, marque, typeVehicule);
        this.bruitMoteurs = bruitMoteur;
    }
    afficherVolumeTransportable() {
        return this.volumeTransportabele;
    }
    bruitMoteur() {
        return this.bruitMoteurs;
    }
}
const voiture = new NewVehicule(4, 1700, 500, "Volkswagen", typeVehicule.AUTO, "Vroum");
const moto = new NewVehicule(2, 210, 150, "Kawasaki", typeVehicule.MOTO, "PANPANPAN");
const camion = new NewVehicule(8, 12000, 19000, "Mercedes", typeVehicule.CAMION, "PFIOU");
console.log(voiture);
console.log(moto);
console.log(camion);
console.log(`Poid de la voiture : ${voiture.afficherVolumeTransportable()}`);
console.log(`Poid de la moto : ${moto.afficherVolumeTransportable()}`);
console.log(`Poid du camion : ${camion.afficherVolumeTransportable()}`);
