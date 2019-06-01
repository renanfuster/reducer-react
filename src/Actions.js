export const ADD_NAME = "ADD_NAME";
export const CLEAR = "CLEAR";

export function addName(name) {
  return { type: ADD_NAME, name };
}

export function clear(name) {
  return { type: CLEAR, name };
}
