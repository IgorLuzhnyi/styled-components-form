import styled from "styled-components";

export const StyledHome = styled.div`
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 40px;
  }

  .logout-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.$btnClr};
    color: ${({ theme }) => theme.$bkg};
    cursor: pointer;
  }
`;
