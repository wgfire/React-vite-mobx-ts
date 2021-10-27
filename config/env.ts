interface Path {
  cdn: string;
  apiBaseUrl: string;
}

export interface Env {
  development: Path;
  preview: Path;
  release: Path;
}

const config: Env = {
  development: {
    cdn: "./",
    apiBaseUrl: "https://www.busybox.com",
  },
  preview: {
    cdn: "/",
    apiBaseUrl: "https://www.busybox.com",
  },
  release: {
    cdn: "/",
    apiBaseUrl: "//www.xxx.com/v1",
  },
};

export default config;
