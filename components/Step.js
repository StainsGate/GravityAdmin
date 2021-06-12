import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const StepBox = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    border-right: 2px solid #548ffc;
  }
  padding-left: 1rem;
`;
const StepContent = styled.div`
  margin-left: 1.2rem;
  padding-top: 0.6rem;
  min-height: 60px;
`;
const StepIcon = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  transform: translateX(-50%);
  color: ${(props) => (props.iconColor ? props.iconColor : "#000")};
`;

export default function Step({ icon, iconColor, children }) {
  return (
    <StepBox>
      <StepIcon iconColor={iconColor}>
        <Icon name={icon}></Icon>
      </StepIcon>
      <StepContent>{children}</StepContent>
    </StepBox>
  );
}
