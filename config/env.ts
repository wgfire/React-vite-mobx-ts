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
    apiBaseUrl: "https://busyboxbeckend.b2btst.com",
  },
  release: {
    cdn: "/",
    apiBaseUrl: "https://busyboxbeckend.b2btst.com",
  },
};

export default config;
