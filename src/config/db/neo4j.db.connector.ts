import configConstants from "@/constants/config.constants"
import neo4j, { Driver, Session } from "neo4j-driver"

let driver: Driver | null = null
let session: Session | null = null;

export const connectNeo4jDb = async () => {
    const URI = configConstants.NEO4J_URI as string;
    const USER = configConstants.NEO4J_USERNAME as string;
    const PASSWORD = configConstants.NEO4J_PASSWORD as string;

    try {
        driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
        const serverInfo = await driver.getServerInfo()
        console.log(`Neo4j connection established`);
        console.log(serverInfo);
    } catch (error: any) {
        console.log(`Connection error \n${error}\nCause: ${error?.cause}`);

    }
}

export const getNeo4jSession = () => {
    if (driver) {
        return driver.session()
    }

    throw 'Neo4j session not found'
}

export const neo4jSession = session