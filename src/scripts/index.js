const body = document.querySelector('.container>main');
console.log(body);
const picker = document.getElementById('colors');
picker.addEventListener('change', (e) => {
	body.style['background-color'] = e.target.value;
});
