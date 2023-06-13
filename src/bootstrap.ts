import { config } from "./config";
import { http } from "./services";

http.init({
  configFn: async () => {
    return {
      baseURL: "https://no23.lavina.tech",
      headers: {},
    };
  },
});
