import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
import { DASHBOARD_URL } from '../../../config';

export default handleAuth({
  // To redirect after login successfully
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: DASHBOARD_URL,
    });
  },
});
