import styled from "styled-components";

export default {
  Container: styled.div`
    background-color: #ececec;
    display: flex;
    flex-direction: column;
    padding: 48px 34px;
    width: 100%;
  `,
  ListTitle: styled.h1`
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 48px;
  `,
  ListItemWrapper: styled.ul`
    display: grid;
    grid-template-columns: 50% 50%;

    @media (max-width: 1633px) {
      grid-template-columns: 100%;
    }
  `,
  ListItem: styled.li`
    background-color: #fbfbfb;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    height: 100px;
    margin-bottom: 24px;
    max-width: 100%;
    width: 100%;
  `,
  Wrapper: styled.div`
    display: flex;
    gap: 40px;
    svg {
      color: #629763;
      font-size: 24px;
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  `,
  InfoWrapper: styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  ProducerName: styled.h1`
    color: #101010;
    font-size: 14px;
  `,
  ProducerCpf: styled.h2`
    color: #888484;
    font-size: 14px;
    font-weight: 400;
  `,
  WrapperLeft: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 24px;
    height: 100%;
    justify-content: flex-start;
    padding: 0 34px;
    width: 40%;
  `,
  WrapperRight: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 80px;
    height: 100%;
    justify-content: flex-end;
    padding: 0 34px;
    width: 60%;
  `,
};
