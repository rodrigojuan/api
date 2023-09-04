import { UserRepository } from "../repositories/UserRepository";

class UserServices{
	private userRepository: UserRepository | undefined;
	usersRepository: UserRepository;
	constructor(){
    this.usersRepository = new UserRepository()
  }
	create(){
		const findUser = this.userRepository
	}
}

export {UserServices}
