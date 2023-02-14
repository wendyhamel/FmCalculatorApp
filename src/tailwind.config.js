tailwind.config = {
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ['League\\ Spartan', 'sans-serif']
		},
		extend: {
			colors: {
				'blue': {
					'100': 'hsl(225, 36%, 69%)', // key bg hover  T1: dark
					'200': 'hsl(225, 21%, 49%)', // key bg  T1: dark
					'300': 'hsl(224, 28%, 35%)', // key shadow  T1: dark
					'400': 'hsl(221, 14%, 31%)', //text  T1: dark
					'500': 'hsl(222, 26%, 31%)', // main bg  T1: dark
					'600': 'hsl(223, 31%, 20%)', // toggle and keypad bg  T1: dark
					'700': 'hsl(224, 36%, 15%)', // screen bg  T1: dark
					'800': 'hsl(198, 20%, 13%)' // text  T3: neon

				},
				'red': {
					'400': 'hsl(6, 82%, 65%)', // key bg, toggle hover  T1: dark
					'500': 'hsl(6, 63%, 50%)', // key bg, toggle  T1: dark
					'600': 'hsl(6, 70%, 34%)', // key shadow  T1: dark
				},
				'orange': {
					'200': 'hsl(30, 25%, 96%)', // key bg hover T1: dark
					'300': 'hsl(30, 25%, 89%)', // key bg  T1: dark
					'400': 'hsl(28, 16%, 65%)', // key shadow  T1: dark
					'500': 'hsl(25, 98%, 50%)', // key bg, toggle hover  T2: light
					'600': 'hsl(25, 98%, 40%)', // key bg, toggle  T2: light
					'700': 'hsl(25, 99%, 27%)', // key shadow  T2: light
				},
				'white': 'hsl(0, 0%, 100%)', // text  T1: dark,  T2: light,  T3: neon

				'gray': {
					'100': 'hsl(0, 0%, 93%)', // screen bg  T2: light
					'200': 'hsl(45, 7%, 99%)', // key bg hover  T2: light
					'300': 'hsl(0, 0%, 90%)', // main bg  T2: light
					'400': 'hsl(45, 7%, 89%)', // key bg  T2: light
					'500': 'hsl(0, 5%, 81%)', // toggle and keypad bg  T2: light
					'600': 'hsl(35, 11%, 61%)', // key shadow  T2: light
					'700': 'hsl(60, 10%, 19%)', //text  T2: light

				},
				'cyan': {
					'300': 'hsl(177, 92%, 70%)', // key shadow  T3: neon
					'400': 'hsl(176, 98%, 50%)', // key bg, toggle hover  T3: neon
					'500': 'hsl(176, 100%, 44%)', // key bg, toggle  T3: neon
					'600': 'hsl(185, 42%, 52%)', // key bg hover  T2: light
					'700': 'hsl(185, 42%, 37%)', // key bg  T2: light
					'800': 'hsl(185, 58%, 25%)', // key shadow  T2: light
				},
				'violet': {
					'800': 'hsl(268, 71%, 12%)', // toggle, keypad bg and screen bg  T3: neon
					'900': 'hsl(268, 75%, 9%)', // main bg  T3: neon
				},
				'magenta': {
					'400': 'hsl(285, 91%, 52%)', // key shadow  T3: neon
					'500': 'hsl(290, 70%, 36%)', // key shadow  T3: neon
					'600': 'hsl(281, 84%, 36%)', // key bg hover  T3: neon
					'700': 'hsl(281, 89%, 26%)', // key bg  T3: neon
					'800': 'hsl(268, 47%, 31%)', // key bg hover  T3: neon
					'900': 'hsl(268, 47%, 21%)', // key bg  T3: neon
				},
				'yellow': 'hsl(52, 100%, 62%)', // text  T3: neon

			},
			'fontSize': {
				'2.5xl': '1.75rem',
				'3.5xl': '2rem',
				'4.5xl': '2.375rem',
				'5.5xl': '3.375rem'
			},
			minHeight: {
				'9.5': '2.375rem',
				'13': '3.375rem'
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