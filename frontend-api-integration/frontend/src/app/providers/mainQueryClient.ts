import { QueryClient, useMutation } from 'react-query';

const BASE_URL = 'http://localhost:3000';
export const mainQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError(err) {
        console.log(err);
      },
      retry: false,
      queryFn: async ({ queryKey: [url] }) => {
        if (typeof url === 'string') {
          const res = await fetch(`${BASE_URL}/${url.toLowerCase()}`, {
            headers: {},
          });

          if (!res.ok && res.status === 500) {
            return undefined;
          }
          return await res.json();
        }
      },

      refetchOnWindowFocus: false,
    },
  },
});

interface RequestOptions<Data, Error> {
  endpoint: string;
  body?: Data;
  onError?: (error: Error) => void;
  onSuccess?: (data: any) => void;
}
export function usePost<Data, Error = unknown>(errorHandle: Function) {
  return useMutation(
    async ({ endpoint, body, onError }: RequestOptions<Data, Error>) => {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData: Error = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      const data = await response.json();
      return data;
    },
    {
      onError: (error: Error) => {
        errorHandle(error);
      },
      onSuccess: (data) => {
        //  console.log(data);
      },
    }
  );
}
export function usePatch<Data, Error = unknown>(errorHandle: Function) {
  return useMutation(
    async ({ endpoint, body, onError }: RequestOptions<Data, Error>) => {
      const response = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorData: Error = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      const data = await response.json();
      return data;
    },
    {
      onError: (error: Error) => {
        errorHandle(error);
      },
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
}
