import { Controller, Get } from "@nestjs/common";
import { DemoServer } from "./demo.service";


@Controller()
export class DemoController {
    constructor(
        private readonly demoService:DemoServer
    ){

    }

    @Get('/demo')
    getProduct() {
        return this.demoService.getProducts();
    }
}