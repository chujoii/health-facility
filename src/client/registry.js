Vue.component("tab-dt", {
	props: ['title', 'doctors'],
	data: function () {
		return {
			picked: ''
		}
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
						<input type="radio" v-model="picked" :value="'' + id_x + ':' + id_y" /> \
						<label for=doctors[id_x][id_y]>{{tim}}</label> \
					</td> \
				</tr> \
			</table> \
			Выбрано: {{ picked }} \
			<button v-if="picked!==''" v-on:click="$emit('checkin', picked)">Записаться</button> \
		</div> \
`
});

var appdt = new Vue({
	el: '#doc_time',
	data: {
		seen: true,
	},
	methods: {
		get_doc_time: function () {return array_doctor_time;},
		do_checkin: function (selected) {
			console.log(selected);
			this.seen = false;
			appui.seen = true;
		}
	}
});
