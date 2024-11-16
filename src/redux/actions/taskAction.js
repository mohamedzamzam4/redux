import { type } from "@testing-library/user-event/dist/type";

export const add = (data) => {
  return {
    type: "add",
    payload: data,
  };
};
export const supprimer = (data) => {
  return {
    type: "supprimer",
    payload: data,
  };
};
export const edite = (data) => {
  return {
    type: "edite",
    payload: data,
  };
};
export const isdone = (data) => {
  return {
    type: "isdone",
    payload: data,
  };
};
