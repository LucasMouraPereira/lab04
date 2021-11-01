const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");
const redirects = require("./src/server/redirects");

const plugins = [[withFonts], [withImages]];
const nextConfiguration = {
  useFileSystemPublicRoutes: false,
  exclude: path.resolve(__dirname, "src/static/images/svg"),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    const originalEntry = config.entry;
    // eslint-disable-next-line no-param-reassign
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"] && !entries["main.js"].includes("./verifyBrowser.js")) {
        entries["main.js"].unshift("./verifyBrowser.js")
      }

      return entries;
    }

    return config;
  },
  async redirects() {
    return redirects;
  },
};

module.exports = withPlugins([...plugins], nextConfiguration);