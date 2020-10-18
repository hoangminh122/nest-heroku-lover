import { Inject, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Group } from "src/entities/user/Group";
import { GroupService } from "../group/group.service";

@Injectable()
export class DayLoveService {
    constructor(
        @Inject('GroupsRepository') private groupRepository: typeof Group,
        private groupService:GroupService
    ){
    }

    async setDayStart(id) {
        const user = await this.groupService.findByDefaultId(id);
        let userDTO = JSON.parse(JSON.stringify(user));
        userDTO.dayStart = new Date().toISOString();
        return await this.groupService.update(id,userDTO);
    }

    async findTimeLove(id){
        try{
            const user = await this.groupRepository.findOne({
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