function val(result){

    form.display.value = form.display.value + result;
}

function calculate(){

    if (form.display.value == "")
        alert("Please enter the numbers first");
    else {
        form.display.value = eval(form.display.value);
    }
}

function clearsc() {
    form.display.value = "";
}

function backsp() {
    form.display.value = Math.trunc(form.display.value / 10);
}

// calculator maths logic
// function computationMaths(value) {

//     create custom logic in v1.1;
// }