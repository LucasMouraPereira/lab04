module.exports = {
  apps: [
    {
      name: "frontend",
      script: "src/server/index.js",
      args: "one two",
      instances: 1,
      autorestart: true,
      watch: false,
      exec_mode: "fork",
      max_memory_restart: "2G",
      env_development: {
        PORT: 1337,
      },
      env_production: {
        PORT: 1337,
        NODE_ENV: "production",
      },
    },
  ],
};
