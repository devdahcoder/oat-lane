import React from "react";

type Props = {
    className?: string;
    fillType?: string;
    width?: string;
    height?: string;
    strokeType?: string;
    fillColor?: string;
}

const Grid = (props: Props) => {

    const {className, fillType, width, height, fillColor} = props;
    
    const svgStyle = className ?? '';
    const svgWidth = width ?? '18';
    const svgHeight = height ?? '18';
    const fillStyle = fillType ?? 'none';
    const fillColorStyle = fillColor ?? '#86A467';

    return (
        <svg
        className={svgStyle}
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
        fill={fillStyle}
        xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8H7C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7V1C8 0.734784 7.89464 0.48043 7.70711 0.292893C7.51957 0.105357 7.26522 0 7 0V0ZM17 0H11C10.7348 0 10.4804 0.105357 10.2929 0.292893C10.1054 0.48043 10 0.734784 10 1V7C10 7.26522 10.1054 7.51957 10.2929 7.70711C10.4804 7.89464 10.7348 8 11 8H17C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0V0ZM7 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11V17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H7C7.26522 18 7.51957 17.8946 7.70711 17.7071C7.89464 17.5196 8 17.2652 8 17V11C8 10.7348 7.89464 10.4804 7.70711 10.2929C7.51957 10.1054 7.26522 10 7 10ZM15 11H13V13H11V15H13V17H15V15H17V13H15V11Z"
                fill={fillColorStyle}
            />
        </svg>
    )
};

export default Grid;
