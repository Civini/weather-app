import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddFavoriteData {
  favorite_insert: Favorite_Key;
}

export interface AddFavoriteVariables {
  locId: UUIDString;
}

export interface CreateDiscussionData {
  discussion_insert: Discussion_Key;
}

export interface CreateDiscussionVariables {
  content: string;
  locId: UUIDString;
}

export interface CreateLocationData {
  location_insert: Location_Key;
}

export interface CreateLocationVariables {
  cityName: string;
  countryCode: string;
  lat: number;
  lon: number;
}

export interface CreateReplyData {
  reply_insert: Reply_Key;
}

export interface CreateReplyVariables {
  content: string;
  discId: UUIDString;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  username: string;
  email: string;
}

export interface CreateWeatherData {
  weatherReport_insert: WeatherReport_Key;
}

export interface CreateWeatherVariables {
  temp: number;
  cond: string;
  time: TimestampString;
  locId: UUIDString;
}

export interface DeleteDiscussionData {
  discussion_delete?: Discussion_Key | null;
}

export interface DeleteDiscussionVariables {
  id: UUIDString;
}

export interface DeleteLocationData {
  location_delete?: Location_Key | null;
}

export interface DeleteLocationVariables {
  id: UUIDString;
}

export interface DeleteReplyData {
  reply_delete?: Reply_Key | null;
}

export interface DeleteReplyVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface DeleteWeatherData {
  weatherReport_delete?: WeatherReport_Key | null;
}

export interface DeleteWeatherVariables {
  id: UUIDString;
}

export interface Discussion_Key {
  id: UUIDString;
  __typename?: 'Discussion_Key';
}

export interface Favorite_Key {
  id: UUIDString;
  __typename?: 'Favorite_Key';
}

export interface GetCurrentUserData {
  user?: {
    username: string;
    email: string;
    bio?: string | null;
  };
}

export interface GetDiscussionData {
  discussion?: {
    content: string;
    user: {
      username: string;
    };
  };
}

export interface GetDiscussionVariables {
  id: UUIDString;
}

export interface GetLocationData {
  location?: {
    cityName: string;
    countryCode: string;
  };
}

export interface GetLocationVariables {
  id: UUIDString;
}

export interface GetReplyData {
  reply?: {
    content: string;
    user: {
      username: string;
    };
  };
}

export interface GetReplyVariables {
  id: UUIDString;
}

export interface GetWeatherData {
  weatherReport?: {
    temperature: number;
    condition: string;
  };
}

export interface GetWeatherVariables {
  id: UUIDString;
}

export interface ListAllUsersData {
  users: ({
    username: string;
  })[];
}

export interface ListDiscussionsData {
  discussions: ({
    content: string;
    createdAt: TimestampString;
  })[];
}

export interface ListLocationsData {
  locations: ({
    cityName: string;
  })[];
}

export interface ListMyFavoritesData {
  favorites: ({
    location: {
      cityName: string;
    };
  })[];
}

export interface ListRepliesData {
  replies: ({
    content: string;
  })[];
}

export interface ListRepliesVariables {
  discId: UUIDString;
}

export interface ListWeatherData {
  weatherReports: ({
    temperature: number;
    condition: string;
  })[];
}

export interface Location_Key {
  id: UUIDString;
  __typename?: 'Location_Key';
}

export interface RemoveFavoriteData {
  favorite_delete?: Favorite_Key | null;
}

export interface RemoveFavoriteVariables {
  id: UUIDString;
}

export interface Reply_Key {
  id: UUIDString;
  __typename?: 'Reply_Key';
}

export interface UpdateDiscussionData {
  discussion_update?: Discussion_Key | null;
}

export interface UpdateDiscussionVariables {
  id: UUIDString;
  content: string;
}

export interface UpdateLocationData {
  location_update?: Location_Key | null;
}

export interface UpdateLocationVariables {
  id: UUIDString;
  timezone: string;
}

export interface UpdateReplyData {
  reply_update?: Reply_Key | null;
}

export interface UpdateReplyVariables {
  id: UUIDString;
  content: string;
}

export interface UpdateUserBioData {
  user_update?: User_Key | null;
}

export interface UpdateUserBioVariables {
  bio: string;
}

export interface UpdateWeatherData {
  weatherReport_update?: WeatherReport_Key | null;
}

export interface UpdateWeatherVariables {
  id: UUIDString;
  temp: number;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WeatherReport_Key {
  id: UUIDString;
  __typename?: 'WeatherReport_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserBioRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
  operationName: string;
}
export const updateUserBioRef: UpdateUserBioRef;

export function updateUserBio(vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;
export function updateUserBio(dc: DataConnect, vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCurrentUserData, undefined>;
  operationName: string;
}
export const getCurrentUserRef: GetCurrentUserRef;

export function getCurrentUser(options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;
export function getCurrentUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface ListAllUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllUsersData, undefined>;
  operationName: string;
}
export const listAllUsersRef: ListAllUsersRef;

export function listAllUsers(options?: ExecuteQueryOptions): QueryPromise<ListAllUsersData, undefined>;
export function listAllUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllUsersData, undefined>;

interface CreateLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLocationVariables): MutationRef<CreateLocationData, CreateLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateLocationVariables): MutationRef<CreateLocationData, CreateLocationVariables>;
  operationName: string;
}
export const createLocationRef: CreateLocationRef;

export function createLocation(vars: CreateLocationVariables): MutationPromise<CreateLocationData, CreateLocationVariables>;
export function createLocation(dc: DataConnect, vars: CreateLocationVariables): MutationPromise<CreateLocationData, CreateLocationVariables>;

interface UpdateLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
  operationName: string;
}
export const updateLocationRef: UpdateLocationRef;

export function updateLocation(vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;
export function updateLocation(dc: DataConnect, vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;

interface DeleteLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
  operationName: string;
}
export const deleteLocationRef: DeleteLocationRef;

export function deleteLocation(vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;
export function deleteLocation(dc: DataConnect, vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;

interface GetLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
  operationName: string;
}
export const getLocationRef: GetLocationRef;

export function getLocation(vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;
export function getLocation(dc: DataConnect, vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;

interface ListLocationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLocationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListLocationsData, undefined>;
  operationName: string;
}
export const listLocationsRef: ListLocationsRef;

export function listLocations(options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;
export function listLocations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;

interface CreateWeatherRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWeatherVariables): MutationRef<CreateWeatherData, CreateWeatherVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWeatherVariables): MutationRef<CreateWeatherData, CreateWeatherVariables>;
  operationName: string;
}
export const createWeatherRef: CreateWeatherRef;

export function createWeather(vars: CreateWeatherVariables): MutationPromise<CreateWeatherData, CreateWeatherVariables>;
export function createWeather(dc: DataConnect, vars: CreateWeatherVariables): MutationPromise<CreateWeatherData, CreateWeatherVariables>;

interface UpdateWeatherRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWeatherVariables): MutationRef<UpdateWeatherData, UpdateWeatherVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateWeatherVariables): MutationRef<UpdateWeatherData, UpdateWeatherVariables>;
  operationName: string;
}
export const updateWeatherRef: UpdateWeatherRef;

export function updateWeather(vars: UpdateWeatherVariables): MutationPromise<UpdateWeatherData, UpdateWeatherVariables>;
export function updateWeather(dc: DataConnect, vars: UpdateWeatherVariables): MutationPromise<UpdateWeatherData, UpdateWeatherVariables>;

interface DeleteWeatherRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWeatherVariables): MutationRef<DeleteWeatherData, DeleteWeatherVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteWeatherVariables): MutationRef<DeleteWeatherData, DeleteWeatherVariables>;
  operationName: string;
}
export const deleteWeatherRef: DeleteWeatherRef;

export function deleteWeather(vars: DeleteWeatherVariables): MutationPromise<DeleteWeatherData, DeleteWeatherVariables>;
export function deleteWeather(dc: DataConnect, vars: DeleteWeatherVariables): MutationPromise<DeleteWeatherData, DeleteWeatherVariables>;

interface GetWeatherRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWeatherVariables): QueryRef<GetWeatherData, GetWeatherVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWeatherVariables): QueryRef<GetWeatherData, GetWeatherVariables>;
  operationName: string;
}
export const getWeatherRef: GetWeatherRef;

export function getWeather(vars: GetWeatherVariables, options?: ExecuteQueryOptions): QueryPromise<GetWeatherData, GetWeatherVariables>;
export function getWeather(dc: DataConnect, vars: GetWeatherVariables, options?: ExecuteQueryOptions): QueryPromise<GetWeatherData, GetWeatherVariables>;

interface ListWeatherRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListWeatherData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListWeatherData, undefined>;
  operationName: string;
}
export const listWeatherRef: ListWeatherRef;

export function listWeather(options?: ExecuteQueryOptions): QueryPromise<ListWeatherData, undefined>;
export function listWeather(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListWeatherData, undefined>;

interface CreateDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
  operationName: string;
}
export const createDiscussionRef: CreateDiscussionRef;

export function createDiscussion(vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;
export function createDiscussion(dc: DataConnect, vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;

interface UpdateDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
  operationName: string;
}
export const updateDiscussionRef: UpdateDiscussionRef;

export function updateDiscussion(vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;
export function updateDiscussion(dc: DataConnect, vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;

interface DeleteDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
  operationName: string;
}
export const deleteDiscussionRef: DeleteDiscussionRef;

export function deleteDiscussion(vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;
export function deleteDiscussion(dc: DataConnect, vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;

interface GetDiscussionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
  operationName: string;
}
export const getDiscussionRef: GetDiscussionRef;

export function getDiscussion(vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;
export function getDiscussion(dc: DataConnect, vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;

interface ListDiscussionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDiscussionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListDiscussionsData, undefined>;
  operationName: string;
}
export const listDiscussionsRef: ListDiscussionsRef;

export function listDiscussions(options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;
export function listDiscussions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;

interface CreateReplyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReplyVariables): MutationRef<CreateReplyData, CreateReplyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReplyVariables): MutationRef<CreateReplyData, CreateReplyVariables>;
  operationName: string;
}
export const createReplyRef: CreateReplyRef;

export function createReply(vars: CreateReplyVariables): MutationPromise<CreateReplyData, CreateReplyVariables>;
export function createReply(dc: DataConnect, vars: CreateReplyVariables): MutationPromise<CreateReplyData, CreateReplyVariables>;

interface UpdateReplyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReplyVariables): MutationRef<UpdateReplyData, UpdateReplyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateReplyVariables): MutationRef<UpdateReplyData, UpdateReplyVariables>;
  operationName: string;
}
export const updateReplyRef: UpdateReplyRef;

export function updateReply(vars: UpdateReplyVariables): MutationPromise<UpdateReplyData, UpdateReplyVariables>;
export function updateReply(dc: DataConnect, vars: UpdateReplyVariables): MutationPromise<UpdateReplyData, UpdateReplyVariables>;

interface DeleteReplyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReplyVariables): MutationRef<DeleteReplyData, DeleteReplyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteReplyVariables): MutationRef<DeleteReplyData, DeleteReplyVariables>;
  operationName: string;
}
export const deleteReplyRef: DeleteReplyRef;

export function deleteReply(vars: DeleteReplyVariables): MutationPromise<DeleteReplyData, DeleteReplyVariables>;
export function deleteReply(dc: DataConnect, vars: DeleteReplyVariables): MutationPromise<DeleteReplyData, DeleteReplyVariables>;

interface GetReplyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetReplyVariables): QueryRef<GetReplyData, GetReplyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetReplyVariables): QueryRef<GetReplyData, GetReplyVariables>;
  operationName: string;
}
export const getReplyRef: GetReplyRef;

export function getReply(vars: GetReplyVariables, options?: ExecuteQueryOptions): QueryPromise<GetReplyData, GetReplyVariables>;
export function getReply(dc: DataConnect, vars: GetReplyVariables, options?: ExecuteQueryOptions): QueryPromise<GetReplyData, GetReplyVariables>;

interface ListRepliesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListRepliesVariables): QueryRef<ListRepliesData, ListRepliesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListRepliesVariables): QueryRef<ListRepliesData, ListRepliesVariables>;
  operationName: string;
}
export const listRepliesRef: ListRepliesRef;

export function listReplies(vars: ListRepliesVariables, options?: ExecuteQueryOptions): QueryPromise<ListRepliesData, ListRepliesVariables>;
export function listReplies(dc: DataConnect, vars: ListRepliesVariables, options?: ExecuteQueryOptions): QueryPromise<ListRepliesData, ListRepliesVariables>;

interface AddFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
  operationName: string;
}
export const addFavoriteRef: AddFavoriteRef;

export function addFavorite(vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;
export function addFavorite(dc: DataConnect, vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface RemoveFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
  operationName: string;
}
export const removeFavoriteRef: RemoveFavoriteRef;

export function removeFavorite(vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;
export function removeFavorite(dc: DataConnect, vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;

interface ListMyFavoritesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFavoritesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFavoritesData, undefined>;
  operationName: string;
}
export const listMyFavoritesRef: ListMyFavoritesRef;

export function listMyFavorites(options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;
export function listMyFavorites(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

