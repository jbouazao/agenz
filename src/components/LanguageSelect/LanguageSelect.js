import React, { useState } from 'react'
import {MdOutlineStarPurple500} from 'react-icons/md'
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
					<MdOutlineStarPurple500 />
				</span>
				<span>{language}</span>
			</Dropdown>
		</div>
	)
}

export default LanguageSelect