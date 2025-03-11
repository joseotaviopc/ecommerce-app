module.exports = {
	petstore: {
		output: {
			mode: "tags-split",
			target: "orval/mobile.ts",
			schemas: "orval/model",
			client: "react-query",
			override: {
				mutator: {
					path: "./services/api.ts",
					name: "customInstance",
				},
			},
		},
		input: {
			target: "http://localhost:3000/api-json",
		},
	},
};
