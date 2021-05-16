const cards = document.querySelectorAll('.step-card');
const tails = document.querySelectorAll('.dashed-tail');




//DashedRoad
window.addEventListener('resize', processDeviceWidth);
processDeviceWidth();




//Functions

function processDeviceWidth() {
	resetTails();
	processTabletWidth();
	processDesktopWidth();
	processMobileWidth();
}

function processDesktopWidth() {
	const desktopScreen = window.matchMedia("(min-width: 1001px)");
	if(desktopScreen.matches) {

		tails.forEach((tail, index) => {
			
			//each first on each odd row
			if(index % 6 == 0){
				tail.classList.add('dashed-tail--y-flipped');
			}

			//each second on each odd row
			if((index-1) % 6 == 0){
				tail.classList.add('dashed-tail--x-flipped');
				tail.classList.add('dashed-tail--high');
			}

			//each 2 on each even row
			if((index-4) % 6 == 0){
				tail.classList.add('dashed-tail--high');
			}

			//each last on each even row
			if((index-5) % 6 == 0){
				tail.classList.add('dashed-tail--y-flipped');
			}



			//each first 2 on each odd row
			if(index % 6 == 0 || (index-1) % 6 == 0) {
				tail.classList.add('dashed-tail--right');
			}

			//each last 2 on each even row
			if((index-4) % 6 == 0 || (index-5) % 6 == 0) {
				tail.classList.add('dashed-tail--left');
			}

			//each last on each odd row
			if((index-2) % 6 == 0) {
				tail.classList.add('dashed-tail--vertical');
			}

			//each first on each even row
			if((index-3) % 6 == 0) {
				tail.classList.add('dashed-tail--vertical-x-flipped');
			}

		});


		if(cards.length % 3 == 0 && cards.length % 6 != 0) {
			tails[tails.length-1].style.display = 'none';
		} 
		else if (cards.length % 6 == 0) {
			tails[tails.length - 3].style.display = 'none';
		} 
		else if ((cards.length + (3 - (cards.length % 3))) % 2 != 0) {
			tails[tails.length-1].style.display = 'none';
		} 
		else if ((cards.length + (3 - (cards.length % 3))) % 2 == 0) {
			cards[cards.length - cards.length % 3].style.marginLeft = 'auto';
			tails[tails.length - tails.length % 3].style.display = 'none';
		} 
		else {
			throw new Error('Unexpected state');
		}
	}
}

function processTabletWidth() {
	const tabletScreen = window.matchMedia("(max-width: 1000px)");
	if (tabletScreen.matches) {

		tails.forEach((tail, index) => {

			//each first on each even row
			if(index % 4 == 0) {
				tail.classList.add('dashed-tail--right');
			}

			//each first on each even row
			if((index-3) % 4 == 0) {
				tail.classList.add('dashed-tail--left');
			}

			//each last on each odd row
			if((index-1) % 4 == 0) {
				tail.classList.add('dashed-tail--vertical');
			}

			//each first on each even row
			if((index-2) % 4 == 0) {
				tail.classList.add('dashed-tail--vertical-x-flipped');
			}
		});

		if(cards.length % 2 == 0 && cards.length % 4 != 0) {
			tails[tails.length-1].style.display = 'none';
		} 
		else if (cards.length % 4 == 0) {
			tails[tails.length - 2].style.display = 'none';
		} 
		else if ((cards.length + 1) % 2 == 0 && (cards.length + 1) % 4 != 0) {
			tails[tails.length-1].style.display = 'none';
		} 
		else if ((cards.length + 1) % 4 == 0) {
			console.log((cards.length + 1) % 4);
			cards[cards.length - cards.length % 2].style.marginLeft = 'auto';
			tails[tails.length - tails.length % 2].style.display = 'none';
		} 
		else {
			throw new Error('Unexpected state');
		}
	}
}

function processMobileWidth() {
	const tabletScreen = window.matchMedia("(max-width: 620px)");
	if(tabletScreen.matches) {
		resetTails();
	}
}

function resetTails() {
	tails.forEach(item => {
		item.className = 'dashed-tail';
		item.style.display = 'flex';
	});	
}




