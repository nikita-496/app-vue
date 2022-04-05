class StorageManager {
  static setUsers(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getAllUsers() {
    return localStorage.getItem('users');
  }
  static getAuthorizedUser() {
    return localStorage.getItem('authorizedUser');
  }
  static removeAuthorizedUser() {
    localStorage.removeItem('authorizedUser');
  }
}

export default StorageManager;
