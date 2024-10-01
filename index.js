window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;

    /*form["firstname"].value = "Test";
    form["lastname"].value = "Test2";
    form["gender"].value = "male";
    form["email"].value = "Test2@gmail.com";
    form["bday"].value = "2000-06-17";
    form["username"].value = "Test3";
    form["password"][0].value = "passwordX";
    form["password"][1].value = "passwordX";
    */
}

function validateForm() {
    let form = document.forms["myRegister"]
    let errorMsg = document.getElementById("errormsg");

    errorMsg.innerHTML = "";

    if (form["firstname"].value == "" || form["lastname"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["gender"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["bday"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }    

    if (form["username"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["password"][0].value == "" || form["password"][1].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["password"][0].value != form["password"][1].value)
    {
        errorMsg.innerHTML = "Password doesn't match.";
        return false;
    }
       
    ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}
