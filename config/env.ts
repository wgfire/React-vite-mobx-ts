interface Path {
  cdn: string;
  apiBaseUrl: string;
  withCredentials?: boolean;
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
    withCredentials: false,
  },
  preview: {
    cdn: "/",
    apiBaseUrl: "https://busyboxbackend.b2btst.com",
    withCredentials: true,
  },
  release: {
    cdn: "/",
    apiBaseUrl: "https://busyboxbackend.b2btst.com",
  },
};

export default config;
