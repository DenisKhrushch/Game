import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import tryAgain from '../../../store/actions/try-again';
import { GameOverProperties } from '../../../interfaces/game-over-properties';
import { GameOverContainer, ScorePrize, ScoreButtonContainer, TotalScore, TryAgain } from "./style";
import { Logo } from "../GameStart/style";

const GameOver: React.FunctionComponent<GameOverProperties> = ({ gameOver, onTryAgain, score }) => {
  return gameOver ? (
        <GameOverContainer>
          <Logo
            src={
              window.innerWidth < 1200
                ? "../images/start-image.svg"
                : "../images/big-start-image.svg"
            }
          />
            <ScoreButtonContainer>
              <TotalScore>Total score:</TotalScore>
              <ScorePrize>{score}</ScorePrize>
              <TryAgain onClick={onTryAgain}>Try Again</TryAgain>
            </ScoreButtonContainer>
        </GameOverContainer>
    ) : (
        <Redirect to="/start" />
    );
};

const mapStateToProperties = (state: any) => {
    return {
        gameOver: state.gameOver,
        score: state.score,
    };
};

const mapDispatchToProperties = { onTryAgain: tryAgain };

export default connect(mapStateToProperties, mapDispatchToProperties)(GameOver);
