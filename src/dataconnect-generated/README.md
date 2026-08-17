# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCurrentUser*](#getcurrentuser)
  - [*ListAllUsers*](#listallusers)
  - [*GetLocation*](#getlocation)
  - [*ListLocations*](#listlocations)
  - [*GetWeather*](#getweather)
  - [*ListWeather*](#listweather)
  - [*GetDiscussion*](#getdiscussion)
  - [*ListDiscussions*](#listdiscussions)
  - [*GetReply*](#getreply)
  - [*ListReplies*](#listreplies)
  - [*ListMyFavorites*](#listmyfavorites)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUserBio*](#updateuserbio)
  - [*DeleteUser*](#deleteuser)
  - [*CreateLocation*](#createlocation)
  - [*UpdateLocation*](#updatelocation)
  - [*DeleteLocation*](#deletelocation)
  - [*CreateWeather*](#createweather)
  - [*UpdateWeather*](#updateweather)
  - [*DeleteWeather*](#deleteweather)
  - [*CreateDiscussion*](#creatediscussion)
  - [*UpdateDiscussion*](#updatediscussion)
  - [*DeleteDiscussion*](#deletediscussion)
  - [*CreateReply*](#createreply)
  - [*UpdateReply*](#updatereply)
  - [*DeleteReply*](#deletereply)
  - [*AddFavorite*](#addfavorite)
  - [*RemoveFavorite*](#removefavorite)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCurrentUser
You can execute the `GetCurrentUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCurrentUser(options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface GetCurrentUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserData, undefined>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCurrentUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface GetCurrentUserRef {
  ...
  (dc: DataConnect): QueryRef<GetCurrentUserData, undefined>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCurrentUserRef:
```typescript
const name = getCurrentUserRef.operationName;
console.log(name);
```

### Variables
The `GetCurrentUser` query has no variables.
### Return Type
Recall that executing the `GetCurrentUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCurrentUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCurrentUserData {
  user?: {
    username: string;
    email: string;
    bio?: string | null;
  };
}
```
### Using `GetCurrentUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCurrentUser } from '@dataconnect/generated';


// Call the `getCurrentUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCurrentUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCurrentUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getCurrentUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetCurrentUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserRef } from '@dataconnect/generated';


// Call the `getCurrentUserRef()` function to get a reference to the query.
const ref = getCurrentUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCurrentUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListAllUsers
You can execute the `ListAllUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllUsers(options?: ExecuteQueryOptions): QueryPromise<ListAllUsersData, undefined>;

interface ListAllUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllUsersData, undefined>;
}
export const listAllUsersRef: ListAllUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllUsersData, undefined>;

interface ListAllUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListAllUsersData, undefined>;
}
export const listAllUsersRef: ListAllUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllUsersRef:
```typescript
const name = listAllUsersRef.operationName;
console.log(name);
```

### Variables
The `ListAllUsers` query has no variables.
### Return Type
Recall that executing the `ListAllUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListAllUsersData {
  users: ({
    username: string;
  })[];
}
```
### Using `ListAllUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllUsers } from '@dataconnect/generated';


// Call the `listAllUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listAllUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListAllUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllUsersRef } from '@dataconnect/generated';


// Call the `listAllUsersRef()` function to get a reference to the query.
const ref = listAllUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetLocation
You can execute the `GetLocation` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getLocation(vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;

interface GetLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
}
export const getLocationRef: GetLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getLocation(dc: DataConnect, vars: GetLocationVariables, options?: ExecuteQueryOptions): QueryPromise<GetLocationData, GetLocationVariables>;

interface GetLocationRef {
  ...
  (dc: DataConnect, vars: GetLocationVariables): QueryRef<GetLocationData, GetLocationVariables>;
}
export const getLocationRef: GetLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getLocationRef:
```typescript
const name = getLocationRef.operationName;
console.log(name);
```

### Variables
The `GetLocation` query requires an argument of type `GetLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetLocationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetLocation` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetLocationData {
  location?: {
    cityName: string;
    countryCode: string;
  };
}
```
### Using `GetLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getLocation, GetLocationVariables } from '@dataconnect/generated';

// The `GetLocation` query requires an argument of type `GetLocationVariables`:
const getLocationVars: GetLocationVariables = {
  id: ..., 
};

// Call the `getLocation()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getLocation(getLocationVars);
// Variables can be defined inline as well.
const { data } = await getLocation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getLocation(dataConnect, getLocationVars);

console.log(data.location);

// Or, you can use the `Promise` API.
getLocation(getLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location);
});
```

### Using `GetLocation`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getLocationRef, GetLocationVariables } from '@dataconnect/generated';

// The `GetLocation` query requires an argument of type `GetLocationVariables`:
const getLocationVars: GetLocationVariables = {
  id: ..., 
};

// Call the `getLocationRef()` function to get a reference to the query.
const ref = getLocationRef(getLocationVars);
// Variables can be defined inline as well.
const ref = getLocationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getLocationRef(dataConnect, getLocationVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.location);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.location);
});
```

## ListLocations
You can execute the `ListLocations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listLocations(options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;

interface ListLocationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLocationsData, undefined>;
}
export const listLocationsRef: ListLocationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listLocations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListLocationsData, undefined>;

interface ListLocationsRef {
  ...
  (dc: DataConnect): QueryRef<ListLocationsData, undefined>;
}
export const listLocationsRef: ListLocationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listLocationsRef:
```typescript
const name = listLocationsRef.operationName;
console.log(name);
```

### Variables
The `ListLocations` query has no variables.
### Return Type
Recall that executing the `ListLocations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListLocationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListLocationsData {
  locations: ({
    cityName: string;
  })[];
}
```
### Using `ListLocations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listLocations } from '@dataconnect/generated';


// Call the `listLocations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listLocations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listLocations(dataConnect);

console.log(data.locations);

// Or, you can use the `Promise` API.
listLocations().then((response) => {
  const data = response.data;
  console.log(data.locations);
});
```

### Using `ListLocations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listLocationsRef } from '@dataconnect/generated';


// Call the `listLocationsRef()` function to get a reference to the query.
const ref = listLocationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listLocationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.locations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.locations);
});
```

## GetWeather
You can execute the `GetWeather` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWeather(vars: GetWeatherVariables, options?: ExecuteQueryOptions): QueryPromise<GetWeatherData, GetWeatherVariables>;

interface GetWeatherRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWeatherVariables): QueryRef<GetWeatherData, GetWeatherVariables>;
}
export const getWeatherRef: GetWeatherRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWeather(dc: DataConnect, vars: GetWeatherVariables, options?: ExecuteQueryOptions): QueryPromise<GetWeatherData, GetWeatherVariables>;

interface GetWeatherRef {
  ...
  (dc: DataConnect, vars: GetWeatherVariables): QueryRef<GetWeatherData, GetWeatherVariables>;
}
export const getWeatherRef: GetWeatherRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWeatherRef:
```typescript
const name = getWeatherRef.operationName;
console.log(name);
```

### Variables
The `GetWeather` query requires an argument of type `GetWeatherVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWeatherVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetWeather` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWeatherData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetWeatherData {
  weatherReport?: {
    temperature: number;
    condition: string;
  };
}
```
### Using `GetWeather`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWeather, GetWeatherVariables } from '@dataconnect/generated';

// The `GetWeather` query requires an argument of type `GetWeatherVariables`:
const getWeatherVars: GetWeatherVariables = {
  id: ..., 
};

// Call the `getWeather()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWeather(getWeatherVars);
// Variables can be defined inline as well.
const { data } = await getWeather({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWeather(dataConnect, getWeatherVars);

console.log(data.weatherReport);

// Or, you can use the `Promise` API.
getWeather(getWeatherVars).then((response) => {
  const data = response.data;
  console.log(data.weatherReport);
});
```

### Using `GetWeather`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWeatherRef, GetWeatherVariables } from '@dataconnect/generated';

// The `GetWeather` query requires an argument of type `GetWeatherVariables`:
const getWeatherVars: GetWeatherVariables = {
  id: ..., 
};

// Call the `getWeatherRef()` function to get a reference to the query.
const ref = getWeatherRef(getWeatherVars);
// Variables can be defined inline as well.
const ref = getWeatherRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWeatherRef(dataConnect, getWeatherVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.weatherReport);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.weatherReport);
});
```

## ListWeather
You can execute the `ListWeather` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listWeather(options?: ExecuteQueryOptions): QueryPromise<ListWeatherData, undefined>;

interface ListWeatherRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListWeatherData, undefined>;
}
export const listWeatherRef: ListWeatherRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listWeather(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListWeatherData, undefined>;

interface ListWeatherRef {
  ...
  (dc: DataConnect): QueryRef<ListWeatherData, undefined>;
}
export const listWeatherRef: ListWeatherRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listWeatherRef:
```typescript
const name = listWeatherRef.operationName;
console.log(name);
```

### Variables
The `ListWeather` query has no variables.
### Return Type
Recall that executing the `ListWeather` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListWeatherData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListWeatherData {
  weatherReports: ({
    temperature: number;
    condition: string;
  })[];
}
```
### Using `ListWeather`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listWeather } from '@dataconnect/generated';


// Call the `listWeather()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listWeather();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listWeather(dataConnect);

console.log(data.weatherReports);

// Or, you can use the `Promise` API.
listWeather().then((response) => {
  const data = response.data;
  console.log(data.weatherReports);
});
```

### Using `ListWeather`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listWeatherRef } from '@dataconnect/generated';


// Call the `listWeatherRef()` function to get a reference to the query.
const ref = listWeatherRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listWeatherRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.weatherReports);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.weatherReports);
});
```

## GetDiscussion
You can execute the `GetDiscussion` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDiscussion(vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;

interface GetDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
}
export const getDiscussionRef: GetDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDiscussion(dc: DataConnect, vars: GetDiscussionVariables, options?: ExecuteQueryOptions): QueryPromise<GetDiscussionData, GetDiscussionVariables>;

interface GetDiscussionRef {
  ...
  (dc: DataConnect, vars: GetDiscussionVariables): QueryRef<GetDiscussionData, GetDiscussionVariables>;
}
export const getDiscussionRef: GetDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDiscussionRef:
```typescript
const name = getDiscussionRef.operationName;
console.log(name);
```

### Variables
The `GetDiscussion` query requires an argument of type `GetDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDiscussionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetDiscussion` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDiscussionData {
  discussion?: {
    content: string;
    user: {
      username: string;
    };
  };
}
```
### Using `GetDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDiscussion, GetDiscussionVariables } from '@dataconnect/generated';

// The `GetDiscussion` query requires an argument of type `GetDiscussionVariables`:
const getDiscussionVars: GetDiscussionVariables = {
  id: ..., 
};

// Call the `getDiscussion()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDiscussion(getDiscussionVars);
// Variables can be defined inline as well.
const { data } = await getDiscussion({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDiscussion(dataConnect, getDiscussionVars);

console.log(data.discussion);

// Or, you can use the `Promise` API.
getDiscussion(getDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion);
});
```

### Using `GetDiscussion`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDiscussionRef, GetDiscussionVariables } from '@dataconnect/generated';

// The `GetDiscussion` query requires an argument of type `GetDiscussionVariables`:
const getDiscussionVars: GetDiscussionVariables = {
  id: ..., 
};

// Call the `getDiscussionRef()` function to get a reference to the query.
const ref = getDiscussionRef(getDiscussionVars);
// Variables can be defined inline as well.
const ref = getDiscussionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDiscussionRef(dataConnect, getDiscussionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.discussion);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion);
});
```

## ListDiscussions
You can execute the `ListDiscussions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listDiscussions(options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;

interface ListDiscussionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListDiscussionsData, undefined>;
}
export const listDiscussionsRef: ListDiscussionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listDiscussions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListDiscussionsData, undefined>;

interface ListDiscussionsRef {
  ...
  (dc: DataConnect): QueryRef<ListDiscussionsData, undefined>;
}
export const listDiscussionsRef: ListDiscussionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listDiscussionsRef:
```typescript
const name = listDiscussionsRef.operationName;
console.log(name);
```

### Variables
The `ListDiscussions` query has no variables.
### Return Type
Recall that executing the `ListDiscussions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListDiscussionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListDiscussionsData {
  discussions: ({
    content: string;
    createdAt: TimestampString;
  })[];
}
```
### Using `ListDiscussions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listDiscussions } from '@dataconnect/generated';


// Call the `listDiscussions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listDiscussions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listDiscussions(dataConnect);

console.log(data.discussions);

// Or, you can use the `Promise` API.
listDiscussions().then((response) => {
  const data = response.data;
  console.log(data.discussions);
});
```

### Using `ListDiscussions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listDiscussionsRef } from '@dataconnect/generated';


// Call the `listDiscussionsRef()` function to get a reference to the query.
const ref = listDiscussionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listDiscussionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.discussions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.discussions);
});
```

## GetReply
You can execute the `GetReply` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getReply(vars: GetReplyVariables, options?: ExecuteQueryOptions): QueryPromise<GetReplyData, GetReplyVariables>;

interface GetReplyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetReplyVariables): QueryRef<GetReplyData, GetReplyVariables>;
}
export const getReplyRef: GetReplyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getReply(dc: DataConnect, vars: GetReplyVariables, options?: ExecuteQueryOptions): QueryPromise<GetReplyData, GetReplyVariables>;

interface GetReplyRef {
  ...
  (dc: DataConnect, vars: GetReplyVariables): QueryRef<GetReplyData, GetReplyVariables>;
}
export const getReplyRef: GetReplyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getReplyRef:
```typescript
const name = getReplyRef.operationName;
console.log(name);
```

### Variables
The `GetReply` query requires an argument of type `GetReplyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetReplyVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetReply` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetReplyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetReplyData {
  reply?: {
    content: string;
    user: {
      username: string;
    };
  };
}
```
### Using `GetReply`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getReply, GetReplyVariables } from '@dataconnect/generated';

// The `GetReply` query requires an argument of type `GetReplyVariables`:
const getReplyVars: GetReplyVariables = {
  id: ..., 
};

// Call the `getReply()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getReply(getReplyVars);
// Variables can be defined inline as well.
const { data } = await getReply({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getReply(dataConnect, getReplyVars);

console.log(data.reply);

// Or, you can use the `Promise` API.
getReply(getReplyVars).then((response) => {
  const data = response.data;
  console.log(data.reply);
});
```

### Using `GetReply`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getReplyRef, GetReplyVariables } from '@dataconnect/generated';

// The `GetReply` query requires an argument of type `GetReplyVariables`:
const getReplyVars: GetReplyVariables = {
  id: ..., 
};

// Call the `getReplyRef()` function to get a reference to the query.
const ref = getReplyRef(getReplyVars);
// Variables can be defined inline as well.
const ref = getReplyRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getReplyRef(dataConnect, getReplyVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reply);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reply);
});
```

## ListReplies
You can execute the `ListReplies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listReplies(vars: ListRepliesVariables, options?: ExecuteQueryOptions): QueryPromise<ListRepliesData, ListRepliesVariables>;

interface ListRepliesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListRepliesVariables): QueryRef<ListRepliesData, ListRepliesVariables>;
}
export const listRepliesRef: ListRepliesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listReplies(dc: DataConnect, vars: ListRepliesVariables, options?: ExecuteQueryOptions): QueryPromise<ListRepliesData, ListRepliesVariables>;

interface ListRepliesRef {
  ...
  (dc: DataConnect, vars: ListRepliesVariables): QueryRef<ListRepliesData, ListRepliesVariables>;
}
export const listRepliesRef: ListRepliesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRepliesRef:
```typescript
const name = listRepliesRef.operationName;
console.log(name);
```

### Variables
The `ListReplies` query requires an argument of type `ListRepliesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListRepliesVariables {
  discId: UUIDString;
}
```
### Return Type
Recall that executing the `ListReplies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRepliesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListRepliesData {
  replies: ({
    content: string;
  })[];
}
```
### Using `ListReplies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listReplies, ListRepliesVariables } from '@dataconnect/generated';

// The `ListReplies` query requires an argument of type `ListRepliesVariables`:
const listRepliesVars: ListRepliesVariables = {
  discId: ..., 
};

// Call the `listReplies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listReplies(listRepliesVars);
// Variables can be defined inline as well.
const { data } = await listReplies({ discId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listReplies(dataConnect, listRepliesVars);

console.log(data.replies);

// Or, you can use the `Promise` API.
listReplies(listRepliesVars).then((response) => {
  const data = response.data;
  console.log(data.replies);
});
```

### Using `ListReplies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRepliesRef, ListRepliesVariables } from '@dataconnect/generated';

// The `ListReplies` query requires an argument of type `ListRepliesVariables`:
const listRepliesVars: ListRepliesVariables = {
  discId: ..., 
};

// Call the `listRepliesRef()` function to get a reference to the query.
const ref = listRepliesRef(listRepliesVars);
// Variables can be defined inline as well.
const ref = listRepliesRef({ discId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRepliesRef(dataConnect, listRepliesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.replies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.replies);
});
```

## ListMyFavorites
You can execute the `ListMyFavorites` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFavorites(options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface ListMyFavoritesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFavoritesData, undefined>;
}
export const listMyFavoritesRef: ListMyFavoritesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFavorites(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface ListMyFavoritesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFavoritesData, undefined>;
}
export const listMyFavoritesRef: ListMyFavoritesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFavoritesRef:
```typescript
const name = listMyFavoritesRef.operationName;
console.log(name);
```

### Variables
The `ListMyFavorites` query has no variables.
### Return Type
Recall that executing the `ListMyFavorites` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFavoritesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFavoritesData {
  favorites: ({
    location: {
      cityName: string;
    };
  })[];
}
```
### Using `ListMyFavorites`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFavorites } from '@dataconnect/generated';


// Call the `listMyFavorites()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFavorites();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFavorites(dataConnect);

console.log(data.favorites);

// Or, you can use the `Promise` API.
listMyFavorites().then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

### Using `ListMyFavorites`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFavoritesRef } from '@dataconnect/generated';


// Call the `listMyFavoritesRef()` function to get a reference to the query.
const ref = listMyFavoritesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFavoritesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.favorites);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  username: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  username: ..., 
  email: ..., 
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ username: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  username: ..., 
  email: ..., 
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ username: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUserBio
You can execute the `UpdateUserBio` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserBio(vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;

interface UpdateUserBioRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
}
export const updateUserBioRef: UpdateUserBioRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserBio(dc: DataConnect, vars: UpdateUserBioVariables): MutationPromise<UpdateUserBioData, UpdateUserBioVariables>;

interface UpdateUserBioRef {
  ...
  (dc: DataConnect, vars: UpdateUserBioVariables): MutationRef<UpdateUserBioData, UpdateUserBioVariables>;
}
export const updateUserBioRef: UpdateUserBioRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserBioRef:
```typescript
const name = updateUserBioRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserBio` mutation requires an argument of type `UpdateUserBioVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserBioVariables {
  bio: string;
}
```
### Return Type
Recall that executing the `UpdateUserBio` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserBioData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserBioData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserBio`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserBio, UpdateUserBioVariables } from '@dataconnect/generated';

// The `UpdateUserBio` mutation requires an argument of type `UpdateUserBioVariables`:
const updateUserBioVars: UpdateUserBioVariables = {
  bio: ..., 
};

// Call the `updateUserBio()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserBio(updateUserBioVars);
// Variables can be defined inline as well.
const { data } = await updateUserBio({ bio: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserBio(dataConnect, updateUserBioVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserBio(updateUserBioVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserBio`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserBioRef, UpdateUserBioVariables } from '@dataconnect/generated';

// The `UpdateUserBio` mutation requires an argument of type `UpdateUserBioVariables`:
const updateUserBioVars: UpdateUserBioVariables = {
  bio: ..., 
};

// Call the `updateUserBioRef()` function to get a reference to the mutation.
const ref = updateUserBioRef(updateUserBioVars);
// Variables can be defined inline as well.
const ref = updateUserBioRef({ bio: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserBioRef(dataConnect, updateUserBioVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateLocation
You can execute the `CreateLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createLocation(vars: CreateLocationVariables): MutationPromise<CreateLocationData, CreateLocationVariables>;

interface CreateLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateLocationVariables): MutationRef<CreateLocationData, CreateLocationVariables>;
}
export const createLocationRef: CreateLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createLocation(dc: DataConnect, vars: CreateLocationVariables): MutationPromise<CreateLocationData, CreateLocationVariables>;

interface CreateLocationRef {
  ...
  (dc: DataConnect, vars: CreateLocationVariables): MutationRef<CreateLocationData, CreateLocationVariables>;
}
export const createLocationRef: CreateLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createLocationRef:
```typescript
const name = createLocationRef.operationName;
console.log(name);
```

### Variables
The `CreateLocation` mutation requires an argument of type `CreateLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateLocationVariables {
  cityName: string;
  countryCode: string;
  lat: number;
  lon: number;
}
```
### Return Type
Recall that executing the `CreateLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateLocationData {
  location_insert: Location_Key;
}
```
### Using `CreateLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createLocation, CreateLocationVariables } from '@dataconnect/generated';

// The `CreateLocation` mutation requires an argument of type `CreateLocationVariables`:
const createLocationVars: CreateLocationVariables = {
  cityName: ..., 
  countryCode: ..., 
  lat: ..., 
  lon: ..., 
};

// Call the `createLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createLocation(createLocationVars);
// Variables can be defined inline as well.
const { data } = await createLocation({ cityName: ..., countryCode: ..., lat: ..., lon: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createLocation(dataConnect, createLocationVars);

console.log(data.location_insert);

// Or, you can use the `Promise` API.
createLocation(createLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location_insert);
});
```

### Using `CreateLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createLocationRef, CreateLocationVariables } from '@dataconnect/generated';

// The `CreateLocation` mutation requires an argument of type `CreateLocationVariables`:
const createLocationVars: CreateLocationVariables = {
  cityName: ..., 
  countryCode: ..., 
  lat: ..., 
  lon: ..., 
};

// Call the `createLocationRef()` function to get a reference to the mutation.
const ref = createLocationRef(createLocationVars);
// Variables can be defined inline as well.
const ref = createLocationRef({ cityName: ..., countryCode: ..., lat: ..., lon: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createLocationRef(dataConnect, createLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.location_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.location_insert);
});
```

## UpdateLocation
You can execute the `UpdateLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateLocation(vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;

interface UpdateLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
}
export const updateLocationRef: UpdateLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateLocation(dc: DataConnect, vars: UpdateLocationVariables): MutationPromise<UpdateLocationData, UpdateLocationVariables>;

interface UpdateLocationRef {
  ...
  (dc: DataConnect, vars: UpdateLocationVariables): MutationRef<UpdateLocationData, UpdateLocationVariables>;
}
export const updateLocationRef: UpdateLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateLocationRef:
```typescript
const name = updateLocationRef.operationName;
console.log(name);
```

### Variables
The `UpdateLocation` mutation requires an argument of type `UpdateLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateLocationVariables {
  id: UUIDString;
  timezone: string;
}
```
### Return Type
Recall that executing the `UpdateLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateLocationData {
  location_update?: Location_Key | null;
}
```
### Using `UpdateLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateLocation, UpdateLocationVariables } from '@dataconnect/generated';

// The `UpdateLocation` mutation requires an argument of type `UpdateLocationVariables`:
const updateLocationVars: UpdateLocationVariables = {
  id: ..., 
  timezone: ..., 
};

// Call the `updateLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateLocation(updateLocationVars);
// Variables can be defined inline as well.
const { data } = await updateLocation({ id: ..., timezone: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateLocation(dataConnect, updateLocationVars);

console.log(data.location_update);

// Or, you can use the `Promise` API.
updateLocation(updateLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location_update);
});
```

### Using `UpdateLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateLocationRef, UpdateLocationVariables } from '@dataconnect/generated';

// The `UpdateLocation` mutation requires an argument of type `UpdateLocationVariables`:
const updateLocationVars: UpdateLocationVariables = {
  id: ..., 
  timezone: ..., 
};

// Call the `updateLocationRef()` function to get a reference to the mutation.
const ref = updateLocationRef(updateLocationVars);
// Variables can be defined inline as well.
const ref = updateLocationRef({ id: ..., timezone: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateLocationRef(dataConnect, updateLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.location_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.location_update);
});
```

## DeleteLocation
You can execute the `DeleteLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteLocation(vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;

interface DeleteLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
}
export const deleteLocationRef: DeleteLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteLocation(dc: DataConnect, vars: DeleteLocationVariables): MutationPromise<DeleteLocationData, DeleteLocationVariables>;

interface DeleteLocationRef {
  ...
  (dc: DataConnect, vars: DeleteLocationVariables): MutationRef<DeleteLocationData, DeleteLocationVariables>;
}
export const deleteLocationRef: DeleteLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteLocationRef:
```typescript
const name = deleteLocationRef.operationName;
console.log(name);
```

### Variables
The `DeleteLocation` mutation requires an argument of type `DeleteLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteLocationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteLocationData {
  location_delete?: Location_Key | null;
}
```
### Using `DeleteLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteLocation, DeleteLocationVariables } from '@dataconnect/generated';

// The `DeleteLocation` mutation requires an argument of type `DeleteLocationVariables`:
const deleteLocationVars: DeleteLocationVariables = {
  id: ..., 
};

// Call the `deleteLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteLocation(deleteLocationVars);
// Variables can be defined inline as well.
const { data } = await deleteLocation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteLocation(dataConnect, deleteLocationVars);

console.log(data.location_delete);

// Or, you can use the `Promise` API.
deleteLocation(deleteLocationVars).then((response) => {
  const data = response.data;
  console.log(data.location_delete);
});
```

### Using `DeleteLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteLocationRef, DeleteLocationVariables } from '@dataconnect/generated';

// The `DeleteLocation` mutation requires an argument of type `DeleteLocationVariables`:
const deleteLocationVars: DeleteLocationVariables = {
  id: ..., 
};

// Call the `deleteLocationRef()` function to get a reference to the mutation.
const ref = deleteLocationRef(deleteLocationVars);
// Variables can be defined inline as well.
const ref = deleteLocationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteLocationRef(dataConnect, deleteLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.location_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.location_delete);
});
```

## CreateWeather
You can execute the `CreateWeather` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWeather(vars: CreateWeatherVariables): MutationPromise<CreateWeatherData, CreateWeatherVariables>;

interface CreateWeatherRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWeatherVariables): MutationRef<CreateWeatherData, CreateWeatherVariables>;
}
export const createWeatherRef: CreateWeatherRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWeather(dc: DataConnect, vars: CreateWeatherVariables): MutationPromise<CreateWeatherData, CreateWeatherVariables>;

interface CreateWeatherRef {
  ...
  (dc: DataConnect, vars: CreateWeatherVariables): MutationRef<CreateWeatherData, CreateWeatherVariables>;
}
export const createWeatherRef: CreateWeatherRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWeatherRef:
```typescript
const name = createWeatherRef.operationName;
console.log(name);
```

### Variables
The `CreateWeather` mutation requires an argument of type `CreateWeatherVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateWeatherVariables {
  temp: number;
  cond: string;
  time: TimestampString;
  locId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateWeather` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWeatherData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWeatherData {
  weatherReport_insert: WeatherReport_Key;
}
```
### Using `CreateWeather`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWeather, CreateWeatherVariables } from '@dataconnect/generated';

// The `CreateWeather` mutation requires an argument of type `CreateWeatherVariables`:
const createWeatherVars: CreateWeatherVariables = {
  temp: ..., 
  cond: ..., 
  time: ..., 
  locId: ..., 
};

// Call the `createWeather()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWeather(createWeatherVars);
// Variables can be defined inline as well.
const { data } = await createWeather({ temp: ..., cond: ..., time: ..., locId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWeather(dataConnect, createWeatherVars);

console.log(data.weatherReport_insert);

// Or, you can use the `Promise` API.
createWeather(createWeatherVars).then((response) => {
  const data = response.data;
  console.log(data.weatherReport_insert);
});
```

### Using `CreateWeather`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWeatherRef, CreateWeatherVariables } from '@dataconnect/generated';

// The `CreateWeather` mutation requires an argument of type `CreateWeatherVariables`:
const createWeatherVars: CreateWeatherVariables = {
  temp: ..., 
  cond: ..., 
  time: ..., 
  locId: ..., 
};

// Call the `createWeatherRef()` function to get a reference to the mutation.
const ref = createWeatherRef(createWeatherVars);
// Variables can be defined inline as well.
const ref = createWeatherRef({ temp: ..., cond: ..., time: ..., locId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWeatherRef(dataConnect, createWeatherVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.weatherReport_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.weatherReport_insert);
});
```

## UpdateWeather
You can execute the `UpdateWeather` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateWeather(vars: UpdateWeatherVariables): MutationPromise<UpdateWeatherData, UpdateWeatherVariables>;

interface UpdateWeatherRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWeatherVariables): MutationRef<UpdateWeatherData, UpdateWeatherVariables>;
}
export const updateWeatherRef: UpdateWeatherRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateWeather(dc: DataConnect, vars: UpdateWeatherVariables): MutationPromise<UpdateWeatherData, UpdateWeatherVariables>;

interface UpdateWeatherRef {
  ...
  (dc: DataConnect, vars: UpdateWeatherVariables): MutationRef<UpdateWeatherData, UpdateWeatherVariables>;
}
export const updateWeatherRef: UpdateWeatherRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateWeatherRef:
```typescript
const name = updateWeatherRef.operationName;
console.log(name);
```

### Variables
The `UpdateWeather` mutation requires an argument of type `UpdateWeatherVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateWeatherVariables {
  id: UUIDString;
  temp: number;
}
```
### Return Type
Recall that executing the `UpdateWeather` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateWeatherData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateWeatherData {
  weatherReport_update?: WeatherReport_Key | null;
}
```
### Using `UpdateWeather`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateWeather, UpdateWeatherVariables } from '@dataconnect/generated';

// The `UpdateWeather` mutation requires an argument of type `UpdateWeatherVariables`:
const updateWeatherVars: UpdateWeatherVariables = {
  id: ..., 
  temp: ..., 
};

// Call the `updateWeather()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateWeather(updateWeatherVars);
// Variables can be defined inline as well.
const { data } = await updateWeather({ id: ..., temp: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateWeather(dataConnect, updateWeatherVars);

console.log(data.weatherReport_update);

// Or, you can use the `Promise` API.
updateWeather(updateWeatherVars).then((response) => {
  const data = response.data;
  console.log(data.weatherReport_update);
});
```

### Using `UpdateWeather`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateWeatherRef, UpdateWeatherVariables } from '@dataconnect/generated';

// The `UpdateWeather` mutation requires an argument of type `UpdateWeatherVariables`:
const updateWeatherVars: UpdateWeatherVariables = {
  id: ..., 
  temp: ..., 
};

// Call the `updateWeatherRef()` function to get a reference to the mutation.
const ref = updateWeatherRef(updateWeatherVars);
// Variables can be defined inline as well.
const ref = updateWeatherRef({ id: ..., temp: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateWeatherRef(dataConnect, updateWeatherVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.weatherReport_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.weatherReport_update);
});
```

## DeleteWeather
You can execute the `DeleteWeather` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteWeather(vars: DeleteWeatherVariables): MutationPromise<DeleteWeatherData, DeleteWeatherVariables>;

interface DeleteWeatherRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWeatherVariables): MutationRef<DeleteWeatherData, DeleteWeatherVariables>;
}
export const deleteWeatherRef: DeleteWeatherRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteWeather(dc: DataConnect, vars: DeleteWeatherVariables): MutationPromise<DeleteWeatherData, DeleteWeatherVariables>;

interface DeleteWeatherRef {
  ...
  (dc: DataConnect, vars: DeleteWeatherVariables): MutationRef<DeleteWeatherData, DeleteWeatherVariables>;
}
export const deleteWeatherRef: DeleteWeatherRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteWeatherRef:
```typescript
const name = deleteWeatherRef.operationName;
console.log(name);
```

### Variables
The `DeleteWeather` mutation requires an argument of type `DeleteWeatherVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteWeatherVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteWeather` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteWeatherData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteWeatherData {
  weatherReport_delete?: WeatherReport_Key | null;
}
```
### Using `DeleteWeather`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteWeather, DeleteWeatherVariables } from '@dataconnect/generated';

// The `DeleteWeather` mutation requires an argument of type `DeleteWeatherVariables`:
const deleteWeatherVars: DeleteWeatherVariables = {
  id: ..., 
};

// Call the `deleteWeather()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteWeather(deleteWeatherVars);
// Variables can be defined inline as well.
const { data } = await deleteWeather({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteWeather(dataConnect, deleteWeatherVars);

console.log(data.weatherReport_delete);

// Or, you can use the `Promise` API.
deleteWeather(deleteWeatherVars).then((response) => {
  const data = response.data;
  console.log(data.weatherReport_delete);
});
```

### Using `DeleteWeather`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteWeatherRef, DeleteWeatherVariables } from '@dataconnect/generated';

// The `DeleteWeather` mutation requires an argument of type `DeleteWeatherVariables`:
const deleteWeatherVars: DeleteWeatherVariables = {
  id: ..., 
};

// Call the `deleteWeatherRef()` function to get a reference to the mutation.
const ref = deleteWeatherRef(deleteWeatherVars);
// Variables can be defined inline as well.
const ref = deleteWeatherRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteWeatherRef(dataConnect, deleteWeatherVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.weatherReport_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.weatherReport_delete);
});
```

## CreateDiscussion
You can execute the `CreateDiscussion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDiscussion(vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;

interface CreateDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
}
export const createDiscussionRef: CreateDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDiscussion(dc: DataConnect, vars: CreateDiscussionVariables): MutationPromise<CreateDiscussionData, CreateDiscussionVariables>;

interface CreateDiscussionRef {
  ...
  (dc: DataConnect, vars: CreateDiscussionVariables): MutationRef<CreateDiscussionData, CreateDiscussionVariables>;
}
export const createDiscussionRef: CreateDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDiscussionRef:
```typescript
const name = createDiscussionRef.operationName;
console.log(name);
```

### Variables
The `CreateDiscussion` mutation requires an argument of type `CreateDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDiscussionVariables {
  content: string;
  locId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateDiscussion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDiscussionData {
  discussion_insert: Discussion_Key;
}
```
### Using `CreateDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDiscussion, CreateDiscussionVariables } from '@dataconnect/generated';

// The `CreateDiscussion` mutation requires an argument of type `CreateDiscussionVariables`:
const createDiscussionVars: CreateDiscussionVariables = {
  content: ..., 
  locId: ..., 
};

// Call the `createDiscussion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDiscussion(createDiscussionVars);
// Variables can be defined inline as well.
const { data } = await createDiscussion({ content: ..., locId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDiscussion(dataConnect, createDiscussionVars);

console.log(data.discussion_insert);

// Or, you can use the `Promise` API.
createDiscussion(createDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion_insert);
});
```

### Using `CreateDiscussion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDiscussionRef, CreateDiscussionVariables } from '@dataconnect/generated';

// The `CreateDiscussion` mutation requires an argument of type `CreateDiscussionVariables`:
const createDiscussionVars: CreateDiscussionVariables = {
  content: ..., 
  locId: ..., 
};

// Call the `createDiscussionRef()` function to get a reference to the mutation.
const ref = createDiscussionRef(createDiscussionVars);
// Variables can be defined inline as well.
const ref = createDiscussionRef({ content: ..., locId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDiscussionRef(dataConnect, createDiscussionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.discussion_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion_insert);
});
```

## UpdateDiscussion
You can execute the `UpdateDiscussion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDiscussion(vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;

interface UpdateDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
}
export const updateDiscussionRef: UpdateDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDiscussion(dc: DataConnect, vars: UpdateDiscussionVariables): MutationPromise<UpdateDiscussionData, UpdateDiscussionVariables>;

interface UpdateDiscussionRef {
  ...
  (dc: DataConnect, vars: UpdateDiscussionVariables): MutationRef<UpdateDiscussionData, UpdateDiscussionVariables>;
}
export const updateDiscussionRef: UpdateDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDiscussionRef:
```typescript
const name = updateDiscussionRef.operationName;
console.log(name);
```

### Variables
The `UpdateDiscussion` mutation requires an argument of type `UpdateDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDiscussionVariables {
  id: UUIDString;
  content: string;
}
```
### Return Type
Recall that executing the `UpdateDiscussion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDiscussionData {
  discussion_update?: Discussion_Key | null;
}
```
### Using `UpdateDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDiscussion, UpdateDiscussionVariables } from '@dataconnect/generated';

// The `UpdateDiscussion` mutation requires an argument of type `UpdateDiscussionVariables`:
const updateDiscussionVars: UpdateDiscussionVariables = {
  id: ..., 
  content: ..., 
};

// Call the `updateDiscussion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDiscussion(updateDiscussionVars);
// Variables can be defined inline as well.
const { data } = await updateDiscussion({ id: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDiscussion(dataConnect, updateDiscussionVars);

console.log(data.discussion_update);

// Or, you can use the `Promise` API.
updateDiscussion(updateDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion_update);
});
```

### Using `UpdateDiscussion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDiscussionRef, UpdateDiscussionVariables } from '@dataconnect/generated';

// The `UpdateDiscussion` mutation requires an argument of type `UpdateDiscussionVariables`:
const updateDiscussionVars: UpdateDiscussionVariables = {
  id: ..., 
  content: ..., 
};

// Call the `updateDiscussionRef()` function to get a reference to the mutation.
const ref = updateDiscussionRef(updateDiscussionVars);
// Variables can be defined inline as well.
const ref = updateDiscussionRef({ id: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDiscussionRef(dataConnect, updateDiscussionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.discussion_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion_update);
});
```

## DeleteDiscussion
You can execute the `DeleteDiscussion` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteDiscussion(vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;

interface DeleteDiscussionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
}
export const deleteDiscussionRef: DeleteDiscussionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDiscussion(dc: DataConnect, vars: DeleteDiscussionVariables): MutationPromise<DeleteDiscussionData, DeleteDiscussionVariables>;

interface DeleteDiscussionRef {
  ...
  (dc: DataConnect, vars: DeleteDiscussionVariables): MutationRef<DeleteDiscussionData, DeleteDiscussionVariables>;
}
export const deleteDiscussionRef: DeleteDiscussionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDiscussionRef:
```typescript
const name = deleteDiscussionRef.operationName;
console.log(name);
```

### Variables
The `DeleteDiscussion` mutation requires an argument of type `DeleteDiscussionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteDiscussionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteDiscussion` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDiscussionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDiscussionData {
  discussion_delete?: Discussion_Key | null;
}
```
### Using `DeleteDiscussion`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDiscussion, DeleteDiscussionVariables } from '@dataconnect/generated';

// The `DeleteDiscussion` mutation requires an argument of type `DeleteDiscussionVariables`:
const deleteDiscussionVars: DeleteDiscussionVariables = {
  id: ..., 
};

// Call the `deleteDiscussion()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDiscussion(deleteDiscussionVars);
// Variables can be defined inline as well.
const { data } = await deleteDiscussion({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDiscussion(dataConnect, deleteDiscussionVars);

console.log(data.discussion_delete);

// Or, you can use the `Promise` API.
deleteDiscussion(deleteDiscussionVars).then((response) => {
  const data = response.data;
  console.log(data.discussion_delete);
});
```

### Using `DeleteDiscussion`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDiscussionRef, DeleteDiscussionVariables } from '@dataconnect/generated';

// The `DeleteDiscussion` mutation requires an argument of type `DeleteDiscussionVariables`:
const deleteDiscussionVars: DeleteDiscussionVariables = {
  id: ..., 
};

// Call the `deleteDiscussionRef()` function to get a reference to the mutation.
const ref = deleteDiscussionRef(deleteDiscussionVars);
// Variables can be defined inline as well.
const ref = deleteDiscussionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDiscussionRef(dataConnect, deleteDiscussionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.discussion_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.discussion_delete);
});
```

## CreateReply
You can execute the `CreateReply` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createReply(vars: CreateReplyVariables): MutationPromise<CreateReplyData, CreateReplyVariables>;

interface CreateReplyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReplyVariables): MutationRef<CreateReplyData, CreateReplyVariables>;
}
export const createReplyRef: CreateReplyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createReply(dc: DataConnect, vars: CreateReplyVariables): MutationPromise<CreateReplyData, CreateReplyVariables>;

interface CreateReplyRef {
  ...
  (dc: DataConnect, vars: CreateReplyVariables): MutationRef<CreateReplyData, CreateReplyVariables>;
}
export const createReplyRef: CreateReplyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createReplyRef:
```typescript
const name = createReplyRef.operationName;
console.log(name);
```

### Variables
The `CreateReply` mutation requires an argument of type `CreateReplyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateReplyVariables {
  content: string;
  discId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateReply` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateReplyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateReplyData {
  reply_insert: Reply_Key;
}
```
### Using `CreateReply`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createReply, CreateReplyVariables } from '@dataconnect/generated';

// The `CreateReply` mutation requires an argument of type `CreateReplyVariables`:
const createReplyVars: CreateReplyVariables = {
  content: ..., 
  discId: ..., 
};

// Call the `createReply()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createReply(createReplyVars);
// Variables can be defined inline as well.
const { data } = await createReply({ content: ..., discId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createReply(dataConnect, createReplyVars);

console.log(data.reply_insert);

// Or, you can use the `Promise` API.
createReply(createReplyVars).then((response) => {
  const data = response.data;
  console.log(data.reply_insert);
});
```

### Using `CreateReply`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createReplyRef, CreateReplyVariables } from '@dataconnect/generated';

// The `CreateReply` mutation requires an argument of type `CreateReplyVariables`:
const createReplyVars: CreateReplyVariables = {
  content: ..., 
  discId: ..., 
};

// Call the `createReplyRef()` function to get a reference to the mutation.
const ref = createReplyRef(createReplyVars);
// Variables can be defined inline as well.
const ref = createReplyRef({ content: ..., discId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createReplyRef(dataConnect, createReplyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.reply_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.reply_insert);
});
```

## UpdateReply
You can execute the `UpdateReply` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateReply(vars: UpdateReplyVariables): MutationPromise<UpdateReplyData, UpdateReplyVariables>;

interface UpdateReplyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReplyVariables): MutationRef<UpdateReplyData, UpdateReplyVariables>;
}
export const updateReplyRef: UpdateReplyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateReply(dc: DataConnect, vars: UpdateReplyVariables): MutationPromise<UpdateReplyData, UpdateReplyVariables>;

interface UpdateReplyRef {
  ...
  (dc: DataConnect, vars: UpdateReplyVariables): MutationRef<UpdateReplyData, UpdateReplyVariables>;
}
export const updateReplyRef: UpdateReplyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateReplyRef:
```typescript
const name = updateReplyRef.operationName;
console.log(name);
```

### Variables
The `UpdateReply` mutation requires an argument of type `UpdateReplyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateReplyVariables {
  id: UUIDString;
  content: string;
}
```
### Return Type
Recall that executing the `UpdateReply` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateReplyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateReplyData {
  reply_update?: Reply_Key | null;
}
```
### Using `UpdateReply`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateReply, UpdateReplyVariables } from '@dataconnect/generated';

// The `UpdateReply` mutation requires an argument of type `UpdateReplyVariables`:
const updateReplyVars: UpdateReplyVariables = {
  id: ..., 
  content: ..., 
};

// Call the `updateReply()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateReply(updateReplyVars);
// Variables can be defined inline as well.
const { data } = await updateReply({ id: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateReply(dataConnect, updateReplyVars);

console.log(data.reply_update);

// Or, you can use the `Promise` API.
updateReply(updateReplyVars).then((response) => {
  const data = response.data;
  console.log(data.reply_update);
});
```

### Using `UpdateReply`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateReplyRef, UpdateReplyVariables } from '@dataconnect/generated';

// The `UpdateReply` mutation requires an argument of type `UpdateReplyVariables`:
const updateReplyVars: UpdateReplyVariables = {
  id: ..., 
  content: ..., 
};

// Call the `updateReplyRef()` function to get a reference to the mutation.
const ref = updateReplyRef(updateReplyVars);
// Variables can be defined inline as well.
const ref = updateReplyRef({ id: ..., content: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateReplyRef(dataConnect, updateReplyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.reply_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.reply_update);
});
```

## DeleteReply
You can execute the `DeleteReply` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteReply(vars: DeleteReplyVariables): MutationPromise<DeleteReplyData, DeleteReplyVariables>;

interface DeleteReplyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReplyVariables): MutationRef<DeleteReplyData, DeleteReplyVariables>;
}
export const deleteReplyRef: DeleteReplyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteReply(dc: DataConnect, vars: DeleteReplyVariables): MutationPromise<DeleteReplyData, DeleteReplyVariables>;

interface DeleteReplyRef {
  ...
  (dc: DataConnect, vars: DeleteReplyVariables): MutationRef<DeleteReplyData, DeleteReplyVariables>;
}
export const deleteReplyRef: DeleteReplyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteReplyRef:
```typescript
const name = deleteReplyRef.operationName;
console.log(name);
```

### Variables
The `DeleteReply` mutation requires an argument of type `DeleteReplyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteReplyVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteReply` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteReplyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteReplyData {
  reply_delete?: Reply_Key | null;
}
```
### Using `DeleteReply`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteReply, DeleteReplyVariables } from '@dataconnect/generated';

// The `DeleteReply` mutation requires an argument of type `DeleteReplyVariables`:
const deleteReplyVars: DeleteReplyVariables = {
  id: ..., 
};

// Call the `deleteReply()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteReply(deleteReplyVars);
// Variables can be defined inline as well.
const { data } = await deleteReply({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteReply(dataConnect, deleteReplyVars);

console.log(data.reply_delete);

// Or, you can use the `Promise` API.
deleteReply(deleteReplyVars).then((response) => {
  const data = response.data;
  console.log(data.reply_delete);
});
```

### Using `DeleteReply`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteReplyRef, DeleteReplyVariables } from '@dataconnect/generated';

// The `DeleteReply` mutation requires an argument of type `DeleteReplyVariables`:
const deleteReplyVars: DeleteReplyVariables = {
  id: ..., 
};

// Call the `deleteReplyRef()` function to get a reference to the mutation.
const ref = deleteReplyRef(deleteReplyVars);
// Variables can be defined inline as well.
const ref = deleteReplyRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteReplyRef(dataConnect, deleteReplyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.reply_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.reply_delete);
});
```

## AddFavorite
You can execute the `AddFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addFavorite(vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface AddFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
}
export const addFavoriteRef: AddFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addFavorite(dc: DataConnect, vars: AddFavoriteVariables): MutationPromise<AddFavoriteData, AddFavoriteVariables>;

interface AddFavoriteRef {
  ...
  (dc: DataConnect, vars: AddFavoriteVariables): MutationRef<AddFavoriteData, AddFavoriteVariables>;
}
export const addFavoriteRef: AddFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addFavoriteRef:
```typescript
const name = addFavoriteRef.operationName;
console.log(name);
```

### Variables
The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddFavoriteVariables {
  locId: UUIDString;
}
```
### Return Type
Recall that executing the `AddFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddFavoriteData {
  favorite_insert: Favorite_Key;
}
```
### Using `AddFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addFavorite, AddFavoriteVariables } from '@dataconnect/generated';

// The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`:
const addFavoriteVars: AddFavoriteVariables = {
  locId: ..., 
};

// Call the `addFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addFavorite(addFavoriteVars);
// Variables can be defined inline as well.
const { data } = await addFavorite({ locId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addFavorite(dataConnect, addFavoriteVars);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
addFavorite(addFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

### Using `AddFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addFavoriteRef, AddFavoriteVariables } from '@dataconnect/generated';

// The `AddFavorite` mutation requires an argument of type `AddFavoriteVariables`:
const addFavoriteVars: AddFavoriteVariables = {
  locId: ..., 
};

// Call the `addFavoriteRef()` function to get a reference to the mutation.
const ref = addFavoriteRef(addFavoriteVars);
// Variables can be defined inline as well.
const ref = addFavoriteRef({ locId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addFavoriteRef(dataConnect, addFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

## RemoveFavorite
You can execute the `RemoveFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
removeFavorite(vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;

interface RemoveFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
}
export const removeFavoriteRef: RemoveFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
removeFavorite(dc: DataConnect, vars: RemoveFavoriteVariables): MutationPromise<RemoveFavoriteData, RemoveFavoriteVariables>;

interface RemoveFavoriteRef {
  ...
  (dc: DataConnect, vars: RemoveFavoriteVariables): MutationRef<RemoveFavoriteData, RemoveFavoriteVariables>;
}
export const removeFavoriteRef: RemoveFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the removeFavoriteRef:
```typescript
const name = removeFavoriteRef.operationName;
console.log(name);
```

### Variables
The `RemoveFavorite` mutation requires an argument of type `RemoveFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RemoveFavoriteVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `RemoveFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RemoveFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RemoveFavoriteData {
  favorite_delete?: Favorite_Key | null;
}
```
### Using `RemoveFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, removeFavorite, RemoveFavoriteVariables } from '@dataconnect/generated';

// The `RemoveFavorite` mutation requires an argument of type `RemoveFavoriteVariables`:
const removeFavoriteVars: RemoveFavoriteVariables = {
  id: ..., 
};

// Call the `removeFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await removeFavorite(removeFavoriteVars);
// Variables can be defined inline as well.
const { data } = await removeFavorite({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await removeFavorite(dataConnect, removeFavoriteVars);

console.log(data.favorite_delete);

// Or, you can use the `Promise` API.
removeFavorite(removeFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_delete);
});
```

### Using `RemoveFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, removeFavoriteRef, RemoveFavoriteVariables } from '@dataconnect/generated';

// The `RemoveFavorite` mutation requires an argument of type `RemoveFavoriteVariables`:
const removeFavoriteVars: RemoveFavoriteVariables = {
  id: ..., 
};

// Call the `removeFavoriteRef()` function to get a reference to the mutation.
const ref = removeFavoriteRef(removeFavoriteVars);
// Variables can be defined inline as well.
const ref = removeFavoriteRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = removeFavoriteRef(dataConnect, removeFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_delete);
});
```

