import React, {useLayoutEffect} from 'react';
import Home from '../home/home';
import UserDashboard from '../../components/UserDashboard/UserDashboard';
import Spinner from '../../components/spinners/Spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUserDetails} from '../../action';

const Auth = (props) => {
    const {getUserDetails, isAuth, authenticating} = props;
    console.log('auth props', props);
    useLayoutEffect(() => {
        getUserDetails();
      }, []);
    return(
        <div>
          {(authenticating == true & isAuth ==false) ? <Spinner/> : ''}
          { (isAuth ==true & authenticating == false ) ? <UserDashboard/> : ''}
          {(isAuth ==false & authenticating == false ) ? <Home RedirectLocation={props.location.state}/> : ''}
        </div>
    );
}
const mapStateToProps = (state) => {
    const { user } = state;
    const { isAuth, authenticating } = user;
    return {
        isAuth, authenticating
    };
  };

const mapDispatchToProps = dispatch => bindActionCreators({
    getUserDetails
  }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Auth);