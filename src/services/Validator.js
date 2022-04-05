import StorageManager from './StorageManager';

class Validator {
  _pattern = '^(?=(.*[a-zA-Za-яА-Я]){1,})(?=(.*[0-9]){2,}).{8,}$';
  _isValidData = false;
  _isValidPassword = false;

  static searchInputData(login, password, users) {
    const parsedUsers = JSON.parse(users);
    return parsedUsers.users.filter((user) => user.login === login && user.password === password);
  }

  validateInputData(login, password) {
    const users = StorageManager.getAllUsers();
    const searchedUser = searchInputData(login, password, users);
    if (searchedUser[0]) {
      return (this._isValidData = true);
    }
  }

  validatePassword(password) {
    const regex = new RegExp(this._pattern);
    regex.test(password) ? (this._isValidPassword = true) : this._isValidPassword;
  }
}

export default Validator;
