import { Inject, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { UserEntity } from "src/entities/user/User";
import { UserService } from "../user/user.service";

@Injectable()
export class DayLoveService {
    constructor(
        @Inject('USER_REPOSITORY') private userRepository: typeof UserEntity,
        private userService:UserService
    ){
    }

    async setDayStart(id) {
        const user = await this.userService.findByDefaultId(id);
        let userDTO = JSON.parse(JSON.stringify(user));
        userDTO.dayStart = new Date().toISOString();
        return await this.userService.update(id,userDTO);
    }

    async findTimeLove(id){
        try{
            const user = await this.userRepository.findOne({
                where:{
                    id:id
                }
            })

            console.log(new Date(user.dayStart).getFullYear())
            // if(!user.dayStart) {
            //     throw new HttpException({
            //         status:HttpStatus.NOT_FOUND,
            //         error:'Not Found'
            //     },HttpStatus.NOT_FOUND)
            // }
            const yearLover = new Date().getFullYear() - new Date(user.dayStart).getFullYear();
            const monthLover = new Date().getMonth() - new Date(user.dayStart).getMonth();
            const dayLover = new Date().getDate() - new Date(user.dayStart).getDate();
            console.log("year",yearLover,"  ",monthLover,"  ",)
            return {
                yearLover,
                monthLover,
                dayLover
            }

        } catch(e){
            console.log(e)
            throw new HttpException({
                status:HttpStatus.NOT_FOUND,
                error:'Not Found'
            },HttpStatus.NOT_FOUND)
        }

       
    }

}