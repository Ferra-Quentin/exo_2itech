import {Formation} from './formation.model';

export const ListFormation : Formation[] = [
    {
        id : 1,
        nom : "Angular",
        date : new Date(),
        duree : 3,
        version : "14.2.6",
        icon: '/assets/img/angular.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langages : ["TypeScript","Html", "Css"]
    },
    {
        id : 2,
        nom : "NodeJs",
        date : new Date(),
        duree : 1,
        version : "16.18.0",
        icon: '/assets/img/nodejs.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langages : ["JavaScript"]

    },
    {
        id : 3,
        nom : "Symfony",
        date : new Date(),
        duree : 5,
        version : "6.1",
        icon: './assets/img/symfony.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langages : ["Php", "Twig"]

    },
    {
        id : 4,
        nom : "Spring",
        date : new Date(),
        duree : 5,
        version : "5.3.23",
        icon: './assets/img/spring.png',
        formateur: 'Mehdy EL MOUTAOUKIL',
        langages : ["JavaEE"]
    }

];
