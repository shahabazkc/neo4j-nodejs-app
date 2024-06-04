import { getNeo4jSession } from "@/config/db/neo4j.db.connector";
import HttpException from "@/utils/exceptions/http.exception";
import { Request, Response } from "express";
import httpStatus from "http-status";
import httpError from "http-errors"

const UserController = {
    getUser: async function (req: Request, res: Response) {
        try {
            const session = getNeo4jSession()
            const result = await session.run('MATCH(u:User) RETURN u limit 25')
            return res.send(result?.records)

        } catch (error) {
            console.log(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: false, message: "Internal Server Error" })
        }
    },
    getUsers: async function (req: Request, res: Response) {

    },
    createUser: async function (req: Request, res: Response) {
        try {

        } catch (error) {
            console.log(error);
            throw httpError.InternalServerError('Something went wrong')
        }
    },
    updateUser: async function (req: Request, res: Response) {

    },
    deleteUser: async function (req: Request, res: Response) {

    }
}

export default UserController