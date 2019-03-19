import React from 'react';
import { connect } from 'react-redux';
import Loader from '@components/shared/Loader/Loader';

interface Props {
  loader: any;
}

const withLoader = (Component: any): any => {
  class withLoader extends React.Component<Props> {
    render() {
      const { loader } = this.props;
      return (
        <>
          {loader ? <Loader /> : null}
          <Component {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = (state: any) => ({
    loader: state.loader.loader,
  });

  return connect(mapStateToProps)(withLoader);
};

export default withLoader;
