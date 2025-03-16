import alizeh from '@alizehkhan/eslint-config'

export default [
	...alizeh,
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
]
