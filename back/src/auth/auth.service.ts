import { Injectable } from "@nestjs/common";
import { User, Bookmark } from '@prisma/client'		//turned into types by prisma

/* Providers, or services, are responsible for executing the business logic, the execution, the DOING stuff :
*  they can be injected as a dependency, meaning objects can create various relationships with each other
*/


@Injectable()
export class AuthService{
	signin() {
		return { msg : 'I am signing in'};
	}   

	signup() {
		return { msg : 'I am signing up'};
		
	}
}

// const service = new AuthService()         //instantiating the service to be usable by the controller, but useless since this is injectable