window.calculator = function() {
	return {
		darkMode: Alpine.$persist(true),
		sum: Alpine.$persist(''),
		selectedTheme: 'dark',
		previousTheme: 'light',
		toggleTranslate: 'translate-x-0',
		switchTheme() {
			switch(this.selectedTheme) {
				case 'dark':
					this.darkMode = true
					localStorage.theme = 'dark'
					this.toggleTranslate = 'translate-x-0'
					break;
				case 'light':
						this.darkMode = false
						localStorage.theme = 'light'
						this.toggleTranslate = 'translate-x-6'
					break;
				case 'contrast':
					this.darkMode = false
					this.toggleTranslate = 'translate-x-12'
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
