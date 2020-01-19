import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, ...rest}) => {
	return (
		// 여기에서 rest는 나중에 이 컴포넌트가 받을 모든 props 를 명시한다.
		<div className={cx('button')} {...rest}>
			{children}
		</div>
	);
};

export default Button;
