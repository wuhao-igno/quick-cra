export interface Resp<T = unknown> {
  ec: number;
  em: string;
  data: T;
  error: Error | Response;
};
