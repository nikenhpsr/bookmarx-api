import {
    createParamDecorator,
    ExecutionContext,
  } from '@nestjs/common';
  
  export const GetBookmark = createParamDecorator(
    (
      data: string | undefined,
      ctx: ExecutionContext,
    ) => {
      const request: Express.Request = ctx
        .switchToHttp()
        .getRequest();
      if (data) {
        // return request.bookmark[data];//GOT AN ERROR HERE
      }
    //   return request.bookmark; //GOT AN ERROR HERE
    },
  );
  