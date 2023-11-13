module.exports = {
  apps: [
    {
      name: "boiler-plat",
      script: "./bin/www",
      watch: true,
      ignore_watch: ["node_modules", "public", "logs"],
      env_local: {
        PORT: 4800,
        NODE_ENV: "local",
        DOMAIN_URL: "http://127.0.0.1:4800",
        DB_MONGO_URL: "mongodb://localhost:27017/boiler-plat",
        JWT_SECRET: "dummy_jwt_secret",
        SMTP_PORT: 587,
        SMTP_HOST: "dummy_smtp_host",
        SMTP_SECURE_CONNECTION: "dummy_secure_connection",
        SMTP_AUTH_USER: "dummy_auth_user",
        SMTP_AUTH_PASSWORD: "dummy_auth_password",
        SMTP_SOURCE_EMAIL: "dummy_source_email",
      },
      // ... (other environments)
    },
  ],
};
