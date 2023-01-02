enum typeVehicule { AUTO = "AUTO", CAMION= "CAMION" , MOTO = "MOTO" };

abstract class Vehicule {
    nbRoues: number;
    poidVehicule: number;
    volumeTransportabele: number;
    marque: string;
    typeVehicule: typeVehicule

    constructor(nbRoue: number, poidVehicule: number, volumeTransportable: number, marque: string, typeVehicule: typeVehicule) {
        this.nbRoues = nbRoue;
        this.poidVehicule = poidVehicule;
        this.volumeTransportabele = volumeTransportable;
        this.marque = marque;
        this.typeVehicule = typeVehicule;
    }

    display(): void {
        console.log(this)
    }

    abstract afficherVolumeTransportable(): number;

    abstract bruitMoteur():string;

}

class NewVehicule extends Vehicule{

    private bruitMoteurs : string;

    constructor(nbRoue: number, poidVehicule: number, volumeTransportable: number, marque: string, typeVehicule: typeVehicule,bruitMoteur:string) {
        super(nbRoue, poidVehicule, volumeTransportable, marque, typeVehicule);
        this.bruitMoteurs=bruitMoteur;
    }

    afficherVolumeTransportable(): number {
        return this.volumeTransportabele;
    }

    bruitMoteur(): string {
        return this.bruitMoteurs;
    }

}

const voiture = new NewVehicule(4,1700,500,"Volkswagen",typeVehicule.AUTO,"Vroum")
const moto = new NewVehicule(2,210,150,"Kawasaki",typeVehicule.MOTO,"PANPANPAN")
const camion = new NewVehicule(8,12000,19000,"Mercedes",typeVehicule.CAMION,"PFIOU")

console.log(voiture)
console.log(moto)
console.log(camion)
console.log(`Poid de la voiture : ${voiture.afficherVolumeTransportable()}`)
console.log(`Poid de la moto : ${moto.afficherVolumeTransportable()}`)
console.log(`Poid du camion : ${camion.afficherVolumeTransportable()}`)


