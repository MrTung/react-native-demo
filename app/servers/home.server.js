import { request } from '../utils/request';

// const {gateWayApi} = process.env.MODULE;
// const {host} = gateWayApi;

/**
 * 测试请求
 */
export const getTablist = (data, params) => {
  return request({
    url: 'mall/operation/tabs/page',
    method: 'GET',
    data,
    host: 'https://tech-dev.api.fuliaoyi.com/',
    params,
  });
};

/**
 * 测试POST请求
 */
export const getSpuList = (data, params) => {
  return request({
    url: 'mall/spu',
    method: 'POST',
    data,
    host: 'https://tech-dev.api.fuliaoyi.com/',
    params,
  });
};
