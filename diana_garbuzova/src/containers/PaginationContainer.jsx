import React, { Component } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash.range';

import {
  getStartAndEndPage,
  getStartAndEndPageForSmallScreen
} from '../utils/utils';
import Pagination from '../components/Pagination';

class PaginationContainer extends Component {
  state = { pager: {} };

  componentDidMount() {
    const { count, initialPage } = this.props;
    if (count) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    const { items, initialPage } = this.props;
    if (items !== prevProps.items) {
      this.setPage(initialPage);
    }
  }

  setPage = page => {
    const { count, onChange } = this.props;
    let { pager } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }
    pager = this.getPager(count, page);
    onChange(pager.currentPage);
    this.setState({ pager });
  };

  getPager(totalItems, currentPage) {
    let { pageSize } = this.props;
    currentPage = currentPage || 1;
    pageSize = pageSize || 5;
    const totalPages = Math.ceil(totalItems / pageSize);
    const getMethod = screen.width <= 480
      ? getStartAndEndPageForSmallScreen(totalPages, currentPage)
      : getStartAndEndPage(totalPages, currentPage);
    let { startPage, endPage } = getMethod;
    const pages = range(startPage, endPage + 1);

    return {
      totalPages,
      currentPage,
      pages,
    };
  }

  render() {
    const { pager } = this.state;
    const { pages, totalPages, currentPage } = pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <Pagination
        pages={pages}
        totalPages={totalPages}
        currentPage={currentPage}
        onClick={this.setPage}
      />
    );
  }
}

Pagination.propTypes = {
  items: PropTypes.array,
  count: PropTypes.number,
  onChange: PropTypes.func,
  initialPage: PropTypes.number,
};

Pagination.defaultProps = {
  initialPage: 1,
};

export default PaginationContainer;
