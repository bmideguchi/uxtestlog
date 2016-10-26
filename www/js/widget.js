var status = 0;
var handler = document.getElementById("handler");
var widgetBlock = document.getElementById("widget");
var confirmationBtn = document.getElementById("confirmar");
var paymentLoader = document.getElementById("waitingPaymentLoader");
var restartPaymentBtn = document.getElementById("novaVenda");
var cancelPaymentBtn = document.getElementById("cancelar");
var mainWidget = document.getElementById("main-widget-form");

var step1 = document.getElementById("step1")
var step2 = document.getElementById("step2")

handler.addEventListener('click', toggleWidget);
confirmationBtn.addEventListener('click', sendPaymentRequest);
restartPaymentBtn.addEventListener('click', restartPayment);
cancelPaymentBtn.addEventListener('click', restartPayment);

function toggleWidget() {
	if (status==0) { 
		openWidget();
		console.log(status + ' está fechado');
	}else if (status==1) {
		closeWidget();
		console.log(status + ' está aberto');
	}else{
		console.log(status + ' está abrindo');
	}
}

function openWidget(){
	widgetBlock.style.marginBottom = 0;
	status=1;
}

function closeWidget(){
	widgetBlock.style.marginBottom = -270;
	status=0;
}

function sendPaymentRequest(){
	step1.style.display = "none";
	step2.style.display = "block";
}

function paymentApproved(){
	step2.style.display = "none";
	step3.style.display = "block";
}

function restartPayment(){
	step2.style.display = "none";
	step3.style.display = "none";
	step1.style.display = "block";
	clearFields();
}

function clearFields(){
	mainWidget.reset();
}



