const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
menuBtn.addEventListener('click', () => {
	navigation.classList.toggle('open');
});


let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});
