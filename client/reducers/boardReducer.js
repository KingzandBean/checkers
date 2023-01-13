import { updateSelected } from '../actions/actions';
import * as types from '../constants/actionTypes';


const BOARD_SIZE = 8;
function genInitState() {
  const state = {};
  // DUMMY BOARD STATE
  state.boardState = {}
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      // if (r % 2 === c % 2 && r < 3) {
      //   state.boardState['r' + r + 'c' + c] = "white";
      // } else if (r % 2 === c % 2 && r > 4) {
      //   state.boardState['r' + r + 'c' + c] = "red";
      // } else {
      state.boardState['r' + r + 'c' + c] = '';
    }
  }

  state.gameId = '';
  state.selectedTokenId = '';
  state.selectedSquareId = '';
  state.hasSelection = false;
  console.log("init State", state)
  return state;
}

// 00 02 03
// 10 11 13
const initalState = genInitState();

const boardReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.LOAD_BOARD:
      return {
        ...state,
        gameId: action.payload.gameId,
        boardState: {
          ...action.payload.boardState,
        }
      };
    case types.UPDATE_SELECTED:
      return {
        ...state,
        hasSelection: action.payload.hasSelection,
        selectedSquareId: action.payload.selectedSquareId,
      }
    case types.UPDATE_BOARD:

      return {
        ...state,
        selectedSquareId: '',
        hasSelection: false,
        boardState: {
          ...action.payload,
        }
      }
    default:
      return {...state};
  }
}

export default boardReducer;