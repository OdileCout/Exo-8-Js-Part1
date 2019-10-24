document.getElementById('submit').addEventListener('click',displayAges);
function displayAges(){
  var age = document.getElementById('age').value;
  // Condition qui le champ est rempli
  if (age == ''){
  alert('Il faut remplir le champ!');
   //Condition qui verifie si c'est bien un nombre
 }else if((isNaN(age) == true)){
   alert('Veillez saisir un nombre!');
   // Condition qui verifie si l'age est mineur.
}else if ((age < 18) && (age > 0)){
  alert('Vous êtes mineur!');
  // Condition qui verifie si l'age est majeur.
}else if((age >= 18) && (age < 100)){
  alert('Vous êtes majeur!');
}else{
  alert ('Merci de reseigner le bon âge');
}
}
