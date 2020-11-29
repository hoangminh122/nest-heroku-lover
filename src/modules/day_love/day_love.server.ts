import { Inject, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Group } from "src/entities/user/Group";
import { GroupService } from "../group/group.service";
import * as moment from "moment";


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

            const dayStart = moment(user.dayStart);
            const dayEnd = moment(new Date());
            console.log(dayStart,"sadhasgd",dayEnd,"sdfhsdg",dayEnd.dayOfYear()-dayStart.dayOfYear())
            return {
                dayEnd,
                dayStart,
                dayLove:dayEnd.dayOfYear()-dayStart.dayOfYear()
            };
            // if(!user.dayStart) {
            //     throw new HttpException({
            //         status:HttpStatus.NOT_FOUND,
            //         error:'Not Found''
            //     },HttpStatus.NOT_FOUND)
            // }

        } catch(e){
            console.log(e)
            throw new HttpException({
                status:HttpStatus.NOT_FOUND,
                error:'Not Found'
            },HttpStatus.NOT_FOUND)
        }

       
    }

}