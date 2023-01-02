let doc = document.getElementById('output')


// //Exercice 1
// document.body.children[0].children[0].href="https://google.fr"





// //Exercice 2
// doc.innerHTML = " <blockquote> L'espoir est un fluide nécessaire à l'homme \n" +
//     "comme l'eau à la terre, il déclenche des forces insoupçonnées de \n" +
//     "la nature humaine.</blockquote>"





// //Exercice 3
// doc.innerHTML =""






// //Exercice 4
// let lienDiv = document.createElement('div');
// let lienStrong1 = document.createElement('strong');
// let lienStrong2 = document.createElement('strong');
// let lienA1 = document.createElement('a');
// let lienA2 = document.createElement('a');
// let para = document.createElement('p')
// let textDiv1 = document.createTextNode('Le ');
// let textStrong1 = document.createTextNode('World_Wide_Web Consortium, ');
// let textDiv2 = document.createTextNode('abrégé par le sigle ');
// let textStrong2 = document.createTextNode('W3C, ');
// let textDiv3 = document.createTextNode('est un ');
// let textA1 = document.createTextNode('organisme de standardisation ');
// let textDiv4 = document.createTextNode('à but non-lucratif chargé de promouvoir la compatibilité des technologies du ');
// let textA2 = document.createTextNode('World Wide Web ');
//
// lienDiv.id = 'divTP1';
//
// lienA1.href = 'http://fr.wikipedia.org/wiki/Organisation_de_normalisation';
// lienA1.title = 'Organisation de normalisation';
//
// lienA2.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
// lienA2.title = 'World Wide Web';
//
// lienDiv.appendChild(para)
//
// para.appendChild(textDiv1);
//
// lienStrong1.appendChild(textStrong1);
// para.appendChild(lienStrong1);
//
// para.appendChild(textDiv2);
// lienStrong2.appendChild(textStrong2);
// para.appendChild(lienStrong2);
//
// para.appendChild(textDiv3);
// lienA1.appendChild(textA1);
// para.appendChild(lienA1);
//
// para.appendChild(textDiv4);
// lienA2.appendChild(textA2);
// para.appendChild(lienA2);
//
// document.body.appendChild(lienDiv);





// //Exercice 5
// let lienDiv = document.createElement('div');
// let ul = document.createElement("ul")
// let li1 = document. createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")
// let li4 = document.createElement("li")
// let para = document.createElement('p')
// let paraText = document.createTextNode("Langages basés sur ECMAScript :")
// let li1Text = document.createTextNode("JavaScript")
// let li2Text = document.createTextNode("JScript")
// let li3Text = document.createTextNode("ActionScript")
// let li4Text = document.createTextNode("EX4")
//
// lienDiv.id = 'divTP2';
//
// lienDiv.appendChild(para)
//
// para.appendChild(paraText);
//
// lienDiv.appendChild(ul)
//
// li1.appendChild(li1Text)
// ul.appendChild(li1)
//
// li2.appendChild(li2Text)
// ul.appendChild(li2)
//
// li3.appendChild(li3Text)
// ul.appendChild(li3)
//
// li4.appendChild(li4Text)
// ul.appendChild(li4)
//
//
// document.body.appendChild(lienDiv);





// //Exercice 6
// let lienDiv = document.createElement('div');
// let form = document.createElement('form')
// let fieldset = document.createElement('fieldset')
// let legend = document.createElement('legend')
// let div2 = document.createElement('div')
// let label1 = document.createElement('label')
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let br = document.createElement('br')
// let textLegend = document.createTextNode("Uploader une image")
// let textLabel = document.createTextNode("Image à uploader :")
//
// lienDiv.id = 'divTP3';
//
// lienDiv.appendChild(form)
//
// form.enctype="multipart/form-data"
// form.method="post"
// form.action="upload.php"
//
//
// form.appendChild(fieldset)
//
// fieldset.appendChild(legend)
// legend.appendChild(textLegend)
//
// fieldset.appendChild(div2)
//
// div2.style.textAlign = "center"
// div2.appendChild(label1)
//
// label1.for="inputUpload"
// label1.appendChild(textLabel)
//
// div2.appendChild(input1)
// input1.type="file"
// input1.name="inputUpload"
// input1.id="inputUpload"
//
// div2.appendChild(br)
// div2.appendChild(br)
//
// div2.appendChild(input2)
// input2.type="submit"
// input2.value="Envoyer"
//
//
// document.body.appendChild(lienDiv);


//Exercice 7
let body=document.getElementsByTagName("body")
let tr = document.createElement("tr")
let th1 = document.createElement("th")
let td1 = document.createElement("td")
let td2 = document.createElement("td")
let th1text = document.createTextNode("Firefox")
let td1text = document.createTextNode("Mozilla")
let td2text = document.createTextNode("27,8%")

th1.scope="row"

th1.appendChild(th1text)
td1.appendChild(td1text)
td2.appendChild(td2text)

tr.appendChild(th1)
tr.appendChild(td1)
tr.appendChild(td2)


document.body.children[0].children[0].children[1].appendChild(tr)

