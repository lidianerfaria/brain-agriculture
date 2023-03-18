import styled from "styled-components";

type IButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default {
  Button: styled.button<IButtonProps>`
    color: #4c4c4c;
    font-size: 24px;
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      color: #4d3c2d;
      transition: 0.25s;
    }
  `,
};
