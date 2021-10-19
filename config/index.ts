import envConfig, { Env } from "./env";
export type envStr = keyof Env;
export default (env: envStr) => {
  return envConfig[env as envStr];
};

// 服务器端是没有import.meta.env 所以在浏览器端可以执行
// process在浏览器执行也是没有的。所以也会报错
