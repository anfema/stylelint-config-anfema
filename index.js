module.exports = {
	plugins: [
		'stylelint-order',
	],
	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'blockless-after-same-name-blockless',
					'blockless-group',
					'first-nested',
				],
				ignore: [
					'after-comment',
				],
			},
		],
		'at-rule-name-case': 'lower',
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					// allowed SCSS rules
					'else',
					'for',
					'function',
					'if',
					'include',
					'mixin',
					'return',
					'while',
				],
			},
		],
		'at-rule-no-vendor-prefix': true,
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		'block-no-empty': true,
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-space-before': 'always',
		'color-hex-case': 'upper',
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: [
					'consecutive-duplicates-with-different-values',
				],
			},
		],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'order/declaration-block-properties-specified-order': [
			[
				// Position
				'position',
				'top',
				'right',
				'bottom',
				'left',
				'z-index',

				// Display
				'display',
				'width',
				'height',
				'min-width',
				'min-height',
				'max-width',
				'max-height',
				'transform',
				'float',
				'clear',
				'overflow',

				// Flexbox
				'flex',
				'flex-grow',
				'flex-shrink',
				'flex-basis',
				'flex-flow',
				'flex-direction',
				'flex-wrap',
				'justify-content',
				'align-content',
				'align-items',
				'align-self',
				'order',

				// Offsets
				'margin',
				'padding',

				// Colors
				'color',
				'background',
				'border',
				'outline',
				'box-shadow',

				// Typography
				'font',
				'line-height',
				'letter-spacing',
				'text-align',
				'vertical-align',
				'text-transform',
				'text-indent',
				'white-space',
				'overflow-wrap',
				'text-shadow',
				'text-rendering',

				// Animations
				'animation',
				'transition',

				// Other
				'src',
			],
			{
				unspecified: 'bottomAlphabetical',
			},
		],
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'font-weight-notation': 'numeric',
		indentation: 'tab',
		'keyframe-declaration-no-important': true,
		'length-zero-no-unit': true,
		'max-empty-lines': 1,
		'max-line-length': 120,
		'max-nesting-depth': 4,
		'no-invalid-double-slash-comments': true,
		'no-missing-end-of-source-newline': true,
		'no-unknown-animations': true,
		'property-case': 'lower',
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': ['always', {
			ignore: ['after-comment'],
		}],
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-max-empty-lines': 0,
		'selector-max-specificity': '0,3,3',
		'shorthand-property-no-redundant-values': true,
		'string-quotes': 'double',
		'unit-blacklist': [
			'ch',
			'cm',
			'ex',
			'in',
			'mm',
			'pc',
			'pt',
			// 'px', // most likely to be introduced later this year. Prefer rem
		],
		'unit-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
	},
};
