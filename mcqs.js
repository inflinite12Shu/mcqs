document.getElementById("answer").onclick = validate;

function validate() {
    var checkboxes = document.getElementsByName("input");
    var checkboxChecked = []; 

    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked && (checkboxes[i].value === "right")) {
            checkboxChecked.push(checkboxes[i]);
        }
    }

    if(checkboxChecked.length === 2) {
        alert("You answered correctly");
    } 
    else {
        alert("Wrong answer");
    }
}
