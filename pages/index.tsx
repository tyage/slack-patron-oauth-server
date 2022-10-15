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
      <Link
        href={link}
        style={{
          alignItems: "center",
          color: "#fff",
          backgroundColor: "#4A154B",
          border: 0,
          borderRadius: "4px",
          display: "inline-flex",
          fontFamily: "Lato, sans-serif",
          fontSize: "18px",
          fontWeight: 600,
          height: "56px",
          justifyContent: "center",
          textDecoration: "none",
          padding: "0 50px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "24px",
            width: "24px",
            marginRight: "12px",
          }}
          viewBox="0 0 122.8 122.8"
        >
          <path
            d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
            fill="#e01e5a"
          ></path>
          <path
            d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
            fill="#36c5f0"
          ></path>
          <path
            d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
            fill="#2eb67d"
          ></path>
          <path
            d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
            fill="#ecb22e"
          ></path>
        </svg>
        Add to Slack
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
