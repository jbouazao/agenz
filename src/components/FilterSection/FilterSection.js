import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Filters from './Filters'
import classes from './FilterSection.module.scss'

const FilterSection = () => {
	return (
		<div className = {classes.container}>
			<SearchBar/>
			<Filters />
		</div>
	)
}

export default FilterSection