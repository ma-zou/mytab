// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'brace-style': [
			'error',
			'allman'
		],
		'space-in-parens': [
			'error',
			'always'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
	},
	'overrides': [
		{
			'files': ['*.json'],
			'rules': {
				'quotes': ['error', 'double']
			}
		}
	]
}