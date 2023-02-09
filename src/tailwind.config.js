tailwind.config = {
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['League\\ Spartan', 'sans-serif']
		},
		extend: {
			colors: {
				'blue': {
					'100': 'hsl(225, 21%, 59%)', // key bg hover t1
					'200': 'hsl(225, 21%, 49%)', // key bg t1
					'300': 'hsl(224, 28%, 35%)', // key shadow t1
					'400': 'hsl(221, 14%, 31%)', //text t1
					'500': 'hsl(222, 26%, 31%)', // main bg t1
					'600': 'hsl(223, 31%, 20%)', // toggle and keypad bg t1
					'700': 'hsl(224, 36%, 15%)', // screen bg t1
					'800': 'hsl(198, 20%, 13%)' // text t3

				},
				'red': {
					'400': 'hsl(6, 63%, 60%)', // key bg, toggle hover t1
					'500': 'hsl(6, 63%, 50%)', // key bg, toggle t1
					'600': 'hsl(6, 70%, 34%)', // key shadow t1
				},
				'orange': {
					'300': 'hsl(30, 25%, 89%)', // key bg t1
					'400': 'hsl(28, 16%, 65%)', // key shadow t1
					'500': 'hsl(25, 98%, 50%)', // key bg, toggle hover t2
					'600': 'hsl(25, 98%, 40%)', // key bg, toggle t2
					'700': 'hsl(25, 99%, 27%)', // key shadow t2
				},
				'white': 'hsl(0, 0%, 100%)', // text t1, t2, t3

				'gray': {
					'100': 'hsl(0, 0%, 93%)', // screen bg t2
					'200': 'hsl(45, 7%, 99%)', // key bg hover t2
					'300': 'hsl(0, 0%, 90%)', // main bg t2
					'400': 'hsl(45, 7%, 89%)', // key bg t2
					'500': 'hsl(0, 5%, 81%)', // toggle and keypad bg t2
					'600': 'hsl(35, 11%, 61%)', // key shadow t2
					'700': 'hsl(60, 10%, 19%)', //text t2

				},
				'cyan': {
					'300': 'hsl(177, 92%, 70%)', // key shadow t3
					'400': 'hsl(176, 100%, 50%)', // key bg, toggle hover t3
					'500': 'hsl(176, 100%, 44%)', // key bg, toggle t3
					'600': 'hsl(185, 42%, 52%)', // key bg hover t2
					'700': 'hsl(185, 42%, 37%)', // key bg t2
					'800': 'hsl(185, 58%, 25%)', // key shadow t2
				},
				'violet': {
					'800': 'hsl(268, 71%, 12%)', // toggle, keypad bg and screen bg t3
					'900': 'hsl(268, 75%, 9%)', // main bg t3
				},
				'magenta': {
					'400': 'hsl(285, 91%, 52%)', // key shadow t3
					'500': 'hsl(290, 70%, 36%)', // key shadow t3
					'600': 'hsl(281, 89%, 36%)', // key bg hover t3
					'700': 'hsl(281, 89%, 26%)', // key bg t3
					'800': 'hsl(268, 47%, 31%)', // key bg hover t3
					'900': 'hsl(268, 47%, 21%)', // key bg t3
				},
				'yellow': 'hsl(52, 100%, 62%)', // text t3

			},
			'fontSize': {
				'2.5xl': '1.75rem',
				'3.5xl': '2rem',
				'4.5xl': '2.375rem',
				'5.5xl': '3.375rem'
			},
			boxShadow: {
				'button': '0 4px 0 0 rgb(0, 0, 0, 1)'
			},
			scale: {
				'99': '0.99'
			}
		}
	},
}