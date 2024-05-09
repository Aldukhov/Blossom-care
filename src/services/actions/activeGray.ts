export const setActiveGray= (active: boolean) => ({
    type: 'SET_ACTIVE_GRAY' as const,
    payload: active,
  });