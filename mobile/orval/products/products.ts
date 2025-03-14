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
  CreateProductDto,
  OutputProductDto,
  UpdateProductDto
} from '.././model';

import { customInstance } from '../../services/api';
import type { ErrorType, BodyType } from '../../services/api';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Create a new product
 */
export const productsControllerCreate = (
    createProductDto: BodyType<CreateProductDto>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputProductDto>(
      {url: `/products`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createProductDto, signal
    },
      options);
    }
  


export const getProductsControllerCreateMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof productsControllerCreate>>, TError,{data: BodyType<CreateProductDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof productsControllerCreate>>, TError,{data: BodyType<CreateProductDto>}, TContext> => {
    
const mutationKey = ['productsControllerCreate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof productsControllerCreate>>, {data: BodyType<CreateProductDto>}> = (props) => {
          const {data} = props ?? {};

          return  productsControllerCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProductsControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof productsControllerCreate>>>
    export type ProductsControllerCreateMutationBody = BodyType<CreateProductDto>
    export type ProductsControllerCreateMutationError = ErrorType<void>

    export const useProductsControllerCreate = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof productsControllerCreate>>, TError,{data: BodyType<CreateProductDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof productsControllerCreate>>,
        TError,
        {data: BodyType<CreateProductDto>},
        TContext
      > => {

      const mutationOptions = getProductsControllerCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * List all products
 */
export const productsControllerFindAll = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputProductDto[]>(
      {url: `/products`, method: 'GET', signal
    },
      options);
    }
  

export const getProductsControllerFindAllQueryKey = () => {
    return [`/products`] as const;
    }

    
export const getProductsControllerFindAllQueryOptions = <TData = Awaited<ReturnType<typeof productsControllerFindAll>>, TError = ErrorType<void>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getProductsControllerFindAllQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof productsControllerFindAll>>> = ({ signal }) => productsControllerFindAll(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindAll>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ProductsControllerFindAllQueryResult = NonNullable<Awaited<ReturnType<typeof productsControllerFindAll>>>
export type ProductsControllerFindAllQueryError = ErrorType<void>


export function useProductsControllerFindAll<TData = Awaited<ReturnType<typeof productsControllerFindAll>>, TError = ErrorType<void>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindAll>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof productsControllerFindAll>>,
          TError,
          Awaited<ReturnType<typeof productsControllerFindAll>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProductsControllerFindAll<TData = Awaited<ReturnType<typeof productsControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindAll>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof productsControllerFindAll>>,
          TError,
          Awaited<ReturnType<typeof productsControllerFindAll>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProductsControllerFindAll<TData = Awaited<ReturnType<typeof productsControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useProductsControllerFindAll<TData = Awaited<ReturnType<typeof productsControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getProductsControllerFindAllQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get a product by id
 */
export const productsControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputProductDto>(
      {url: `/products/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getProductsControllerFindOneQueryKey = (id: string,) => {
    return [`/products/${id}`] as const;
    }

    
export const getProductsControllerFindOneQueryOptions = <TData = Awaited<ReturnType<typeof productsControllerFindOne>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getProductsControllerFindOneQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof productsControllerFindOne>>> = ({ signal }) => productsControllerFindOne(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindOne>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type ProductsControllerFindOneQueryResult = NonNullable<Awaited<ReturnType<typeof productsControllerFindOne>>>
export type ProductsControllerFindOneQueryError = ErrorType<void>


export function useProductsControllerFindOne<TData = Awaited<ReturnType<typeof productsControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindOne>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof productsControllerFindOne>>,
          TError,
          Awaited<ReturnType<typeof productsControllerFindOne>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProductsControllerFindOne<TData = Awaited<ReturnType<typeof productsControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindOne>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof productsControllerFindOne>>,
          TError,
          Awaited<ReturnType<typeof productsControllerFindOne>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useProductsControllerFindOne<TData = Awaited<ReturnType<typeof productsControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useProductsControllerFindOne<TData = Awaited<ReturnType<typeof productsControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof productsControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getProductsControllerFindOneQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Update a product
 */
export const productsControllerUpdate = (
    id: string,
    updateProductDto: BodyType<UpdateProductDto>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<OutputProductDto>(
      {url: `/products/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateProductDto
    },
      options);
    }
  


export const getProductsControllerUpdateMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof productsControllerUpdate>>, TError,{id: string;data: BodyType<UpdateProductDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof productsControllerUpdate>>, TError,{id: string;data: BodyType<UpdateProductDto>}, TContext> => {
    
const mutationKey = ['productsControllerUpdate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof productsControllerUpdate>>, {id: string;data: BodyType<UpdateProductDto>}> = (props) => {
          const {id,data} = props ?? {};

          return  productsControllerUpdate(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProductsControllerUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof productsControllerUpdate>>>
    export type ProductsControllerUpdateMutationBody = BodyType<UpdateProductDto>
    export type ProductsControllerUpdateMutationError = ErrorType<void>

    export const useProductsControllerUpdate = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof productsControllerUpdate>>, TError,{id: string;data: BodyType<UpdateProductDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof productsControllerUpdate>>,
        TError,
        {id: string;data: BodyType<UpdateProductDto>},
        TContext
      > => {

      const mutationOptions = getProductsControllerUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Delete a product
 */
export const productsControllerRemove = (
    id: string,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/products/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getProductsControllerRemoveMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof productsControllerRemove>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof productsControllerRemove>>, TError,{id: string}, TContext> => {
    
const mutationKey = ['productsControllerRemove'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof productsControllerRemove>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  productsControllerRemove(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ProductsControllerRemoveMutationResult = NonNullable<Awaited<ReturnType<typeof productsControllerRemove>>>
    
    export type ProductsControllerRemoveMutationError = ErrorType<void>

    export const useProductsControllerRemove = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof productsControllerRemove>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof productsControllerRemove>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getProductsControllerRemoveMutationOptions(options);

      return useMutation(mutationOptions);
    }
    