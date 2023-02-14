window.calculator = function() {
	return {
		darkMode: Alpine.$persist(true),
		sum: Alpine.$persist(''),
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
		console.log('sum = ' + this.sum)
		},
		addToSum(item) {
			this.sum.concat(item)
		},
		removeLastFromSum() {
			this.sum.slice(this.sum-1)
		},
		resetSum() {
			this.sum = ''
		},
		calculate() {

		},
		total() {

		}
	}
}
