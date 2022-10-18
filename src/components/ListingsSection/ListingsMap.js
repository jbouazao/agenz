import React from 'react'
import classes from './ListingsMap.module.scss'

const ListingsMap = () => {
	return (
		<div className={classes.container}>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.400419469914!2d-7.642521484361799!3d33.542971280747686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d1ff587a767%3A0xde35837da7c2b64b!2sAgenz!5e0!3m2!1sen!2sma!4v1666097287501!5m2!1sen!2sma" width="650" height="620" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	)
}

export default ListingsMap