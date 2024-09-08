import conf from "../conf/conf.js";
import { Client, Databases, Query } from "appwrite";

export class ConfigService{
    client = new Client()
    databases

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    // ID unique video 21 12 se pahele
    async createPost({title, slug, content, status, userId, featuredImage}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            throw error
        }
    }

    // ID unique video 21 12 se pahele
    async updatePost(slug, {title, content, status, featuredImage}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: DeletePost :: Error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: GetPost :: Error", error);
            return false
        }
    }

    // Query apply only in indexes.
    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: GetPost :: Error", error);
            return false
        }
    }
}

const configService = new ConfigService()

export default configService