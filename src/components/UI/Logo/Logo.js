import React from 'react'
import LogoIcon from 'src/assets/LogoIcon'
import TitleLogo from 'src/assets/TitleLogo'
import classes from './Logo.module.scss'

const Logo = () => {
	return (
		<div className = {classes.logowrapper}>
			<LogoIcon />
			<TitleLogo className = {classes.title}/>
		</div>
	)
}

export default Logo