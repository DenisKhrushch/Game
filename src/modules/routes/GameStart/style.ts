import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { Link } from "react-router-dom";

export const Logo = styled.img`
    margin-top: 98px;
    @media (min-width: 768px) {
        margin: 0;
    }
    @media (min-width: 1024px) {
      margin-right: 100px;
    }
    @media (min-width: 1200px) {
      margin-left: 165px;
      margin-right: 80px;
    }
`;
export const GameStartContainer = styled.div`
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
export const HeadingButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) {
      align-items: center;
  }
  @media (min-width: 1024px) {
      align-items: flex-start;
   }
`;
export const Heading = styled.h1`
    margin: 42px 20px 0;
    text-align: center;
    font-family: Inter, sans-serif;
    font-size: 32px;
    line-height: 116%;
    color: ${COLORS.BLACK_100};
    @media (min-width: 1024px) {
      margin: 0;
      font-size: 40px;
      text-align: left;
      max-width: 500px;
    }
    @media (min-width: 1024px) {
      font-size: 56px;
    }
`;
export const StartButton = styled(Link)`
    width: 288px;
    font-size: 14px;
    padding: 16px 24px;
    background-color: ${COLORS.ORANGE_100};
    margin-top: 102px;
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 8px;
    color: ${COLORS.WHITE_100};
    @media (min-width: 1024px) {
      margin-top: 34px;
    }
    @media (min-width: 1200px) {
      margin-top: 64px;
      width: 296px;
    }
`;