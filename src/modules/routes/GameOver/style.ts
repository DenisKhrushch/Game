import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { Heading } from "../GameStart/style";

export const GameOverContainer = styled.div`
      @media (min-width: 320px) {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
    }
    @media (min-width: 1024px) {
      flex-direction: row;
    }
`;

export const ScoreButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const ScorePrize = styled(Heading)`
    margin-top: 8px;
`;

export const TotalScore = styled.span`
    font-size: 18px;
    line-height: 116%;
    margin-top: 50px;
    opacity: 0.5;
    @media (min-width: 1024px) {
      font-size: 32px;
    }
`;

export const TryAgain = styled.div`
    background-color: ${COLORS.ORANGE_100};
    font-size: 14px;
    width: 288px;
    margin-top: 102px;
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 8px;
    color: ${COLORS.WHITE_100};
    padding: 16px 24px;
    @media (min-width: 1024px) {
      margin-top: 45px;
    }
`;
