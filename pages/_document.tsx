import React from "react";
import NextDocument, {
  Html,
  Main,
  Head,
  NextScript,
  DocumentContext,
} from "next/document";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
