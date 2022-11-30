(function ($) {
	$(document).ready(function () {
		$("#roll-button").on("click", rollDice);
		function rollDice() {
			const dice = [...document.querySelectorAll(".die-list")];
			const messages = [...document.querySelectorAll(".die-list")];
			$(".roll-message").each((i, el) => {
				$(el).hide();
			});

			dice.forEach((die) => {
				toggleClasses(die);
				die.dataset.roll = getRandomNumber(1, 6);
				setTimeout(() => {
					$(`#rollMessage${die.dataset.roll}`).each((i, el) => {
						$(el).show();
					});
				}, 1500);
			});
		}

		function toggleClasses(die) {
			die.classList.toggle("odd-roll");
			die.classList.toggle("even-roll");
		}

		function getRandomNumber(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	});
})(jQuery);
