export function BoolReducer(state, action) {
  switch (action.type) {
    case "true":
      return true;
    default:
      throw new Error("Ошибка StateManager");
  }
}
