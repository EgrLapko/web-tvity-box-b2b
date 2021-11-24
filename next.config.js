module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.ttf$/,
      use: [
        {
          loader: "ttf-loader",
          options: {
            name: "./font/[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};
