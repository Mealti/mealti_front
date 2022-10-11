module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@assets": "./assets",
            "@constants": "./constants",
            "@components": "./components",
            "@hooks": "./hooks",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@types": "./types",
          },
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
        },
      ], //절대경로
      "babel-plugin-styled-components", //스타일드 컴포넌트 사용
    ],
  };
};
