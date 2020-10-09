import React, { useCallback, useEffect, useState } from 'react';
import { PrizeIcon } from '../../Icons/PrizeIcon';
import { PrizeItemProperties } from '../../../interfaces/prize-item-properties';
import { COLORS } from '../../../constants/colors';
import { ItemContainer, Prize } from "./style";

export const PrizeItem: React.FunctionComponent<PrizeItemProperties> = ({ prize, score }) => {
    const [state, setState] = useState<any>({
        color: COLORS.BLACK_100,
        stroke: COLORS.BLACK_100,
    });
    const handleColor = useCallback(() => {
        if (prize === score) {
            setState({
                color: COLORS.ORANGE_100,
                stroke: COLORS.ORANGE_100,
            });
        } else {
            setState({
                color: COLORS.BLACK_100,
                stroke: COLORS.BLACK_40,
            });
        }
    }, [prize, score]);

    useEffect(() => handleColor(), [handleColor]);

    return (
        <ItemContainer>
            <PrizeIcon width={320} stroke={state.stroke} />
            <Prize color={state.color}>{prize}</Prize>
        </ItemContainer>
    );
};
