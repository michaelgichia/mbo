/**
 *
 * NavigationBar
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

// Modules
import { Layout } from "antd";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectNavigationBar from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

// Css
import "./navigation-bar.css";

// Modules constants
const { Header } = Layout;

export class NavigationBar extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <Header className="navbar">
      <Desktop />
      <Mobile />
    </Header>
    );
  }
}

NavigationBar.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  navigationbar: makeSelectNavigationBar()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: "navigationBar", reducer });
const withSaga = injectSaga({ key: "navigationBar", saga });

export default compose(withReducer, withSaga, withConnect)(NavigationBar);