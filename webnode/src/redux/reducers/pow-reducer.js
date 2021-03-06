import { IOTA_POW, IOTA_POW_SUCCESS } from "../actions/pow-actions";

import nodeActions from "../actions/node-actions";

import { CONSENT_GIVEN, CONSENT_DENIED } from "../actions/app-actions";

const initState = {
  powResults: [],
  statuses: ["Initializing"],
  consent: 0 //0: undefined, 1: consent given, 2: consent denied
};

export default (state = initState, action) => {
  switch (action.type) {
    case nodeActions.NODE_REQUEST_BROKER_NODES:
      return {
        ...state,
        statuses: [...state.statuses, "Doing proof of work"]
      };
    case nodeActions.NODE_ADD_BROKER_NODE:
      return {
        ...state,
        statuses: [...state.statuses, "Complete"]
      };
    case CONSENT_GIVEN:
      return { ...state, consent: 1 };
    case CONSENT_DENIED:
      return { ...state, consent: 2 };

    default:
      return state;
  }
};
