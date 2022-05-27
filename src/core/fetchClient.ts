const API_URL = import.meta.env.VITE_API_URL;

/**
 * Delete method
 *
 * @param url
 * @param options
 */
const del = (url: string, options: any) => {
  return fetch(`${API_URL}${url}`, {
    ...options,
    method: 'DELETE',
  });
};

/**
 * Get method
 *
 * @param url
 * @param params
 * @param options
 */
const get = (url: string, params?: any, options?: any) => {
  const urlWithArgs = new URL(`${API_URL}${url}`);

  /**
   * Ajout des arguments
   *
   * Ex: ?id=01
   * @return string
   */
  if (params) {
    const search = new URLSearchParams(params);
    urlWithArgs.search = search.toString();
  }

  /**
   * Effectue la requete get
   */
  return fetch(urlWithArgs.toString(), options)
    .then(response => {
      if (response.ok) {
        return response.json().then(data => {
          return data;
        });
      } else {
        alert(response.statusText);
        return null;
      }
    })
    .catch(error => {
      alert(error.message);
      return null;
    });
};

/**
 * Post method
 *
 * @param url
 * @param options
 */
const post = (url: string, options: any) => {
  return fetch(`${API_URL}${url}`, {
    ...options,
    headers: { 'content-type': 'application/json' },
    method: 'POST',
  }).then(response => {
    if (response.ok) {
      return response;
    } else {
      alert(response.statusText);
      return response;
    }
  }).catch(error => {
    alert(error.message);
    return null;
  }
  );
};

/**
 * Put method
 *
 * @param url
 * @param options
 */
const put = (url: string, options: any) => {
  return fetch(`${API_URL}${url}`, {
    ...options,
    headers: { 'content-type': 'application/json' },
    method: 'PUT',
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        alert(response.statusText);
        return null;
      }
    })
    .catch(error => {
      alert(error.message);
      return null;
    }
    );
};

export { get, post, put, del };
