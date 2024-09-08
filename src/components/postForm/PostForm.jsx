import React, { useCallback, useEffect } from 'react'
import appwriteStor from "../../appwrite/stor";
import appwriteConfig from "../../appwrite/config";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Button, Input, Rte, Select } from "../index";

function PostForm({ post }) {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || ''
        }
    })

    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? appwriteStor.uploadFile(data.image[0]) : null

            if (file) {
                appwriteStor.deleteFile(post.featuredImage)
            }

            const dbPost = await appwriteConfig.updatePost(post.$id, {
                ...data,
                // Improvement undefined
                featuredImage: file ? file.$id : undefined
            })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else {
            const file = await appwriteStor.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteConfig.createPost({
                    ...data,
                    userId: userData.$id
                })
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    // Interview
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') {
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-')
        }
        return ''
    }, [])

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            setValue('slug', slugTransform(value.title, {shouldValidate: true}))
        })

        // Memory management
        return () => {
            subscription.unsubscription()
        }
    }, [watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3  px-2'>
                <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register(
                    "title",
                    {
                        required: true
                    }
                )}
                />
                <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register(
                    "title",
                    {required:true}
                )}
                onInput={(e) => setValue("slug", slugTransform(e.currentTarget.value),
                {shouldValidate: true})}
                />
                <Rte
                label="Content :"
                name="Content"
                defaultValue={getValues("content")}
                />
            </div>
            <div className='w-1/3 px-2'>
            <Input 
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", {required: !post})}
            />
            {post && (
                <div className='w-full mb-4'>
                    <img 
                    src={appwriteStor.getFilePreview(post.featuredImage)} 
                    alt={post.title}
                    className='rounded-lg'
                    />
                </div>
            )}  
            <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status",{required: true})}
            />
            <Button 
            type="submit"
            bgColor={post ? "bg-green-500" :undefined}
            className='w-full'
            >
                {post ? "Update" : "Submit"}
            </Button>
            </div>
        </form>
    )
}

export default PostForm