import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const GameContainer = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: normal;
    }
`;
export const QuestionAnswersContainer = styled.div`
    @media (min-width: 320px) {
        display: flex;
    }
    @media (min-width: 1024px) {
      padding: 133px 40px 122px 40px;
      background-color: ${COLORS.BLACK_5};
      flex-wrap: wrap;
    }
    @media (min-width: 1200px) {
      padding: 133px 159px 122px 80px;
    }
`;
export const BurgerIcon = styled.img`
    position: absolute;
    top: 20px;
    right: 21px;
    @media (min-width: 768px) {
        height: 30px;
        width: 30px;
    }
`;
export const Question = styled.h3`
    margin: 136px 16px 97px;
    font-size: 18px;
    line-height: 116%;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 23px;
    }
    @media (min-width: 1024px) {
      margin: 0 0 395px;
      text-align: left;
      max-width: 624px;
    }
    
`;
export const AnswersContainer = styled.ul`
    list-style: none;
    @media (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    width: 640px;
    }
`;
export const ScoreTable = styled.div`
    background: ${COLORS.BLACK_5};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px 0 32px;
        @media (min-width: 1024px) {
        background-color: ${COLORS.WHITE_100};
        padding-top: 166px;
    }
            @media (min-width: 1200px) {
        background-color: ${COLORS.WHITE_100};
        padding-top: 120px;
    }
`;
