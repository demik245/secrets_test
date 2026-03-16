/**
 * Application configuration
 *
 * WARNING: This file contains FAKE secrets for testing secret-scanning tools
 * like gitleaks. Do NOT use these values in production.
 */

const config = {
  // AWS credentials (fake)
  aws: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-east-1",
  },

  // GitHub API token (fake)
  github: {
    token: "ghp_R8xKj2mNpQ7vL9wDtY4sFhBcEoA1uZ3iG6Xe",
  },

  // DigitalOcean Personal Access Token (fake)
  digitalocean: {
    token: "dop_v1_a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4",
  },

  // PyPI API token (fake)
  pypi: {
    token: "pypi-AgEIcHlwaS5vcmcAxxxxxxxxFakeTokenForTestingOnly1234567890abcdef",
  },

  // SendGrid (fake)
  sendgrid: {
    apiKey: "SG.ngeVfQFYQlKU0ufo8x5d1A.TwL2iGABf9DHoTf-09kqZrux1A_2zs",
  },

  // Database (fake)
  database: {
    url: "postgresql://admin:P@ssw0rd!Fake@db.example.com:5432/myapp",
    password: "P@ssw0rd!Fake",
  },

  // Generic secrets (fake)
  app: {
    secretKey: "super_secret_key_do_not_use_in_prod_1234567890abcdef",
    jwtSecret: "jwt_super_secret_signing_key_not_for_production_use_only",
    apiKey: "AIzaSyD-9tSrke72I6MVnX6KW0qFakeSample00",
  },
};

module.exports = config;
