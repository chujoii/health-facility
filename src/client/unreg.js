"use strict";

Vue.component("tab-unreg", {
	props: ['title'],
	data: function () {
		return {
			ticket: appdt.ticket,
			explain: ''
		}
	},
	template: `
		<div id="tab-unreg"> \
			{{ title }} \
			Объяснительная: \
			<input v-model="explain" type="text" required /> <br/> \
			<button v-on:click="$emit('ticuncheckin', ticket)">Да</button> \
		</div> \
`
});

var appunreg = new Vue({
	el: '#unregister',
	data: function () {
		return {
			seen: false,
		}
	},
	methods: {
		do_ticuncheckin: function (selected) {
			unregister_ticket(selected);
			alert("Ждите...");
			setTimeout(() => { console.log("fixme: wait... for sync filesystem"); }, 1000);
			console.log(selected);
			this.seen = false;
			appdt.seen = true;
		}
	}
});
