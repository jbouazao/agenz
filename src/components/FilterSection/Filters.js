import React from 'react'
import classes from './Filters.module.scss'
import { filtersmenu } from 'src/utils/lists/filters'
import cx from 'classnames'

const Filters = () => {
	return (
		<div className = {classes.container}>
			<span className = {classes.filteritem}>À vendre</span>
			{filtersmenu?.map((item, idx) =>
				<span key = {idx} className = {classes.filteritem}>
					{item.title}
				</span>)}
			<button className={cx(classes.submitbtn, classes.filteritem)}>Valider</button>
		</div>
	)
}

export default Filters