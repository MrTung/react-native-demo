import axios from 'axios';
import { WToast as Toast } from 'react-native-smart-tip';
import { Loading } from '../../components/loading';

type METHOD =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'head'
  | 'HEAD'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS'
  | 'patch'
  | 'PATCH';

type RequestOptions = {
  url: string;
  host: string;
  method: METHOD;
  data?: object;
  headers?: object;
  params?: object;
  [propsName: string]: any;
  showLoading: Boolean;
};

// axios.interceptors.response.use(
//   res => {
//     if (res) {
//       return res;
//     }
//   },
//   err => {
//     return Promise.reject(err);
//   },
// );

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults['jwtError'] = false;

export const request = async (options: RequestOptions) => {
  const { method, data = null, params = {}, headers = {}, host, url, showLoading = false, } = options;
  if (showLoading) Loading.show();
  try {
    const { status, data: resopnse } = await axios({
      baseURL: host,
      url,
      data,
      params,
      method,
      headers,
      timeout: 60 * 1000,
      withCredentials: true,
    });
    Loading.hide();
    if (status === 200 && resopnse.code === 8000) {
      return resopnse.result || resopnse.data || {};
    }
    if (
      resopnse.code === 10103 ||
      resopnse.code === 10102 ||
      resopnse.code === 10101
    ) {
      if (!axios.defaults['jwtError']) {
        axios.defaults['jwtError'] = true;
        Toast.show({
          data: '登陆超时',
          position: Toast.position.CENTER,
        });
        // TODO
      }
    }
    Toast.show({
      data: `${resopnse.msg} - ${resopnse.code}`,
      position: Toast.position.CENTER,
    });
    return null;
  } catch (error) {
    Loading.hide();
    const { response } = error;
    if (response) {
      const { status } = response;
      Toast.show({
        data: `服务异常 - ${status}`,
        position: Toast.position.CENTER,
      });
    } else {
      Toast.show({
        data: `网络异常，请稍后重试`,
        position: Toast.position.CENTER,
      });
    }
    return null;
  }
};
