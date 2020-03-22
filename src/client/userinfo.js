Vue.component("tab-ui", {
	props: ['title'],
	data: function () {
		return {
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
			Заполните личные данные: \
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
			<button v-on:click="$emit('uicheckin', {name: name, gender: gender, birthday: birthday, snils: snils, health_insurance: health_insurance, e_mail: e_mail, phone: phone})">Записаться</button> \
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
			console.log(selected);
			this.seen = false;
		}
	}
});
