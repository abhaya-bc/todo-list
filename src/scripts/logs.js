const { log } = console;

function logs(...rest) {
	rest.foreach((item) => {
		log(item);
	});
}

export { log, logs}