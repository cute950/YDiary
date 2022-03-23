import React from 'react';
import SvgSprite from 'react-svg-sprite'

const Sprite = () => {
	return (
		<SvgSprite
			style={{
				position: "absolute",
				top: "-99999px",
				left: "-99999px",
				zIndex: "19999999",
				display: "block"
			}}
			symbols={[
                {
                    name: "arrow-long",
                    svg: `
                    <svg width="96" height="23" viewBox="0 0 96 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M95.0492 13.072C95.6412 12.4925 95.6515 11.5429 95.072 10.9508L85.6293 1.30278C85.0498 0.710726 84.1001 0.700514 83.5081 1.27997C82.916 1.85942 82.9058 2.80912 83.4852 3.40117L91.8788 11.9772L83.3028 20.3707C82.7107 20.9502 82.7005 21.8999 83.28 22.4919C83.8594 23.084 84.8091 23.0942 85.4012 22.5148L95.0492 13.072ZM0.983872 12.4999L93.9839 13.4999L94.0161 10.5001L1.01613 9.50009L0.983872 12.4999Z" fill="black"/></svg>`
                }
			]}
		/>
	)
};

export default Sprite;
