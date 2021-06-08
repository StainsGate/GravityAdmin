import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const Asider = styled.div`
  display: block;
  position: fixed;
  top: 1rem;
  left: 0;
  width: 250px;
  hr {
    width: 80%;
    border-top: 1px solid #000;
  }

  @media (max-width: 1200px) {
    height: 95vh;
    box-shadow: 0 20px 27px rgb(0 0 0 / 20%);
    background-color: #fff;
    border-radius: 1rem;
    margin: 0 0 0 1rem;
    /* display: ${(props) => (props.open ? null : "none")}; */
    transform: ${(props) => (props.open ? null : "translateX(-300px)")};
    z-index: 1;
    transition: all 0.2s ease-in-out;
  }
`;
const AsiderHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    max-width: 100%;
    max-height: 2rem;
  }
  h2 {
    color: #252f40;
    font-size: 0.875rem;
    font-weight: 600;
    margin-left: 0.25rem;
  }
  i {
    display: none;
  }

  @media (max-width: 1200px) {
    i {
      display: block;
      position: absolute;
      top: 1rem;
      right: 1rem;
      &:hover {
        cursor: pointer;
        color: #ff562e;
      }
    }
  }
`;

export default function SiderBar({ open, close }) {
  return (
    <Asider open={open}>
      <AsiderHead>
        <img src="/favicon.svg" alt="favicon" />
        <h2>Gravity Admin</h2>
        <Icon name="times" onClick={close} />
      </AsiderHead>
      <hr />
    </Asider>
  );
}
