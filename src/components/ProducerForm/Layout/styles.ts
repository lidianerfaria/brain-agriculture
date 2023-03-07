import styled from "styled-components";

export default {
  Container: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `,
  Button: styled.button`
    background-color: #629763;
    border-radius: 24px;
    border: none;
    color: #fbfbfb;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 16px 46px;
    width: 250px;

    &:hover {
      background-color: #4d3c2d;
      transition: 0.5s;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 12px;
    }
  `,
};
