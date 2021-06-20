import { Media } from "../media";
import { Segment, Grid } from "semantic-ui-react";
import Test from "../components/test";
import Step from "../components/Step";
import CreditCard from "../components/CreditCard";
export default function About() {
  return (
    <>
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
      <Segment>
        <Step icon="users" iconColor="#ff562e">
          <h4>Dynamic gravity</h4>
          <span>2020-12-12 20:00</span>
        </Step>
        <Step icon="money" iconColor="grey">
          <h4>Dynamic gravity</h4>
          <span>2020-12-12 20:00</span>
        </Step>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <CreditCard></CreditCard>
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
