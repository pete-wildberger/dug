export declare class Dug {
    private config;
    private errorHandler;
    constructor(config: RequestInit, handleError: (response: Response) => Response | PromiseLike<Response>);
    get: (url: string) => Promise<any>;
    post: (url: string, data: {
        [key: string]: any;
    }) => Promise<any>;
    put: (url: string, data: {
        [key: string]: any;
    }) => Promise<any>;
    delete: (url: string) => Promise<any>;
}
