import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pagetitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
      activeFilter: null
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.setState({
        activeFilter: null
      });

      this.getPortfolioItems();
    } else {
      this.setState({
        activeFilter: filter
      });

      this.getPortfolioItems(filter);
    }
  }

  sortByPosition(items) {
    return [...items].sort((a, b) => {
      const posA = Number(a.position) || 0;
      const posB = Number(b.position) || 0;
      return posA - posB;
    });
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://saetllitefolvoe.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        let items = response.data.portfolio_items;

        if (filter) {
          items = items.filter(item => {
            return item.category === filter;
          });
        }

        items = this.sortByPosition(items);

        this.setState({
          data: items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }
  componentDidMount() {
    const filterFromNavigation =
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.filter;

    if (filterFromNavigation) {
      this.handleFilter(filterFromNavigation);
    } else {
      this.getPortfolioItems();
    }
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className={
              this.state.activeFilter === "Design"
                ? "btn-filter filter-active"
                : "btn-filter"
            }
            onClick={() => this.handleFilter("Design")}
          >
            Design
          </button>
          <button
            className={
              this.state.activeFilter === "Sound"
                ? "btn-filter filter-active"
                : "btn-filter"
            }
            onClick={() => this.handleFilter("Sound")}
          >
            Sound
          </button>
          <button
            className={
              this.state.activeFilter === "Projects"
                ? "btn-filter filter-active"
                : "btn-filter"
            }
            onClick={() => this.handleFilter("Projects")}
          >
            Projects
          </button>
          <button
            className="btn-filter"
            activeClassName="filter-active"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
