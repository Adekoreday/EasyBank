import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  openModal, closeModal, openNavbar, closeNavbar, siginUser,
  sigupUser,
  signInCloseModal,
  signUpCloseModal,
  signUpOpenModal,
  signInOpenModal,
  clearUserData
} from '../../action';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import Bottom from '../../components/bottom/bottom';
import Modal from '../../components/modal/modal';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signup/signup';
import './home.css';

class Home extends Component {

  notify = msg => toast.error(msg, {
    className: 'notify'
  });

  render() {
  const { from } = this.props.location.state || { from: { pathname: '/' } }
   if (this.props.isAuth === true) {
     console.log('i got here');
     return <Redirect to={from} />
   }
    return (
      <div>
        { this.props.modalStatus ? <Modal closeModal={this.props.closeModal} /> : ''}
        {this.props.signInmodalStatus ? (
          <Modal closeModal={this.props.signInCloseModal}>
            <SignIn
            siginUser={this.props.siginUser}
            UserData={this.props.UserData}
            loading={this.props.loading}
            isSignedIn={this.props.isSignedIn}
            clearUserData={this.props.clearUserData}
            notify={this.notify}
            />
          </Modal>
        ) : ''}
        { this.props.signUpmodalStatus ? (
          <Modal closeModal={this.props.signUpCloseModal}>
            <SignUp
            sigupUser={this.props.sigupUser}
            UserData={this.props.UserData}
            clearUserData={this.props.clearUserData}
            isSignedUp={this.props.isSignedUp}
            loading={this.props.loading}
            notify={this.notify}
            signInModal={this.props.signInOpenModal}
            signUpCloseModal={this.props.signUpCloseModal}
            />
          </Modal>
        ) : ''}
        <Header
           type="homepage"
           onOpenNav={this.props.openNavbar}
           showNav={this.props.navbarStatus}
           onCloseNav={this.props.closeNavbar}
           signInOpenModal={this.props.signInOpenModal}
           signUpOpenModal={this.props.signUpOpenModal}
         />
        <Hero signInOpenModal={this.props.signInOpenModal}/>
        <Bottom />
      </div>
    );
  }
}

Home.propTypes = {
  openNavbar: PropTypes.func.isRequired,
  closeNavbar: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  navbarStatus: PropTypes.bool.isRequired,
  signInmodalStatus: PropTypes.bool.isRequired,
  signUpmodalStatus: PropTypes.bool.isRequired,
  signInCloseModal: PropTypes.func.isRequired,
  signUpCloseModal: PropTypes.func.isRequired,
  signInOpenModal: PropTypes.func.isRequired,
  signUpOpenModal: PropTypes.func.isRequired,
  siginUser: PropTypes.func.isRequired,
  sigupUser: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  UserData: PropTypes.object,
  clearUserData: PropTypes.func
};

const mapStateToProps = (state) => {
  const { navbar, modal, user } = state;
  const { UserData, loading, isSignedIn, isSignedUp, isAuth } = user;
  const { navbarStatus } = navbar;
  const {
    modalStatus, signInmodalStatus, signUpmodalStatus,
  } = modal;
  return {
    navbarStatus, modalStatus, signInmodalStatus,isSignedIn, isSignedUp, signUpmodalStatus, UserData, loading, isAuth
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  openModal, closeModal, openNavbar, closeNavbar, sigupUser, signInCloseModal, signUpCloseModal, signUpOpenModal, signInOpenModal, siginUser, clearUserData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
