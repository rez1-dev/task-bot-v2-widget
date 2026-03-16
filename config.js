"use strict";

const configs = (function () {
	const StreamerBotSettings = {
		host: "127.0.0.1",
		port: 8080,
		endpoint: "/",
	};

	const commands = [
		"!taskhelp",
		"!add",
		"!edit",
		"!done",
		"!remove",
		"!focus",
		"!clearmydone",
	];

	return {
		StreamerBotSettings,
		commands,
	};
})();
