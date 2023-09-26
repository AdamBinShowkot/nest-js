import { Injectable } from "@nestjs/common";
import { User,Bookmark } from "@prisma/client";

@Injectable({})

export class AuthService{
    signIn(){
        return "I'm Log In";
    }
    signUp(){
        return "I'm Sign Up";
    }
};