function saveAuthToCookie(value) {
  document.cookie = `jwt_token=${value}`;
}
function saveUserNicknameToCookie(value) {
  document.cookie = `nickname=${value}`;
}
function saveUserTypeToCookie(value) {
  document.cookie = `user_type=${value}`;
}
function saveUserIdToCookie(value) {
  document.cookie = `user_id=${value}`;
}

function getAuthToCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)jwt_token\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getUserNicknameToCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)nickname\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getUserTypeToCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)user_type\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserIdToCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)user_id\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserNicknameToCookie,
  saveUserTypeToCookie,
  saveUserIdToCookie,
  getUserNicknameToCookie,
  getAuthToCookie,
  getUserIdToCookie,
  getUserTypeToCookie,
  deleteCookie,
};
