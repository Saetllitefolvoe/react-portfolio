import React from "react";

import PortfolioContainer from "../portfolio/portfolio-container";

export default function Home(props) {
  return (
    <div>
      <PortfolioContainer {...props} />
    </div>
  );
}
