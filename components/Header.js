import styled from "styled-components";
import { Breadcrumb, Search, Icon } from "semantic-ui-react";
import { Media } from "../media";

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  padding: 0 1rem;
  top: ${(props) => (props.Top ? null : "1rem")};
  position: ${(props) => (props.Top ? null : "sticky")};
  z-index: ${(props) => (props.Top ? 0 : 2)};
  box-shadow: ${(props) =>
    props.Top
      ? null
      : "inset 0 0px 1px 1px rgb(254 254 254 / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)"};
  background-color: ${(props) => (props.Top ? null : "rgb(255,255,255,0.8)")};
  transition: box-shadow 0.25s ease-in, background-color 0.25s ease-in;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    li {
      color: ${(props) => (props.Top ? "#6b7478" : "#000")};
      margin-right: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

// sidebar

export default function Header({ top, iconClick }) {
  return (
    <HeaderBox Top={top}>
      <Breadcrumb>
        <Breadcrumb.Section as={Media} greaterThan="xl">
          <Icon name="home" />
        </Breadcrumb.Section>
        <Breadcrumb.Section as={Media} lessThan="xl">
          <Icon name="bars" onClick={iconClick} />{" "}
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link>Dashboard</Breadcrumb.Section>
      </Breadcrumb>

      <ul>
        <li>
          {" "}
          <Search
            input={{ icon: "search", iconPosition: "left" }}
            placeholder="Type here..."
          />
        </li>
        <li>
          {" "}
          <Icon name="user"></Icon>
          <span>Sign in</span>
        </li>
        <li>
          {" "}
          <Icon name="setting"></Icon>
        </li>
        <li>
          <Icon name="bell"></Icon>
        </li>
      </ul>
    </HeaderBox>
  );
}
