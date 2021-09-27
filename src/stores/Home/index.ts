// https://mobx-react.js.org/
// https://mobx.js.org/README.html

import { makeAutoObservable } from "mobx";

class HomeStore {
  constructor() {
    makeAutoObservable(this);
  }

  count = 0;

  add = () => {
    this.count += 1;
  };

  reset = () => {
    this.count = 0;
  };

  sub = () => {
    this.count -= 1;
  };

  get compGet(): number {
    return this.count * 2;
  }
}

export default HomeStore;
