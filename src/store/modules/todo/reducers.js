import producer from "immer";

export default function todo(state = [], action) {
  switch (action.type) {
    case "@todo/ADD_TODO":
      return producer(state, (draft) => {
        const { title } = action;
        draft.push(title);
      });
    default:
      return state;
  }
}
