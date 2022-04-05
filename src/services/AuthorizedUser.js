import StorageManager from './StorageManager';

class AuthorizedUser {
  _isAuthorized = false;
  _name = null;

  constructor() {
    this._name = AuthorizedUser.getName();
  }

  get name() {
    return this._name;
  }

  set authorizedUser(login) {
    const users = StorageManager.getAllUsers();
    const parsedUsers = JSON.parse(users).users;
    const validUser = parsedUsers.filter((user) => user.login === login);
    StorageManager.setUsers('authorizedUser', validUser);
  }

  static getName() {
    const authorizedUser = StorageManager.getAuthorizedUser();
    if (JSON.parse(authorizedUser)) {
      return JSON.parse(authorizedUser)[0].name;
    }
  }
}

export default AuthorizedUser;
