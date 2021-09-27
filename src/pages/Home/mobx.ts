import { makeAutoObservable, when } from "mobx";

export const store = makeAutoObservable({
  count: 1,
  setCount(count: number) {
    this.count = count;
  },
  async initCount() {
    // 模拟获取远程的数据
    const count: number = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });
    // 获取数据后，调用已有的 action
    this.setCount(count);
  },
});

when(
  () => store.count == 10,
  () => {
    console.log("x");
  },
);
