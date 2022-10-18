import React, { useState } from 'react'
import DropdownIcon from 'src/assets/icons/DropdownIcon'
import Dropdown from 'src/components/UI/Dropdown/Dropdown'
import classes from './ListingsHeader.module.scss'
import { listingsfilters } from 'src/utils/lists/filters'

const ListingsHeader = () => {
	const [current, setCurrent] = useState(0)
	return (
		<div className = {classes.header}>
			<h4 className = {classes.agentcount}>500 Agent listings</h4>
			<div className = {classes.filtercontainer}>
				<span className = {classes.filtrepar}>Filtre par </span>
				<Dropdown className = {classes.dropdown}
					liststyling = {classes.liststyling}
					options = {listingsfilters?.map((item, idx) =>
					<span key = {idx} onClick = {() => setCurrent(idx)} className = {classes.dropdownitem}>
						{item.title}
						</span>)}>
							{listingsfilters[current].title}
					<DropdownIcon color = '#460AF0' className = {classes.dropdownicon}/>
				</Dropdown>
			</div>
		</div>
	)
}

export default ListingsHeader