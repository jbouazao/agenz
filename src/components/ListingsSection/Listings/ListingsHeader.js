import React from 'react'
import DropdownIcon from 'src/assets/icons/DropdownIcon'
import Dropdown from 'src/components/UI/Dropdown/Dropdown'
import classes from './ListingsHeader.module.scss'
import { listingsfilters } from 'src/utils/lists/filters'

const ListingsHeader = () => {
	return (
		<div className = {classes.header}>
			<h4 className = {classes.agentcount}>500 Agent listings</h4>
			<div className = {classes.filtercontainer}>
				<span className = {classes.filtrepar}>Filtre par </span>
				<Dropdown className = {classes.dropdown}
					liststyling = {classes.liststyling}>
							Date - Du plus récent au plus ancien
					<DropdownIcon className = {classes.dropdownicon}/>
				</Dropdown>
				{/* <Dropdown className = {classes.dropdown}
					liststyling = {classes.liststyling}
					options = {listingsfilters?.map((item, idx) => 
						<span key = {idx}>{item.title}</span>)}>
							Date - Du plus récent au plus ancien
					<DropdownIcon className = {classes.dropdownicon}/>
				</Dropdown> */}
			</div>
		</div>
	)
}

export default ListingsHeader