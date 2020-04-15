import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  displayContactFormConfirmation:false,
  displayAlert:false,
  sendManagerForm:false,
  setAlertMessage:"Before", //forgot what is this
  cookiesMessage: true

};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;