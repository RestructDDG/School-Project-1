let subTotal=0.00;
let discount=0.00;
let tax=0.00;
let total=0.00;
let totalAmountItems=0.0;
let dscode="";


document.addEventListener("click", rvTotal);

function rvTotal() {
	var inputField=document.getElementById("quantity1");
	var quantity1Val=inputField.value;
	var price1Val=80.00;
	rvTotal=quantity1Val*price1Val;
	rvTot.innerHTML="$"+rvTotal.toFixed(	2);
}

document.addEventListener("click", rlTotal);

function rlTotal() {
	var inputField=document.getElementById("quantity2");
	var quantity2Val=inputField.value;
	var price2Val=95.00;
	rlTotal=quantity2Val*price2Val;
	rlTot.innerHTML="$"+rlTotal.toFixed(	2);
}

document.addEventListener("click", jmTotal);

function jmTotal() {
	var inputField=document.getElementById("quantity3");
	var quantity3Val=inputField.value;
	var price3Val=149.99;
	jmTotal=quantity3Val*price3Val;
	jmTot.innerHTML="$"+jmTotal.toFixed(	2);
}

document.addEventListener("click", elTotal);

function elTotal() {
	var inputField=document.getElementById("quantity4");
	var quantity4Val=inputField.value;
	var price4Val=295.00;
	elTotal=quantity4Val*price4Val;
	elTot.innerHTML="$"+elTotal.toFixed(	2);
}

document.addEventListener("click", uggTotal);

function uggTotal() {
	var inputField=document.getElementById("quantity5");
	var quantity5Val=inputField.value;
	var price5Val=140.00;
	uggTotal=quantity5Val*price5Val;
	uggTot.innerHTML="$"+uggTotal.toFixed(	2);
}

document.addEventListener("click", tbTotal);

function tbTotal() {
	var inputField=document.getElementById("quantity6");
	var quantity6Val=inputField.value;
	var price6Val=199.00;
	tbTotal=quantity6Val*price6Val;
	tbTot.innerHTML="$"+tbTotal.toFixed(	2);
}

document.addEventListener("click", ocTotal);

function ocTotal() {
	var inputField=document.getElementById("quantity7");
	var quantity7Val=inputField.value;
	var price7Val=139.95;
	ocTotal=quantity7Val*price7Val;
	ocTot.innerHTML="$"+ocTotal.toFixed(	2);
}

document.addEventListener("click", rudTotal);

function rudTotal() {
	var inputField=document.getElementById("quantity8");
	var quantity8Val=inputField.value;
	var price8Val=190.00;
	rudTotal=quantity8Val*price8Val;
	rudTot.innerHTML="$"+rudTotal.toFixed(	2);
}
 
document.addEventListener("click", totTotal);

function totTotal() {
	var inputField=document.getElementById("totTot");
	var totalAmount=0.0;

	let dd=document.querySelectorAll("td");

	for (let i=0; i<dd.length;i++) {
		if (dd[i].className=="tpi") {
			totalAmount+=parseFloat(dd[i].innerText.replace("$", ""));
		}
	}
	totalAmountItems=totalAmount;

	updater();
	
	
}

function updater() {
	var inputField=document.getElementById("totTot");
	let disValue = 0;
	subTotal=totalAmountItems.toFixed(2);
	if (discount == 10) {
		disValue=(subTotal*.10).toFixed(2);
		console.log(disValue);
	} else {
		disValue = 0;
	}
	tax=((subTotal-disValue)*.08).toFixed(2);
	total=(parseFloat(subTotal-disValue)+parseFloat(tax)).toFixed(2);

	inputField.innerText="Sub-Total: $"+subTotal+"\nDiscount: -$"+disValue+"\nTax: $"+tax+"\nTotal: $"+total;
}


window.addEventListener("load", randomDis);

function randomDis() {
	var dis=document.getElementById("discount");
	var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var discountLength= 6;
	var discount="";

	for (var i=0; i<= discountLength; i++) {
		var randomGen=Math.floor(Math.random() * chars.length);
		discount+=chars.substring(randomGen, randomGen +1);
	}
	dis.innerText="Discount Code (10%): "+discount;
	dscode = discount;
}

const codeDis=document.getElementById("disCode");
codeDis.addEventListener("change", (e) => {
	if (codeDis.value==dscode) {
		console.log("discountadded");
		discount=10;
		updater();
	}
});