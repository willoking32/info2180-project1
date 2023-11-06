/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded',() =>{
	let sub = document.getElementsByClassName('btn');
	
	console.log(sub);
	
	
	sub[1].addEventListener("click",() =>{
		let email =  document.getElementById("email").value;
		let message = document.getElementsByClassName('message');
		
		if( email  != "" && email.includes("@")){
			let mess = document.createTextNode('Thank you! Your email address '+email+' has been added to our mailing list');
			message[0].appendChild(mess);
			console.log(message[0]);
		} else{
			let mess = document.createTextNode('Please enter a valid email address');
			message[0].appendChild(mess);
		}
		//message.textContent = "Thank you! Your email address `<example@address.com>` has been added to our mailing list!";
	})
	
	var form = sub[1].parentNode;
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);
	
})