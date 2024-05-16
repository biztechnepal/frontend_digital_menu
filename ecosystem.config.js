module.exports = {
  apps: [
    {
      name: "menu-app",
      script: "vite",
      args: "serve",
      interpreter: "none",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
