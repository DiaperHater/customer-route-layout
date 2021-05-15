
const tails = document.querySelectorAll('.dashed-tail');

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

const cards = document.querySelectorAll('.step-card');

if(cards.length % 3 == 0 && cards.length % 6 != 0) {
	tails[tails.length-1].style.display = 'none';
} else if (cards.length % 6 == 0) {
	tails[tails.length - 3].style.display = 'none';
} else if ((cards.length + (3 - (cards.length % 3))) % 2 != 0) {
	tails[tails.length-1].style.display = 'none';
} else if ((cards.length + (3 - (cards.length % 3))) % 2 == 0) {
	cards[cards.length - cards.length % 3].style.marginLeft = 'auto';
	tails[tails.length - tails.length % 3].style.display = 'none';
} else {
	throw new Error('Unexpected state');
}
