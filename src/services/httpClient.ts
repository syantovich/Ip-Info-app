export const httpClient = (
  url: string,
  options: {
    user?: {
      authenticated?: boolean;
      token?: string;
    };
    method?: string;
    body?: any;
    headers?: any;
  } = {}
) => {
  if (!options) {
    options = { method: "GET" };
  }

  return fetch(url, options);
};
