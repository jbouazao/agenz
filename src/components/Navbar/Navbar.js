import React from 'react'
import Link from 'next/link'
import Logo from '../UI/Logo/Logo'
import classes from './Navbar.module.scss'
import { mainMenuItems } from '../../utils/lists/navMenuItems'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import LoginIcon from 'src/assets/icons/LoginIcon'
import OpenTabIcon from 'src/assets/icons/OpenTabIcon'
import Dropdown from '../UI/Dropdown/Dropdown'
import DropdownIcon from 'src/assets/icons/DropdownIcon'

const Navbar = () => {
	return (
		<div className={classes.container}>
			<Logo />
			<nav className={classes.navigation}>
				{mainMenuItems?.map((navitem, idx) =>
					navitem.isDropdown ?
						<Dropdown
							key={idx}
							options={navitem.options.map((item, idx) => <div key={idx}>
								<Link href='/'><a>{item}</a></Link></div>)}>
							<span className={classes.navitem}>
								{navitem.title}<DropdownIcon color = 'black'/>
							</span>
						</Dropdown> :
						<Link
							key={idx}
							href={navitem.path}>
							<a className={classes.navitem}>
								{navitem.title}
							</a>
						</Link>
				)}
			</nav>
			<ul className={classes.actionMenu}>
				<li><LanguageSelect /></li>
				<li>
					<LoginIcon />
					Connexion
				</li>
				<li>
					Offres pro
					<OpenTabIcon />
				</li>
			</ul>
		</div>
	)
}

export default Navbar