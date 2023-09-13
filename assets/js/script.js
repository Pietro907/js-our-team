/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/

/* 


BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e confermate lettura come al solito!

Dati:
Wayne Barnett
Founder & CEO	
wayne-barnett-founder-ceo.jpg

Angela Caroll	
Chief Editor	
angela-caroll-chief-editor.jpg

Walter Gordon
Office Manager
walter-gordon-office-manager.jpg

Angela Lopez
Social Media Manager	
angela-lopez-social-media-manager.jpg

Scott Estrada	
Developer	
scott-estrada-developer.jpg

Barbara Ramos	
Graphic Designer	
barbara-ramos-graphic-designer.jpg

*/


const studentList = [
    {
        nome: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'js-our-team/assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'js-our-team/assets/img/angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        role: 'Social Media Manage',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

];
console.log(studentList + ' sei dentro il ciclo for');

//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < studentList.length; i++) {
    //Associo una variabile per assegnare la lista ordinata per poi stamparla
    const students = studentList[i];
    //stampo in console gli studenti con le relative informazioni
    console.log(students);

      for (const key in students) {

        //console.log("Key:", key);

        const value = students[key]
        //console.log("Value:", value);

        const prop = `${key} ${value}`;
        //console.log("Property =", prop)

        console.log(prop + ' sei dentro il ciclo for..in !!!');

    }

}



//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe




/* Cicliamo studentList RECUPERATO CON UN LOOP FOR IN PER RECUPERARE LE PROPRIETA' ED ASSEGNARLE A DELLE VARIABILI */

//const markup = ``;


    
/*

  
    //const img = document.createElement("img");
    //img.src = "js-our-team/assets/img/angela-caroll-chief-editor.jpg";

    //src.appendChild(img);




    /* const img = new Image();
    const div = document.getElementById('header');

    img.onload = function(){
        div.appendChild(img);
    }

    img.src = `js-our-team/assets/img/angela-caroll-chief-editor.jpg` */
/*
    //La strada giusta?
    const img = `./assets/img/${students.image}`
    const markupProfile = `
    <div class="col border">
        <img src="${img}" alt="">
        <div class="card border-0 mt-5 p-5 avatar2"></div>
    </div>`;
    const src = document.querySelectorAll(".header");

    src.insertAdjacentHTML('beforeend', markupProfile);
*/