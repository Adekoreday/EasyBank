import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  openModal, closeModal, openNavbar, closeNavbar, siginUser,
  sigupUser,
  signInCloseModal,
  signUpCloseModal,
  signUpOpenModal,
  userLoading,
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
    return (
      <div>
        <ToastContainer />
        { this.props.modalStatus ? <Modal closeModal={this.props.closeModal} /> : ''}
        {this.props.signInmodalStatus ? (
          <Modal closeModal={this.props.signInCloseModal}>
            <SignIn
            siginUser={this.props.siginUser}
            SignIndata={this.props.SignIndata}
            userLoading={this.props.userLoading}
            loading={this.props.loading}
            clearUserData={this.props.clearUserData}
            notify={this.notify}
            />
          </Modal>
        ) : ''}
        { this.props.signUpmodalStatus ? (
          <Modal closeModal={this.props.signUpCloseModal}>
            <SignUp
            sigupUser={this.props.sigupUser}
            SignUpdata={this.props.SignUpdata}
            userLoading={this.userLoading}
            loading={this.props.loading}
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
        <Hero />
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
  userLoading: PropTypes.func,
  SignIndata: PropTypes.object,
  SignUpdata: PropTypes.object,
  clearUserData: PropTypes.func
};

const mapStateToProps = (state) => {
  const { navbar, modal, user } = state;
  const { SignIndata, SignUpdata, loading } = user;
  const { navbarStatus } = navbar;
  const {
    modalStatus, signInmodalStatus, signUpmodalStatus,
  } = modal;
  return {
    navbarStatus, modalStatus, signInmodalStatus, signUpmodalStatus, SignIndata, SignUpdata, loading
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  openModal, closeModal, openNavbar, closeNavbar, sigupUser, signInCloseModal, signUpCloseModal, signUpOpenModal, signInOpenModal, siginUser, userLoading, clearUserData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
