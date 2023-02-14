window.calculator = function() {
	return {
		darkMode: Alpine.$persist(true),
		display: Alpine.$persist('399,981'),
		formula: '',
		calculation: [],
		selectedTheme: Alpine.$persist('dark'),
		switchTheme() {
			switch(this.selectedTheme) {
				case 'dark':
					this.darkMode = true
					localStorage.theme = 'dark'
					break;
				case 'light':
						this.darkMode = false
						localStorage.theme = 'light'
					break;
				case 'neon':
					this.darkMode = false
					break;
				default:
					localStorage.removeItem('theme')
					this.selectedTheme = localStorage.theme
					break;
			}
		},
		addToFormula(item) {
			this.calculation.push(item);
			this.formula = this.calculation.join('')
			return this.display = this.formula.replaceAll('.', ',').replaceAll('+', '\u002B').replaceAll('-', '\u002D').replaceAll('/', '\u00F7').replaceAll('*', '\u00D7')
		},
		removeLastFromSum() {
			this.calculation.pop()
			this.formula = this.calculation.join('')
			this.display = this.formula
		},
		resetSum() {
			this.calculation = []
			this.formula = this.calculation
			this.display = this.formula
		},
		calculate() {
			this.formula = eval(this.formula)
			this.display = this.formula.toString().replaceAll('.', ',').replaceAll('+', '\u002B').replaceAll('-', '\u002D').replaceAll('/', '\u00F7').replaceAll('*', '\u00D7')
		},
	}
}
