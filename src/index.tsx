import React from 'react';
import './styles.css';

export interface Props {
	label: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const TextField: React.FC<InputProps> = ({ label, ...rest }) => {
	return (
		<div className="floating-label">
			<input className="floating-input" placeholder=" " {...rest} />
			<label>{label}</label>
		</div>
	);
};

export default TextField;
