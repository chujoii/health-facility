"use strict";

Vue.component("tab-dt", {
	props: ['title', 'doctors'],
	data: function () {
		return {
			picked: '',
			list_of_regs: ['0.1','0.2']
		}
	},
	created: function() {
			let promise = list_of_reg_ticket();
			let res;
			promise.then(
				result => this.list_of_regs = result,
				error => alert(error)
			);
	},
	template: `
		<div id="tab-dt"> \
			{{ title }} \
			Выберите врача и время приёма: \
			<table> \
				<tr> \
					<th>врач</th> \
					<th colspan="4">время</th> <!-- fixme: colspan --> \
				</tr> \
				<tr v-for="(doc, id_x) in doctors"> \
					<td> \
						{{doc.name}} \
					</td> \
					<td v-for="(tim, id_y) in doc.timetable"> \
						<div class="ticket" v-if="list_of_regs.includes('' + id_x + '.' + id_y)"> \
						<input class="circle" type="radio" v-model="picked" :value="'' + id_x + '.' + id_y" /> \
						<a href="#"> {{tim}} </a> \
						</div> \
						<div v-else> \
						<input type="radio" v-model="picked" :value="'' + id_x + '.' + id_y" /> \
						<label for=doctors[id_x][id_y]>{{tim}}</label> \
						</div>
					</td> \
				</tr> \
			</table> \
			Выбрано: {{ picked }} \
			<span v-if="picked!==''"> \
				<button v-if="list_of_regs.includes(picked)" v-on:click="$emit('checkout', picked)">Отказаться</button> \
				<button v-else v-on:click="$emit('checkin', picked)">Записаться</button> \
			</span> \
		</div> \
`
});

var appdt = new Vue({
	el: '#doc_time',
	data: function () {
		return {
			seen: true,
			ticket: undefined // fixme: not need
		}
	},
	methods: {
		get_doc_time: function () {return array_doctor_time;},
		do_checkin: function (selected) {
			console.log(selected);
			this.ticket = selected;
			this.seen = false;
			appui.seen = true;
		},
		do_checkout: function (selected) {
			console.log(selected);
			this.ticket = selected;
			this.seen = false;
			appunreg.seen = true;
		}
	}
});
