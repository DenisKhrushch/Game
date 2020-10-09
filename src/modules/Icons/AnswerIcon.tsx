import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { AnswerItemIconProperties } from '../../interfaces/answer-icon-properties';

const AnswerItemIcon: React.FunctionComponent<AnswerItemIconProperties> = ({ width, height, color }) => {
    const [stroke, setStroke] = useState<string>(COLORS.WHITE_100);
    const [fill, setFill] = useState<string>(COLORS.BLACK_40);

    const handleColor = (color: string | undefined) => {
        switch (color) {
            case 'selected':
                setFill(COLORS.ORANGE_5);
                setStroke(COLORS.ORANGE_100);
                break;
            case 'correct':
                setFill(COLORS.GREEN_5);
                setStroke(COLORS.GREEN_100);
                break;
            case 'wrong':
                setFill(COLORS.RED_5);
                setStroke(COLORS.RED_100);
                break;
            default:
                setFill(COLORS.WHITE_100);
                setStroke(COLORS.BLACK_40);
        }
    };

    useEffect(() => handleColor(color), [color]);

    return (
        <svg
            width={width || 320}
            height={height || 56}
            viewBox="0 0 320 56"
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M303 28L320 28" stroke={stroke || COLORS.ORANGE_100} />
            <path d="M0 28L17 28" stroke={stroke || COLORS.ORANGE_100} />
            <path
                d="M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z"
                fill={fill || COLORS.WHITE_100}
                stroke={stroke || COLORS.ORANGE_100}
            />
        </svg>
    );
};

export default AnswerItemIcon;
