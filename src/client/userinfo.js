Vue.component("tab-ui", {
	props: ['title'],
	data: function () {
		return {
			picked: ''
		}
	},
	template: `
		<div id="tab-ui"> \
			{{ title }} \
			Заполните личные данные: \
			<ul> \
				<li> \
					<div class="left">Фамилия Имя Отчество</div> \
					<div class="right"><input id="name" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">пол</div> \
					<div class="right"> \
						<input type="radio" id="male" name="gender" value="male"> \
						<label for="male">Мужсокй</label> \
						<input type="radio" id="female" name="gender" value="female"> \
						<label for="female">Женский</label><br> \
					</div> \
				</li> \
				<li> \
					<div class="left">дата рождения (<!-- ISO 8601 -->ГГГГ-ММ-ДД)</div> \
					<div class="right"><input id="birthday" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">СНИЛС</div> \
					<div class="right"><input id="snils" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">серия и номер полиса</div> \
					<div class="right"><input id="health-insurance" type="text" /></div> \
				</li> \
				<li> \
					<div class="left">электронная почта</div> \
					<div class="right"><input id="e-mail" type="text" value="@" /></div> \
				</li> \
				<li> \
					<div class="left">номер телефона для связи</div> \
					<div class="right"><input id="phone" type="text" /></div> \
				</li> \
			</ul> \
		</div> \
`
});

var appui = new Vue({
	el: '#user_info',
	data: {
		seen: false,
	}
});
