import { fileURLToPath } from "node:url";

import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url), { debug: true });

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./lib/env");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
