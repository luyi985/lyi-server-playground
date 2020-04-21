const API_ROOT = 'http://localhost:3001';
const errorHandling = (e) => {
	console.log(e);
};

(function () {
	const endpoint = '/cors';
	const jsCorsGetBtn = document.querySelector('.js-cors-get-btn');
	const jsCorsGetResult = document.querySelector('.js-cors-get-result');

	jsCorsGetBtn.addEventListener(
		'click',
		(e) => {
			fetch(`${API_ROOT}${endpoint}`, {
				credentials: 'include',
			})
				.then((data) => {
					console.log(data);
					jsCorsGetResult.innerHTML = JSON.stringify(data);
				})
				.catch(errorHandling);
		},
		true,
	);
})();
