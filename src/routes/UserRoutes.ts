import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';

class UserRoutes {
	private router: Router;
	private usersController: UsersController;
	constructor() {
		this.router = Router();
		this.usersController = new UsersController;
	}
	getRoutes() {
		this.router.post("/,",
			this.usersController.store.bind(this.usersController)
		);
		return this.router;
	}
}

export {UserRoutes}
