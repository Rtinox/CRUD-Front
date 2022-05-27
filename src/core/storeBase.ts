import {get, post, put, del} from './fetchClient';

export class StoreBase {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  setEndPoint(endPoint: string) {
    this.endPoint = endPoint;
  }

  /**
   * Retourne un tableau d'enregistrement(s).
   *
   * @param {Object} requestParams
   * @returns {Response}
   */
  retrieve(requestParams = {}) {
    return get(this.endPoint, requestParams);
  }

  /**
   * Lit un enregistrement par l'Id.
   *
   * @param {String|Number} id
   * @param {Object} requestParams
   * @returns {Promise}
   */
  read(id: string, requestParams = {}) {
    return get(this.endPoint + "/" + id, requestParams);
  }

  /**
   * Créer une donnée
   *
   * @param requestParams
   */
  create(requestParams = {}) {
    return post(this.endPoint, {body: JSON.stringify(requestParams)});
  }

  /**
   * Met à jour une donnée
   *
   * @param id
   * @param requestParams
   */
  update(id: string, requestParams = {}) {
    return put(this.endPoint + "/" + id, {body: JSON.stringify(requestParams)});
  }

  /**
   * Supprime une donnée
   * @param id
   */
  delete(id: string) {
    return del(this.endPoint + "/" + id, {});
  }
}
