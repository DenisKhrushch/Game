import React from 'react';
import { connect } from 'react-redux';
import start from '../../../store/actions/start-game';
import { GameStartProperties } from '../../../interfaces/game-start-properties';
import { GameStartContainer, Heading, HeadingButtonContainer, Logo, StartButton } from "./style";

const GameStart: React.FunctionComponent<GameStartProperties> = ({ onStart }) => {
    const handleClick = () => {
        onStart();
    };

    return (
        <GameStartContainer>
            <Logo
              src={
                window.innerWidth < 1200
                  ? "../images/start-image.svg"
                  : "../images/big-start-image.svg"
              }
            />
            <HeadingButtonContainer>
              <Heading>Who wants to be a millionaire?</Heading>
              <StartButton to="/game" onClick={handleClick} replace>
                Start
              </StartButton>
            </HeadingButtonContainer>
        </GameStartContainer>
    );
};

const mapStateToProperties = (state: any) => {
    return {
        started: state.started,
    };
};

const mapDispatchToProperties = { onStart: start };

// @ts-ignore
export default connect(mapStateToProperties, mapDispatchToProperties)(GameStart);
