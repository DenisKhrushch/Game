import React, { useCallback, useState } from "react";
import { connect } from 'react-redux';
import AnswerItemIcon from '../../Icons/AnswerIcon';
import gameOver from '../../../store/actions/game-over';
import { ItemProperties } from '../../../interfaces/item-properties';
import { AnswerContainer, StyledIcon, StyledSpan } from "./style";

const Answer: React.FunctionComponent<ItemProperties> = ({ icon, answer, correct, onGameOver, changeQuestion }) => {
    const [color, setColor] = useState<string>('inactive');
    const handleMouseEnter = () => {
        setColor('selected');
    };
    const handleMouseLeave = () => {
        setColor('inactive');
    };
    const handleCorrectVariant = useCallback(() => {
        if (correct === answer) {
            setColor('correct');
            setTimeout(changeQuestion, 500);
            setTimeout(setColor, 500, 'inactive');
        } else {
            setColor('wrong');
            onGameOver && onGameOver();
        }
    }, [correct, answer, changeQuestion, onGameOver])

    return (
        <AnswerContainer
          onClick={handleCorrectVariant}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
            <AnswerItemIcon color={color} />
            <StyledIcon>{icon}</StyledIcon>
            <StyledSpan>{answer}</StyledSpan>
        </AnswerContainer>
    );
};

const mapDispatchToProperties = { onGameOver: gameOver };

export default connect(null, mapDispatchToProperties)(Answer);
