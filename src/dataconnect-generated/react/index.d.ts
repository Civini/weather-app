import { CreateUserData, CreateUserVariables, UpdateUserBioData, UpdateUserBioVariables, DeleteUserData, GetCurrentUserData, ListAllUsersData, CreateLocationData, CreateLocationVariables, UpdateLocationData, UpdateLocationVariables, DeleteLocationData, DeleteLocationVariables, GetLocationData, GetLocationVariables, ListLocationsData, CreateWeatherData, CreateWeatherVariables, UpdateWeatherData, UpdateWeatherVariables, DeleteWeatherData, DeleteWeatherVariables, GetWeatherData, GetWeatherVariables, ListWeatherData, CreateDiscussionData, CreateDiscussionVariables, UpdateDiscussionData, UpdateDiscussionVariables, DeleteDiscussionData, DeleteDiscussionVariables, GetDiscussionData, GetDiscussionVariables, ListDiscussionsData, CreateReplyData, CreateReplyVariables, UpdateReplyData, UpdateReplyVariables, DeleteReplyData, DeleteReplyVariables, GetReplyData, GetReplyVariables, ListRepliesData, ListRepliesVariables, AddFavoriteData, AddFavoriteVariables, RemoveFavoriteData, RemoveFavoriteVariables, ListMyFavoritesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useUpdateUserBio(options?: useDataConnectMutationOptions<UpdateUserBioData, FirebaseError, UpdateUserBioVariables>): UseDataConnectMutationResult<UpdateUserBioData, UpdateUserBioVariables>;
export function useUpdateUserBio(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserBioData, FirebaseError, UpdateUserBioVariables>): UseDataConnectMutationResult<UpdateUserBioData, UpdateUserBioVariables>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetCurrentUser(options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;
export function useGetCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;

export function useListAllUsers(options?: useDataConnectQueryOptions<ListAllUsersData>): UseDataConnectQueryResult<ListAllUsersData, undefined>;
export function useListAllUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListAllUsersData>): UseDataConnectQueryResult<ListAllUsersData, undefined>;

export function useCreateLocation(options?: useDataConnectMutationOptions<CreateLocationData, FirebaseError, CreateLocationVariables>): UseDataConnectMutationResult<CreateLocationData, CreateLocationVariables>;
export function useCreateLocation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateLocationData, FirebaseError, CreateLocationVariables>): UseDataConnectMutationResult<CreateLocationData, CreateLocationVariables>;

export function useUpdateLocation(options?: useDataConnectMutationOptions<UpdateLocationData, FirebaseError, UpdateLocationVariables>): UseDataConnectMutationResult<UpdateLocationData, UpdateLocationVariables>;
export function useUpdateLocation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateLocationData, FirebaseError, UpdateLocationVariables>): UseDataConnectMutationResult<UpdateLocationData, UpdateLocationVariables>;

export function useDeleteLocation(options?: useDataConnectMutationOptions<DeleteLocationData, FirebaseError, DeleteLocationVariables>): UseDataConnectMutationResult<DeleteLocationData, DeleteLocationVariables>;
export function useDeleteLocation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteLocationData, FirebaseError, DeleteLocationVariables>): UseDataConnectMutationResult<DeleteLocationData, DeleteLocationVariables>;

export function useGetLocation(vars: GetLocationVariables, options?: useDataConnectQueryOptions<GetLocationData>): UseDataConnectQueryResult<GetLocationData, GetLocationVariables>;
export function useGetLocation(dc: DataConnect, vars: GetLocationVariables, options?: useDataConnectQueryOptions<GetLocationData>): UseDataConnectQueryResult<GetLocationData, GetLocationVariables>;

export function useListLocations(options?: useDataConnectQueryOptions<ListLocationsData>): UseDataConnectQueryResult<ListLocationsData, undefined>;
export function useListLocations(dc: DataConnect, options?: useDataConnectQueryOptions<ListLocationsData>): UseDataConnectQueryResult<ListLocationsData, undefined>;

export function useCreateWeather(options?: useDataConnectMutationOptions<CreateWeatherData, FirebaseError, CreateWeatherVariables>): UseDataConnectMutationResult<CreateWeatherData, CreateWeatherVariables>;
export function useCreateWeather(dc: DataConnect, options?: useDataConnectMutationOptions<CreateWeatherData, FirebaseError, CreateWeatherVariables>): UseDataConnectMutationResult<CreateWeatherData, CreateWeatherVariables>;

export function useUpdateWeather(options?: useDataConnectMutationOptions<UpdateWeatherData, FirebaseError, UpdateWeatherVariables>): UseDataConnectMutationResult<UpdateWeatherData, UpdateWeatherVariables>;
export function useUpdateWeather(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateWeatherData, FirebaseError, UpdateWeatherVariables>): UseDataConnectMutationResult<UpdateWeatherData, UpdateWeatherVariables>;

export function useDeleteWeather(options?: useDataConnectMutationOptions<DeleteWeatherData, FirebaseError, DeleteWeatherVariables>): UseDataConnectMutationResult<DeleteWeatherData, DeleteWeatherVariables>;
export function useDeleteWeather(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteWeatherData, FirebaseError, DeleteWeatherVariables>): UseDataConnectMutationResult<DeleteWeatherData, DeleteWeatherVariables>;

export function useGetWeather(vars: GetWeatherVariables, options?: useDataConnectQueryOptions<GetWeatherData>): UseDataConnectQueryResult<GetWeatherData, GetWeatherVariables>;
export function useGetWeather(dc: DataConnect, vars: GetWeatherVariables, options?: useDataConnectQueryOptions<GetWeatherData>): UseDataConnectQueryResult<GetWeatherData, GetWeatherVariables>;

export function useListWeather(options?: useDataConnectQueryOptions<ListWeatherData>): UseDataConnectQueryResult<ListWeatherData, undefined>;
export function useListWeather(dc: DataConnect, options?: useDataConnectQueryOptions<ListWeatherData>): UseDataConnectQueryResult<ListWeatherData, undefined>;

export function useCreateDiscussion(options?: useDataConnectMutationOptions<CreateDiscussionData, FirebaseError, CreateDiscussionVariables>): UseDataConnectMutationResult<CreateDiscussionData, CreateDiscussionVariables>;
export function useCreateDiscussion(dc: DataConnect, options?: useDataConnectMutationOptions<CreateDiscussionData, FirebaseError, CreateDiscussionVariables>): UseDataConnectMutationResult<CreateDiscussionData, CreateDiscussionVariables>;

export function useUpdateDiscussion(options?: useDataConnectMutationOptions<UpdateDiscussionData, FirebaseError, UpdateDiscussionVariables>): UseDataConnectMutationResult<UpdateDiscussionData, UpdateDiscussionVariables>;
export function useUpdateDiscussion(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDiscussionData, FirebaseError, UpdateDiscussionVariables>): UseDataConnectMutationResult<UpdateDiscussionData, UpdateDiscussionVariables>;

export function useDeleteDiscussion(options?: useDataConnectMutationOptions<DeleteDiscussionData, FirebaseError, DeleteDiscussionVariables>): UseDataConnectMutationResult<DeleteDiscussionData, DeleteDiscussionVariables>;
export function useDeleteDiscussion(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteDiscussionData, FirebaseError, DeleteDiscussionVariables>): UseDataConnectMutationResult<DeleteDiscussionData, DeleteDiscussionVariables>;

export function useGetDiscussion(vars: GetDiscussionVariables, options?: useDataConnectQueryOptions<GetDiscussionData>): UseDataConnectQueryResult<GetDiscussionData, GetDiscussionVariables>;
export function useGetDiscussion(dc: DataConnect, vars: GetDiscussionVariables, options?: useDataConnectQueryOptions<GetDiscussionData>): UseDataConnectQueryResult<GetDiscussionData, GetDiscussionVariables>;

export function useListDiscussions(options?: useDataConnectQueryOptions<ListDiscussionsData>): UseDataConnectQueryResult<ListDiscussionsData, undefined>;
export function useListDiscussions(dc: DataConnect, options?: useDataConnectQueryOptions<ListDiscussionsData>): UseDataConnectQueryResult<ListDiscussionsData, undefined>;

export function useCreateReply(options?: useDataConnectMutationOptions<CreateReplyData, FirebaseError, CreateReplyVariables>): UseDataConnectMutationResult<CreateReplyData, CreateReplyVariables>;
export function useCreateReply(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReplyData, FirebaseError, CreateReplyVariables>): UseDataConnectMutationResult<CreateReplyData, CreateReplyVariables>;

export function useUpdateReply(options?: useDataConnectMutationOptions<UpdateReplyData, FirebaseError, UpdateReplyVariables>): UseDataConnectMutationResult<UpdateReplyData, UpdateReplyVariables>;
export function useUpdateReply(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReplyData, FirebaseError, UpdateReplyVariables>): UseDataConnectMutationResult<UpdateReplyData, UpdateReplyVariables>;

export function useDeleteReply(options?: useDataConnectMutationOptions<DeleteReplyData, FirebaseError, DeleteReplyVariables>): UseDataConnectMutationResult<DeleteReplyData, DeleteReplyVariables>;
export function useDeleteReply(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReplyData, FirebaseError, DeleteReplyVariables>): UseDataConnectMutationResult<DeleteReplyData, DeleteReplyVariables>;

export function useGetReply(vars: GetReplyVariables, options?: useDataConnectQueryOptions<GetReplyData>): UseDataConnectQueryResult<GetReplyData, GetReplyVariables>;
export function useGetReply(dc: DataConnect, vars: GetReplyVariables, options?: useDataConnectQueryOptions<GetReplyData>): UseDataConnectQueryResult<GetReplyData, GetReplyVariables>;

export function useListReplies(vars: ListRepliesVariables, options?: useDataConnectQueryOptions<ListRepliesData>): UseDataConnectQueryResult<ListRepliesData, ListRepliesVariables>;
export function useListReplies(dc: DataConnect, vars: ListRepliesVariables, options?: useDataConnectQueryOptions<ListRepliesData>): UseDataConnectQueryResult<ListRepliesData, ListRepliesVariables>;

export function useAddFavorite(options?: useDataConnectMutationOptions<AddFavoriteData, FirebaseError, AddFavoriteVariables>): UseDataConnectMutationResult<AddFavoriteData, AddFavoriteVariables>;
export function useAddFavorite(dc: DataConnect, options?: useDataConnectMutationOptions<AddFavoriteData, FirebaseError, AddFavoriteVariables>): UseDataConnectMutationResult<AddFavoriteData, AddFavoriteVariables>;

export function useRemoveFavorite(options?: useDataConnectMutationOptions<RemoveFavoriteData, FirebaseError, RemoveFavoriteVariables>): UseDataConnectMutationResult<RemoveFavoriteData, RemoveFavoriteVariables>;
export function useRemoveFavorite(dc: DataConnect, options?: useDataConnectMutationOptions<RemoveFavoriteData, FirebaseError, RemoveFavoriteVariables>): UseDataConnectMutationResult<RemoveFavoriteData, RemoveFavoriteVariables>;

export function useListMyFavorites(options?: useDataConnectQueryOptions<ListMyFavoritesData>): UseDataConnectQueryResult<ListMyFavoritesData, undefined>;
export function useListMyFavorites(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyFavoritesData>): UseDataConnectQueryResult<ListMyFavoritesData, undefined>;
