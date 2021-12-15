export function BoolReducer(state, action) {
  switch (action.type) {
    case "true":
      return true;

    case "false":
      return false;

    default:
      throw new Error("Ошибка StateManager");
  }
}
