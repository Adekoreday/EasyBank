import React, {useLayoutEffect} from 'react';
import Home from '../home/home';
import UserDashboard from '../../components/UserDashboard/UserDashboard';
import User from '../../components/user/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUserDetails} from '../../action';

const Auth = (props) => {
    const {getUserDetails, isAuth, authenticating} = props;
    useLayoutEffect(() => {
        getUserDetails();
      }, []);
    return(
        <div>
          {(authenticating == true & isAuth ==false) ? <User/> : ''}
          { (isAuth ==true & authenticating == false ) ? <UserDashboard/> : ''}
          {(isAuth ==false & authenticating == false ) ? <Home/> : ''}
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