import axios from 'axios';
import { DailyData } from '../types';

const upload = async (file: File): Promise<DailyData[]> => {
  const fd: FormData = new FormData();
  fd.append('file', file);

  const res = await axios.post<DailyData[]>(
    'http://localhost:4000/api/upload',
    fd, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );

  return res.data;
};

export default { upload };
