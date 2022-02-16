import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  input {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.quaternary};
    border-radius: 8px;
    width: 80%;
    height: 44px;
    padding: 8px;
    font-weight: 500;

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  }
  button {
    background-color: ${(props) => props.theme.colors.quinary};
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      opacity: 0.8;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: ${(props) => props.theme.colors.buttonText};
    }
  }
`;
