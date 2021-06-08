import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  width: ${(props) => (props.width ? props.width + "px" : "48px")};
  height: ${(props) => (props.height ? props.height + "px" : "48px")};
  border-radius: 5px;
  box-shadow: 0 0.25rem 0.375rem -0.0625rem rgb(20 20 20 / 12%),
    0 0.125rem 0.25rem -0.0625rem rgb(20 20 20 / 7%);
  background: ${(props) => (props.actived ? "#ff562e" : "inherit")};
  color: ${(props) => (props.actived ? "#fff" : "inherit")};
`;

export default function IconCard({ width, height, icon, actived }) {
  return (
    <Card width={width} height={height} actived={actived}>
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
    </Card>
  );
}
