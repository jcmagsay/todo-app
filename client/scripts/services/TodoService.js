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
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  };
  if (!headers) headers = {};
  if (!body) body = {};

  return Object.assign(
    {},
    options,
    body
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

export default class TodoService {
  constructor() {}

  getAll(scope, collection) {
    return get(REQUEST_TYPE.GET);
  }

}
