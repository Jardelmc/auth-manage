import { differenceInMinutes } from 'date-fns';

const authCode = { auth: false, time: false };

export function storeAuthCode(auth) {
  if (auth) {
    if (Number(auth)) {
      if (auth.length === 6) {
        authCode.auth = auth;
        authCode.time = new Date();
        console.log(`AuthCode stored: ${JSON.stringify(authCode)}`);
        return true;
      }
    }
  }
  console.log(`Auth NOT stored: ${auth} -- typeof: ${typeof auth}`);
  return false;
}

export function getAuthCode() {
  if (authCode.auth) {
    const { auth, time } = authCode;
    const minPast = differenceInMinutes(time, new Date());

    authCode.auth = false;
    authCode.time = false;
    if (minPast < 2) {
      console.log(`Auth recover: ${auth}`);
      return auth;
    }

    console.log(`Auth expired: ${auth} -- min Past: ${minPast} `);
    return false;
  }

  console.log('Auth empty from source');
  return false;
}

export function getLastPing() {
  const { time } = authCode;
  if (!time) {
    console.log('Last ping: Empty');
    return false;
  }

  const minPast = differenceInMinutes(time, new Date());

  console.log(`Last ping: --minPast: ${minPast} ${time}`);
  return { time, minPast };
}
