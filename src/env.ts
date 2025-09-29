import {createEnv} from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
    server: {
        // Logger configuration
        LOG_LEVEL: z.string().default('error'),
    },
    client: {
        NEXT_PUBLIC_API_PATH: z.string().url(),
        NEXT_PUBLIC_IMAGE_DIRECTORY: z.string().url(),
        NEXT_PUBLIC_DEBUG: z.string().default('false').transform(val => val === 'true'),
    },
    // For Next.js >= 13.4.4, you only need to destructure client variables:
    experimental__runtimeEnv: {
        NEXT_PUBLIC_API_PATH: process.env.NEXT_PUBLIC_API_PATH,
        NEXT_PUBLIC_IMAGE_DIRECTORY: process.env.NEXT_PUBLIC_IMAGE_DIRECTORY,
        NEXT_PUBLIC_DEBUG: process.env.NEXT_PUBLIC_DEBUG,
    }
});