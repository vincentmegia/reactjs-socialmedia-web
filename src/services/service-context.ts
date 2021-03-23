import React from "react";
import { IPostService, PostService } from './post-service';

export interface IServiceContext {
    postService: IPostService,
    message: string
}

export const serviceContext: IServiceContext = {
    postService: new PostService(),
    message: "adsf"
}

export const ServiceContext = React.createContext(serviceContext);