import styled from 'styled-components';
import { Button } from '@nextui-org/react';
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
const StyledPage = styled.div`
  .page {
    background-color: aqua;
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage className="page">

      <Button>Click me</Button>
      <Grid.Container justify="flex-start" gap={2}>
        <Grid>
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <Avatar
                bordered
                size="lg"
                as="button"
                color="secondary"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </Dropdown.Trigger>
            <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
        <Grid>
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <User
                bordered
                as="button"
                size="lg"
                color="primary"
                name="Tony Reichert"
                description="@tonyreichert"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </Dropdown.Trigger>
            <Dropdown.Menu color="primary" aria-label="User Actions">
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
    </StyledPage>
  );
}

export default Index;
