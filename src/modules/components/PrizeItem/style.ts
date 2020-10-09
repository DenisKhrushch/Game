import styled from "styled-components";

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 8px;
                @media (min-width: 1200px) {
          margin-bottom: 15px;
    }
`;
export const Prize = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.color};
`;