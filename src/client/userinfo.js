"use strict";

Vue.component("tab-ui", {
	props: ['title'],
	data: function () {
		return {
			ticket: appdt.ticket,
			doc: array_doctor_time[appdt.ticket.split(".")[0]].name, // fixme: ticket is not defined
			tim: array_doctor_time[appdt.ticket.split(".")[0]].timetable[appdt.ticket.split(".")[1]], // fixme: ticket is not defined
			name: '',
			gender: true,
			birthday: '',
			snils: '',
			health_insurance: '',
			e_mail: '',
			phone: ''
		}
	},
	template: `
		<div id="tab-ui"> \
			{{ title }} \
			Заполните личные данные<sup><a href="#userdata">[1]</a></sup>: \
			<ul> \
				<li> \
					<div class="left">Фамилия Имя Отчество</div> \
					<div class="right"><input v-model="name" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">пол</div> \
					<div class="right"> \
						<input type="radio" id="male" name="gender" value="male" v-model="gender"> \
						<label for="male">Мужсокй</label> \
						<input type="radio" id="female" name="gender" value="female" v-model="gender"> \
						<label for="female">Женский</label><br> \
					</div> \
				</li> \
				<li> \
					<div class="left">дата рождения (<!-- ISO 8601 -->ГГГГ-ММ-ДД)</div> \
					<div class="right"><input v-model="birthday" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">СНИЛС</div> \
					<div class="right"><input v-model="snils" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">серия и номер полиса</div> \
					<div class="right"><input v-model="health_insurance" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">электронная почта</div> \
					<div class="right"><input v-model="e_mail" type="text" value="@" /></div> \
				</li> \
				<li> \
					<div class="left">номер телефона для связи</div> \
					<div class="right"><input v-model="phone" type="text" /></div> \
				</li> \
			</ul> \
			<button v-on:click="$emit('uicheckin', {id: ticket, doctor: doc, time: tim, name: name, gender: gender, birthday: birthday, snils: snils, health_insurance: health_insurance, e_mail: e_mail, phone: phone})">Записаться</button> \
			<ol> \
				<li id="userdata">Заполняя личные данные и нажимая кнопку отправки данных, \
				вы автоматически соглашаетесь с деанонимизацией, \
				а также использованием этих данных включая, но не ограничиваясь \
				корыстными целями</li> \
			</ol> \

		</div> \
`
});

var appui = new Vue({
	el: '#user_info',
	data: function () {
		return {
			seen: false,
		}
	},
	methods: {
		do_uicheckin: function (selected) {
			register_ticket(selected);
			console.log(selected);
			this.seen = false;
			apptic.seen = true;
		}
	}
});
