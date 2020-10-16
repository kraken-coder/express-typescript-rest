import cors from 'cors'
import express, {Application} from 'express'



export class ServerMiddlewares {
    private server: Application
 constructor(server: Application) {
    this.server = server
 }

 public cors() {
     this.server.use(cors())
 }

 public jsonParser() {
     this.server.use(express.json())
     this.server.use(express.urlencoded({extended: true}))
 }
}