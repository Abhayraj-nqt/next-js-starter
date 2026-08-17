import * as z from "zod";

const envSchema = z.object({
  // Node environment - Don't change
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  NEXT_PUBLIC_API_BASE_URL: z.url("Invalid API base URL"),
});

function validateEnv() {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const missingVars = parsed.error.issues.map(
      (err) => `${err.path.join(".")}: ${err.message}`
    );
    throw new Error(
      `❌ Invalid environment variables:\n${missingVars.join("\n")}\n\nPlease check your .env files.`
    );
  }

  return parsed.data;
}

export const env = validateEnv();
