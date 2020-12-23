import { get, post } from '@/utils/http';

const BASEURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

export const net = {
  /**
   * 项目的 get 请求
   * @param {string}} url get 之后的路径，包括 /
   * @param {RequestInit} options 配置项
   */
  get(url, options) {
    return get(`${BASEURL}/api/get${url}`, options);
  },
  /**
   * 项目的 post 请求
   * @param {string} url url 中 post 之后的路径，包括 /
   * @param {any} params 请求参数
   * @param {RequestInit} options 配置项
   */
  post(url, params, options) {
    return post(`${BASEURL}/api/post${url}`, params, options);
  },
};
