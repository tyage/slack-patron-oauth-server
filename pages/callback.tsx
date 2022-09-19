import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WebClient } from '@slack/web-api'

type CallbackProp = {
  accessToken: string
}

const Home: NextPage<CallbackProp> = ({ accessToken }) => {
  return (
    <div>
      {accessToken}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<CallbackProp> = async ({ query }) => {
  const { code } = query

  const res = await (new WebClient()).oauth.v2.access({
    client_id: process.env.SLACK_CLIENT_ID || "",
    client_secret: process.env.SLACK_CLIENT_SECRET || "",
    code: String(code)
  })

  return {
    props: {
      accessToken: res.access_token || ""
    }
  }
}

export default Home
