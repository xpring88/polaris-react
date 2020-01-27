import React from 'react';
import {
  Page,
  Card,
  ThemeProvider,
  Layout,
  DisplayText,
  Button,
  Stack,
  TextContainer,
  TextStyle,
  Heading,
} from '../src';

export function Playground() {
  return (
    <ThemeProvider
      theme={{
        UNSTABLE_colors: {surface: '#092546', secondary: '#092546'},
        colorScheme: 'dark',
      }}
    >
      <Page>
        <div
          style={{
            backgroundColor: '#001731',
            '--p-card-shadow': 'rgba(0,0,0,0)',
            margin: '0 -28px',
            padding: '28px',
            borderRadius: 'var(--p-border-radius-wide)',
          }}
        >
          <Layout>
            <Layout.Section>
              <Stack spacing="extraLoose" alignment="center">
                <Button>Today</Button>
                <span>Week</span>
                <span>Month</span>
                <Stack.Item fill>
                  <span>Quarter</span>
                </Stack.Item>

                <Button>27 live vistors</Button>
              </Stack>
            </Layout.Section>
            <Layout.Section>
              <Card sectioned>
                <TextContainer spacing="tight">
                  <DisplayText size="large">$456.75</DisplayText>
                  <p>
                    <TextStyle variation="subdued">Total sales</TextStyle>
                  </p>
                </TextContainer>
              </Card>
            </Layout.Section>
            <Layout.Section>
              <DisplayText size="small">This month</DisplayText>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card sectioned>
                <TextContainer spacing="tight">
                  <Heading>All channels</Heading>
                  <p>
                    <TextStyle variation="subdued">Net sales</TextStyle>
                  </p>
                </TextContainer>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
              <Card sectioned>
                <TextContainer spacing="tight">
                  <Heading>All locations</Heading>
                  <p>
                    <TextStyle variation="subdued">Net sales</TextStyle>
                  </p>
                </TextContainer>
              </Card>
            </Layout.Section>
          </Layout>
        </div>
      </Page>
    </ThemeProvider>
  );
}
