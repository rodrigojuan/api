import { NextFunction, Request, Response } from "express";

class UsersController{
	index(request: Request, response: Response, next: NextFunction){
		// buscar todos
	}
	show(request: Request, response: Response, next: NextFunction){
		// buscar somente um
	}
	store(request: Request, response: Response, next: NextFunction){
		// criar
		const { name, email, password } = request.body
		try {
			const result = userService(name, email, password)

			return response.status(201).json(result)

		} catch (error) {
			next(error);

		}
	}
	auth(request: Request, response: Response, next: NextFunction){
		// autenticar
	}
}

export {UsersController}
function userService(name: any, email: any, password: any) {
	throw new Error("Function not implemented.");
}

