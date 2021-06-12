import styled from "styled-components";

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  p {
    margin: 0;
    font-size: 500;
    color: #6b7478;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin-right: 1rem;
      a {
        color: #6b7478;
        &:hover {
          color: #ff562e;
          cursor: pointer;
        }
      }
    }
  }
`;

export default function Footer({ name }) {
  return (
    <FooterBox>
      <p>
        © {new Date().getFullYear()} by {name}
      </p>
      <ul>
        <li>
          <a>About Me</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>License</a>
        </li>
      </ul>
    </FooterBox>
  );
}
