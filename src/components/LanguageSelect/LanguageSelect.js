import React, { useState } from 'react'
import MarFlagIcon from 'src/assets/icons/MarFlagIcon'
import { languages } from 'src/utils/lists/languages'
import Dropdown from '../UI/Dropdown/Dropdown'
import classes from './LanguageSelect.module.scss'

const LanguageSelect = () => {
	const [language, setlanguage] = useState('Arabe')
	
	return (
		<div className = {classes.container}>
			<Dropdown
				options = {languages.map(item =>
					<li
						key={item.value}
						onClick={() => setlanguage(item.name)}>
						{item.name}
					</li>)}
				>
				<span className = {classes.flagwrapper}>
					<MarFlagIcon />
				</span>
				<span>{language}</span>
			</Dropdown>
		</div>
	)
}

export default LanguageSelect