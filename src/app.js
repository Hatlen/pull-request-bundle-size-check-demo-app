import _ from "lodash";

import React from "react";

export default ({ name }) => (
  <>
    <h1>Welcome to this demo app {_.capitalize(name)}</h1>
    <p>
      Check out the pull requests for a demo of the pull request bundle size
      check that this app is created for.
    </p>
  </>
);
