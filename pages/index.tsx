import type { GetStaticProps, NextPage } from "next";
import { Container, Link, Image, Text } from "@nextui-org/react";
import { env } from "process";

type HomeProp = {
  clientId: string;
};

const Home: NextPage<HomeProp, {}> = ({ clientId }) => {
  const permissions = "client";
  const link = `https://slack.com/oauth/authorize?client_id=${encodeURIComponent(
    clientId
  )}&scope=${encodeURIComponent(permissions)}`;

  return (
    <Container
      justify="center"
      alignContent="center"
      alignItems="center"
      display="flex"
      direction="column"
      responsive
      style={{ height: "100vh" }}
    >
      <Text h2>Install Slack Patron?</Text>
      <Link href={link}>
        <Image
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
        />
      </Link>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<HomeProp> = () => {
  return {
    props: {
      clientId: env.SLACK_CLIENT_ID || "",
    },
  };
};

export default Home;
