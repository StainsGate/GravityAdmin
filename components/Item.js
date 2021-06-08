import styled from "styled-components";

const Item = styled.li`
  width: 100%;
  a {
    display: flex;
    align-items: center;
    padding: 0.675rem 1rem;
    margin: 0 1.5rem;
    font-weight: 500;
    border-radius: ${(props) => (props.actived ? "5px" : null)};
    box-shadow: ${(props) =>
      props.actived ? `0 20px 10px 0 rgb(0 0 0 /9%)` : null};
    &:hover {
      cursor: pointer;
    }
    span {
      color: ${(props) => (props.actived ? "#252f40" : "#67748e")};
    }
    background: ${(props) => (props.actived ? "#ffffff" : "inherit")};
  }
`;

const Item = ({ width, height, icon, text, actived }) => {
  return (
    <Item actived={actived} id={text}>
      <a>
        {" "}
        <span>{text}</span>
      </a>
    </Item>
  );
};
