import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/Components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			boxShadow: {
				'dropdown': 'var(--FilterShadow) 0px 10px 20px',
			},
			colors: {
				bgMain: 'var(--bgMain)',
				bgHeader: 'var(--bgHeader)',
				bgInvoiceItem: 'var(--bgInvoiceItem)',
				bgInvoiceItemShadow: 'var(--bgInvoiceItemShadow)',
				bgView: 'var(--bgView)',
				bgViewShadow: 'var(--bgViewShadow)',
				bgViewSummary: 'var(--bgViewSummary)',
				bgViewSummaryFooter: 'var(--bgViewSummaryFooter)',
				bgEdit: 'var(--bgEdit)',
				bgForm: 'var(--bgForm)',
				bgFormScroll: 'var(--bgFormScroll)',
				bgInput: 'var(--bgInput)',
				bgInputBorder: 'var(--bgInputBorder)',
				bgSelectBg: 'var(--bgSelectBg)',
				bgSelectShadow: 'var(--bgSelectShadow)',
				bgSelectBorder: 'var(--bgSelectBorder)',
				bgFilter: 'var(--bgFilter)',
				bgFilterBox: 'var(--bgFilterBox)',
				FilterShadow: 'var(--FilterShadow)',
				bgDeleteModal: 'var(--bgDeleteModal)',
				textPrimary: 'var(--textPrimary)',
				textSecondary: 'var(--textSecondary)',
				textTertiary: 'var(--textTertiary)',
				statusPaid: 'var(--statusPaid)',
				statusPaidBg: 'var(--statusPaidBg)',
				statusPending: 'var(--statusPending)',
				statusPendingBg: 'var(--statusPendingBg)',
				statusDraft: 'var(--statusDraft)',
				statusDraftBg: 'var(--statusDraftBg)',
				btnPrimary: 'var(--btnPrimary)',
				btnPrimaryHover: 'var(--btnPrimaryHover)',
				btnSecondary: 'var(--btnSecondary)',
				btnSecondaryHover: 'var(--btnSecondaryHover)',
				btnSave: 'var(--btnSave)',
				btnSaveHover: 'var(--btnSaveHover)',
				btnDelete: 'var(--btnDelete)',
				btnDeleteHover: 'var(--btnDeleteHover)',
				btnNewItem: 'var(--btnNewItem)',
				btnNewItemHover: 'var(--btnNewItemHover)',
				btnTheme: 'var(--btnTheme)',
				btnThemeHover: 'var(--btnThemeHover)',

				white: 'hsl(0, 0%, 100%)',
				black: 'hsl(0, 0%, 0%)',
				blackAlpha50: 'hsla(0, 0%, 0%, 50%)',
				purple: 'hsl(252, 94%, 67%)',
				purpleLight: 'hsl(252, 100%, 73%)',
				red: 'hsl(0, 80%, 63%)',
				redLight: 'hsl(0, 100%, 80%)',
				blueGrayish: 'hsl(231, 36%, 63%)',
				grayLight: 'hsl(231, 20%, 36%)',
				grayMedium: 'hsl(225, 14%, 53%)'
			},
			fontFamily: {
				'league-spartan': ['League Spartan', 'sans-serif']
			},
			fontSize: {
				'heading-l': [
					'36px',
					{
						lineHeight: '33px',
						letterSpacing: '-1.125px',
						fontWeight: '700'
					}
				],
				'heading-m': [
					'24px',
					{
						lineHeight: '22px',
						letterSpacing: '-0.75px',
						fontWeight: '700'
					}
				],
				'heading-s': [
					'15px',
					{
						lineHeight: '24px',
						letterSpacing: '-0.25px',
						fontWeight: '700'
					}
				],
				'heading-s-variant': [
					'15px',
					{
						lineHeight: '15px',
						letterSpacing: '-0.25px',
						fontWeight: '700'
					}
				],
				body: [
					'13px',
					{
						lineHeight: '18px',
						letterSpacing: '-0.1px',
						fontWeight: '500'
					}
				],
				'body-variant': [
					'13px',
					{
						lineHeight: '15px',
						letterSpacing: '-0.1px',
						fontWeight: '500'
					}
				]
			}
		}
	},
	plugins: []
}

export default config
