// import Router from "next/router";
import { toQueryString } from "api/utils";

export const buildRoute = (href, params, queryParams) => {
  const route = {
    href,
    as: href,
  };

  if (params) {
    route.as = Object.keys(params).reduce(
      (as, key) => as.replace(`[${key}]`, params[key]),
      route.as
    );
  }

  if (queryParams) {
    const queryString = toQueryString(queryParams);
    route.href = `${route.href}?${queryString}`;
    route.as = `${route.as}?${queryString}`;
  }

  return route;
};

export const routes = {
  home: () => buildRoute("/"),
  registry: (registryId) =>
    buildRoute("/registry/[registryId]", { registryId }),
  receiversList: (registryId) =>
    buildRoute("/registry/[registryId]/receivers-list", { registryId }),
};

// export const redirectTo = async (res, { href, as }, pageProps = {}) => {
//   if (res) {
//     res.writeHead(303, { Location: as });
//     res.end();
//   } else {
//     await Router.replace(href, as);
//   }
//
//   return pageProps;
// };
