import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    font-family: 'Helvetica', sans-serif;
    padding: 0px;
    margin: 0px;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My new cool app</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
