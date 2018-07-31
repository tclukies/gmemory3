// Update with your config settings.

module.exports = {
    development: {
        client: "pg",
        connection: "postgres://localhost:/gmemory-three"
    },

    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL
    }
};
