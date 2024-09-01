import { LoginResType } from '../type/response/responseType.ts';
import { LoginReqType } from '../type/request/loginReqType.ts';
import axios from 'axios';

export const login = async (params: LoginReqType) => {
  return await axios.post<LoginResType>('/api/login', params);
};
