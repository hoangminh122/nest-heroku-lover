import { Member } from "src/entities/user/Member";
import { Group } from "src/entities/user/Group";


export const memberRepository = {
    provide: 'MembersRepository',
    useValue:Member
}

export const groupRepository = {
    provide: 'GroupsRepository',
    useValue:Group
}