import { FETCH_WEATHER } from '../actions'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('action', action)
      if (action.payload) {
        const { data } = action.payload
        return [data, ...state]
      } else {
        alert('다시 입력해주세요!')
      }
  }
  return state
}
