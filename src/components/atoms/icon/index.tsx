import React from 'react';
import './style.scss';

export type IconProps = {
    className?: string;
    name: string;
    title?: string;
}

const Icon = (props: IconProps) => {
	return (
		<svg className={`icon ${props.className || ""}`}>
			<use xlinkHref={`#${props.name}`}/>
			{props.title && <title>{props.title}</title>}
		</svg>
	);

};
export default Icon;
