import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentDidMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://saetllitefolvoe.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        });
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
    const { banner_image_url, category, description, name, url } =
      this.state.portfolioItem;

    return (
      <div className="portfolio-detail-wrapper">
        <div className="detail-filter-links">
          {category && (
            <Link
              to={{
                pathname: "/",
                state: { filter: category }
              }}
              className="btn-filter"
            >
              {category}
            </Link>
          )}

          <Link
            to={{
              pathname: "/",
              state: { filter: "CLEAR_FILTERS" }
            }}
            className="btn-filter"
          >
            All
          </Link>
        </div>

        <div className="detail-title">
          <div className="name">{name}</div>
        </div>

        <div className="content-row">
          <div className="text-column">
            <div className="description">{description}</div>

            <a
              href={url}
              className="site-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              More information
            </a>
          </div>

          <div className="banner">
            <img src={banner_image_url} alt={name} />
          </div>
        </div>
      </div>
    );
  }
}
