import {request} from '../utils/request';

// const {host} = process.env.APPCONFIG;

const host = 'https://tech-dev.api.fuliaoyi.com';

/**
 * 测试请求
 */
export const getTablist = (data, params) => {
  return request({
    url: 'mall/operation/tabs/page',
    method: 'GET',
    data,
    host,
    params,
    showLoading: true,
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
    host,
    params,
  });
};
