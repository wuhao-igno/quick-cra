import { message } from 'antd';

/**
 * 基础请求函数
 *
 * @template T
 * @param {string} url 请求的路径
 * @param {RequestInit} options fetch 选项
 * @returns {import('../type').Resp<T | ReadableStream<Uint8Array>>}
 */
export const http = async (url, options) => {
  try {
    const resp = await fetch(url, options);
    if (resp.ok && resp.status === 200) {
      const contentType = resp.headers.get('content-type') || '';
      if (contentType.indexOf('application/json') >= 0) {
        return resp.json();
      }
      return {
        ec: 0,
        em: '',
        data: resp,
      };
    }
    return {
      ec: resp.status,
      em: resp.statusText,
      error: resp.body,
    };
  } catch (e) {
    return {
      ec: -1,
      em: '前端错误',
      error: e,
    };
  }
};

/**
 * 具有在基本的错误提示的 GET 函数
 *
 * @template T
 * @param {string} url 请求的路径
 * @param {RequestInit} options fetch 选项
 * @returns {T | null}
 */
export const get = async (url, options) => {
  const { ec, em, data } = await http(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    ...options,
  });
  if (ec) {
    message.error(`Code: [${ec}]: ${em}`);
    return null;
  }
  return data;
};

/**
 * 具有在基本的错误提示的 POST 函数
 *
 * @template T
 * @param {string} url 请求的路径
 * @param {RequestInit} options fetch 选项
 * @param {any} reqParams 请求体
 * @returns {T | null}
 */
export const post = async (url, reqParams, options) => {
  const { ec, em, data } = await http(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(reqParams),
    ...options,
  });
  if (ec) {
    message.error(`Code: [${ec}]: ${em}`);
    return null;
  }
  return data;
};
