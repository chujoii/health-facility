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
			Заполните личные данные<sup><a href="#userdata">[1]</a><a href="#testonly">[2]</a></sup>: \
			<ul> \
				<li> \
					<div class="left">Фамилия Имя Отчество</div> \
					<div class="right"><input v-model="name" type="text" \
					required minlength="3" maxlength="127" pattern="[-., a-zA-Zа-яА-Я0-9]+" \
					/></div> \
				</li> \
				<li> \
					<div class="left">пол</div> \
					<div class="right"> \
						<input type="radio" id="male" name="gender" value="male" v-model="gender" required /> \
						<label for="male">Мужсокй</label> \
						<input type="radio" id="female" name="gender" value="female" v-model="gender" required /> \
						<label for="female">Женский</label><br> \
					</div> \
				</li> \
				<li> \
					<!-- fixme: limit year 1900-2099, day of mont not check month length --> \
					<div class="left">дата рождения (<!-- ISO 8601 -->ГГГГ-ММ-ДД)</div> \
					<div class="right"><input v-model="birthday" type="text" \
					required pattern="(19|20)[0-9]{2}-(0[1-9]|1[012])-(0[1-9]|(1|2)[0-9]|3[01])" \
					/></div> \
				</li> \
				<li> \
					<!-- fixme: need check last numbers: checksum --> \
					<div class="left">СНИЛС (ХХХ-ХХХ-ХХХ YY)</div> \
					<div class="right"><input v-model="snils" type="text" \
					required pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}[ -][0-9]{2}" \
					/></div> \
				</li> \
				<li> \
					<div class="left">серия и номер полиса</div> \
					<div class="right"><input v-model="health_insurance" type="text" required /></div> \
				</li> \
				<li> \
					<div class="left">электронная почта</div> \
					<div class="right"><input v-model="e_mail" type="email" required /></div> \
				</li> \
				<li> \
					<div class="left">номер телефона для связи</div> \
					<div class="right"><input v-model="phone" type="text" required /></div> \
				</li> \
			</ul> \
			<button v-on:click="$emit('uicheckin', {id: ticket, doctor: doc, time: tim, name: name, gender: gender, birthday: birthday, snils: snils, health_insurance: health_insurance, e_mail: e_mail, phone: phone})">Записаться</button> \
			<ol> \
				<li id="userdata">Заполняя личные данные и нажимая кнопку отправки данных, \
				вы автоматически соглашаетесь с деанонимизацией, \
				а также использованием этих данных включая, но не ограничиваясь \
				корыстными целями</li> \
				<li id="testonly">Не вводите ваши реальные данные, \
				данная форма разработана только для тестирования \
				</li> \
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
