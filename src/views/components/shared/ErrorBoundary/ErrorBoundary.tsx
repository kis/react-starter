import React, { Component, Fragment } from 'react';
import './error-page.css';

export default class ErrorBoundary extends Component {
  public static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  public state = {
    hasError: false,
  };

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <div className="error-page" />
          <p className="error-wording">Ooops, looks like something went wrong</p>
        </Fragment>
      );
    }
    return this.props.children;
  }
}
