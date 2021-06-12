import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
  width: ${(props) => (props.width ? props.width + "px" : "42px")};
  height: ${(props) => (props.height ? props.height + "px" : "42px")};
  border-radius: 5px;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem rgb(20 20 20 / 12%),
    0 0.125rem 0.25rem -0.0625rem rgb(20 20 20 / 7%);
  background: ${(props) => (props.actived ? "#ae0d9b" : "inherit")};
  color: ${(props) => (props.actived ? "#fff" : "#6b7478")};
  i {
    transform: translateX(2px);
  }
`;

export default function IconCard({ width, height, icon, actived }) {
  return (
    <Card width={width} height={height} actived={actived}>
      <Icon name={icon}></Icon>
    </Card>
  );
}
