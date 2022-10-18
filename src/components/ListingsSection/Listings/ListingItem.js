import React, { useState } from 'react'
import LikeBtnActive from 'src/assets/icons/LikeBtnActive'
import LikeBtnNotActive from 'src/assets/icons/LikeBtnNotActive'
import classes from './ListingItem.module.scss'
import cx from 'classnames'

const ListingItem = ({listing}) => {
	const [liked, setLiked] = useState(false)

	const toggleLikeHandler = () => {
		setLiked(prev => !prev)
	}
	
	return (
		<li className = {classes.container}>
			<img src = {listing.image.src} alt = ''/>
			<span className = {classes.daysonagenz}>
				{listing.dateAdded} days on agenz
			</span>
			{liked ? <LikeBtnActive onClick = {toggleLikeHandler} className = {cx(classes.likebtn, classes.likebtnactive)}/> :
			 <LikeBtnNotActive onClick = {toggleLikeHandler} className = {classes.likebtn}/>}
			<div className = {classes.detailscontainer}>
				<span className = {classes.price}>{listing.price} MAD</span>
				<div className = {classes.desc}>
					<h2 className = {classes.h2}>
						<strong>{listing.type}</strong> à {listing.operation} |
						{' '}{listing.roomsNum} chambres |
						{' '}{listing.surface} m²
					</h2>
					<p>{listing.location}</p>
					<p className = {classes.annoncepar}>ANNONCE PAR :{' '}{listing.createdBy}</p>
				</div>
			</div>
		</li>
	)
}

export default ListingItem