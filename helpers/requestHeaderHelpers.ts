/* eslint-disable import/prefer-default-export */
export const integrateAuthorizationHeader = (accessToken: string | undefined) => ({ authorization: `Bearer ${accessToken}` });
