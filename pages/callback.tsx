import type { GetServerSideProps, NextPage } from "next";
import { Container, Link, Card, Text } from "@nextui-org/react";
import { WebClient } from "@slack/web-api";

type CallbackProp = {
  accessToken: string;
};

const Home: NextPage<CallbackProp> = ({ accessToken }) => {
  return (
    <Container lg>
      <Text h1>Run Slack Patron!</Text>

      <Card variant="flat">
        <Card.Body>
          <pre>
            {`$ wget https://raw.githubusercontent.com/tyage/slack-patron/master/docs/docker-compose-quick.yml
$ export SLACK_PATRON_SLACK_TOKEN=${accessToken}
$ docker compose -f ./docker-compose-quick.yml up
$ open http://localhost:9292`}
          </pre>
        </Card.Body>
      </Card>

      <Link target="_blank" href="https://github.com/tyage/slack-patron">
        Visit source code on GitHub.
      </Link>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<CallbackProp> = async ({
  query,
}) => {
  const { code } = query;

  const res = await new WebClient().oauth.access({
    client_id: process.env.SLACK_CLIENT_ID || "",
    client_secret: process.env.SLACK_CLIENT_SECRET || "",
    code: String(code),
  });

  return {
    props: {
      accessToken: res.access_token || "",
    },
  };
};

export default Home;
