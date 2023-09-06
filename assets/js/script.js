/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/

const studentList = [
    {
        nome: 'Wayne ',
        cognome: 'Barnett',
        job: 'Founder & CEO',
    },
    {
        nome: 'Angela',
        cognome: 'Caroll',
        job: 'Chief Editor',
    },
    {
        nome: 'Walter',
        cognome: 'Gordon',
        job: 'Office Manager',
    },
    {
        nome: 'Angela',
        cognome: 'Lopez',
        job: 'Social Media Manage',
    },
    {
        nome: 'Scott',
        cognome: 'Estrada',
        job: 'Developer',
    },
    {
        nome: 'Barbara',
        cognome: ' Ramos',
        job: 'Graphic Designer',
    }

];
console.log(studentList);
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < studentList.length; i++) {
    const studentInfo = studentList[i];
    console.log(studentInfo['nome']);
    console.log(studentInfo['cognome']);
    console.log(studentInfo['job']);
}


//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

for (const key in studentList) {
    
    console.log(key);
    console.log(studentList[key]);
}








