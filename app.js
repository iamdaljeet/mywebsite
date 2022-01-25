
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 10) {
		header.style.backgroundColor = '#060606';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
