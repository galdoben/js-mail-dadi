const listMail = ['gennaro@gmail.com', 'ciro23@gmail.com'];
let message = ""
console.log(listMail);

let email = (prompt("Inserisci E-mail"));

if (listMail.includes(email)){
    message = 'Accesso concesso';
} else{
    message = 'Accesso negato';
}
console.log(message)


