import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

export class AllExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost);
    catch(exception: any, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();

        const httpStatus = 
            exception instanceof HttpException 
                ? exception.getStatus() 
                : HttpStatus.INTERNAL_SERVER_ERROR;

        console.log("Exception :: ==> ", exception)

        const response = 
            exception instanceof HttpException 
                ? ctx.getResponse() 
                : String(exception);
        
    }
}