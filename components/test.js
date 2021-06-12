import { Icon, Breadcrumb } from "semantic-ui-react";
import { Media } from "../media";

export default function Test() {
  return (
    <>
      {/* <Media at="xxl">
        <h1>this is xxl</h1>
      </Media>
      <Media at="xl">
        <h1>this is xl</h1>
      </Media>
      <Media at="lg">
        <h1>this is lg</h1>
      </Media>
      <Media at="md">
        <h1>this is md</h1>
      </Media> */}

      {/* <Segment as={Media} at="xs">
        this is xs
      </Segment>
      <Segment as={Media} at="sm">
        this is sm
      </Segment>
      <Segment as={Media} at="md">
        this is md
      </Segment>
      <Segment as={Media} at="lg">
        this is lg{" "}
      </Segment>
      <Segment as={Media} at="xl">
        this is xl
      </Segment>
      <Segment as={Media} at="xxl">
        this is xxl
      </Segment> */}
      <Breadcrumb>
        <Breadcrumb.Section as={Media} greaterThan="xl" link>
          greater than lg
        </Breadcrumb.Section>
        <Breadcrumb.Section as={Media} lessThan="lg">
          <Icon name="facebook"></Icon>
        </Breadcrumb.Section>
        <Breadcrumb.Section as={Media} between={["lg", "xl"]}>
          <Icon name="bars"></Icon>
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
      </Breadcrumb>
    </>
  );
}
