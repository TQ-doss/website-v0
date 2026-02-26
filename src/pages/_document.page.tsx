// src/pages/_document.page.tsx
import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import Document from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale ?? 'en'} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
