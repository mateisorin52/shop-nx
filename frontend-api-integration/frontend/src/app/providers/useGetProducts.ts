import { useQuery, UseQueryResult } from 'react-query';
import { Product } from '../types/types';
//The way this query works is as follows:
//if you give an object that has a key of _id it will return the record in the db with that specific id
//otherwise, you can give an object with the key representing the filters and the value representing the value of that filter
//🐴 - horse
export const useGetProducts = (filters?: any) => {
  let filtersString = 'articles?';
  if (filters?.id) filtersString = `articles/${filters.id}`;
  else if (filters)
    for (const [key, value] of Object.entries(filters)) {
      const keys = Object.keys(filters);
      const lastKey = keys[keys.length - 1];

      filtersString += value ? `${key}=${value}${lastKey !== key ? '&' : ''}` : '';
    }
  const resp = useQuery(filtersString, { enabled: true }) as UseQueryResult<Product[]>;
  return resp;
};
