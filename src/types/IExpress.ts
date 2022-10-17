import express from 'express';

declare global {
    type Req = express.Request
    type Res = express.Response
    type Next = express.NextFunction
}
