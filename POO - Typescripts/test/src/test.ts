class Departement{
    private id;
    private nom;
    private employes: string[] | undefined = []

    constructor(id:string,nom:string,employes?:string[]) {
        this.id=id;
        this.nom=nom;
        this.employes=employes
    }

    addEmploye(nom:string){
        // @ts-ignore
        this.employes.push(nom)
    }
}

class DepartementComptabilite extends Departement{

    private admin:string;

    constructor(id:string, admin:string,employes:string[]) {
        super(id, "comptabilité",employes);
        this.admin=admin;
    }
}

const compta = new DepartementComptabilite("COMPTA2","Quentin",["Vincent","David","Michelle"]);


console.log(compta);
