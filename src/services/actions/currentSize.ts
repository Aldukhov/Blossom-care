export const setcurrentSize = (number: number) => ({
    type: 'SET_CURRENT_SIZE' as const,
    payload: number,
  });