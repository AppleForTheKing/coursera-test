/**
 * Created by Michael on 07.06.2017.
 */
var student = {
    "name" : "",
    "type" : "student"
}

document.addEventListener("keyup", getName);

function calculateNumeric(name) {

    var q = 0;
    for(var i=0; i < name.length; i++)
    {
        q += name.charCodeAt(i);
    }
    console.log(q);
}

function getName() {
    student.name = document.getElementById("first").value;
    calculateNumeric(student.name);
}