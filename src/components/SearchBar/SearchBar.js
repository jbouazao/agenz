import React, { useState } from 'react'
import SearchIcon from 'src/assets/icons/SearchIcon'
import classes from './SearchBar.module.scss'

const SearchBar = () => {
	const [input, setInput] = useState('')
	return (
		<div className = {classes.container}>
			<input className = {classes.input} value = {input} onChange = {e => setInput(e.target.value)} placeholder = {'Entrez une ville, un quartier, une addresse'}/>
			<SearchIcon className = {classes.searchicon}/>
		</div>
	)
}

export default SearchBar