import React from 'react'
import ListingItem from './ListingItem'
import { listings } from 'src/utils/lists/listings'
import classes from './Listings.module.scss'

const Listings = () => {
	return (
		<ul className = {classes.listingscontainer}>
			{listings?.map((item, idx) =>
			<ListingItem key = {idx} listing = {item}/>)}
		</ul>
	)
}

export default Listings