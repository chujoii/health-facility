Vue.component("tab-tic", {
	props: ['title'],
	data: function () {
		return {
			ticket: appdt.ticket.split("."),
			doc: array_doctor_time[appdt.ticket.split(".")[0]].name, // fixme: ticket is not defined
			tim: array_doctor_time[appdt.ticket.split(".")[0]].timetable[appdt.ticket.split(".")[1]] // fixme: ticket is not defined
		}
	},
	template: `
		<div id="tab-tic"> \
			Ваш талон<sup><a href="#visa">[1]</a></sup>:<br> \
			<div class="ticket"><span class="circle"></span><a href="#"> \
			{{String(ticket[0]).padStart(2, '0')}},{{String(ticket[1]).padStart(2, '0')}} \
			</a> \
			врач: {{doc}}, \
			время: {{tim}} ч. </div><br><br><br> \
			<ol> \
				<li id="visa">Распечатанный или переписанный от руки талон, \
				необходимо завизировать в регистратуре синей печатью, \
				с 6 до 7 часов завтрашнего утра</li> \
			</ol> \
		</div> \
`
});

var apptic = new Vue({
	el: '#ticket',
	data: function () {
		return {
			seen: false
		}
	},
	methods: {
		do_ticcheckin: function (selected) {
			console.log(selected);
			this.seen = false;
		}
	}
});
