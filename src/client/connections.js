async function list_of_reg_ticket () {
	let response = await fetch('../cgi-bin/list_of_reg_ticket.sh');

	if (response.ok) {
		let ret = await response.json();
		console.log("read = " + ret.registered_tickets);
		return ret.registered_tickets;
	} else {
		alert("Ошибка обновления списка талонов " + response.status);
		return null;
	}
}

async function register_ticket (data) {
	let response = await fetch('../cgi-bin/register_ticket.sh',
				   {
					   method: 'POST',
					   headers: {
						   'Content-Type': 'application/json;charset=utf-8'
					   },
					   body: JSON.stringify(data)
				   });

	if (response.ok) {
		let ret = await response.text();
		console.log("read = " + ret);
	} else {
		alert("Ошибка регистрации талона " + response.status);
	}
}

async function unregister_ticket (data) {
	let response = await fetch('../cgi-bin/unregister_ticket.sh',
				   {
					   method: 'POST',
					   headers: {
						   'Content-Type': 'application/json;charset=utf-8'
					   },
					   body: JSON.stringify(data)
				   });

	if (response.ok) {
		let ret = await response.text();
		console.log("read = " + ret);
	} else {
		alert("Ошибка отмены записи " + response.status);
	}
}
