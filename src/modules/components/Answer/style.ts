import styled from "styled-components";
import { COLORS } from "../../../constants/colors";

export const AnswerContainer = styled.div`
    position: relative;
`;
export const StyledSpan = styled.span`
    position: absolute;
    z-index: 3;
    top: 20px;
    left: 65px;
`;
export const StyledIcon = styled.span`
    font-size: 14px;
    color: ${COLORS.ORANGE_100};
    position: absolute;
    left: 41px;
    top: 20px;
`;
