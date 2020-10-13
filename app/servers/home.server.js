import {request} from '../utils/request';

// const {gateWayApi} = process.env.MODULE;
// const {host} = gateWayApi;

/**
 * 测试请求
 */
export const testRequest = (data, params) => {
  request({
    url: 'mall/json/city.json',
    method: 'GET',
    data,
    host: 'https://fly-resource.oss-cn-shanghai.aliyuncs.com/',
    params,
  });
};

export const empt = () => {};
