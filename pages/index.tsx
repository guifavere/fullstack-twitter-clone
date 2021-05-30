import Head from 'next/head';
import { Col, Divider, Row } from 'antd';

import { CreateTweetForm } from '../components/CreateTweetForm';
import { Feed } from '../components/Feed';
import { Profile } from '../components/Profile';

export default function Home(): JSX.Element {
  return (
    <Row>
      <Head>
        <title>Fullstack Twitter clone</title>
      </Head>
      <Col md={{ span: 6, offset: 2 }} xs={{ span: 12, offset: 2 }}>
        <Profile />
        <Divider />
      </Col>
      <Col md={{ span: 10 }} xs={{ span: 20, offset: 2 }}>
        <CreateTweetForm />
        <Feed />
      </Col>
    </Row>
  );
}
