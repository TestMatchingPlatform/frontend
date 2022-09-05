function saveSessionToCookie(value) {
  document.cookie = `JSESSIONID=${value}`;
}

function saveTesterToCookie(value) {
  document.cookie = `TesterNickname=${value}`;
}

function saveMakerToCookie(value) {
  document.cookie = `MakerNickname=${value}`;
}

function getSessionFromCookie(value) {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)JSESSIONID\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getTesterFromCookie(value) {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)TesterNickname\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getMakerFromCookie(value) {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)MakerNickname\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveSessionToCookie,
  saveTesterToCookie,
  saveMakerToCookie,
  getSessionFromCookie,
  getTesterFromCookie,
  getMakerFromCookie,
  deleteCookie,
};
