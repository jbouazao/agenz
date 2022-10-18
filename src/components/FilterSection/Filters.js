import React, { useState } from 'react'
import classes from './Filters.module.scss'
import { filtersmenu } from 'src/utils/lists/filters'
import cx from 'classnames'
import RedIcon from 'src/assets/icons/RedIcon'

const Filters = () => {
	const [current, setCurrent] = useState(0)

	return (
		<div className = {classes.container}>
			<span className = {cx(classes.filteritem, {[classes.border]: current === 0})}
				onClick = {() => setCurrent(0)}>
				<RedIcon />
				À vendre
			</span>
			{filtersmenu?.map((item, idx) =>
				<span
				key = {idx}
				className = {cx(classes.filteritem, {[classes.border]: current === idx + 1})}
				onClick = {() => setCurrent(idx + 1)}>
					{item.title}
				</span>)}
			<button className={cx(classes.submitbtn, classes.filteritem)}>Valider</button>
		</div>
	)
}

export default Filters