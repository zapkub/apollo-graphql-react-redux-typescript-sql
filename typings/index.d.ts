/// <reference path="globals/body-parser/index.d.ts" />
/// <reference path="globals/bookshelf/index.d.ts" />
/// <reference path="globals/express-serve-static-core/index.d.ts" />
/// <reference path="globals/node/index.d.ts" />
/// <reference path="globals/react-addons-update/index.d.ts" />
/// <reference path="globals/react-dom/index.d.ts" />
/// <reference path="globals/react-redux/index.d.ts" />
/// <reference path="globals/react-router-redux/index.d.ts" />
/// <reference path="globals/react-router/index.d.ts" />
/// <reference path="globals/react/index.d.ts" />
/// <reference path="globals/redux-logger/index.d.ts" />
/// <reference path="globals/redux-promise-middleware/index.d.ts" />
/// <reference path="globals/redux-saga/index.d.ts" />
/// <reference path="globals/redux-thunk/index.d.ts" />
/// <reference path="modules/express/index.d.ts" />
/// <reference path="modules/mime/index.d.ts" />
declare module 'graphql-tag' {
    export default function gql(string: any, ...args): any;
}