import { Request, Response, NextFunction } from 'express';
import express, { Application } from 'express'
import { UserRoutes } from './routes/UserRoutes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoutes = new UserRoutes().getRoutes()

app.use('/users', userRoutes)

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
	if(err instanceof Error) {
		return response.status(400).json({message: err.message})
	}
	return response.status(500).json({message: 'internal server error'})
})

app.listen(3000,()=>console.log('server listening on port 3000'))
