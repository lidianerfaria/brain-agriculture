import styled from "styled-components";

export default {
  Container: styled.div`
    align-items: flex-start;
    background-color: #fbfbfb;
    box-shadow: 0px 0px 16px rgba(16, 16, 16, 0.08);
    display: flex;
    flex-direction: column;
    gap: 48px;
    height: 100vh;
    padding: 32px;
    position: fixed;
    right: 0;
    top: 0;
    max-width: 476px;
    z-index: 2;
    overflow-x: hidden;
  `,
  Header: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    svg {
      cursor: pointer;
      font-size: 24px;
    }
  `,
  Title: styled.h1`
    color: #101010;
    font-size: 28px;
    font-weight: 700;
  `,
  CloseButton: styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
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

    &:hover {
      background-color: #879676;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 12px;
    }
  `,
};
