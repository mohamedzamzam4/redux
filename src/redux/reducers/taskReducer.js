import { isDone } from "../actions/taskAction";

export const taskreducer = (
  state = [
    {
      name: "eat",
      desc: "eat meals",
      status: false,
    },
  ],
  action
) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
      break;
    case "supprimer":
      return state.filter((el) => el.name != action.payload);
    case "edite":
      return action.payload.name
        ? state.map((elt) =>
            elt.name === action.payload.nameref
              ? { ...elt, name: action.payload.name }
              : elt
          )
        : state.map((elt) =>
            elt.name === action.payload.nameref
              ? { ...elt, desc: action.payload.desc }
              : elt
          );
    case "isdone":
      return state.map((elt) =>
        elt.name == action.payload.nameref
          ? { ...elt, status: !elt.status }
          : elt
      );

    default:
      return state;
      break;
  }
};
