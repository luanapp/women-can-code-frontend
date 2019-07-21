import { TOGGLE_MODAL } from '../constants/modals';

const defaultState = { modals: {} };

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return requestModalToggle(state, action.modalId);
    default:
      return state;
  }
};

/**
 * Fill the state with the default properties when in a toggling a modal
 * @param {Object} state - State
 * @param {String} modalId - Unique modal identifier
 */
const requestModalToggle = (state, modalId) => {
  state.modals[modalId] = !!!state.modals[modalId];
  return {
    ...state,
  };
};
