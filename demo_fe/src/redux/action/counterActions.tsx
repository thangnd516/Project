// src/redux/actions/counterActions.ts
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
  
  export const incrementByAmount = (amount: number) => {
    return {
      type: 'INCREMENT_BY_AMOUNT',
      payload: amount,
    };
  };
  