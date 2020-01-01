import * as modal from './modal';
import * as user from './user';

const {
  openModal, closeModal, signInCloseModal, signUpCloseModal, signUpOpenModal, signInOpenModal
} = modal;
const {
  siginUser, sigupUser, clearUserData, getUserDetails
} = user;

export {
  openModal,
  closeModal,
  siginUser,
  sigupUser,
  signInCloseModal,
  signUpCloseModal,
  signUpOpenModal,
  signInOpenModal,
  clearUserData,
  getUserDetails,
};
