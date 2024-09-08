import { Client, Storage, ID } from "appwrite";
import conf from "../conf/conf.js";

export class Stor{
    client = new Client()
    storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.storage = new Storage(this.client) 
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteStroageId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("UploadFile :: Stroage :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteStroageId,
                fileId
            )
            return true
        } catch (error) {
            console.log("DeleteFile :: Stroage :: error",error);
            return false 
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteStroageId,
            fileId
        )
    }

}

const stor = new Stor()

export default stor