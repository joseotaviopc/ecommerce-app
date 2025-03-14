/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * Teste mobile
 * API para o teste mobile
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  CreateOrderDto,
  OutputOrderDto,
  UpdateOrderDto
} from '.././model';

import { customInstance } from '../../services/api';
import type { ErrorType, BodyType } from '../../services/api';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Create a new order
 */
export const orderControllerCreate = (
    createOrderDto: BodyType<CreateOrderDto>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputOrderDto>(
      {url: `/order`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createOrderDto, signal
    },
      options);
    }
  


export const getOrderControllerCreateMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof orderControllerCreate>>, TError,{data: BodyType<CreateOrderDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof orderControllerCreate>>, TError,{data: BodyType<CreateOrderDto>}, TContext> => {
    
const mutationKey = ['orderControllerCreate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof orderControllerCreate>>, {data: BodyType<CreateOrderDto>}> = (props) => {
          const {data} = props ?? {};

          return  orderControllerCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type OrderControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof orderControllerCreate>>>
    export type OrderControllerCreateMutationBody = BodyType<CreateOrderDto>
    export type OrderControllerCreateMutationError = ErrorType<void>

    export const useOrderControllerCreate = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof orderControllerCreate>>, TError,{data: BodyType<CreateOrderDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof orderControllerCreate>>,
        TError,
        {data: BodyType<CreateOrderDto>},
        TContext
      > => {

      const mutationOptions = getOrderControllerCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Get all orders
 */
export const orderControllerFindAll = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputOrderDto[]>(
      {url: `/order`, method: 'GET', signal
    },
      options);
    }
  

export const getOrderControllerFindAllQueryKey = () => {
    return [`/order`] as const;
    }

    
export const getOrderControllerFindAllQueryOptions = <TData = Awaited<ReturnType<typeof orderControllerFindAll>>, TError = ErrorType<void>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getOrderControllerFindAllQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof orderControllerFindAll>>> = ({ signal }) => orderControllerFindAll(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindAll>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type OrderControllerFindAllQueryResult = NonNullable<Awaited<ReturnType<typeof orderControllerFindAll>>>
export type OrderControllerFindAllQueryError = ErrorType<void>


export function useOrderControllerFindAll<TData = Awaited<ReturnType<typeof orderControllerFindAll>>, TError = ErrorType<void>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindAll>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof orderControllerFindAll>>,
          TError,
          Awaited<ReturnType<typeof orderControllerFindAll>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useOrderControllerFindAll<TData = Awaited<ReturnType<typeof orderControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindAll>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof orderControllerFindAll>>,
          TError,
          Awaited<ReturnType<typeof orderControllerFindAll>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useOrderControllerFindAll<TData = Awaited<ReturnType<typeof orderControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useOrderControllerFindAll<TData = Awaited<ReturnType<typeof orderControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getOrderControllerFindAllQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get a order by id
 */
export const orderControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputOrderDto>(
      {url: `/order/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getOrderControllerFindOneQueryKey = (id: string,) => {
    return [`/order/${id}`] as const;
    }

    
export const getOrderControllerFindOneQueryOptions = <TData = Awaited<ReturnType<typeof orderControllerFindOne>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getOrderControllerFindOneQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof orderControllerFindOne>>> = ({ signal }) => orderControllerFindOne(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindOne>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type OrderControllerFindOneQueryResult = NonNullable<Awaited<ReturnType<typeof orderControllerFindOne>>>
export type OrderControllerFindOneQueryError = ErrorType<void>


export function useOrderControllerFindOne<TData = Awaited<ReturnType<typeof orderControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindOne>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof orderControllerFindOne>>,
          TError,
          Awaited<ReturnType<typeof orderControllerFindOne>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useOrderControllerFindOne<TData = Awaited<ReturnType<typeof orderControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindOne>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof orderControllerFindOne>>,
          TError,
          Awaited<ReturnType<typeof orderControllerFindOne>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useOrderControllerFindOne<TData = Awaited<ReturnType<typeof orderControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useOrderControllerFindOne<TData = Awaited<ReturnType<typeof orderControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof orderControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getOrderControllerFindOneQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Update a order by id
 */
export const orderControllerUpdate = (
    id: string,
    updateOrderDto: BodyType<UpdateOrderDto>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<OutputOrderDto>(
      {url: `/order/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateOrderDto
    },
      options);
    }
  


export const getOrderControllerUpdateMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof orderControllerUpdate>>, TError,{id: string;data: BodyType<UpdateOrderDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof orderControllerUpdate>>, TError,{id: string;data: BodyType<UpdateOrderDto>}, TContext> => {
    
const mutationKey = ['orderControllerUpdate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof orderControllerUpdate>>, {id: string;data: BodyType<UpdateOrderDto>}> = (props) => {
          const {id,data} = props ?? {};

          return  orderControllerUpdate(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type OrderControllerUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof orderControllerUpdate>>>
    export type OrderControllerUpdateMutationBody = BodyType<UpdateOrderDto>
    export type OrderControllerUpdateMutationError = ErrorType<void>

    export const useOrderControllerUpdate = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof orderControllerUpdate>>, TError,{id: string;data: BodyType<UpdateOrderDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof orderControllerUpdate>>,
        TError,
        {id: string;data: BodyType<UpdateOrderDto>},
        TContext
      > => {

      const mutationOptions = getOrderControllerUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Delete a order by id
 */
export const orderControllerRemove = (
    id: string,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/order/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getOrderControllerRemoveMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof orderControllerRemove>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof orderControllerRemove>>, TError,{id: string}, TContext> => {
    
const mutationKey = ['orderControllerRemove'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof orderControllerRemove>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  orderControllerRemove(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type OrderControllerRemoveMutationResult = NonNullable<Awaited<ReturnType<typeof orderControllerRemove>>>
    
    export type OrderControllerRemoveMutationError = ErrorType<void>

    export const useOrderControllerRemove = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof orderControllerRemove>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof orderControllerRemove>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getOrderControllerRemoveMutationOptions(options);

      return useMutation(mutationOptions);
    }
    