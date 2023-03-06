import styled from "styled-components";

export default {
  InputGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
      color: #cd4a4a;
      font-size: 12px;
    }
    label {
      font-size: 14px;
    }
    textarea:focus,
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  `,
  Input: styled.input`
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
  `,
};
