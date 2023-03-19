import styled from "styled-components";

type IButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default {
  Button: styled.button<IButtonProps>`
    background-color: transparent;
    border: none;
    color: #4c4c4c;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;

    &:hover {
      color: #4d3c2d;
      transition: 0.25s;
    }
  `,
};
