import styled from "styled-components";

export const Button = styled.button`
  border: ${(props)=> props.theme === "primary" ? "none" : "1px solid #ffff;"};
  background: ${(props) =>
    props.theme === "primary"
      ? " linear-gradient(180deg, #FE7E5D 0% , #FF6378 100%)"
      : "transparent"};
  font-size: 20px;
  color: #ffff;
  padding: 16px 23px;
  width: fit-content;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
