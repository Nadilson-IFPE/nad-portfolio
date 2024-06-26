import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import FavIcon from '@/components/FavIcon'
import { SpeedInsights } from '@vercel/speed-insights/react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<Record<string, unknown> & { html: string }> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <FavIcon />
        </Head>
        <body>
          <SpeedInsights />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
