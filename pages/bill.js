import styled from "styled-components";
import { useState } from "react";
import SiderBar from "../components/SiderBar";
import Ul from "../components/List";
import Item from "../components/Item";
import IconCard from "../components/IconCard";
import Nav from "../components/Nav";
import CreditCard from "../components/CreditCard";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Step from "../components/Step";
import {
  Grid,
  Button,
  List,
  Icon,
  Segment,
  Label,
  Image,
} from "semantic-ui-react";

const BillLayout = styled.div`
  padding: 1rem 1rem 1rem 266px;
  height: 100vh;
  overflow: scroll;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

export default function Bill() {
  const [top, setTop] = useState(true);

  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const siderControll = () => {
    setOpen(!open);
  };

  const scroll = (e) => {
    if (e.target.scrollTop == 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  };

  return (
    <>
      <SiderBar open={open} close={close}>
        <Ul>
          <Item to="/">
            <IconCard icon="dashboard"></IconCard>
            <span>Dashboard</span>
          </Item>
          <Item actived to="/bill">
            <IconCard icon="credit card" actived></IconCard>
            <span>Billing</span>
          </Item>
          <Item to="/table">
            <IconCard icon="table"></IconCard>
            <span>Table</span>
          </Item>
          <Item>
            <IconCard icon="user"></IconCard>
            <span>Profile</span>
          </Item>
          <Item>
            <IconCard icon="server"></IconCard>
            <span>Server</span>
          </Item>
          <Item>
            <IconCard icon="sitemap"></IconCard>
            <span>SiteMap</span>
          </Item>
        </Ul>
      </SiderBar>
      <BillLayout onScroll={scroll}>
        <Nav top={top} iconClick={siderControll} breadcrumb="Billing"></Nav>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Segment>
                <CreditCard />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <Card horizontally align="space-between">
                  <h2>Invoices</h2>
                  <Button basic color="purple">
                    View All
                  </Button>
                </Card>
                <List>
                  <List.Item>
                    <List.Content floated="right">
                      <span>$180</span> <Icon name="file pdf"></Icon>
                    </List.Content>
                    <List.Content>
                      <h4>February, 10, 2021</h4>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <span>$180</span> <Icon name="file pdf"></Icon>
                    </List.Content>
                    <List.Content>
                      <h4>February, 10, 2021</h4>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <span>$180</span> <Icon name="file pdf"></Icon>
                    </List.Content>
                    <List.Content>
                      <h4>February, 10, 2021</h4>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <span>$180</span> <Icon name="file pdf"></Icon>
                    </List.Content>
                    <List.Content>
                      <h4>February, 10, 2021</h4>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <span>$180</span> <Icon name="file pdf"></Icon>
                    </List.Content>
                    <List.Content>
                      <h4>February, 10, 2021</h4>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content floated="right">
                      <span>$180</span> <Icon name="file pdf"></Icon>
                    </List.Content>
                    <List.Content>
                      <h4>February, 10, 2021</h4>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Segment>
                <h2>Billing Information</h2>

                <Segment placeholder>
                  <div>
                    <h3>Oliver Liam</h3>
                    <p>Company Name: Viking Burrito</p>
                    <p>Email Address: oliver@burrito.com</p>
                    <p>VAT Number: FRB1235476</p>
                  </div>
                </Segment>
                <Segment placeholder>
                  <div>
                    <h3>Lucas Harper</h3>
                    <p>Company Name: Stone Tech Zone</p>
                    <p>Email Address: lucas@stone-tech.com</p>
                    <p>VAT Number: FRB1235476</p>
                  </div>
                </Segment>
                <Segment placeholder>
                  <div>
                    <h3>Ethan Jamesm</h3>
                    <p>Company Name: Fiber Notion</p>
                    <p>Email Address: ethan@fiber.comm</p>
                    <p>VAT Number: FRB1235476</p>
                  </div>
                </Segment>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <h3>Day overview</h3>
                <Step icon="money" iconColor="grey">
                  <h4>pay the bill $2400</h4>
                  <span>2020-12-12 20:00</span>
                </Step>
                <Step icon="user" iconColor="green">
                  <h4>user Design changes</h4>
                  <span>2020-12-12 20:00</span>
                </Step>
                <Step icon="rocket" iconColor="purple">
                  <h4>Rocket is the best.</h4>
                  <span>2020-12-12 20:00</span>
                </Step>
                <Step icon="shop" iconColor="black">
                  <h4> shopping day</h4>
                  <span>2020-12-12 20:00</span>
                </Step>
                <Step icon="tv" iconColor="skyblue">
                  <h4>buy a tv cost $2400</h4>
                  <span>2020-12-12 20:00</span>
                </Step>
                <Step icon="building" iconColor="skyblue">
                  <h4>go to the moll</h4>
                  <span>2020-12-12 20:00</span>
                </Step>
              </Segment>
              <Segment raised>
                <Label as="a" color="red" ribbon>
                  Overview
                </Label>
                <span>Account Details</span>

                <Image src="/water.jpg" />

                <Label as="a" color="blue" ribbon>
                  Community
                </Label>
                <span>User Reviews</span>

                <Image src="/water.jpg" />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer name="Osamu1908" />
      </BillLayout>
    </>
  );
}
