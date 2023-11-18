import React, { Fragment, useEffect } from "react";
import { AppProps } from "next/app";
import { Flipper, Flipped } from "react-flip-toolkit";

const CustomApp = ({ Component, pageProps, router }) => {
  return (
    <Fragment>
      <Flipper flipKey={router.asPath}>
        <Flipped flipId="square">
          <div>
            <Component {...pageProps} />
          </div>
        </Flipped>
      </Flipper>
    </Fragment>
  );
};

export default CustomApp;
