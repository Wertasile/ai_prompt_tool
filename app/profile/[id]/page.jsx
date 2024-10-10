"use client"

import Profile from '@components/Profile'

import { useSearchParams } from 'next/navigation'
import {useState, useEffect} from 'react'

const PostProfile = ({params}) => {

    const searchParams = useSearchParams()
    const userName = searchParams.get("name");

    const [post, setPost] = useState([])

    useEffect(() => {
      const fetchUserPosts = async () => {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();

        setPost(data)
      }

      if (params?.id) fetchUserPosts()
    }, [params?.id])
    
    return (
        <Profile
        name={`${userName}'s`}
        desc={`Welcome to ${userName}'s profile page. `}
        data={post}
        
        />
    )
}

export default PostProfile