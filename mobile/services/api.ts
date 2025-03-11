import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
const BASE_URL = "http://192.168.0.200:3000/";

export const AXIOS_INSTANCE = axios.create({ baseURL: BASE_URL });

export const customInstance = <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig,
): Promise<T> => {
	const source = axios.CancelToken.source();
	const promise = AXIOS_INSTANCE({
		...config,
		...options,
		cancelToken: source.token,
	}).then(({ data }) => data);

	// @ts-ignore
	promise.cancel = () => {
		source.cancel("Query was cancelled");
	};
	return promise;
};

export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
