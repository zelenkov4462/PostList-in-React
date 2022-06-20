import React, {forwardRef} from 'react';

import styles from './styles.module.css';

const MyInput = forwardRef((props, ref) => {
	return (
		<input ref={ref} className={styles.input} {...props}/>
	);
});

export default MyInput;