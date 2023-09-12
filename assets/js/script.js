/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/

/* 
BONUS 1:
Trasformare la stringa foto in una immagine effettiva

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
console.log(studentList);

//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < studentList.length; i++) {
    //Associo una variabile per assegnare la lista ordinata per poi stamparla
    const students = studentList[i];
    //stampo in console gli studenti con le relative informazioni
    console.log(students);
}



//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
document.querySelector('.avatar').innerHTML = studentList[0].nome + ' ' + studentList[0].role + ' ' + studentList[0].image;
document.querySelector('.avatar2').innerHTML = studentList[1].nome + ' ' + studentList[1].role + ' ' + studentList[0].image;
document.querySelector('.avatar3').innerHTML = studentList[2].nome + ' ' + studentList[2].role + ' ' + studentList[0].image;
document.querySelector('.avatar4').innerHTML = studentList[3].nome + ' ' + studentList[3].role + ' ' + studentList[0].image;
document.querySelector('.avatar5').innerHTML = studentList[4].nome + ' ' + studentList[4].role + ' ' + studentList[0].image;
document.querySelector('.avatar6').innerHTML = studentList[5].nome + ' ' + studentList[5].role + ' ' + studentList[0].image;



/* ORA CICLIAMO ALL'INTERNO DELL'OGGETTO member RECUPERATO CON UN LOOP FOR IN PER RECUPERARE LE PROPRIETA' ED ASSEGNARLE A DELLE VARIABILI */
/* for (const key in students) {

    // console.log("Key:", key);

    const value = students[key]
    // console.log("Value:", value);

    const prop = `${key}: ${value}`;
    console.log("Property =", prop);

}
 */




