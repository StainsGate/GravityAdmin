import styled from "styled-components";
import { useRouter } from "next/router";

const ItemBox = styled.li`
  width: 100%;
  margin-top: 1.25rem;
  list-style: none;
  a {
    display: flex;
    align-items: center;
    padding: 0.675rem 1rem;
    margin: 0 1.5rem;
    font-weight: 500;
    border-radius: ${(props) => (props.actived ? "5px" : null)};
    box-shadow: ${(props) =>
      props.actived ? `0 20px 27px 0 rgb(0 0 0 /5%)` : null};
    white-space: nowrap;
    background: ${(props) => (props.actived ? "#ffffff" : "inherit")};
    &:hover {
      cursor: pointer;
    }
    color: ${(props) => (props.actived ? "#252f40" : "#67748e")};
  }
`;

const Item = ({ actived, to, children }) => {
  const router = useRouter();

  const clickHandle = () => {
    if (to === undefined) {
      console.log("undefined");
    } else {
      router.push(to);
    }
  };

  return (
    <ItemBox actived={actived} onClick={clickHandle}>
      <a>{children}</a>
    </ItemBox>
  );
};

export default Item;
