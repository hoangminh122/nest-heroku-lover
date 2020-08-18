import { Injectable } from "@nestjs/common";

@Injectable()
export class DemoServer {
    
    getProducts() {
        return "Hello"
    }
}