
export default (state, action) => {
    switch (action.type) {
            case 'LOAD_WEB3':
            return {
                ...state,
                web3: action.payload
            }

      default:
        return state;
        }
  }