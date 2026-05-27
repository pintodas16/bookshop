import { ISEDIT, OFFEDIT, STATUSCHANGED } from "./actionType";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
export const isEdit = (data) => {
  return {
    type: ISEDIT,
    payload: data,
  };
};
export const offEdit = () => {
  return {
    type: OFFEDIT,
  };
};
