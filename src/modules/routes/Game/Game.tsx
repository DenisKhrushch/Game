import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ItemAnswer from '../../components/Answer/Answer';
import config from '../../../config/game-config.json';
import { GameProperties } from '../../../interfaces/game-properties';
import setScore from '../../../store/actions/set-score';
import { AnswersContainer, BurgerIcon, GameContainer, Question, QuestionAnswersContainer, ScoreTable } from "./style";
import Answer from "../../components/Answer/Answer";
import { PrizeItem } from "../../components/PrizeItem/PrizeItem";
import gameOver from "../../../store/actions/game-over";

const Game: React.FunctionComponent<GameProperties> = ({ started, gameOver, onSetScore, score, onGameOver, }) => {

    useEffect(() => {
        score === "$1,000,000" && onGameOver();
    }, [score, onGameOver]);

    const { data, prize, scoreTable } = config;

    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleBurgerMenu = (): void => {
        setIsOpen(!isOpen);
    };
    const changeQuestion = (): void => {
        onSetScore(prize[questionNumber]);
        setQuestionNumber(questionNumber + 1);
    };
    const handleIcon = (i: number) => {
        switch (i) {
            case 0:
                return 'A';
            case 1:
                return 'B';
            case 2:
                return 'C';
            default:
                return 'D';
        }
    };

    return started && !gameOver ? (
        window.innerWidth < 1024
          ? <div>
              {isOpen ? (
              <ScoreTable>
                  <BurgerIcon src="../images/close-menu.svg" onClick={handleBurgerMenu} />
                  {scoreTable.map((item, i) =>
                    <PrizeItem key={item + i} prize={item} score={score} />)}
              </ScoreTable>
              ) : (
              <GameContainer>
                  <BurgerIcon src="../images/burger-icon.svg" onClick={handleBurgerMenu} />
                  <Question>{data[questionNumber].question}</Question>
                  <AnswersContainer>
                      {data[questionNumber].answers.map((answer, i) => (
                        <ItemAnswer
                          correct={data[questionNumber].answer}
                          key={`item${answer}`}
                          answer={answer}
                          changeQuestion={changeQuestion}
                          icon={handleIcon(i)}
                        />
                      ))}
                  </AnswersContainer>
              </GameContainer>
              )}
          </div>
          : <GameContainer>
              <QuestionAnswersContainer>
                  <Question>{data[questionNumber].question}</Question>
                  <AnswersContainer>
                      {data[questionNumber].answers.map((answer, i) => (
                        <Answer
                          correct={data[questionNumber].answer}
                          key={`item${answer}`}
                          answer={answer}
                          changeQuestion={changeQuestion}
                          icon={handleIcon(i)}
                        />
                      ))}
                  </AnswersContainer>
              </QuestionAnswersContainer>
              <ScoreTable>
                  {scoreTable.map((item, i) => {
                      return <PrizeItem key={item + i} prize={item} score={score} />;
                  })}
              </ScoreTable>
          </GameContainer>
    ) : (
        <Redirect to="/game-over" />
    );
};

const mapStateToProperties = (state: any) => {
    return {
        started: state.started,
        gameOver: state.gameOver,
        score: state.score,
    };
};

const mapDispatchToProps = {
    onSetScore: setScore,
    onGameOver: gameOver,
};

export default connect(mapStateToProperties, mapDispatchToProps)(Game);
