import React, { useEffect, useRef, useState } from 'react'
import classes from './Dropdown.module.scss'
import cx from 'classnames'

const Dropdown = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
				setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

	return (
		<div className={cx(classes.container, props.className)}>
			<div className={classes.toggle} onClick = {() => setIsOpen(prev => !prev)}>
				{props.children}
			</div>
			{isOpen && <ul ref = {ref} className={cx(classes.list, props.liststyling)}>
				{props.options}
			</ul>}
		</div>
	)
}

export default Dropdown