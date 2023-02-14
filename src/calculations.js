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
					this.darkMode = false
					localStorage.theme = 'dark'

					this.toggleTranslate = 'translate-x-6'
					this.selectedTheme = 'light'
					this.previousTheme = 'dark'
					break;
				case 'light':
					if (this.previousTheme === 'dark') {
						this.darkMode = false
						localStorage.theme = 'light'
						this.toggleTranslate = 'translate-x-12'
						this.selectedTheme = 'contrast'
					} else if (this.previousTheme === 'contrast') {
						this.darkMode = true
						this.toggleTranslate = 'translate-x-0'
						this.selectedTheme = 'dark'
					}
					this.previousTheme = 'light'
					break;
				case 'contrast':
					this.darkMode = false
					this.previousTheme = 'contrast'
					this.selectedTheme = 'light'
					this.toggleTranslate = 'translate-x-6'
					break;
				default:
					localStorage.removeItem('theme')
					this.selectedTheme = 'light'
					this.previousTheme = 'dark'
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
