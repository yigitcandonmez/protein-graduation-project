// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['airbnb', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'import/prefer-default-export': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/prop-types': [0],
	},
};
