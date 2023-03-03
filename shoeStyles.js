//Good Luck Function -- Working!
var phoneField=document.getElementById("phone");
phoneField.addEventListener("change", goodLuck);

function goodLuck() {
	alert("Good Luck")
}

//Have We Met? Welcome
var nameField=document.getElementById("nameInput");
nameField.addEventListener("change", welcome);

function welcome() {
	var inputField=document.getElementById("nameInput");
	var theName=inputField.value;
	var string1="Have we met before, "+theName+"?";
	sName.innerHTML=string1;
	sName.style.backgroundColor="#556B2F";
	sName.style.color="#FFFFFF"

}

//Good Choice
var selectField=document.getElementById("sShoes");
selectField.addEventListener("change", goodChoice);

function goodChoice() {
	var changeField=document.getElementById("sShoes");
	var theChange=changeField.value;
	var string2=theChange+" is a Good Choice";
	sSelection.innerHTML=string2;
	sSelection.style.backgroundColor="#556B2F";
	sSelection.style.color="#FFFFFF"
	sShoes.style.backgroundColor="#556B2F"
	sShoes.style.color="#FFFFFF"
}

//Are you sure?
var rateField=document.getElementById("sRate");
rateField.addEventListener("change", serviceRate);

function serviceRate() {
	var changeRate=document.getElementById("sRate");
	var theRate=changeRate.value;
		if (theRate == 1) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Wow! So cold hearted.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 2) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Why are you like this?";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 3) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Just a tiny bit better than 2.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 4) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Nearly to half.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 5) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="At least got half.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 6) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Great";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 7) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="We're getting pretty warm.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 8) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="You must really like me.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else if (theRate == 9) {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Nearly a perfect score.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
		else {
			var rateP=document.getElementById("rateInput");
			rateP.innerHTML="Perfect! I can't believe this is happening.";
			rateP.style.backgroundColor="#556B2F";
			rateP.style.color="#FFFFFF"
		}
}

var resetButton=document.getElementById("sReset")
resetButton.addEventListener("click", getRight);

//Reset
function getRight() {
	alert("Get it right this time!")
	one.style.backgroundColor="#FFFF00"
	sForm.style.backgroundColor="#FFA500"
}

//Submit
var submitButton=document.getElementById("sSubmit");
submitButton.addEventListener("click", phonePls);

function phonePls() {
	var phoneInput=document.getElementById("phone");
	var thePhone=phoneInput.value;
		if (thePhone == null || thePhone == "") {
			var submitMaybe=document.getElementById("submitInput");
			submitMaybe.innerHTML="Tricked you-phone number is required!";
			submitMaybe.style.backgroundColor="#808080";
			submitMaybe.style.color="#FF0000";
			return false;
		}
		else {
			var submitMaybe=document.getElementById("submitInput");
			submitMaybe.innerHTML="Thanks--can I call you tomorrow?";
			submitMaybe.style.backgroundColor="#A020F0";
			submitMaybe.style.color="#FFA500";
		} 

}