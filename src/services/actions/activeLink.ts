export const setActiveLink = (link: string) => ({
    type: 'SET_ACTIVE_LINK' as const,
    payload: link,
  });