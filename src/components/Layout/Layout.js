import React from 'react'
import Navbar from '../Navbar/Navbar'
import classes from './Layout.module.scss'

const Layout = ({children}) => {
	return (
		<div className = {classes.layout}>
			<Navbar />
			{children}
		</div>
	)
}

export default Layout