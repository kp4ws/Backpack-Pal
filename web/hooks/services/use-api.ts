import { useAuth } from "@clerk/nextjs";

export const useApi = () => {
    const {getToken} = useAuth();
    const baseURL = process.env.NEXT_PUBLIC_API_URL;

    return async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
        const token = await getToken();

        const response = await fetch(`${baseURL}${endpoint}`, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || "API Request Failed");
        }

        const data = await response.json();
        return data as T;
    };
};