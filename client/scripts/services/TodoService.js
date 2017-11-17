const API_URL = 'http://localhost:8004/api/todos';

const REQUEST_TYPE = {
  GET: 'GET',
  DELETE: 'DELETE',
  POST: 'POST',
  PUT: 'PUT'
};

const buildOptions = (reqType, body, headers) => {
  let options = {
    method: reqType,
    mode: 'cors',
    cache: 'default'
  };
  if (!headers) headers = {};
  if (!body) body = {};

  return Object.assign(
    {},
    options,
    headers

  )
};

const get = (reqType, id, body, headers) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const options = buildOptions(reqType, body, headers);

  return new Promise(resolve => {
    fetch(url, options)
      .then(r => {
        return r.json() || r;
      })
      .then(data => resolve(data));
  });
}

const put = (reqType, id, body, headers) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  const options = buildOptions(reqType, body, headers);

  return new Promise(resolve => {
    fetch(url, options)
      .then(r => {
        return r.json() || r;
      })
      .then(data => resolve(data));
  });
}

const post = (reqType, body) => {

  const options = {
    method: reqType,
    mode: 'cors',
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    body: JSON.stringify(body)
  }

  return fetch(API_URL, options)
    .then(r => {
      if (r.status === 200) {
        return r.json();
      }
    })
    .catch(e => console.error(e));
}

const deleteSingle = (reqType, id) => {
  const url = id ? `${API_URL}/${id}` : API_URL;
  return fetch(url, options)
    .then(r => {
      debugger
      if (r.status === 200) {
        return r.json();
      }
    })
    .catch(e => console.error(e));
}

export default class TodoService {
  constructor() {}

  getAll(scope, collection) {
    return get(REQUEST_TYPE.GET);
  }

  create(body) {
    return post(REQUEST_TYPE.POST, body);
  }

  deleteSingle(id) {
    return deleteSingle(REQUEST_TYPE.DELETE, id);
  }

}
