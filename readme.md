`webpack --config-name prod`
example usage:
info on setting up ts modules on npm: https://stackoverflow.com/questions/39276023/error-ts2306-index-d-ts-is-not-a-module

````import { Dug } from 'dug';

const config: RequestInit = {
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
}
const handleError = (response: Response): Response | PromiseLike<Response> => {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response;
    }
  }

export const dug = new Dug(config, handleError);```
````
