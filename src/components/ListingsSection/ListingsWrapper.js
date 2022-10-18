import React from 'react'
import classes from './ListingsWrapper.module.scss'
import ListingsHeader from './Listings/ListingsHeader'
import Listings from './Listings/Listings'

const ListingsWrapper = () => {
	return (
		<div className = {classes.container}>
			<h1 className = {classes.h1}>Immobilier et maisons à vendre partout au Maroc</h1>
			<ListingsHeader />
			<Listings />
		</div>
	)
}

export default ListingsWrapper