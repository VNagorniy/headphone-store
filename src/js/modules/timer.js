function timer() {
	const endDate = new Date('Aug 01, 2024, 00:00:00');

	const daysElement = document.querySelector('#days');
	const minutesElement = document.querySelector('#minutes');
	const hoursElement = document.querySelector('#hours');
	const secondsElement = document.querySelector('#seconds');

	let timerInterval;

	function updateTimer() {
		const now = new Date();
		const timeDifference = endDate - now;

		if (timeDifference <= 0) {
			daysElement.innerText = '0';
			hoursElement.innerText = '0';
			minutesElement.innerText = '0';
			secondsElement.innerText = '0';
			clearInterval(timerInterval);
			return;
		}

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

		daysElement.innerText = days;
		hoursElement.innerText = hours;
		minutesElement.innerText = minutes;
		secondsElement.innerText = seconds;
	}

	updateTimer();
	timerInterval = setInterval(updateTimer, 1000);
}

export default timer;
