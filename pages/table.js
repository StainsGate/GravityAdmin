import React, { useState } from "react";
import styled from "styled-components";
import SiderBar from "../components/SiderBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import List from "../components/List";
import Item from "../components/Item";
import IconCard from "../components/IconCard";
import { Table, Grid, Header, Rating, Image, Icon } from "semantic-ui-react";

const TableLayout = styled.div`
  padding: 1rem 1rem 1rem 266px;
  height: 100vh;
  overflow: scroll;

  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

export default function TablePage() {
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
          <Item to="/">
            <IconCard icon="dashboard"></IconCard>
            <span>Dashboard</span>
          </Item>
          <Item to="/bill">
            <IconCard icon="credit card"></IconCard>
            <span>Billing</span>
          </Item>
          <Item actived to="/table">
            <IconCard icon="table" actived></IconCard>
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
      <TableLayout onScroll={scroll}>
        <Nav top={top} iconClick={siderControll} breadcrumb="Table"></Nav>
        <Grid>
          <Grid.Row>
            <Card shadow>
              <Table celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell singleLine>
                      Evidence Rating
                    </Table.HeaderCell>
                    <Table.HeaderCell>Effect</Table.HeaderCell>
                    <Table.HeaderCell>Efficacy</Table.HeaderCell>
                    <Table.HeaderCell>Consensus</Table.HeaderCell>
                    <Table.HeaderCell>Comments</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h2" textAlign="center">
                        A
                      </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Power Output</Table.Cell>
                    <Table.Cell>
                      <Rating icon="star" defaultRating={3} maxRating={5} />
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      80% <br />
                      <a href="#">18 studies</a>
                    </Table.Cell>
                    <Table.Cell>
                      Creatine supplementation is the reference compound for
                      increasing muscular creatine levels; there is variability
                      in this increase, however, with some nonresponders.
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h2" textAlign="center">
                        A
                      </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Weight</Table.Cell>
                    <Table.Cell>
                      <Rating icon="star" defaultRating={3} maxRating={5} />
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      100% <br />
                      <a href="#">36 studies</a>
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h2" textAlign="center">
                        S
                      </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Height</Table.Cell>
                    <Table.Cell>
                      <Rating icon="star" defaultRating={4} maxRating={5} />
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      100% <br />
                      <a href="#">30 studies</a>
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h2" textAlign="center">
                        SS
                      </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Martin</Table.Cell>
                    <Table.Cell>
                      <Rating icon="star" defaultRating={5} maxRating={5} />
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      100% <br />
                      <a href="#">65 studies</a>
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Row>
          <Grid.Row>
            <Card shadow>
              <Table basic="very" celled collapsing color="purple">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Employee</Table.HeaderCell>
                    <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                    <Table.HeaderCell>With Icon</Table.HeaderCell>
                    <Table.HeaderCell>some text</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src="/team-1.jpg" rounded size="mini" />
                        <Header.Content>
                          Lena
                          <Header.Subheader>Human Resources</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>22</Table.Cell>
                    <Table.Cell>
                      <Icon name="folder" />
                      node_modules
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src="/team-2.jpg" rounded size="mini" />
                        <Header.Content>
                          Matthew
                          <Header.Subheader>Fabric Design</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>15</Table.Cell>
                    <Table.Cell>
                      <Icon name="folder" /> tests
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src="/team-3.jpg" rounded size="mini" />
                        <Header.Content>
                          Lindsay
                          <Header.Subheader>Entertainment</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>12</Table.Cell>
                    <Table.Cell>
                      <Icon name="file outline" /> package.json
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Image src="/team-4.jpg" rounded size="mini" />
                        <Header.Content>
                          Mark
                          <Header.Subheader>Executive</Header.Subheader>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>11</Table.Cell>
                    <Table.Cell>
                      <Icon name="file outline" /> yarn.lock
                    </Table.Cell>
                    <Table.Cell>
                      Creatine is the reference compound for power improvement,
                      with numbers from one meta-analysis to assess potency
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Row>
        </Grid>
        <Footer name="Osamu1908" />
      </TableLayout>
    </>
  );
}
