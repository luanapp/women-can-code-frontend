import { TOGGLE_MODAL } from '../constants/modals';

export const toggleModal = modalId => {
  return dispatch => dispatch({ type: TOGGLE_MODAL, modalId });
};
