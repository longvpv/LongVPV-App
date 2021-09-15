import cookies from 'next-cookies';
import authenticateSettings from '../fileSettings/authenticateSettings.json';
import jwtDecode from 'jwt-decode'

const ssrCookieHelpers = {
  getCookies(ctx) {
    const cookieObject = cookies(ctx);
    let cookiesResults = {};
    return cookiesResults;
  },

  getAuthCookies(ctx) {
    const cookieObject = cookies(ctx);
    let cookiesResults = {};
    if (cookieObject[authenticateSettings.tokenName]) {
      cookiesResults[authenticateSettings.tokenName] = cookieObject[authenticateSettings.tokenName]
      cookiesResults[authenticateSettings.authHeaderName] = cookieObject[authenticateSettings.tokenName]
    }

    return cookiesResults;
  },

  getTokenPayload(ctx) {
    return jwtDecode(this.getAuthCookies(ctx)[authenticateSettings.tokenName]);
  }
}
export default ssrCookieHelpers;