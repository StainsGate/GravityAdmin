import styled from "styled-components";
import React from "react";

const ListBox = styled.ul`
  padding: 0;
`;

const List = ({ children }) => {
  return <ListBox>{children}</ListBox>;
};

export default List;
