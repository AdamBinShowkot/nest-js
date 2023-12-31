import { Controller,Get,Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')

export class AuthController{
    constructor(private authService:AuthService){}

    @Get("signup")
    signup(){
        return this.authService.signUp();
    }

    @Post("signin")
    singin(){
        return this.authService.signIn();
    }
};