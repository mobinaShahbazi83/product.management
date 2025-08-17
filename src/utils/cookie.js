const setCookie = token => {
    document.cookie = `token=${token}; max-age=${1 * 24 * 60 * 60}`
}
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
   null;
}

export  {setCookie,getCookie}