import React from 'react';

import styles from './styles.module.css'

const Button = ({children, ...props}) => {
	return (
		<div>
			<button {...props}  className={styles.btn}>
				{children}
			</button>
		</div>
	);
};

export default Button;