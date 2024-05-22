module.exports = {
  apps: [
    {
      name: "menu app",
      script: "npm run dev",
      watch: false,
      error_file: "./pm2-error.log",
      out_file: "./pm2-out.log",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
