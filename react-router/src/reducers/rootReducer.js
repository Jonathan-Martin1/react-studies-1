const initialState = {
  cards: [
    {
      id: 1,
      title: 'alex',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum?',
    },
    {
      id: 2,
      title: 'wilma',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum?',
    },
    {
      id: 3,
      title: 'john',
      body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque earum?',
    },
  ],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_CARD':
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id
      })
      return {
        ...state,
        cards: newCard,
      }
    default:
      return state
  }
}

export default rootReducer
