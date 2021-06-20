import React, { useState } from "react";
import styled from "styled-components";
import SiderBar from "../components/SiderBar";
import Nav from "../components/Nav";
import IconCard from "../components/IconCard";
import Item from "../components/Item";
import List from "../components/List";
import Card from "../components/Card";
import Chart from "../components/Chart";
import Footer from "../components/Footer";
import Step from "../components/Step";
import {
  Grid,
  Statistic,
  Icon,
  Button,
  Table,
  Label,
  Progress,
} from "semantic-ui-react";

const IndexLayout = styled.div`
  padding: 1rem 1rem 1rem 266px;
  height: 100vh;
  overflow: scroll;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

const LineOptions = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
    },
    {
      data: [690, 900, 912, 936, 963, 1122, 1220, 1312],
      type: "line",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

const Baroptions = {
  title: {
    text: "BarChart示例",
  },
  tooltip: {},
  legend: {
    data: ["销量", "售价"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
    {
      name: "售价",
      type: "bar",
      data: [50, 200, 360, 100, 100, 2],
    },
  ],
};

export default function Index() {
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
        <List>
          <Item actived to="/">
            <IconCard icon="dashboard" actived></IconCard>
            <span>Dashboard</span>
          </Item>
          <Item to="/bill">
            <IconCard icon="credit card"></IconCard>
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
        </List>
      </SiderBar>
      <IndexLayout onScroll={scroll}>
        <Nav top={top} iconClick={siderControll} breadcrumb="Dashboard"></Nav>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Card horizontally shadow align="space-between">
                <Statistic color="grey" size="small">
                  <Statistic.Label>Today's Money</Statistic.Label>
                  <Statistic.Value>6666</Statistic.Value>
                </Statistic>
                <Icon name="money" size="huge" color="grey" />
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card horizontally shadow align="space-between">
                <Statistic color="green" size="small">
                  <Statistic.Label>Today's User</Statistic.Label>
                  <Statistic.Value>3333</Statistic.Value>
                </Statistic>
                <Icon name="users" size="huge" color="green" />
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card horizontally shadow align="space-between">
                <Statistic color="yellow" size="small">
                  <Statistic.Label>Today's visitor</Statistic.Label>
                  <Statistic.Value>9999</Statistic.Value>
                </Statistic>
                <Icon name="tv" size="huge" color="yellow" />
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card horizontally shadow align="space-between">
                <Statistic color="blue" size="small">
                  <Statistic.Label>Today's benifits</Statistic.Label>
                  <Statistic.Value>3333</Statistic.Value>
                </Statistic>
                <Icon name="gem" size="huge" color="blue" />
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Card horizontally shadow align="space-between">
                <Card vertical="flex-start">
                  <h1>Dynamic gravity</h1>
                  <p>
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                  <Button basic color="blue">
                    Read more
                  </Button>
                </Card>
                <Icon name="rocket" size="massive" color="olive"></Icon>
              </Card>
            </Grid.Column>
            <Grid.Column width={6}>
              <Card shadow>
                <Card shadow img={"/water.jpg"}>
                  <h1>Nikola Tesla</h1>
                  <p>
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                  <Button basic color="blue">
                    Read more
                  </Button>
                </Card>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Card shadow>
                <h2>Active Users</h2>
                <Chart width={"100%"} height={"400px"} option={LineOptions} />
              </Card>
            </Grid.Column>
            <Grid.Column width={8}>
              <Card shadow>
                <Chart
                  width={"100%"}
                  height={"400px"}
                  option={Baroptions}
                ></Chart>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Card vertical="flex-start" shadow>
                <h2>Projects</h2>
                <span>30 done this month</span>
                <Table basic="very" collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>COMPANIES</Table.HeaderCell>
                      <Table.HeaderCell>MEMBERS</Table.HeaderCell>
                      <Table.HeaderCell>BUDGET</Table.HeaderCell>
                      <Table.HeaderCell>COMPLETION</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Soft UI XD Version</Table.Cell>
                      <Table.Cell>
                        <Label>Osamu1908,Nikola Tesla,Daphenchi</Label>
                      </Table.Cell>
                      <Table.Cell>$14000</Table.Cell>
                      <Table.Cell>
                        <Progress percent={85} color="blue" size="tiny" />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Add Progress Track</Table.Cell>
                      <Table.Cell>
                        <Label>Osamu1908,Nikola Tesla,Daphenchi</Label>
                      </Table.Cell>
                      <Table.Cell>$4000</Table.Cell>
                      <Table.Cell>
                        <Progress percent={15} color="blue" size="tiny" />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Fix Platform Errors</Table.Cell>
                      <Table.Cell>
                        <Label>Osamu1908,Nikola Tesla,Daphenchi</Label>
                      </Table.Cell>
                      <Table.Cell>Not set</Table.Cell>
                      <Table.Cell>
                        <Progress percent={100} color="green" size="tiny" />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Launch our Mobile App</Table.Cell>
                      <Table.Cell>
                        <Label>Osamu1908,Nikola Tesla,King</Label>
                      </Table.Cell>
                      <Table.Cell>$2000</Table.Cell>
                      <Table.Cell>
                        <Progress percent={100} color="green" size="tiny" />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Add the New Pricing Page</Table.Cell>
                      <Table.Cell>
                        <Label>Osamu1908,Nikola Tesla,Daphenchi</Label>
                      </Table.Cell>
                      <Table.Cell>$400</Table.Cell>
                      <Table.Cell>
                        <Progress percent={25} color="blue" size="tiny" />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card shadow vertical="flex-start">
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
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer name="Osamu1908" />
      </IndexLayout>
    </>
  );
}
