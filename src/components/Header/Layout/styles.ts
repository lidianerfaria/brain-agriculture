import styled from "styled-components";

export default {
  Container: styled.div`
    align-items: center;
    background-color: #629763;
    display: flex;
    justify-content: space-between;
    padding: 28px 40px 28px 40px;
    width: 100%;

    @media (max-width: 768px) {
      padding: 16px;
    }
  `,
  Text: styled.h1`
    color: #fefefe;
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 16px;
      padding: 12px 26px;
    }
  `,
  Button: styled.button`
    align-items: center;
    background-color: #fbfbfb;
    border-radius: 24px;
    border: none;
    color: #629763;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    gap: 8px;
    padding: 16px 46px;
    svg {
      color: #629763;
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 12px;
    }
  `,
};
