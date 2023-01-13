//import axios from 'axios';
import * as types from '../constants/actionTypes';

// () => {
//   fetch('/api/account/john', {
//     // 'Access-Control-Allow-Origin': '*',
//     // 'mode': 'no-cors'
//   })
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.log(err))
// }

export const updateSelected = (squareId) => ({
  type: types.UPDATE_SELECTED,
  payload: {
    hasSelection: true,
    selectedSquareId: squareId,
  }
})

export const updateBoard = (validMoveSquareId) => (dispatch, getState) => {
  const updatedBoardState = {...getState().board.boardState};
  const selectedSquareId = getState().board.selectedSquareId;
  const gameId = getState().board.gameId
  // console.log(updatedBoardState, selectedSquareId)
  // console.log(updatedBoardState[selectedSquareId])
  updatedBoardState[validMoveSquareId] = updatedBoardState[selectedSquareId]
  updatedBoardState[selectedSquareId] = '';
  // console.log(updatedBoardState)
  const stringified = JSON.stringify(updatedBoardState);
  const body = JSON.stringify({boardState: stringified});
  console.log("Jstring req body", body);
  fetch('/api/game/' + gameId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
    .catch(err => console.log(err));

  dispatch ({
    type: types.UPDATE_BOARD,
    payload: updatedBoardState
  })
}

export const loadBoard = (gameIdString) => (dispatch) => {
  // make fetch request
  // update payload
  let boardState, gameId;
  fetch('/api/game/' + gameIdString)
  .then(res => res.json())
  .then(gameData => {
    //console.log("Loggin response from server ",gameData)
    boardState = JSON.parse(gameData.boardState);
    gameId = gameData.id;
    dispatch ({
      type: types.LOAD_BOARD,
      payload: {
        gameId: gameId,
        boardState: boardState
      }
    })
  })
  .catch((err) => console.log(err))
}
// {
//   "r0c0": "white",
//   "r0c1": "",
//   "r0c2": "white",
//   "r0c3": "",
//   "r0c4": "white",
//   "r0c5": "",
//   "r0c6": "white",
//   "r0c7": "",
//   "r1c0": "",
//   "r1c1": "white",
//   "r1c2": "",
//   "r1c3": "white",
//   "r1c4": "",
//   "r1c5": "white",
//   "r1c6": "",
//   "r1c7": "white",
//   "r2c0": "white",
//   "r2c1": "",
//   "r2c2": "white",
//   "r2c3": "",
//   "r2c4": "white",
//   "r2c5": "",
//   "r2c6": "white",
//   "r2c7": "",
//   "r3c0": "",
//   "r3c1": "",
//   "r3c2": "",
//   "r3c3": "",
//   "r3c4": "",
//   "r3c5": "",
//   "r3c6": "",
//   "r3c7": "",
//   "r4c0": "",
//   "r4c1": "",
//   "r4c2": "",
//   "r4c3": "",
//   "r4c4": "",
//   "r4c5": "",
//   "r4c6": "",
//   "r4c7": "",
//   "r5c0": "",
//   "r5c1": "red",
//   "r5c2": "",
//   "r5c3": "red",
//   "r5c4": "",
//   "r5c5": "red",
//   "r5c6": "",
//   "r5c7": "red",
//   "r6c0": "red",
//   "r6c1": "",
//   "r6c2": "red",
//   "r6c3": "",
//   "r6c4": "red",
//   "r6c5": "",
//   "r6c6": "red",
//   "r6c7": "",
//   "r7c0": "",
//   "r7c1": "red",
//   "r7c2": "",
//   "r7c3": "red",
//   "r7c4": "",
//   "r7c5": "red",
//   "r7c6": "",
//   "r7c7": "red"
// }