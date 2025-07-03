const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.slice().reverse();
console.log(reversedTeachers);
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

//creo ciclo per verificare la lunghezza, se corrisponde aggiungo al nuovo array

for (let i = 0; i < teachers.length; i++ ) {
  if (teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
//creo ciclo per trovare Ed nell'array e if per eliminarlo se trova corrispondenza 
for (let i = 0; i < teachers.length; i++ ) {
  if (teachers[i]== 'Ed'){
    teachers.splice(i, 1);
  }
}
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++ ) {
  if (teachers[i]== 'Fabio'){
    isFabioPresent = true;
  }
}
console.log(teachers);
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;