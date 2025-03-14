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
  CreateUserDto,
  OutputUserDto,
  UpdateUserDto
} from '.././model';

import { customInstance } from '../../services/api';
import type { ErrorType, BodyType } from '../../services/api';


type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];



/**
 * Create a new user
 */
export const usersControllerCreate = (
    createUserDto: BodyType<CreateUserDto>,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputUserDto>(
      {url: `/users`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: createUserDto, signal
    },
      options);
    }
  


export const getUsersControllerCreateMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerCreate>>, TError,{data: BodyType<CreateUserDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof usersControllerCreate>>, TError,{data: BodyType<CreateUserDto>}, TContext> => {
    
const mutationKey = ['usersControllerCreate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usersControllerCreate>>, {data: BodyType<CreateUserDto>}> = (props) => {
          const {data} = props ?? {};

          return  usersControllerCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UsersControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerCreate>>>
    export type UsersControllerCreateMutationBody = BodyType<CreateUserDto>
    export type UsersControllerCreateMutationError = ErrorType<void>

    export const useUsersControllerCreate = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerCreate>>, TError,{data: BodyType<CreateUserDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof usersControllerCreate>>,
        TError,
        {data: BodyType<CreateUserDto>},
        TContext
      > => {

      const mutationOptions = getUsersControllerCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * List all users
 */
export const usersControllerFindAll = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputUserDto[]>(
      {url: `/users`, method: 'GET', signal
    },
      options);
    }
  

export const getUsersControllerFindAllQueryKey = () => {
    return [`/users`] as const;
    }

    
export const getUsersControllerFindAllQueryOptions = <TData = Awaited<ReturnType<typeof usersControllerFindAll>>, TError = ErrorType<void>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUsersControllerFindAllQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof usersControllerFindAll>>> = ({ signal }) => usersControllerFindAll(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindAll>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type UsersControllerFindAllQueryResult = NonNullable<Awaited<ReturnType<typeof usersControllerFindAll>>>
export type UsersControllerFindAllQueryError = ErrorType<void>


export function useUsersControllerFindAll<TData = Awaited<ReturnType<typeof usersControllerFindAll>>, TError = ErrorType<void>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindAll>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerFindAll>>,
          TError,
          Awaited<ReturnType<typeof usersControllerFindAll>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useUsersControllerFindAll<TData = Awaited<ReturnType<typeof usersControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindAll>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerFindAll>>,
          TError,
          Awaited<ReturnType<typeof usersControllerFindAll>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useUsersControllerFindAll<TData = Awaited<ReturnType<typeof usersControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useUsersControllerFindAll<TData = Awaited<ReturnType<typeof usersControllerFindAll>>, TError = ErrorType<void>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindAll>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getUsersControllerFindAllQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Get a user by id
 */
export const usersControllerFindOne = (
    id: string,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<OutputUserDto>(
      {url: `/users/${id}`, method: 'GET', signal
    },
      options);
    }
  

export const getUsersControllerFindOneQueryKey = (id: string,) => {
    return [`/users/${id}`] as const;
    }

    
export const getUsersControllerFindOneQueryOptions = <TData = Awaited<ReturnType<typeof usersControllerFindOne>>, TError = ErrorType<void>>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getUsersControllerFindOneQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof usersControllerFindOne>>> = ({ signal }) => usersControllerFindOne(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindOne>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type UsersControllerFindOneQueryResult = NonNullable<Awaited<ReturnType<typeof usersControllerFindOne>>>
export type UsersControllerFindOneQueryError = ErrorType<void>


export function useUsersControllerFindOne<TData = Awaited<ReturnType<typeof usersControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindOne>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerFindOne>>,
          TError,
          Awaited<ReturnType<typeof usersControllerFindOne>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useUsersControllerFindOne<TData = Awaited<ReturnType<typeof usersControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindOne>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof usersControllerFindOne>>,
          TError,
          Awaited<ReturnType<typeof usersControllerFindOne>>
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useUsersControllerFindOne<TData = Awaited<ReturnType<typeof usersControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }

export function useUsersControllerFindOne<TData = Awaited<ReturnType<typeof usersControllerFindOne>>, TError = ErrorType<void>>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof usersControllerFindOne>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getUsersControllerFindOneQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Update a user
 */
export const usersControllerUpdate = (
    id: string,
    updateUserDto: BodyType<UpdateUserDto>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<OutputUserDto>(
      {url: `/users/${id}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: updateUserDto
    },
      options);
    }
  


export const getUsersControllerUpdateMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerUpdate>>, TError,{id: string;data: BodyType<UpdateUserDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof usersControllerUpdate>>, TError,{id: string;data: BodyType<UpdateUserDto>}, TContext> => {
    
const mutationKey = ['usersControllerUpdate'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usersControllerUpdate>>, {id: string;data: BodyType<UpdateUserDto>}> = (props) => {
          const {id,data} = props ?? {};

          return  usersControllerUpdate(id,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UsersControllerUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerUpdate>>>
    export type UsersControllerUpdateMutationBody = BodyType<UpdateUserDto>
    export type UsersControllerUpdateMutationError = ErrorType<void>

    export const useUsersControllerUpdate = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerUpdate>>, TError,{id: string;data: BodyType<UpdateUserDto>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof usersControllerUpdate>>,
        TError,
        {id: string;data: BodyType<UpdateUserDto>},
        TContext
      > => {

      const mutationOptions = getUsersControllerUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * Delete a user
 */
export const usersControllerRemove = (
    id: string,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/users/${id}`, method: 'DELETE'
    },
      options);
    }
  


export const getUsersControllerRemoveMutationOptions = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerRemove>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof usersControllerRemove>>, TError,{id: string}, TContext> => {
    
const mutationKey = ['usersControllerRemove'];
const {mutation: mutationOptions, request: requestOptions} = options ?
      options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey ?
      options
      : {...options, mutation: {...options.mutation, mutationKey}}
      : {mutation: { mutationKey, }, request: undefined};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof usersControllerRemove>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  usersControllerRemove(id,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type UsersControllerRemoveMutationResult = NonNullable<Awaited<ReturnType<typeof usersControllerRemove>>>
    
    export type UsersControllerRemoveMutationError = ErrorType<void>

    export const useUsersControllerRemove = <TError = ErrorType<void>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof usersControllerRemove>>, TError,{id: string}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof usersControllerRemove>>,
        TError,
        {id: string},
        TContext
      > => {

      const mutationOptions = getUsersControllerRemoveMutationOptions(options);

      return useMutation(mutationOptions);
    }
    