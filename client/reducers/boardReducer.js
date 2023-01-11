import * as types from '../constants/actionTypes';


const BOARD_SIZE = 8;
function genInitState() {
  const state = {};
  state.boardState = {}
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      state.boardState['r' + r + 'c' + c] = '';
    }
  }
  console.log(state)
  return state;
}
// 00 02 03
// 10 11 13
const initalState = genInitState();

const boardReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.LOAD_BOARD:
      console.log(initalState);
      return {...state};
    default:
      return {...state};
  }
}

export default boardReducer;