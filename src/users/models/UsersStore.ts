import {StoreBase} from "../../core/storeBase";

/**
 * Persistance d'utilisateurs.
 */
class UsersStoreClass extends StoreBase {
  constructor() {
    super("/users");
  }
}

export default new UsersStoreClass();
