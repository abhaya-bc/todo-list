const body = document.querySelector('.container>main');
console.log(body);

const picker = document.getElementById('colors');

onload = () => {
	picker.value = localStorage.getItem('color');
	body.style['background-color'] = picker.value;
};

picker.addEventListener('change', (e) => {
	localStorage.setItem('color', e.target.value);
	body.style['background-color'] = e.target.value;
});