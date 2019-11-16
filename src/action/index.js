import * as modal from './modal';
import * as navbar from './navbar';
import * as user from './user';

const {
  openModal, closeModal, signInCloseModal, signUpCloseModal, signUpOpenModal, signInOpenModal
} = modal;
const { openNavbar, closeNavbar } = navbar;
const {
  siginUser, sigupUser, userLoading, clearUserData, getUserDetails
} = user;

export {
  openModal,
  closeModal,
  openNavbar,
  closeNavbar,
  siginUser,
  sigupUser,
  signInCloseModal,
  signUpCloseModal,
  signUpOpenModal,
  signInOpenModal,
  userLoading,
  clearUserData,
  getUserDetails,
};
