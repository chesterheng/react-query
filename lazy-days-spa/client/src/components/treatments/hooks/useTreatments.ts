import { useQuery } from '@tanstack/react-query';

import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

// for when we need a query function for useQuery
const getTreatments = async (): Promise<Treatment[]> => {
  const { data } = await axiosInstance.get('/treatments');
  return data;
};

const useTreatments = (): Treatment[] => {
  const { data: treatments = [] } = useQuery({
    queryKey: [queryKeys.treatments],
    queryFn: getTreatments,
  });
  return treatments;
};

export { useTreatments };
