var doc_time_table = new Vue({
	el: '#doc_time',
	data: {
		doctors: [ // fixme: move to external database
			{name: 'доктор Айболит',
			 timetable: [1, 2, 3, 4]},
			
			{name: 'доктор Ливси',
			 timetable: [3, 4, 5, 6]},
			
			{name: 'доктор Леонид Броневой',
			 timetable: [5, 6, 7, 8]},

			{name: 'профессор Филипп Филиппович Преображенский',
			 timetable: [7, 8, 9, 10]},

			{name: 'доктор Иван Арнольдович Борменталь',
			 timetable: [9, 10, 11, 12]},

			{name: 'доктор (врач широкого профиля) Пилюлькин',
			 timetable: [11, 12, 13, 14]},

			{name: 'доктор Ватсон',
			 timetable: [13, 14, 15, 16]},

			{name: 'доктор Виктор Франкенштейн (Victor Frankenstein)',
			 timetable: [15, 16, 17, 18]},

			{name: 'доктор Грегори Хаус (Gregory House M.D.)',
			 timetable: [17, 18, 19, 20]},

			{name: 'заведующий терапевтическим отделением Андрей Евгеньевич Быков',
			 timetable: [19, 20, 21, 22]},

			{name: 'интерн Варвара Черноус',
			 timetable: [23, 0, 1, 2]},

			{name: 'доктор Тринадцатая (Remy Beauregard Hadley)',
			 timetable: [1, 2, 3, 4]},

			{name: 'доктор Джон Зойдберг (Dr. John A. Zoidberg)',
			 timetable: [3, 4, 5, 6]},
		],
		picked: ''
	}
});
