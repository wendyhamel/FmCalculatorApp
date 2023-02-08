window.calculator = function() {
	return {
		sum: Alpine.$persist(''),
		selectedTheme: 2,
		previousTheme: 1,
		toggleTranslate: 'translate-x-6',
		switchTheme() {
			switch(this.selectedTheme) {
				case 1:
					this.toggleTranslate = 'translate-x-6'
					this.selectedTheme = 2
					this.previousTheme = 1
					break;
				case 2:
					if (this.previousTheme === 1) {
						this.toggleTranslate = 'translate-x-12'
						this.selectedTheme = 3
					} else if (this.previousTheme === 3) {
						this.toggleTranslate = 'translate-x-0'
						this.selectedTheme = 1
					}
					this.previousTheme = 2
					break;
				case 3:
					this.previousTheme = 3
					this.selectedTheme = 2
					this.toggleTranslate = 'translate-x-6'
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
