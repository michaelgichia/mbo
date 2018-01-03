/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { browserHistory } from 'react-router';

import messages from './messages';

// Css
import './not-found-page.css';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <div className="exception">
      <div className="imgBlock">
        <div
          className="imgEle"
        />
      </div>
      <div className="content">
        <h1>404</h1>
        <FormattedMessage {...messages.header} />
        <div className="actions">
        <br/>
        <Button size="large" onClick={() =>browserHistory.push("/#")} type="primary">Return to Home</Button>
        </div>
      </div>
    </div>
    );
  }
}
