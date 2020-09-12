function validate() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var phone = document.getElementById("phone").value;
    if ( !validatesPrecenceOfrequireFields(name, lastname, email, user, pass, phone
    ))   {
        alert("Todos los campos son obligatorios") ;
        return false;
    }   else if (name.length > 30) {
        alert("El name es muy largo");
        return false;
    }   else if (lastname.lenght > 80) {
        alert("El apellido es muy largo");
        return false;
    }   else if (email.lenght > 100) {
        alert ("el correo es muy largo");
        return false;
    }   else if (!validEmail(email)) {
        alert ("correo inválido");
    }   else if(!validPhone(phone)) {
        alert("El teléfono solo debe contener numeros y no pueden ser mas de 15 dígitos");
        return false; 
    }
    var welcome = "Hola, bienvenido";
    alert("welcome");
}

function validPhone(phone){
    //Verificar el largo y sólo numeros
    if (phone.leght > 15 || isNaN(phone)){
        return false;
    }   else {
        return true;
    }
}

function validatesPrecenceOfrequireFields(
    name,
    lastname,
    email,
    user,
    pass,
    phone,
){
    if (
        name === "" ||  
        lastname === "" ||  
        email === "" ||  
        user === "" ||  
        pass === "" ||  
        phone === ""
    )   {
        return false;
    }   else {
        return true;
    }
}

function validEmail(email) {
    var letters_array = email.split("");
    if (hasAtAndDot(letters_array) && atBeforeDot(letters_array)) {
        return true;
    }   else {
        return false;
    }
}

function hasAtAndDot(array){
    if (array.includes("@") && array.includes(".")){
        return true;
    }   else {
        return false
    }
}

function atBeforeDot (array){
    if(array.lastIndexOf(".") > array.lastIndexOf("@")){
        return true;
    }   else {
        return false;
    }
}