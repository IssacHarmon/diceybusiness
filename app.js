document.addEventListener('DOMContentLoaded', function () {
	let container = document.getElementById('die-container');
	let diceArray = [];
	let btn = document.getElementById('new-die');
	let btn2 = document.getElementById('reroll');
	let btn3 = document.getElementById('sum-die');
	let ranVal = () => Math.floor(Math.random() * 6 + 1);

	class Die {
		constructor(value) {
			this.value = value;
			this.div = document.createElement('div');
			this.newFace();
			this.div.className = 'dice';
			container.appendChild(this.div);
			diceArray.push(this);
			this.roll();
			this.div.addEventListener('dblclick', () => {
				this.div.remove();
				let i = diceArray.indexOf(this);
				diceArray.splice(i, 1);
			});
			this.div.addEventListener('click', () => {
				this.roll();
			});
		}
		roll() {
			this.value = ranVal();
			this.newFace()
        }
        // to change the die to actual die
        newFace() {
            switch (this.value)
            {
                case 1:
                    this.div.innerText = '\u2680';
                    break;
                case 2:
                    this.div.innerText = '\u2681'
                    break;
                case 3:
                    this.div.innerText = '\u2682'
                    break;
                case 4:
                    this.div.innerText = '\u2683'
                    break;
                case 5:
                    this.div.innerText = '\u2684'
                    break;
                case 6:
                    this.div.innerText = '\u2685'
                    break;
            }
        }
    }
  

	btn3.addEventListener('click', () => {
		let sum = 0;
		diceArray.forEach((x) => (sum += x.value));
		alert(`The value of your die is ${sum}`);
	});

	btn2.addEventListener('click', () => diceArray.forEach((x) => x.roll()));
	btn.addEventListener('click', () => new Die(ranVal()));
});
