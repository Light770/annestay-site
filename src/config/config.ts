// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Elie Annestay.',
	siteDescription:
		'Elie Annestay is part of a design and development agency that specializes in creating websites, applications & software.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Elie Annestay. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
