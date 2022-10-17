import LoginIcon from 'src/assets/icons/LoginIcon'
import OpenTabIcon from 'src/assets/icons/OpenTabIcon'

export const mainMenuItems = [
	{
		title: 'Acheter',
		path: '/',
		isDropdown: true,
		options: [
			'Appartements et maisons à vendre',
			'Immobilier Neuf'
		]
	},
	{
		title: 'Louer',
		path: '/',
		isDropdown: false,
	},
	{
		title: 'Estimer',
		path: '/',
		isDropdown: true,
		options: [
			'Estimation immobilière',
			'Estimation de loyer',
			'Comment réussir votre vente ?'
		]
	},
	{
		title: 'Prix immobiliers',
		path: '/',
		isDropdown: false,
	},
	{
		title: 'Crédit',
		path: '/',
		isDropdown: true,
		options: []
	},
	{
		title: 'Agences',
		path: '/',
		isDropdown: false,
	},
]