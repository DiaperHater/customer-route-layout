const stepCards = document.querySelector('.customer-route__steps');
const cardsOrigin = document.querySelectorAll('.step-card');
let cards = document.querySelectorAll('.step-card');
let tails = document.querySelectorAll('.dashed-tail');
//////////////////////////////////////////////////////////////////



processDeviceWidth();
window.addEventListener('resize', processDeviceWidth);



//Functions/////////////////////////////////////////////////////
function processDeviceWidth() {
	resetTails();
	processTabletWidth();
	processDesktopWidth();
	processMobileWidth();
}

function processDesktopWidth() {
	const desktopScreen = window.matchMedia("(min-width: 1101px)");
	if(desktopScreen.matches) {

		reorderCardsForDesktop();

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
function reorderCardsForDesktop() {
		cards = cardsOrigin;

		cards.forEach( (item, index) => {
			if ((index-3) % 6 == 0 ) {
				stepCards.append(cards[index+2])
			} 
			else if ((index-4) % 6 == 0 ) {
				stepCards.append(cards[index]);
			}  
			else if ((index-5) % 6 == 0 ) {
				stepCards.append(cards[index-2])
			}
			else {
				stepCards.append(cards[index]);
			} 
	
		});

		refreshLists();		
}

function processTabletWidth() {
	const tabletScreen = window.matchMedia("(max-width: 1100px)");
	if (tabletScreen.matches) {

		reorderCardsForTablet();

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
function reorderCardsForTablet() {
		cards = cardsOrigin;

		cards.forEach( (item, index) => {
			if ((index-2) % 4 == 0 ) {
				stepCards.append(cards[index+1])
			} 
			else if ((index-3) % 4 == 0 ) {
				stepCards.append(cards[index-1]);
			}  
			else {
				stepCards.append(cards[index]);
			} 
	
		});

		refreshLists();		
}

function processMobileWidth() {
	const mobileScreen = window.matchMedia("(max-width: 620px)");
	
	if(mobileScreen.matches) {
		reorderCardsForMobile();		
		resetTails();
	}
}
function reorderCardsForMobile() {
	cards = cardsOrigin;
	
	cards.forEach(item => {
		stepCards.append(item);
	});

	refreshLists();
}


function resetTails() {
	tails.forEach(item => {
		item.className = 'dashed-tail';
		item.style.display = 'flex';
	});	
}

function refreshLists() {
	cards = document.querySelectorAll('.step-card');
	tails = document.querySelectorAll('.dashed-tail');
}




