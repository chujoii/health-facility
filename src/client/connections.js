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
