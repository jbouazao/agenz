import React from 'react'
import ListingsWrapper from './ListingsWrapper'
import ListingsMap from './listingsMap'
import classes from './ListingsSection.module.scss'

const ListingsSection = () => {
	return (
		<div className = {classes.container}>
			<ListingsMap />
			<ListingsWrapper />
		</div>
	)
}

export default ListingsSection