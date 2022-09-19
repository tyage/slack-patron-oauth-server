import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { env } from 'process'

type HomeProp = {
  clientId: string
}

const Home: NextPage<HomeProp, {}> = ({ clientId }) => {
  const permissions = 'channels:history,team:read'
  const link = `https://slack.com/oauth/v2/authorize?client_id=${encodeURIComponent(clientId)}&scope=${encodeURIComponent(permissions)}`

  return (
    <div className={styles.container}>
      <Link href={link}>
       <Image alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" />
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProp> = () => {
  return {
    props: {
      clientId: env.SLACK_CLIENT_ID || ""
    }
  }
}

export default Home
