import { IAppConfig } from "models/IAppConfig";

const builder = (): () => Promise<IAppConfig> => {
  let config: Promise<IAppConfig>;

  const doGetConfig = async () => {
    const res = await fetch('/config.json');
    return res.json();
  };

  return () => {
    if (!config) {
      config = doGetConfig();
    }

    return config;
  };
};

export const configProvider = builder();
