import styled from "styled-components";

const CardBox = styled.div`
  display: flex;
  align-items: ${(props) => (props.vertical ? props.vertical : "center")};
  justify-content: ${(props) => (props.align ? props.align : "center")};
  flex-direction: ${(props) => (props.horizontally ? null : "column")};
  padding: 1rem;
  min-width: 0;
  border-radius: 1rem;
  border: 0 solid rgba(0, 0, 0, 0.125);
  word-wrap: break-word;
  background-clip: border-box;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  background-image: ${(props) => (props.img ? `url(${props.img})` : null)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: ${(props) =>
    props.shadow ? "0 2px 4px rgba(0, 0, 0, 0.125)" : null};
`;

export default function Card({
  horizontally,
  color,
  shadow,
  children,
  img,
  align,
  vertical,
}) {
  return (
    <CardBox
      color={color}
      horizontally={horizontally}
      shadow={shadow}
      img={img}
      align={align}
      vertical={vertical}
    >
      {children}
    </CardBox>
  );
}
