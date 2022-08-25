/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'My Awesome workl'
export const siteDescription = 'Built with the SvelteKit Static work Starter'
export const siteURL = 'example.com'
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-work-starter'
export const siteAuthor = 'Josh Collinsworth - find and change this text in src/lib/config.js'

// Controls how many posts are shown per page on the main work index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Work',
		route: '/work'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'Contact',
		route: '/contact' 
	},
]


export const socials = [
	{
		display: true,
		title: 'Instagram',
		icon: false,
		link: '',
	}, {
		display: true,
		title: 'Linkedin',
		icon: false,
		link: '',
	}, {
		display: true,
		title: 'Github',
		icon: false,
		link: '',
	},
]