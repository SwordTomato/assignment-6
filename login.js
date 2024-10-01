window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	var form = document.getElementById("myLogin");
	let queryString = window.location.search;

	let urlParams = new URLSearchParams(queryString);
	let Username = urlParams.get('username')

	let Password = urlParams.get('password')

	if (form["username"].value != Username && form["password"].value != Password) {
		alert("Wrong username or password.")
		return  false;
	}

	alert("OK");
	var x = document.forms["myLogin"]["username"];
	alert("Welcome " + x.value);

	return false;
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}