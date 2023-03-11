import styled from "styled-components";

export default {
  Container: styled.div`
    form {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `,
  InputGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-size: 14px;
    }
    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
    span {
      color: #cd4a4a;
    }
    input {
      border: 1px solid #d0d0d0;
      border-radius: 16px;
      color: #101010;
      font: 14px;
      font-weight: 500;
      height: 48px;
      padding-left: 16px;
      width: 412px;

      @media (max-width: 768px) {
        width: 100%;
      }
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
