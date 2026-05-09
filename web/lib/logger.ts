import { config } from "./config";

type LogLevel = "info" | "warn" | "error";

const formatMessage = (level: LogLevel, message: string) => {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
};

export const logger = {
    info: (message: string, data?: any) => {
        if (config.env.isDev) {
            console.info(formatMessage("info", message), data ?? "");
        }
    },

    warn: (message: string, data?: any) => {
        if (config.env.isDev) {
            console.warn(formatMessage("warn", message), data ?? "");
        }
    },

    error: (message: string, error?: any) => {
        if (config.env.isDev) {
            console.error(formatMessage("error", message), error ?? "");
        }
    },
}