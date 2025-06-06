export const CONFIG = {
	CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
	BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET || "",
	BETTER_AUTH_URL: process.env.BETTER_AUTH_URL || "",
	DATABASE_URL: process.env.DATABASE_URL || "",
	TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || "",
	NODE_ENV: process.env.NODE_ENV || "dev",
	PORT: process.env.PORT || 3000,
};

export default CONFIG;
