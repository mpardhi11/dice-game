import { styled } from "styled-components";
export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  background: black;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #454343;
  }
`;
export const OutLineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  font-weight: 800;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
