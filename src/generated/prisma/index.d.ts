
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model UserOrganization
 * 
 */
export type UserOrganization = $Result.DefaultSelection<Prisma.$UserOrganizationPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentUpdate
 * 
 */
export type IncidentUpdate = $Result.DefaultSelection<Prisma.$IncidentUpdatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrgRole: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type OrgRole = (typeof OrgRole)[keyof typeof OrgRole]


export const ServiceStatus: {
  OPERATIONAL: 'OPERATIONAL',
  DEGRADED: 'DEGRADED',
  PARTIAL_OUTAGE: 'PARTIAL_OUTAGE',
  MAJOR_OUTAGE: 'MAJOR_OUTAGE'
};

export type ServiceStatus = (typeof ServiceStatus)[keyof typeof ServiceStatus]


export const IncidentStatus: {
  INVESTIGATING: 'INVESTIGATING',
  IDENTIFIED: 'IDENTIFIED',
  MONITORING: 'MONITORING',
  RESOLVED: 'RESOLVED',
  SCHEDULED: 'SCHEDULED'
};

export type IncidentStatus = (typeof IncidentStatus)[keyof typeof IncidentStatus]


export const UserRole: {
  SUPERUSER: 'SUPERUSER',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ServiceType: {
  WEBSITE: 'WEBSITE',
  API: 'API',
  DATABASE: 'DATABASE',
  CACHE: 'CACHE',
  STORAGE: 'STORAGE',
  AUTHENTICATION: 'AUTHENTICATION',
  PAYMENT_GATEWAY: 'PAYMENT_GATEWAY',
  EMAIL: 'EMAIL',
  CDN: 'CDN',
  BACKEND: 'BACKEND',
  OTHER: 'OTHER'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]

}

export type OrgRole = $Enums.OrgRole

export const OrgRole: typeof $Enums.OrgRole

export type ServiceStatus = $Enums.ServiceStatus

export const ServiceStatus: typeof $Enums.ServiceStatus

export type IncidentStatus = $Enums.IncidentStatus

export const IncidentStatus: typeof $Enums.IncidentStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOrganization`: Exposes CRUD operations for the **UserOrganization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOrganizations
    * const userOrganizations = await prisma.userOrganization.findMany()
    * ```
    */
  get userOrganization(): Prisma.UserOrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentUpdate`: Exposes CRUD operations for the **IncidentUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentUpdates
    * const incidentUpdates = await prisma.incidentUpdate.findMany()
    * ```
    */
  get incidentUpdate(): Prisma.IncidentUpdateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Organization: 'Organization',
    UserOrganization: 'UserOrganization',
    Service: 'Service',
    Incident: 'Incident',
    IncidentUpdate: 'IncidentUpdate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "organization" | "userOrganization" | "service" | "incident" | "incidentUpdate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      UserOrganization: {
        payload: Prisma.$UserOrganizationPayload<ExtArgs>
        fields: Prisma.UserOrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>
          }
          findFirst: {
            args: Prisma.UserOrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>
          }
          findMany: {
            args: Prisma.UserOrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>[]
          }
          create: {
            args: Prisma.UserOrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>
          }
          createMany: {
            args: Prisma.UserOrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>[]
          }
          delete: {
            args: Prisma.UserOrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>
          }
          update: {
            args: Prisma.UserOrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>
          }
          deleteMany: {
            args: Prisma.UserOrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>[]
          }
          upsert: {
            args: Prisma.UserOrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrganizationPayload>
          }
          aggregate: {
            args: Prisma.UserOrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOrganization>
          }
          groupBy: {
            args: Prisma.UserOrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<UserOrganizationCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentUpdate: {
        payload: Prisma.$IncidentUpdatePayload<ExtArgs>
        fields: Prisma.IncidentUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          findFirst: {
            args: Prisma.IncidentUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          findMany: {
            args: Prisma.IncidentUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          create: {
            args: Prisma.IncidentUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          createMany: {
            args: Prisma.IncidentUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          delete: {
            args: Prisma.IncidentUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          update: {
            args: Prisma.IncidentUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          deleteMany: {
            args: Prisma.IncidentUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          aggregate: {
            args: Prisma.IncidentUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentUpdate>
          }
          groupBy: {
            args: Prisma.IncidentUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentUpdateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    organization?: OrganizationOmit
    userOrganization?: UserOrganizationOmit
    service?: ServiceOmit
    incident?: IncidentOmit
    incidentUpdate?: IncidentUpdateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdOrganizations: number
    memberships: number
    Incident: number
    IncidentUpdate: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrganizations?: boolean | UserCountOutputTypeCountCreatedOrganizationsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    Incident?: boolean | UserCountOutputTypeCountIncidentArgs
    IncidentUpdate?: boolean | UserCountOutputTypeCountIncidentUpdateArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrganizationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number
    services: number
    incidents: number
    defaultUsers: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    services?: boolean | OrganizationCountOutputTypeCountServicesArgs
    incidents?: boolean | OrganizationCountOutputTypeCountIncidentsArgs
    defaultUsers?: boolean | OrganizationCountOutputTypeCountDefaultUsersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrganizationWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDefaultUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    incidents: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | ServiceCountOutputTypeCountIncidentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    updates: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updates?: boolean | IncidentCountOutputTypeCountUpdatesArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    defaultOrgId: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    defaultOrgId: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    defaultOrgId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    defaultOrgId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    defaultOrgId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    defaultOrgId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    defaultOrgId: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    defaultOrgId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    defaultOrg?: boolean | User$defaultOrgArgs<ExtArgs>
    createdOrganizations?: boolean | User$createdOrganizationsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    Incident?: boolean | User$IncidentArgs<ExtArgs>
    IncidentUpdate?: boolean | User$IncidentUpdateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    defaultOrgId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    defaultOrg?: boolean | User$defaultOrgArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    defaultOrgId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    defaultOrg?: boolean | User$defaultOrgArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    defaultOrgId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "defaultOrgId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultOrg?: boolean | User$defaultOrgArgs<ExtArgs>
    createdOrganizations?: boolean | User$createdOrganizationsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    Incident?: boolean | User$IncidentArgs<ExtArgs>
    IncidentUpdate?: boolean | User$IncidentUpdateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultOrg?: boolean | User$defaultOrgArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    defaultOrg?: boolean | User$defaultOrgArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      defaultOrg: Prisma.$OrganizationPayload<ExtArgs> | null
      createdOrganizations: Prisma.$OrganizationPayload<ExtArgs>[]
      memberships: Prisma.$UserOrganizationPayload<ExtArgs>[]
      Incident: Prisma.$IncidentPayload<ExtArgs>[]
      IncidentUpdate: Prisma.$IncidentUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      defaultOrgId: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    defaultOrg<T extends User$defaultOrgArgs<ExtArgs> = {}>(args?: Subset<T, User$defaultOrgArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdOrganizations<T extends User$createdOrganizationsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdOrganizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Incident<T extends User$IncidentArgs<ExtArgs> = {}>(args?: Subset<T, User$IncidentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    IncidentUpdate<T extends User$IncidentUpdateArgs<ExtArgs> = {}>(args?: Subset<T, User$IncidentUpdateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly defaultOrgId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.defaultOrg
   */
  export type User$defaultOrgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.createdOrganizations
   */
  export type User$createdOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    where?: UserOrganizationWhereInput
    orderBy?: UserOrganizationOrderByWithRelationInput | UserOrganizationOrderByWithRelationInput[]
    cursor?: UserOrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOrganizationScalarFieldEnum | UserOrganizationScalarFieldEnum[]
  }

  /**
   * User.Incident
   */
  export type User$IncidentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * User.IncidentUpdate
   */
  export type User$IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    cursor?: IncidentUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    services?: boolean | Organization$servicesArgs<ExtArgs>
    incidents?: boolean | Organization$incidentsArgs<ExtArgs>
    defaultUsers?: boolean | Organization$defaultUsersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    services?: boolean | Organization$servicesArgs<ExtArgs>
    incidents?: boolean | Organization$incidentsArgs<ExtArgs>
    defaultUsers?: boolean | Organization$defaultUsersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs>
      users: Prisma.$UserOrganizationPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      defaultUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Organization$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incidents<T extends Organization$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultUsers<T extends Organization$defaultUsersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$defaultUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdBy: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    where?: UserOrganizationWhereInput
    orderBy?: UserOrganizationOrderByWithRelationInput | UserOrganizationOrderByWithRelationInput[]
    cursor?: UserOrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOrganizationScalarFieldEnum | UserOrganizationScalarFieldEnum[]
  }

  /**
   * Organization.services
   */
  export type Organization$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Organization.incidents
   */
  export type Organization$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Organization.defaultUsers
   */
  export type Organization$defaultUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model UserOrganization
   */

  export type AggregateUserOrganization = {
    _count: UserOrganizationCountAggregateOutputType | null
    _min: UserOrganizationMinAggregateOutputType | null
    _max: UserOrganizationMaxAggregateOutputType | null
  }

  export type UserOrganizationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: $Enums.OrgRole | null
    createdAt: Date | null
  }

  export type UserOrganizationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    organizationId: string | null
    role: $Enums.OrgRole | null
    createdAt: Date | null
  }

  export type UserOrganizationCountAggregateOutputType = {
    id: number
    userId: number
    organizationId: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserOrganizationMinAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    createdAt?: true
  }

  export type UserOrganizationMaxAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    createdAt?: true
  }

  export type UserOrganizationCountAggregateInputType = {
    id?: true
    userId?: true
    organizationId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserOrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOrganization to aggregate.
     */
    where?: UserOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrganizations to fetch.
     */
    orderBy?: UserOrganizationOrderByWithRelationInput | UserOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrganizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOrganizations
    **/
    _count?: true | UserOrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOrganizationMaxAggregateInputType
  }

  export type GetUserOrganizationAggregateType<T extends UserOrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOrganization[P]>
      : GetScalarType<T[P], AggregateUserOrganization[P]>
  }




  export type UserOrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrganizationWhereInput
    orderBy?: UserOrganizationOrderByWithAggregationInput | UserOrganizationOrderByWithAggregationInput[]
    by: UserOrganizationScalarFieldEnum[] | UserOrganizationScalarFieldEnum
    having?: UserOrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOrganizationCountAggregateInputType | true
    _min?: UserOrganizationMinAggregateInputType
    _max?: UserOrganizationMaxAggregateInputType
  }

  export type UserOrganizationGroupByOutputType = {
    id: string
    userId: string
    organizationId: string
    role: $Enums.OrgRole
    createdAt: Date
    _count: UserOrganizationCountAggregateOutputType | null
    _min: UserOrganizationMinAggregateOutputType | null
    _max: UserOrganizationMaxAggregateOutputType | null
  }

  type GetUserOrganizationGroupByPayload<T extends UserOrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], UserOrganizationGroupByOutputType[P]>
        }
      >
    >


  export type UserOrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrganization"]>

  export type UserOrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrganization"]>

  export type UserOrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrganization"]>

  export type UserOrganizationSelectScalar = {
    id?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "organizationId" | "role" | "createdAt", ExtArgs["result"]["userOrganization"]>
  export type UserOrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserOrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type UserOrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $UserOrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOrganization"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      organizationId: string
      role: $Enums.OrgRole
      createdAt: Date
    }, ExtArgs["result"]["userOrganization"]>
    composites: {}
  }

  type UserOrganizationGetPayload<S extends boolean | null | undefined | UserOrganizationDefaultArgs> = $Result.GetResult<Prisma.$UserOrganizationPayload, S>

  type UserOrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOrganizationCountAggregateInputType | true
    }

  export interface UserOrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOrganization'], meta: { name: 'UserOrganization' } }
    /**
     * Find zero or one UserOrganization that matches the filter.
     * @param {UserOrganizationFindUniqueArgs} args - Arguments to find a UserOrganization
     * @example
     * // Get one UserOrganization
     * const userOrganization = await prisma.userOrganization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOrganizationFindUniqueArgs>(args: SelectSubset<T, UserOrganizationFindUniqueArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOrganization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOrganizationFindUniqueOrThrowArgs} args - Arguments to find a UserOrganization
     * @example
     * // Get one UserOrganization
     * const userOrganization = await prisma.userOrganization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOrganization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationFindFirstArgs} args - Arguments to find a UserOrganization
     * @example
     * // Get one UserOrganization
     * const userOrganization = await prisma.userOrganization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOrganizationFindFirstArgs>(args?: SelectSubset<T, UserOrganizationFindFirstArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOrganization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationFindFirstOrThrowArgs} args - Arguments to find a UserOrganization
     * @example
     * // Get one UserOrganization
     * const userOrganization = await prisma.userOrganization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOrganizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOrganizations
     * const userOrganizations = await prisma.userOrganization.findMany()
     * 
     * // Get first 10 UserOrganizations
     * const userOrganizations = await prisma.userOrganization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOrganizationWithIdOnly = await prisma.userOrganization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOrganizationFindManyArgs>(args?: SelectSubset<T, UserOrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOrganization.
     * @param {UserOrganizationCreateArgs} args - Arguments to create a UserOrganization.
     * @example
     * // Create one UserOrganization
     * const UserOrganization = await prisma.userOrganization.create({
     *   data: {
     *     // ... data to create a UserOrganization
     *   }
     * })
     * 
     */
    create<T extends UserOrganizationCreateArgs>(args: SelectSubset<T, UserOrganizationCreateArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOrganizations.
     * @param {UserOrganizationCreateManyArgs} args - Arguments to create many UserOrganizations.
     * @example
     * // Create many UserOrganizations
     * const userOrganization = await prisma.userOrganization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOrganizationCreateManyArgs>(args?: SelectSubset<T, UserOrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOrganizations and returns the data saved in the database.
     * @param {UserOrganizationCreateManyAndReturnArgs} args - Arguments to create many UserOrganizations.
     * @example
     * // Create many UserOrganizations
     * const userOrganization = await prisma.userOrganization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOrganizations and only return the `id`
     * const userOrganizationWithIdOnly = await prisma.userOrganization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOrganization.
     * @param {UserOrganizationDeleteArgs} args - Arguments to delete one UserOrganization.
     * @example
     * // Delete one UserOrganization
     * const UserOrganization = await prisma.userOrganization.delete({
     *   where: {
     *     // ... filter to delete one UserOrganization
     *   }
     * })
     * 
     */
    delete<T extends UserOrganizationDeleteArgs>(args: SelectSubset<T, UserOrganizationDeleteArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOrganization.
     * @param {UserOrganizationUpdateArgs} args - Arguments to update one UserOrganization.
     * @example
     * // Update one UserOrganization
     * const userOrganization = await prisma.userOrganization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOrganizationUpdateArgs>(args: SelectSubset<T, UserOrganizationUpdateArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOrganizations.
     * @param {UserOrganizationDeleteManyArgs} args - Arguments to filter UserOrganizations to delete.
     * @example
     * // Delete a few UserOrganizations
     * const { count } = await prisma.userOrganization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOrganizationDeleteManyArgs>(args?: SelectSubset<T, UserOrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOrganizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOrganizations
     * const userOrganization = await prisma.userOrganization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOrganizationUpdateManyArgs>(args: SelectSubset<T, UserOrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOrganizations and returns the data updated in the database.
     * @param {UserOrganizationUpdateManyAndReturnArgs} args - Arguments to update many UserOrganizations.
     * @example
     * // Update many UserOrganizations
     * const userOrganization = await prisma.userOrganization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOrganizations and only return the `id`
     * const userOrganizationWithIdOnly = await prisma.userOrganization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserOrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOrganization.
     * @param {UserOrganizationUpsertArgs} args - Arguments to update or create a UserOrganization.
     * @example
     * // Update or create a UserOrganization
     * const userOrganization = await prisma.userOrganization.upsert({
     *   create: {
     *     // ... data to create a UserOrganization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOrganization we want to update
     *   }
     * })
     */
    upsert<T extends UserOrganizationUpsertArgs>(args: SelectSubset<T, UserOrganizationUpsertArgs<ExtArgs>>): Prisma__UserOrganizationClient<$Result.GetResult<Prisma.$UserOrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOrganizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationCountArgs} args - Arguments to filter UserOrganizations to count.
     * @example
     * // Count the number of UserOrganizations
     * const count = await prisma.userOrganization.count({
     *   where: {
     *     // ... the filter for the UserOrganizations we want to count
     *   }
     * })
    **/
    count<T extends UserOrganizationCountArgs>(
      args?: Subset<T, UserOrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOrganization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOrganizationAggregateArgs>(args: Subset<T, UserOrganizationAggregateArgs>): Prisma.PrismaPromise<GetUserOrganizationAggregateType<T>>

    /**
     * Group by UserOrganization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOrganizationGroupByArgs['orderBy'] }
        : { orderBy?: UserOrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOrganization model
   */
  readonly fields: UserOrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOrganization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOrganization model
   */
  interface UserOrganizationFieldRefs {
    readonly id: FieldRef<"UserOrganization", 'String'>
    readonly userId: FieldRef<"UserOrganization", 'String'>
    readonly organizationId: FieldRef<"UserOrganization", 'String'>
    readonly role: FieldRef<"UserOrganization", 'OrgRole'>
    readonly createdAt: FieldRef<"UserOrganization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserOrganization findUnique
   */
  export type UserOrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which UserOrganization to fetch.
     */
    where: UserOrganizationWhereUniqueInput
  }

  /**
   * UserOrganization findUniqueOrThrow
   */
  export type UserOrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which UserOrganization to fetch.
     */
    where: UserOrganizationWhereUniqueInput
  }

  /**
   * UserOrganization findFirst
   */
  export type UserOrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which UserOrganization to fetch.
     */
    where?: UserOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrganizations to fetch.
     */
    orderBy?: UserOrganizationOrderByWithRelationInput | UserOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOrganizations.
     */
    cursor?: UserOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrganizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrganizations.
     */
    distinct?: UserOrganizationScalarFieldEnum | UserOrganizationScalarFieldEnum[]
  }

  /**
   * UserOrganization findFirstOrThrow
   */
  export type UserOrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which UserOrganization to fetch.
     */
    where?: UserOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrganizations to fetch.
     */
    orderBy?: UserOrganizationOrderByWithRelationInput | UserOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOrganizations.
     */
    cursor?: UserOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrganizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrganizations.
     */
    distinct?: UserOrganizationScalarFieldEnum | UserOrganizationScalarFieldEnum[]
  }

  /**
   * UserOrganization findMany
   */
  export type UserOrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * Filter, which UserOrganizations to fetch.
     */
    where?: UserOrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrganizations to fetch.
     */
    orderBy?: UserOrganizationOrderByWithRelationInput | UserOrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOrganizations.
     */
    cursor?: UserOrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrganizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrganizations.
     */
    skip?: number
    distinct?: UserOrganizationScalarFieldEnum | UserOrganizationScalarFieldEnum[]
  }

  /**
   * UserOrganization create
   */
  export type UserOrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOrganization.
     */
    data: XOR<UserOrganizationCreateInput, UserOrganizationUncheckedCreateInput>
  }

  /**
   * UserOrganization createMany
   */
  export type UserOrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOrganizations.
     */
    data: UserOrganizationCreateManyInput | UserOrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOrganization createManyAndReturn
   */
  export type UserOrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many UserOrganizations.
     */
    data: UserOrganizationCreateManyInput | UserOrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOrganization update
   */
  export type UserOrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOrganization.
     */
    data: XOR<UserOrganizationUpdateInput, UserOrganizationUncheckedUpdateInput>
    /**
     * Choose, which UserOrganization to update.
     */
    where: UserOrganizationWhereUniqueInput
  }

  /**
   * UserOrganization updateMany
   */
  export type UserOrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOrganizations.
     */
    data: XOR<UserOrganizationUpdateManyMutationInput, UserOrganizationUncheckedUpdateManyInput>
    /**
     * Filter which UserOrganizations to update
     */
    where?: UserOrganizationWhereInput
    /**
     * Limit how many UserOrganizations to update.
     */
    limit?: number
  }

  /**
   * UserOrganization updateManyAndReturn
   */
  export type UserOrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * The data used to update UserOrganizations.
     */
    data: XOR<UserOrganizationUpdateManyMutationInput, UserOrganizationUncheckedUpdateManyInput>
    /**
     * Filter which UserOrganizations to update
     */
    where?: UserOrganizationWhereInput
    /**
     * Limit how many UserOrganizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOrganization upsert
   */
  export type UserOrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOrganization to update in case it exists.
     */
    where: UserOrganizationWhereUniqueInput
    /**
     * In case the UserOrganization found by the `where` argument doesn't exist, create a new UserOrganization with this data.
     */
    create: XOR<UserOrganizationCreateInput, UserOrganizationUncheckedCreateInput>
    /**
     * In case the UserOrganization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOrganizationUpdateInput, UserOrganizationUncheckedUpdateInput>
  }

  /**
   * UserOrganization delete
   */
  export type UserOrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
    /**
     * Filter which UserOrganization to delete.
     */
    where: UserOrganizationWhereUniqueInput
  }

  /**
   * UserOrganization deleteMany
   */
  export type UserOrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOrganizations to delete
     */
    where?: UserOrganizationWhereInput
    /**
     * Limit how many UserOrganizations to delete.
     */
    limit?: number
  }

  /**
   * UserOrganization without action
   */
  export type UserOrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrganization
     */
    select?: UserOrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrganization
     */
    omit?: UserOrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ServiceType | null
    status: $Enums.ServiceStatus | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ServiceType | null
    status: $Enums.ServiceStatus | null
    organizationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    type: number
    status: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    status?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ServiceType
    status: $Enums.ServiceStatus
    organizationId: string
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    incidents?: boolean | Service$incidentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "status" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    incidents?: boolean | Service$incidentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ServiceType
      status: $Enums.ServiceStatus
      organizationId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incidents<T extends Service$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly type: FieldRef<"Service", 'ServiceType'>
    readonly status: FieldRef<"Service", 'ServiceStatus'>
    readonly organizationId: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.incidents
   */
  export type Service$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.IncidentStatus | null
    serviceId: string | null
    startedAt: Date | null
    resolvedAt: Date | null
    organizationId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.IncidentStatus | null
    serviceId: string | null
    startedAt: Date | null
    resolvedAt: Date | null
    organizationId: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    serviceId: number
    startedAt: number
    resolvedAt: number
    organizationId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    serviceId?: true
    startedAt?: true
    resolvedAt?: true
    organizationId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    serviceId?: true
    startedAt?: true
    resolvedAt?: true
    organizationId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    serviceId?: true
    startedAt?: true
    resolvedAt?: true
    organizationId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date
    resolvedAt: Date | null
    organizationId: string
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    serviceId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    organizationId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Incident$updatesArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    serviceId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    organizationId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    serviceId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    organizationId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    serviceId?: boolean
    startedAt?: boolean
    resolvedAt?: boolean
    organizationId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "serviceId" | "startedAt" | "resolvedAt" | "organizationId" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Incident$updatesArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      updates: Prisma.$IncidentUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.IncidentStatus
      serviceId: string
      startedAt: Date
      resolvedAt: Date | null
      organizationId: string
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updates<T extends Incident$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'String'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly status: FieldRef<"Incident", 'IncidentStatus'>
    readonly serviceId: FieldRef<"Incident", 'String'>
    readonly startedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly organizationId: FieldRef<"Incident", 'String'>
    readonly createdBy: FieldRef<"Incident", 'String'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.updates
   */
  export type Incident$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    cursor?: IncidentUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentUpdate
   */

  export type AggregateIncidentUpdate = {
    _count: IncidentUpdateCountAggregateOutputType | null
    _min: IncidentUpdateMinAggregateOutputType | null
    _max: IncidentUpdateMaxAggregateOutputType | null
  }

  export type IncidentUpdateMinAggregateOutputType = {
    id: string | null
    incidentId: string | null
    message: string | null
    status: $Enums.IncidentStatus | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type IncidentUpdateMaxAggregateOutputType = {
    id: string | null
    incidentId: string | null
    message: string | null
    status: $Enums.IncidentStatus | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type IncidentUpdateCountAggregateOutputType = {
    id: number
    incidentId: number
    message: number
    status: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type IncidentUpdateMinAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdBy?: true
    createdAt?: true
  }

  export type IncidentUpdateMaxAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdBy?: true
    createdAt?: true
  }

  export type IncidentUpdateCountAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentUpdate to aggregate.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentUpdates
    **/
    _count?: true | IncidentUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentUpdateMaxAggregateInputType
  }

  export type GetIncidentUpdateAggregateType<T extends IncidentUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentUpdate[P]>
      : GetScalarType<T[P], AggregateIncidentUpdate[P]>
  }




  export type IncidentUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithAggregationInput | IncidentUpdateOrderByWithAggregationInput[]
    by: IncidentUpdateScalarFieldEnum[] | IncidentUpdateScalarFieldEnum
    having?: IncidentUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentUpdateCountAggregateInputType | true
    _min?: IncidentUpdateMinAggregateInputType
    _max?: IncidentUpdateMaxAggregateInputType
  }

  export type IncidentUpdateGroupByOutputType = {
    id: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdBy: string
    createdAt: Date
    _count: IncidentUpdateCountAggregateOutputType | null
    _min: IncidentUpdateMinAggregateOutputType | null
    _max: IncidentUpdateMaxAggregateOutputType | null
  }

  type GetIncidentUpdateGroupByPayload<T extends IncidentUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentUpdateGroupByOutputType[P]>
        }
      >
    >


  export type IncidentUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectScalar = {
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type IncidentUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "message" | "status" | "createdBy" | "createdAt", ExtArgs["result"]["incidentUpdate"]>
  export type IncidentUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncidentUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncidentUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentUpdate"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      incidentId: string
      message: string
      status: $Enums.IncidentStatus
      createdBy: string
      createdAt: Date
    }, ExtArgs["result"]["incidentUpdate"]>
    composites: {}
  }

  type IncidentUpdateGetPayload<S extends boolean | null | undefined | IncidentUpdateDefaultArgs> = $Result.GetResult<Prisma.$IncidentUpdatePayload, S>

  type IncidentUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentUpdateCountAggregateInputType | true
    }

  export interface IncidentUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentUpdate'], meta: { name: 'IncidentUpdate' } }
    /**
     * Find zero or one IncidentUpdate that matches the filter.
     * @param {IncidentUpdateFindUniqueArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentUpdateFindUniqueArgs>(args: SelectSubset<T, IncidentUpdateFindUniqueArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentUpdateFindUniqueOrThrowArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindFirstArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentUpdateFindFirstArgs>(args?: SelectSubset<T, IncidentUpdateFindFirstArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindFirstOrThrowArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentUpdates
     * const incidentUpdates = await prisma.incidentUpdate.findMany()
     * 
     * // Get first 10 IncidentUpdates
     * const incidentUpdates = await prisma.incidentUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentUpdateFindManyArgs>(args?: SelectSubset<T, IncidentUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentUpdate.
     * @param {IncidentUpdateCreateArgs} args - Arguments to create a IncidentUpdate.
     * @example
     * // Create one IncidentUpdate
     * const IncidentUpdate = await prisma.incidentUpdate.create({
     *   data: {
     *     // ... data to create a IncidentUpdate
     *   }
     * })
     * 
     */
    create<T extends IncidentUpdateCreateArgs>(args: SelectSubset<T, IncidentUpdateCreateArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentUpdates.
     * @param {IncidentUpdateCreateManyArgs} args - Arguments to create many IncidentUpdates.
     * @example
     * // Create many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentUpdateCreateManyArgs>(args?: SelectSubset<T, IncidentUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentUpdates and returns the data saved in the database.
     * @param {IncidentUpdateCreateManyAndReturnArgs} args - Arguments to create many IncidentUpdates.
     * @example
     * // Create many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentUpdates and only return the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentUpdate.
     * @param {IncidentUpdateDeleteArgs} args - Arguments to delete one IncidentUpdate.
     * @example
     * // Delete one IncidentUpdate
     * const IncidentUpdate = await prisma.incidentUpdate.delete({
     *   where: {
     *     // ... filter to delete one IncidentUpdate
     *   }
     * })
     * 
     */
    delete<T extends IncidentUpdateDeleteArgs>(args: SelectSubset<T, IncidentUpdateDeleteArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentUpdate.
     * @param {IncidentUpdateUpdateArgs} args - Arguments to update one IncidentUpdate.
     * @example
     * // Update one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateUpdateArgs>(args: SelectSubset<T, IncidentUpdateUpdateArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentUpdates.
     * @param {IncidentUpdateDeleteManyArgs} args - Arguments to filter IncidentUpdates to delete.
     * @example
     * // Delete a few IncidentUpdates
     * const { count } = await prisma.incidentUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentUpdateDeleteManyArgs>(args?: SelectSubset<T, IncidentUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentUpdates and returns the data updated in the database.
     * @param {IncidentUpdateUpdateManyAndReturnArgs} args - Arguments to update many IncidentUpdates.
     * @example
     * // Update many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentUpdates and only return the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentUpdate.
     * @param {IncidentUpdateUpsertArgs} args - Arguments to update or create a IncidentUpdate.
     * @example
     * // Update or create a IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.upsert({
     *   create: {
     *     // ... data to create a IncidentUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentUpdate we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpdateUpsertArgs>(args: SelectSubset<T, IncidentUpdateUpsertArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateCountArgs} args - Arguments to filter IncidentUpdates to count.
     * @example
     * // Count the number of IncidentUpdates
     * const count = await prisma.incidentUpdate.count({
     *   where: {
     *     // ... the filter for the IncidentUpdates we want to count
     *   }
     * })
    **/
    count<T extends IncidentUpdateCountArgs>(
      args?: Subset<T, IncidentUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentUpdateAggregateArgs>(args: Subset<T, IncidentUpdateAggregateArgs>): Prisma.PrismaPromise<GetIncidentUpdateAggregateType<T>>

    /**
     * Group by IncidentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentUpdateGroupByArgs['orderBy'] }
        : { orderBy?: IncidentUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentUpdate model
   */
  readonly fields: IncidentUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentUpdate model
   */
  interface IncidentUpdateFieldRefs {
    readonly id: FieldRef<"IncidentUpdate", 'String'>
    readonly incidentId: FieldRef<"IncidentUpdate", 'String'>
    readonly message: FieldRef<"IncidentUpdate", 'String'>
    readonly status: FieldRef<"IncidentUpdate", 'IncidentStatus'>
    readonly createdBy: FieldRef<"IncidentUpdate", 'String'>
    readonly createdAt: FieldRef<"IncidentUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentUpdate findUnique
   */
  export type IncidentUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate findUniqueOrThrow
   */
  export type IncidentUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate findFirst
   */
  export type IncidentUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentUpdates.
     */
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate findFirstOrThrow
   */
  export type IncidentUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentUpdates.
     */
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate findMany
   */
  export type IncidentUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdates to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate create
   */
  export type IncidentUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentUpdate.
     */
    data: XOR<IncidentUpdateCreateInput, IncidentUpdateUncheckedCreateInput>
  }

  /**
   * IncidentUpdate createMany
   */
  export type IncidentUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentUpdates.
     */
    data: IncidentUpdateCreateManyInput | IncidentUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentUpdate createManyAndReturn
   */
  export type IncidentUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentUpdates.
     */
    data: IncidentUpdateCreateManyInput | IncidentUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentUpdate update
   */
  export type IncidentUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentUpdate.
     */
    data: XOR<IncidentUpdateUpdateInput, IncidentUpdateUncheckedUpdateInput>
    /**
     * Choose, which IncidentUpdate to update.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate updateMany
   */
  export type IncidentUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentUpdates.
     */
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyInput>
    /**
     * Filter which IncidentUpdates to update
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to update.
     */
    limit?: number
  }

  /**
   * IncidentUpdate updateManyAndReturn
   */
  export type IncidentUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * The data used to update IncidentUpdates.
     */
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyInput>
    /**
     * Filter which IncidentUpdates to update
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentUpdate upsert
   */
  export type IncidentUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentUpdate to update in case it exists.
     */
    where: IncidentUpdateWhereUniqueInput
    /**
     * In case the IncidentUpdate found by the `where` argument doesn't exist, create a new IncidentUpdate with this data.
     */
    create: XOR<IncidentUpdateCreateInput, IncidentUpdateUncheckedCreateInput>
    /**
     * In case the IncidentUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateUpdateInput, IncidentUpdateUncheckedUpdateInput>
  }

  /**
   * IncidentUpdate delete
   */
  export type IncidentUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter which IncidentUpdate to delete.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate deleteMany
   */
  export type IncidentUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentUpdates to delete
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to delete.
     */
    limit?: number
  }

  /**
   * IncidentUpdate without action
   */
  export type IncidentUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    defaultOrgId: 'defaultOrgId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const UserOrganizationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    organizationId: 'organizationId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserOrganizationScalarFieldEnum = (typeof UserOrganizationScalarFieldEnum)[keyof typeof UserOrganizationScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    status: 'status',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    serviceId: 'serviceId',
    startedAt: 'startedAt',
    resolvedAt: 'resolvedAt',
    organizationId: 'organizationId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentUpdateScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    message: 'message',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type IncidentUpdateScalarFieldEnum = (typeof IncidentUpdateScalarFieldEnum)[keyof typeof IncidentUpdateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrgRole'
   */
  export type EnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole'>
    


  /**
   * Reference to a field of type 'OrgRole[]'
   */
  export type ListEnumOrgRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrgRole[]'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'ServiceStatus'
   */
  export type EnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus'>
    


  /**
   * Reference to a field of type 'ServiceStatus[]'
   */
  export type ListEnumServiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceStatus[]'>
    


  /**
   * Reference to a field of type 'IncidentStatus'
   */
  export type EnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus'>
    


  /**
   * Reference to a field of type 'IncidentStatus[]'
   */
  export type ListEnumIncidentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    defaultOrgId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    defaultOrg?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    createdOrganizations?: OrganizationListRelationFilter
    memberships?: UserOrganizationListRelationFilter
    Incident?: IncidentListRelationFilter
    IncidentUpdate?: IncidentUpdateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    defaultOrgId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    defaultOrg?: OrganizationOrderByWithRelationInput
    createdOrganizations?: OrganizationOrderByRelationAggregateInput
    memberships?: UserOrganizationOrderByRelationAggregateInput
    Incident?: IncidentOrderByRelationAggregateInput
    IncidentUpdate?: IncidentUpdateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    defaultOrgId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    defaultOrg?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    createdOrganizations?: OrganizationListRelationFilter
    memberships?: UserOrganizationListRelationFilter
    Incident?: IncidentListRelationFilter
    IncidentUpdate?: IncidentUpdateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    defaultOrgId?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    defaultOrgId?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdBy?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    users?: UserOrganizationListRelationFilter
    services?: ServiceListRelationFilter
    incidents?: IncidentListRelationFilter
    defaultUsers?: UserListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    users?: UserOrganizationOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    incidents?: IncidentOrderByRelationAggregateInput
    defaultUsers?: UserOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdBy?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    createdByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    users?: UserOrganizationListRelationFilter
    services?: ServiceListRelationFilter
    incidents?: IncidentListRelationFilter
    defaultUsers?: UserListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdBy?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type UserOrganizationWhereInput = {
    AND?: UserOrganizationWhereInput | UserOrganizationWhereInput[]
    OR?: UserOrganizationWhereInput[]
    NOT?: UserOrganizationWhereInput | UserOrganizationWhereInput[]
    id?: StringFilter<"UserOrganization"> | string
    userId?: StringFilter<"UserOrganization"> | string
    organizationId?: StringFilter<"UserOrganization"> | string
    role?: EnumOrgRoleFilter<"UserOrganization"> | $Enums.OrgRole
    createdAt?: DateTimeFilter<"UserOrganization"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type UserOrganizationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type UserOrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_organizationId?: UserOrganizationUserIdOrganizationIdCompoundUniqueInput
    AND?: UserOrganizationWhereInput | UserOrganizationWhereInput[]
    OR?: UserOrganizationWhereInput[]
    NOT?: UserOrganizationWhereInput | UserOrganizationWhereInput[]
    userId?: StringFilter<"UserOrganization"> | string
    organizationId?: StringFilter<"UserOrganization"> | string
    role?: EnumOrgRoleFilter<"UserOrganization"> | $Enums.OrgRole
    createdAt?: DateTimeFilter<"UserOrganization"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "userId_organizationId">

  export type UserOrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserOrganizationCountOrderByAggregateInput
    _max?: UserOrganizationMaxOrderByAggregateInput
    _min?: UserOrganizationMinOrderByAggregateInput
  }

  export type UserOrganizationScalarWhereWithAggregatesInput = {
    AND?: UserOrganizationScalarWhereWithAggregatesInput | UserOrganizationScalarWhereWithAggregatesInput[]
    OR?: UserOrganizationScalarWhereWithAggregatesInput[]
    NOT?: UserOrganizationScalarWhereWithAggregatesInput | UserOrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserOrganization"> | string
    userId?: StringWithAggregatesFilter<"UserOrganization"> | string
    organizationId?: StringWithAggregatesFilter<"UserOrganization"> | string
    role?: EnumOrgRoleWithAggregatesFilter<"UserOrganization"> | $Enums.OrgRole
    createdAt?: DateTimeWithAggregatesFilter<"UserOrganization"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    organizationId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    incidents?: IncidentListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    incidents?: IncidentOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_organizationId?: ServiceNameOrganizationIdCompoundUniqueInput
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    organizationId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    incidents?: IncidentListRelationFilter
  }, "id" | "name_organizationId">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    type?: EnumServiceTypeWithAggregatesFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusWithAggregatesFilter<"Service"> | $Enums.ServiceStatus
    organizationId?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    serviceId?: StringFilter<"Incident"> | string
    startedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    organizationId?: StringFilter<"Incident"> | string
    createdBy?: StringFilter<"Incident"> | string
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: IncidentUpdateListRelationFilter
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    serviceId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    updates?: IncidentUpdateOrderByRelationAggregateInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    serviceId?: StringFilter<"Incident"> | string
    startedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    organizationId?: StringFilter<"Incident"> | string
    createdBy?: StringFilter<"Incident"> | string
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: IncidentUpdateListRelationFilter
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    serviceId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Incident"> | string
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    status?: EnumIncidentStatusWithAggregatesFilter<"Incident"> | $Enums.IncidentStatus
    serviceId?: StringWithAggregatesFilter<"Incident"> | string
    startedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    organizationId?: StringWithAggregatesFilter<"Incident"> | string
    createdBy?: StringWithAggregatesFilter<"Incident"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type IncidentUpdateWhereInput = {
    AND?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    OR?: IncidentUpdateWhereInput[]
    NOT?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    id?: StringFilter<"IncidentUpdate"> | string
    incidentId?: StringFilter<"IncidentUpdate"> | string
    message?: StringFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdBy?: StringFilter<"IncidentUpdate"> | string
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncidentUpdateOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type IncidentUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    OR?: IncidentUpdateWhereInput[]
    NOT?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    incidentId?: StringFilter<"IncidentUpdate"> | string
    message?: StringFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdBy?: StringFilter<"IncidentUpdate"> | string
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncidentUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    _count?: IncidentUpdateCountOrderByAggregateInput
    _max?: IncidentUpdateMaxOrderByAggregateInput
    _min?: IncidentUpdateMinOrderByAggregateInput
  }

  export type IncidentUpdateScalarWhereWithAggregatesInput = {
    AND?: IncidentUpdateScalarWhereWithAggregatesInput | IncidentUpdateScalarWhereWithAggregatesInput[]
    OR?: IncidentUpdateScalarWhereWithAggregatesInput[]
    NOT?: IncidentUpdateScalarWhereWithAggregatesInput | IncidentUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    incidentId?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    message?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusWithAggregatesFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdBy?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IncidentUpdate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultOrg?: OrganizationCreateNestedOneWithoutDefaultUsersInput
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationCreateNestedManyWithoutUserInput
    Incident?: IncidentCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    defaultOrgId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationUncheckedCreateNestedManyWithoutUserInput
    Incident?: IncidentUncheckedCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultOrg?: OrganizationUpdateOneWithoutDefaultUsersNestedInput
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUpdateManyWithoutUserNestedInput
    Incident?: IncidentUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUncheckedUpdateManyWithoutUserNestedInput
    Incident?: IncidentUncheckedUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    defaultOrgId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedOrganizationsInput
    users?: UserOrganizationCreateNestedManyWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInput
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserUncheckedCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput
    users?: UserOrganizationUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUncheckedUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationCreateInput = {
    id?: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserOrganizationUncheckedCreateInput = {
    id?: string
    userId: string
    organizationId: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type UserOrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationCreateManyInput = {
    id?: string
    userId: string
    organizationId: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type UserOrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutServicesInput
    incidents?: IncidentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutServicesNestedInput
    incidents?: IncidentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    service: ServiceCreateNestedOneWithoutIncidentsInput
    creator: UserCreateNestedOneWithoutIncidentInput
    updates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutIncidentsNestedInput
    creator?: UserUpdateOneRequiredWithoutIncidentNestedInput
    updates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutUpdatesInput
    user: UserCreateNestedOneWithoutIncidentUpdateInput
  }

  export type IncidentUpdateUncheckedCreateInput = {
    id?: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdBy: string
    createdAt?: Date | string
  }

  export type IncidentUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutUpdatesNestedInput
    user?: UserUpdateOneRequiredWithoutIncidentUpdateNestedInput
  }

  export type IncidentUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateManyInput = {
    id?: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdBy: string
    createdAt?: Date | string
  }

  export type IncidentUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type UserOrganizationListRelationFilter = {
    every?: UserOrganizationWhereInput
    some?: UserOrganizationWhereInput
    none?: UserOrganizationWhereInput
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type IncidentUpdateListRelationFilter = {
    every?: IncidentUpdateWhereInput
    some?: IncidentUpdateWhereInput
    none?: IncidentUpdateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    defaultOrgId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    defaultOrgId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    defaultOrgId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type UserOrganizationUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type UserOrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserOrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserOrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type EnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type ServiceNameOrganizationIdCompoundUniqueInput = {
    name: string
    organizationId: string
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type EnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type EnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    serviceId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    serviceId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    serviceId?: SortOrder
    startedAt?: SortOrder
    resolvedAt?: SortOrder
    organizationId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type IncidentUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutDefaultUsersInput = {
    create?: XOR<OrganizationCreateWithoutDefaultUsersInput, OrganizationUncheckedCreateWithoutDefaultUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<OrganizationCreateWithoutCreatedByUserInput, OrganizationUncheckedCreateWithoutCreatedByUserInput> | OrganizationCreateWithoutCreatedByUserInput[] | OrganizationUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutCreatedByUserInput | OrganizationCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: OrganizationCreateManyCreatedByUserInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type UserOrganizationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOrganizationCreateWithoutUserInput, UserOrganizationUncheckedCreateWithoutUserInput> | UserOrganizationCreateWithoutUserInput[] | UserOrganizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutUserInput | UserOrganizationCreateOrConnectWithoutUserInput[]
    createMany?: UserOrganizationCreateManyUserInputEnvelope
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutCreatorInput = {
    create?: XOR<IncidentCreateWithoutCreatorInput, IncidentUncheckedCreateWithoutCreatorInput> | IncidentCreateWithoutCreatorInput[] | IncidentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatorInput | IncidentCreateOrConnectWithoutCreatorInput[]
    createMany?: IncidentCreateManyCreatorInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUpdateCreateNestedManyWithoutUserInput = {
    create?: XOR<IncidentUpdateCreateWithoutUserInput, IncidentUpdateUncheckedCreateWithoutUserInput> | IncidentUpdateCreateWithoutUserInput[] | IncidentUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutUserInput | IncidentUpdateCreateOrConnectWithoutUserInput[]
    createMany?: IncidentUpdateCreateManyUserInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<OrganizationCreateWithoutCreatedByUserInput, OrganizationUncheckedCreateWithoutCreatedByUserInput> | OrganizationCreateWithoutCreatedByUserInput[] | OrganizationUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutCreatedByUserInput | OrganizationCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: OrganizationCreateManyCreatedByUserInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type UserOrganizationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOrganizationCreateWithoutUserInput, UserOrganizationUncheckedCreateWithoutUserInput> | UserOrganizationCreateWithoutUserInput[] | UserOrganizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutUserInput | UserOrganizationCreateOrConnectWithoutUserInput[]
    createMany?: UserOrganizationCreateManyUserInputEnvelope
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<IncidentCreateWithoutCreatorInput, IncidentUncheckedCreateWithoutCreatorInput> | IncidentCreateWithoutCreatorInput[] | IncidentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatorInput | IncidentCreateOrConnectWithoutCreatorInput[]
    createMany?: IncidentCreateManyCreatorInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUpdateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncidentUpdateCreateWithoutUserInput, IncidentUpdateUncheckedCreateWithoutUserInput> | IncidentUpdateCreateWithoutUserInput[] | IncidentUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutUserInput | IncidentUpdateCreateOrConnectWithoutUserInput[]
    createMany?: IncidentUpdateCreateManyUserInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneWithoutDefaultUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutDefaultUsersInput, OrganizationUncheckedCreateWithoutDefaultUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultUsersInput
    upsert?: OrganizationUpsertWithoutDefaultUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDefaultUsersInput, OrganizationUpdateWithoutDefaultUsersInput>, OrganizationUncheckedUpdateWithoutDefaultUsersInput>
  }

  export type OrganizationUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<OrganizationCreateWithoutCreatedByUserInput, OrganizationUncheckedCreateWithoutCreatedByUserInput> | OrganizationCreateWithoutCreatedByUserInput[] | OrganizationUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutCreatedByUserInput | OrganizationCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutCreatedByUserInput | OrganizationUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: OrganizationCreateManyCreatedByUserInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutCreatedByUserInput | OrganizationUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutCreatedByUserInput | OrganizationUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type UserOrganizationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOrganizationCreateWithoutUserInput, UserOrganizationUncheckedCreateWithoutUserInput> | UserOrganizationCreateWithoutUserInput[] | UserOrganizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutUserInput | UserOrganizationCreateOrConnectWithoutUserInput[]
    upsert?: UserOrganizationUpsertWithWhereUniqueWithoutUserInput | UserOrganizationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOrganizationCreateManyUserInputEnvelope
    set?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    disconnect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    delete?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    update?: UserOrganizationUpdateWithWhereUniqueWithoutUserInput | UserOrganizationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOrganizationUpdateManyWithWhereWithoutUserInput | UserOrganizationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOrganizationScalarWhereInput | UserOrganizationScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<IncidentCreateWithoutCreatorInput, IncidentUncheckedCreateWithoutCreatorInput> | IncidentCreateWithoutCreatorInput[] | IncidentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatorInput | IncidentCreateOrConnectWithoutCreatorInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutCreatorInput | IncidentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: IncidentCreateManyCreatorInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutCreatorInput | IncidentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutCreatorInput | IncidentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUpdateUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutUserInput, IncidentUpdateUncheckedCreateWithoutUserInput> | IncidentUpdateCreateWithoutUserInput[] | IncidentUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutUserInput | IncidentUpdateCreateOrConnectWithoutUserInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutUserInput | IncidentUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncidentUpdateCreateManyUserInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutUserInput | IncidentUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutUserInput | IncidentUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<OrganizationCreateWithoutCreatedByUserInput, OrganizationUncheckedCreateWithoutCreatedByUserInput> | OrganizationCreateWithoutCreatedByUserInput[] | OrganizationUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutCreatedByUserInput | OrganizationCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutCreatedByUserInput | OrganizationUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: OrganizationCreateManyCreatedByUserInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutCreatedByUserInput | OrganizationUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutCreatedByUserInput | OrganizationUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type UserOrganizationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOrganizationCreateWithoutUserInput, UserOrganizationUncheckedCreateWithoutUserInput> | UserOrganizationCreateWithoutUserInput[] | UserOrganizationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutUserInput | UserOrganizationCreateOrConnectWithoutUserInput[]
    upsert?: UserOrganizationUpsertWithWhereUniqueWithoutUserInput | UserOrganizationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOrganizationCreateManyUserInputEnvelope
    set?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    disconnect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    delete?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    update?: UserOrganizationUpdateWithWhereUniqueWithoutUserInput | UserOrganizationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOrganizationUpdateManyWithWhereWithoutUserInput | UserOrganizationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOrganizationScalarWhereInput | UserOrganizationScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<IncidentCreateWithoutCreatorInput, IncidentUncheckedCreateWithoutCreatorInput> | IncidentCreateWithoutCreatorInput[] | IncidentUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutCreatorInput | IncidentCreateOrConnectWithoutCreatorInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutCreatorInput | IncidentUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: IncidentCreateManyCreatorInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutCreatorInput | IncidentUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutCreatorInput | IncidentUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutUserInput, IncidentUpdateUncheckedCreateWithoutUserInput> | IncidentUpdateCreateWithoutUserInput[] | IncidentUpdateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutUserInput | IncidentUpdateCreateOrConnectWithoutUserInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutUserInput | IncidentUpdateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncidentUpdateCreateManyUserInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutUserInput | IncidentUpdateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutUserInput | IncidentUpdateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedOrganizationsInput = {
    create?: XOR<UserCreateWithoutCreatedOrganizationsInput, UserUncheckedCreateWithoutCreatedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrganizationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserOrganizationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserOrganizationCreateWithoutOrganizationInput, UserOrganizationUncheckedCreateWithoutOrganizationInput> | UserOrganizationCreateWithoutOrganizationInput[] | UserOrganizationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutOrganizationInput | UserOrganizationCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserOrganizationCreateManyOrganizationInputEnvelope
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type IncidentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDefaultOrgInput = {
    create?: XOR<UserCreateWithoutDefaultOrgInput, UserUncheckedCreateWithoutDefaultOrgInput> | UserCreateWithoutDefaultOrgInput[] | UserUncheckedCreateWithoutDefaultOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultOrgInput | UserCreateOrConnectWithoutDefaultOrgInput[]
    createMany?: UserCreateManyDefaultOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserOrganizationCreateWithoutOrganizationInput, UserOrganizationUncheckedCreateWithoutOrganizationInput> | UserOrganizationCreateWithoutOrganizationInput[] | UserOrganizationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutOrganizationInput | UserOrganizationCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserOrganizationCreateManyOrganizationInputEnvelope
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultOrgInput = {
    create?: XOR<UserCreateWithoutDefaultOrgInput, UserUncheckedCreateWithoutDefaultOrgInput> | UserCreateWithoutDefaultOrgInput[] | UserUncheckedCreateWithoutDefaultOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultOrgInput | UserCreateOrConnectWithoutDefaultOrgInput[]
    createMany?: UserCreateManyDefaultOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedOrganizationsInput, UserUncheckedCreateWithoutCreatedOrganizationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrganizationsInput
    upsert?: UserUpsertWithoutCreatedOrganizationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedOrganizationsInput, UserUpdateWithoutCreatedOrganizationsInput>, UserUncheckedUpdateWithoutCreatedOrganizationsInput>
  }

  export type UserOrganizationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserOrganizationCreateWithoutOrganizationInput, UserOrganizationUncheckedCreateWithoutOrganizationInput> | UserOrganizationCreateWithoutOrganizationInput[] | UserOrganizationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutOrganizationInput | UserOrganizationCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInput | UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserOrganizationCreateManyOrganizationInputEnvelope
    set?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    disconnect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    delete?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    update?: UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInput | UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserOrganizationUpdateManyWithWhereWithoutOrganizationInput | UserOrganizationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserOrganizationScalarWhereInput | UserOrganizationScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutOrganizationInput | ServiceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutOrganizationInput | ServiceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutOrganizationInput | ServiceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type IncidentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutOrganizationInput | IncidentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutOrganizationInput | IncidentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutOrganizationInput | IncidentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDefaultOrgNestedInput = {
    create?: XOR<UserCreateWithoutDefaultOrgInput, UserUncheckedCreateWithoutDefaultOrgInput> | UserCreateWithoutDefaultOrgInput[] | UserUncheckedCreateWithoutDefaultOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultOrgInput | UserCreateOrConnectWithoutDefaultOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultOrgInput | UserUpsertWithWhereUniqueWithoutDefaultOrgInput[]
    createMany?: UserCreateManyDefaultOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultOrgInput | UserUpdateWithWhereUniqueWithoutDefaultOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultOrgInput | UserUpdateManyWithWhereWithoutDefaultOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserOrganizationCreateWithoutOrganizationInput, UserOrganizationUncheckedCreateWithoutOrganizationInput> | UserOrganizationCreateWithoutOrganizationInput[] | UserOrganizationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserOrganizationCreateOrConnectWithoutOrganizationInput | UserOrganizationCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInput | UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserOrganizationCreateManyOrganizationInputEnvelope
    set?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    disconnect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    delete?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    connect?: UserOrganizationWhereUniqueInput | UserOrganizationWhereUniqueInput[]
    update?: UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInput | UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserOrganizationUpdateManyWithWhereWithoutOrganizationInput | UserOrganizationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserOrganizationScalarWhereInput | UserOrganizationScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput> | ServiceCreateWithoutOrganizationInput[] | ServiceUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOrganizationInput | ServiceCreateOrConnectWithoutOrganizationInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutOrganizationInput | ServiceUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ServiceCreateManyOrganizationInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutOrganizationInput | ServiceUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutOrganizationInput | ServiceUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput> | IncidentCreateWithoutOrganizationInput[] | IncidentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutOrganizationInput | IncidentCreateOrConnectWithoutOrganizationInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutOrganizationInput | IncidentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: IncidentCreateManyOrganizationInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutOrganizationInput | IncidentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutOrganizationInput | IncidentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDefaultOrgNestedInput = {
    create?: XOR<UserCreateWithoutDefaultOrgInput, UserUncheckedCreateWithoutDefaultOrgInput> | UserCreateWithoutDefaultOrgInput[] | UserUncheckedCreateWithoutDefaultOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDefaultOrgInput | UserCreateOrConnectWithoutDefaultOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDefaultOrgInput | UserUpsertWithWhereUniqueWithoutDefaultOrgInput[]
    createMany?: UserCreateManyDefaultOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDefaultOrgInput | UserUpdateWithWhereUniqueWithoutDefaultOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDefaultOrgInput | UserUpdateManyWithWhereWithoutDefaultOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumOrgRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrgRole
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationCreateNestedOneWithoutServicesInput = {
    create?: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutServicesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type IncidentCreateNestedManyWithoutServiceInput = {
    create?: XOR<IncidentCreateWithoutServiceInput, IncidentUncheckedCreateWithoutServiceInput> | IncidentCreateWithoutServiceInput[] | IncidentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutServiceInput | IncidentCreateOrConnectWithoutServiceInput[]
    createMany?: IncidentCreateManyServiceInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<IncidentCreateWithoutServiceInput, IncidentUncheckedCreateWithoutServiceInput> | IncidentCreateWithoutServiceInput[] | IncidentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutServiceInput | IncidentCreateOrConnectWithoutServiceInput[]
    createMany?: IncidentCreateManyServiceInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type EnumServiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceStatus
  }

  export type OrganizationUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutServicesInput
    upsert?: OrganizationUpsertWithoutServicesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutServicesInput, OrganizationUpdateWithoutServicesInput>, OrganizationUncheckedUpdateWithoutServicesInput>
  }

  export type IncidentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<IncidentCreateWithoutServiceInput, IncidentUncheckedCreateWithoutServiceInput> | IncidentCreateWithoutServiceInput[] | IncidentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutServiceInput | IncidentCreateOrConnectWithoutServiceInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutServiceInput | IncidentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: IncidentCreateManyServiceInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutServiceInput | IncidentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutServiceInput | IncidentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<IncidentCreateWithoutServiceInput, IncidentUncheckedCreateWithoutServiceInput> | IncidentCreateWithoutServiceInput[] | IncidentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutServiceInput | IncidentCreateOrConnectWithoutServiceInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutServiceInput | IncidentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: IncidentCreateManyServiceInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutServiceInput | IncidentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutServiceInput | IncidentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIncidentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutIncidentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentInput = {
    create?: XOR<UserCreateWithoutIncidentInput, UserUncheckedCreateWithoutIncidentInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentInput
    connect?: UserWhereUniqueInput
  }

  export type IncidentUpdateCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type EnumIncidentStatusFieldUpdateOperationsInput = {
    set?: $Enums.IncidentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrganizationUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutIncidentsInput
    upsert?: OrganizationUpsertWithoutIncidentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutIncidentsInput, OrganizationUpdateWithoutIncidentsInput>, OrganizationUncheckedUpdateWithoutIncidentsInput>
  }

  export type ServiceUpdateOneRequiredWithoutIncidentsNestedInput = {
    create?: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutIncidentsInput
    upsert?: ServiceUpsertWithoutIncidentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutIncidentsInput, ServiceUpdateWithoutIncidentsInput>, ServiceUncheckedUpdateWithoutIncidentsInput>
  }

  export type UserUpdateOneRequiredWithoutIncidentNestedInput = {
    create?: XOR<UserCreateWithoutIncidentInput, UserUncheckedCreateWithoutIncidentInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentInput
    upsert?: UserUpsertWithoutIncidentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentInput, UserUpdateWithoutIncidentInput>, UserUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutIncidentInput | IncidentUpdateUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutIncidentInput | IncidentUpdateUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutUpdatesInput
    connect?: IncidentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncidentUpdateInput = {
    create?: XOR<UserCreateWithoutIncidentUpdateInput, UserUncheckedCreateWithoutIncidentUpdateInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentUpdateInput
    connect?: UserWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutUpdatesInput
    upsert?: IncidentUpsertWithoutUpdatesInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutUpdatesInput, IncidentUpdateWithoutUpdatesInput>, IncidentUncheckedUpdateWithoutUpdatesInput>
  }

  export type UserUpdateOneRequiredWithoutIncidentUpdateNestedInput = {
    create?: XOR<UserCreateWithoutIncidentUpdateInput, UserUncheckedCreateWithoutIncidentUpdateInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncidentUpdateInput
    upsert?: UserUpsertWithoutIncidentUpdateInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncidentUpdateInput, UserUpdateWithoutIncidentUpdateInput>, UserUncheckedUpdateWithoutIncidentUpdateInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrgRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleFilter<$PrismaModel> | $Enums.OrgRole
  }

  export type NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrgRole | EnumOrgRoleFieldRefInput<$PrismaModel>
    in?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrgRole[] | ListEnumOrgRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumOrgRoleWithAggregatesFilter<$PrismaModel> | $Enums.OrgRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrgRoleFilter<$PrismaModel>
    _max?: NestedEnumOrgRoleFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumServiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusFilter<$PrismaModel> | $Enums.ServiceStatus
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceStatus | EnumServiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceStatus[] | ListEnumServiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumIncidentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusFilter<$PrismaModel> | $Enums.IncidentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentStatus | EnumIncidentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncidentStatus[] | ListEnumIncidentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIncidentStatusWithAggregatesFilter<$PrismaModel> | $Enums.IncidentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncidentStatusFilter<$PrismaModel>
    _max?: NestedEnumIncidentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrganizationCreateWithoutDefaultUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedOrganizationsInput
    users?: UserOrganizationCreateNestedManyWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutDefaultUsersInput = {
    id?: string
    name: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInput
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutDefaultUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDefaultUsersInput, OrganizationUncheckedCreateWithoutDefaultUsersInput>
  }

  export type OrganizationCreateWithoutCreatedByUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOrganizationCreateNestedManyWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInput
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserUncheckedCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationCreateOrConnectWithoutCreatedByUserInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutCreatedByUserInput, OrganizationUncheckedCreateWithoutCreatedByUserInput>
  }

  export type OrganizationCreateManyCreatedByUserInputEnvelope = {
    data: OrganizationCreateManyCreatedByUserInput | OrganizationCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOrganizationCreateWithoutUserInput = {
    id?: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserOrganizationUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type UserOrganizationCreateOrConnectWithoutUserInput = {
    where: UserOrganizationWhereUniqueInput
    create: XOR<UserOrganizationCreateWithoutUserInput, UserOrganizationUncheckedCreateWithoutUserInput>
  }

  export type UserOrganizationCreateManyUserInputEnvelope = {
    data: UserOrganizationCreateManyUserInput | UserOrganizationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    service: ServiceCreateNestedOneWithoutIncidentsInput
    updates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutCreatorInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutCreatorInput, IncidentUncheckedCreateWithoutCreatorInput>
  }

  export type IncidentCreateManyCreatorInputEnvelope = {
    data: IncidentCreateManyCreatorInput | IncidentCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type IncidentUpdateCreateWithoutUserInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutUpdatesInput
  }

  export type IncidentUpdateUncheckedCreateWithoutUserInput = {
    id?: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
  }

  export type IncidentUpdateCreateOrConnectWithoutUserInput = {
    where: IncidentUpdateWhereUniqueInput
    create: XOR<IncidentUpdateCreateWithoutUserInput, IncidentUpdateUncheckedCreateWithoutUserInput>
  }

  export type IncidentUpdateCreateManyUserInputEnvelope = {
    data: IncidentUpdateCreateManyUserInput | IncidentUpdateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDefaultUsersInput = {
    update: XOR<OrganizationUpdateWithoutDefaultUsersInput, OrganizationUncheckedUpdateWithoutDefaultUsersInput>
    create: XOR<OrganizationCreateWithoutDefaultUsersInput, OrganizationUncheckedCreateWithoutDefaultUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDefaultUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDefaultUsersInput, OrganizationUncheckedUpdateWithoutDefaultUsersInput>
  }

  export type OrganizationUpdateWithoutDefaultUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput
    users?: UserOrganizationUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDefaultUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutCreatedByUserInput, OrganizationUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<OrganizationCreateWithoutCreatedByUserInput, OrganizationUncheckedCreateWithoutCreatedByUserInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutCreatedByUserInput, OrganizationUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdBy?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type UserOrganizationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOrganizationWhereUniqueInput
    update: XOR<UserOrganizationUpdateWithoutUserInput, UserOrganizationUncheckedUpdateWithoutUserInput>
    create: XOR<UserOrganizationCreateWithoutUserInput, UserOrganizationUncheckedCreateWithoutUserInput>
  }

  export type UserOrganizationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOrganizationWhereUniqueInput
    data: XOR<UserOrganizationUpdateWithoutUserInput, UserOrganizationUncheckedUpdateWithoutUserInput>
  }

  export type UserOrganizationUpdateManyWithWhereWithoutUserInput = {
    where: UserOrganizationScalarWhereInput
    data: XOR<UserOrganizationUpdateManyMutationInput, UserOrganizationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOrganizationScalarWhereInput = {
    AND?: UserOrganizationScalarWhereInput | UserOrganizationScalarWhereInput[]
    OR?: UserOrganizationScalarWhereInput[]
    NOT?: UserOrganizationScalarWhereInput | UserOrganizationScalarWhereInput[]
    id?: StringFilter<"UserOrganization"> | string
    userId?: StringFilter<"UserOrganization"> | string
    organizationId?: StringFilter<"UserOrganization"> | string
    role?: EnumOrgRoleFilter<"UserOrganization"> | $Enums.OrgRole
    createdAt?: DateTimeFilter<"UserOrganization"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutCreatorInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutCreatorInput, IncidentUncheckedUpdateWithoutCreatorInput>
    create: XOR<IncidentCreateWithoutCreatorInput, IncidentUncheckedCreateWithoutCreatorInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutCreatorInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutCreatorInput, IncidentUncheckedUpdateWithoutCreatorInput>
  }

  export type IncidentUpdateManyWithWhereWithoutCreatorInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutCreatorInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: StringFilter<"Incident"> | string
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    status?: EnumIncidentStatusFilter<"Incident"> | $Enums.IncidentStatus
    serviceId?: StringFilter<"Incident"> | string
    startedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    organizationId?: StringFilter<"Incident"> | string
    createdBy?: StringFilter<"Incident"> | string
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type IncidentUpdateUpsertWithWhereUniqueWithoutUserInput = {
    where: IncidentUpdateWhereUniqueInput
    update: XOR<IncidentUpdateUpdateWithoutUserInput, IncidentUpdateUncheckedUpdateWithoutUserInput>
    create: XOR<IncidentUpdateCreateWithoutUserInput, IncidentUpdateUncheckedCreateWithoutUserInput>
  }

  export type IncidentUpdateUpdateWithWhereUniqueWithoutUserInput = {
    where: IncidentUpdateWhereUniqueInput
    data: XOR<IncidentUpdateUpdateWithoutUserInput, IncidentUpdateUncheckedUpdateWithoutUserInput>
  }

  export type IncidentUpdateUpdateManyWithWhereWithoutUserInput = {
    where: IncidentUpdateScalarWhereInput
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyWithoutUserInput>
  }

  export type IncidentUpdateScalarWhereInput = {
    AND?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
    OR?: IncidentUpdateScalarWhereInput[]
    NOT?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
    id?: StringFilter<"IncidentUpdate"> | string
    incidentId?: StringFilter<"IncidentUpdate"> | string
    message?: StringFilter<"IncidentUpdate"> | string
    status?: EnumIncidentStatusFilter<"IncidentUpdate"> | $Enums.IncidentStatus
    createdBy?: StringFilter<"IncidentUpdate"> | string
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
  }

  export type UserCreateWithoutCreatedOrganizationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultOrg?: OrganizationCreateNestedOneWithoutDefaultUsersInput
    memberships?: UserOrganizationCreateNestedManyWithoutUserInput
    Incident?: IncidentCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedOrganizationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    defaultOrgId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: UserOrganizationUncheckedCreateNestedManyWithoutUserInput
    Incident?: IncidentUncheckedCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedOrganizationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedOrganizationsInput, UserUncheckedCreateWithoutCreatedOrganizationsInput>
  }

  export type UserOrganizationCreateWithoutOrganizationInput = {
    id?: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type UserOrganizationUncheckedCreateWithoutOrganizationInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type UserOrganizationCreateOrConnectWithoutOrganizationInput = {
    where: UserOrganizationWhereUniqueInput
    create: XOR<UserOrganizationCreateWithoutOrganizationInput, UserOrganizationUncheckedCreateWithoutOrganizationInput>
  }

  export type UserOrganizationCreateManyOrganizationInputEnvelope = {
    data: UserOrganizationCreateManyOrganizationInput | UserOrganizationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutOrganizationInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutOrganizationInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput>
  }

  export type ServiceCreateManyOrganizationInputEnvelope = {
    data: ServiceCreateManyOrganizationInput | ServiceCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type IncidentCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutIncidentsInput
    creator: UserCreateNestedOneWithoutIncidentInput
    updates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutOrganizationInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput>
  }

  export type IncidentCreateManyOrganizationInputEnvelope = {
    data: IncidentCreateManyOrganizationInput | IncidentCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDefaultOrgInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationCreateNestedManyWithoutUserInput
    Incident?: IncidentCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDefaultOrgInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationUncheckedCreateNestedManyWithoutUserInput
    Incident?: IncidentUncheckedCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDefaultOrgInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultOrgInput, UserUncheckedCreateWithoutDefaultOrgInput>
  }

  export type UserCreateManyDefaultOrgInputEnvelope = {
    data: UserCreateManyDefaultOrgInput | UserCreateManyDefaultOrgInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedOrganizationsInput = {
    update: XOR<UserUpdateWithoutCreatedOrganizationsInput, UserUncheckedUpdateWithoutCreatedOrganizationsInput>
    create: XOR<UserCreateWithoutCreatedOrganizationsInput, UserUncheckedCreateWithoutCreatedOrganizationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedOrganizationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedOrganizationsInput, UserUncheckedUpdateWithoutCreatedOrganizationsInput>
  }

  export type UserUpdateWithoutCreatedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultOrg?: OrganizationUpdateOneWithoutDefaultUsersNestedInput
    memberships?: UserOrganizationUpdateManyWithoutUserNestedInput
    Incident?: IncidentUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: UserOrganizationUncheckedUpdateManyWithoutUserNestedInput
    Incident?: IncidentUncheckedUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserOrganizationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserOrganizationWhereUniqueInput
    update: XOR<UserOrganizationUpdateWithoutOrganizationInput, UserOrganizationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserOrganizationCreateWithoutOrganizationInput, UserOrganizationUncheckedCreateWithoutOrganizationInput>
  }

  export type UserOrganizationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserOrganizationWhereUniqueInput
    data: XOR<UserOrganizationUpdateWithoutOrganizationInput, UserOrganizationUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserOrganizationUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserOrganizationScalarWhereInput
    data: XOR<UserOrganizationUpdateManyMutationInput, UserOrganizationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ServiceUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutOrganizationInput, ServiceUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ServiceCreateWithoutOrganizationInput, ServiceUncheckedCreateWithoutOrganizationInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutOrganizationInput, ServiceUncheckedUpdateWithoutOrganizationInput>
  }

  export type ServiceUpdateManyWithWhereWithoutOrganizationInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    type?: EnumServiceTypeFilter<"Service"> | $Enums.ServiceType
    status?: EnumServiceStatusFilter<"Service"> | $Enums.ServiceStatus
    organizationId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type IncidentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutOrganizationInput, IncidentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<IncidentCreateWithoutOrganizationInput, IncidentUncheckedCreateWithoutOrganizationInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutOrganizationInput, IncidentUncheckedUpdateWithoutOrganizationInput>
  }

  export type IncidentUpdateManyWithWhereWithoutOrganizationInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultOrgInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultOrgInput, UserUncheckedUpdateWithoutDefaultOrgInput>
    create: XOR<UserCreateWithoutDefaultOrgInput, UserUncheckedCreateWithoutDefaultOrgInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultOrgInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultOrgInput, UserUncheckedUpdateWithoutDefaultOrgInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultOrgInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDefaultOrgInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    defaultOrgId?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultOrg?: OrganizationCreateNestedOneWithoutDefaultUsersInput
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByUserInput
    Incident?: IncidentCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    defaultOrgId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByUserInput
    Incident?: IncidentUncheckedCreateNestedManyWithoutCreatorInput
    IncidentUpdate?: IncidentUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedOrganizationsInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserUncheckedCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultOrg?: OrganizationUpdateOneWithoutDefaultUsersNestedInput
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByUserNestedInput
    Incident?: IncidentUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByUserNestedInput
    Incident?: IncidentUncheckedUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUncheckedUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationCreateWithoutServicesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedOrganizationsInput
    users?: UserOrganizationCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInput
    incidents?: IncidentUncheckedCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserUncheckedCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationCreateOrConnectWithoutServicesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
  }

  export type IncidentCreateWithoutServiceInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    creator: UserCreateNestedOneWithoutIncidentInput
    updates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutServiceInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutServiceInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutServiceInput, IncidentUncheckedCreateWithoutServiceInput>
  }

  export type IncidentCreateManyServiceInputEnvelope = {
    data: IncidentCreateManyServiceInput | IncidentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutServicesInput = {
    update: XOR<OrganizationUpdateWithoutServicesInput, OrganizationUncheckedUpdateWithoutServicesInput>
    create: XOR<OrganizationCreateWithoutServicesInput, OrganizationUncheckedCreateWithoutServicesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutServicesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutServicesInput, OrganizationUncheckedUpdateWithoutServicesInput>
  }

  export type OrganizationUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput
    users?: UserOrganizationUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUncheckedUpdateManyWithoutDefaultOrgNestedInput
  }

  export type IncidentUpsertWithWhereUniqueWithoutServiceInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutServiceInput, IncidentUncheckedUpdateWithoutServiceInput>
    create: XOR<IncidentCreateWithoutServiceInput, IncidentUncheckedCreateWithoutServiceInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutServiceInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutServiceInput, IncidentUncheckedUpdateWithoutServiceInput>
  }

  export type IncidentUpdateManyWithWhereWithoutServiceInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutServiceInput>
  }

  export type OrganizationCreateWithoutIncidentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedOrganizationsInput
    users?: UserOrganizationCreateNestedManyWithoutOrganizationInput
    services?: ServiceCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOrganizationUncheckedCreateNestedManyWithoutOrganizationInput
    services?: ServiceUncheckedCreateNestedManyWithoutOrganizationInput
    defaultUsers?: UserUncheckedCreateNestedManyWithoutDefaultOrgInput
  }

  export type OrganizationCreateOrConnectWithoutIncidentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
  }

  export type ServiceCreateWithoutIncidentsInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutIncidentsInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutIncidentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput>
  }

  export type UserCreateWithoutIncidentInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultOrg?: OrganizationCreateNestedOneWithoutDefaultUsersInput
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationCreateNestedManyWithoutUserInput
    IncidentUpdate?: IncidentUpdateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncidentInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    defaultOrgId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationUncheckedCreateNestedManyWithoutUserInput
    IncidentUpdate?: IncidentUpdateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncidentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentInput, UserUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateCreateWithoutIncidentInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutIncidentUpdateInput
  }

  export type IncidentUpdateUncheckedCreateWithoutIncidentInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdBy: string
    createdAt?: Date | string
  }

  export type IncidentUpdateCreateOrConnectWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    create: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateCreateManyIncidentInputEnvelope = {
    data: IncidentUpdateCreateManyIncidentInput | IncidentUpdateCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutIncidentsInput = {
    update: XOR<OrganizationUpdateWithoutIncidentsInput, OrganizationUncheckedUpdateWithoutIncidentsInput>
    create: XOR<OrganizationCreateWithoutIncidentsInput, OrganizationUncheckedCreateWithoutIncidentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutIncidentsInput, OrganizationUncheckedUpdateWithoutIncidentsInput>
  }

  export type OrganizationUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedOrganizationsNestedInput
    users?: UserOrganizationUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUncheckedUpdateManyWithoutDefaultOrgNestedInput
  }

  export type ServiceUpsertWithoutIncidentsInput = {
    update: XOR<ServiceUpdateWithoutIncidentsInput, ServiceUncheckedUpdateWithoutIncidentsInput>
    create: XOR<ServiceCreateWithoutIncidentsInput, ServiceUncheckedCreateWithoutIncidentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutIncidentsInput, ServiceUncheckedUpdateWithoutIncidentsInput>
  }

  export type ServiceUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutIncidentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutIncidentInput = {
    update: XOR<UserUpdateWithoutIncidentInput, UserUncheckedUpdateWithoutIncidentInput>
    create: XOR<UserCreateWithoutIncidentInput, UserUncheckedCreateWithoutIncidentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentInput, UserUncheckedUpdateWithoutIncidentInput>
  }

  export type UserUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultOrg?: OrganizationUpdateOneWithoutDefaultUsersNestedInput
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUpdateManyWithoutUserNestedInput
    IncidentUpdate?: IncidentUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUncheckedUpdateManyWithoutUserNestedInput
    IncidentUpdate?: IncidentUpdateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    update: XOR<IncidentUpdateUpdateWithoutIncidentInput, IncidentUpdateUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    data: XOR<IncidentUpdateUpdateWithoutIncidentInput, IncidentUpdateUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentUpdateScalarWhereInput
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutIncidentsInput
    service: ServiceCreateNestedOneWithoutIncidentsInput
    creator: UserCreateNestedOneWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutUpdatesInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateOrConnectWithoutUpdatesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
  }

  export type UserCreateWithoutIncidentUpdateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    defaultOrg?: OrganizationCreateNestedOneWithoutDefaultUsersInput
    createdOrganizations?: OrganizationCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationCreateNestedManyWithoutUserInput
    Incident?: IncidentCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutIncidentUpdateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    defaultOrgId?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrganizations?: OrganizationUncheckedCreateNestedManyWithoutCreatedByUserInput
    memberships?: UserOrganizationUncheckedCreateNestedManyWithoutUserInput
    Incident?: IncidentUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutIncidentUpdateInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncidentUpdateInput, UserUncheckedCreateWithoutIncidentUpdateInput>
  }

  export type IncidentUpsertWithoutUpdatesInput = {
    update: XOR<IncidentUpdateWithoutUpdatesInput, IncidentUncheckedUpdateWithoutUpdatesInput>
    create: XOR<IncidentCreateWithoutUpdatesInput, IncidentUncheckedCreateWithoutUpdatesInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutUpdatesInput, IncidentUncheckedUpdateWithoutUpdatesInput>
  }

  export type IncidentUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutIncidentsNestedInput
    creator?: UserUpdateOneRequiredWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutIncidentUpdateInput = {
    update: XOR<UserUpdateWithoutIncidentUpdateInput, UserUncheckedUpdateWithoutIncidentUpdateInput>
    create: XOR<UserCreateWithoutIncidentUpdateInput, UserUncheckedCreateWithoutIncidentUpdateInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncidentUpdateInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncidentUpdateInput, UserUncheckedUpdateWithoutIncidentUpdateInput>
  }

  export type UserUpdateWithoutIncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    defaultOrg?: OrganizationUpdateOneWithoutDefaultUsersNestedInput
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUpdateManyWithoutUserNestedInput
    Incident?: IncidentUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutIncidentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    defaultOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUncheckedUpdateManyWithoutUserNestedInput
    Incident?: IncidentUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type OrganizationCreateManyCreatedByUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOrganizationCreateManyUserInput = {
    id?: string
    organizationId: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type IncidentCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateCreateManyUserInput = {
    id?: string
    incidentId: string
    message: string
    status: $Enums.IncidentStatus
    createdAt?: Date | string
  }

  export type OrganizationUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOrganizationUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOrganizationUncheckedUpdateManyWithoutOrganizationNestedInput
    services?: ServiceUncheckedUpdateManyWithoutOrganizationNestedInput
    incidents?: IncidentUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultUsers?: UserUncheckedUpdateManyWithoutDefaultOrgNestedInput
  }

  export type OrganizationUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOrganizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    service?: ServiceUpdateOneRequiredWithoutIncidentsNestedInput
    updates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type IncidentUpdateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    incidentId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationCreateManyOrganizationInput = {
    id?: string
    userId: string
    role?: $Enums.OrgRole
    createdAt?: Date | string
  }

  export type ServiceCreateManyOrganizationInput = {
    id?: string
    name: string
    type?: $Enums.ServiceType
    status?: $Enums.ServiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentCreateManyOrganizationInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    serviceId: string
    startedAt: Date | string
    resolvedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyDefaultOrgInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOrganizationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type UserOrganizationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOrganizationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumOrgRoleFieldUpdateOperationsInput | $Enums.OrgRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    status?: EnumServiceStatusFieldUpdateOperationsInput | $Enums.ServiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutIncidentsNestedInput
    creator?: UserUpdateOneRequiredWithoutIncidentNestedInput
    updates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    serviceId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutDefaultOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganizations?: OrganizationUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUpdateManyWithoutUserNestedInput
    Incident?: IncidentUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrganizations?: OrganizationUncheckedUpdateManyWithoutCreatedByUserNestedInput
    memberships?: UserOrganizationUncheckedUpdateManyWithoutUserNestedInput
    Incident?: IncidentUncheckedUpdateManyWithoutCreatorNestedInput
    IncidentUpdate?: IncidentUpdateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDefaultOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyServiceInput = {
    id?: string
    title: string
    description: string
    status?: $Enums.IncidentStatus
    startedAt: Date | string
    resolvedAt?: Date | string | null
    organizationId: string
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutIncidentsNestedInput
    creator?: UserUpdateOneRequiredWithoutIncidentNestedInput
    updates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateManyIncidentInput = {
    id?: string
    message: string
    status: $Enums.IncidentStatus
    createdBy: string
    createdAt?: Date | string
  }

  export type IncidentUpdateUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncidentUpdateNestedInput
  }

  export type IncidentUpdateUncheckedUpdateWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutIncidentInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumIncidentStatusFieldUpdateOperationsInput | $Enums.IncidentStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}