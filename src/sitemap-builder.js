// const es2015 = require("babel-preset-es2015");
// const presetReact = require("babel-preset-react");

// require("babel-register")({
//   presets: [es2015, presetReact],
// });

// const router = require("./src/App").default;
// const Sitemap = require("react-router-sitemap").default;

// function generateSitemap() {
//   return new Sitemap(router)
//     .build("https://helmi-new-portfolio.vercel.app")
//     .save("./public/sitemap.xml");
// }

// generateSitemap();

import pkg from "react-router-sitemap";
const { default: Sitemap } = pkg;

const router = [
  {
    path: "/",
  },
  {
    path: "/about",
  },
  {
    path: "/projects",
  },
  {
    path: "/contact",
  },
];

function generateSitemap() {
  return new Sitemap(router)
    .build("https://helmi-new-portfolio.vercel.app")
    .save("./public/sitemap.xml");
}

generateSitemap();
