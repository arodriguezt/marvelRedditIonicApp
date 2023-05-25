import {ref} from "vue"
import axios from 'axios'

const useReddit=()=>{
    const posts = ref()
    const post = ref()
    const isLoading = ref(false)
    const errorMessage = ref()
    
    const searchPostsById = async (id) => {
        if(!id) return
        isLoading.value = true
        posts.value = null
        try {
            const {data} = await axios(`https://www.reddit.com/r/marvelstudios/${id}.json`)
            posts.value = data
            errorMessage.value = null
        } catch (error) {
           errorMessage.value='No se pudo cargar el post' 
        }
        isLoading.value = false
    }

    const searchPosts = async()=>{
        isLoading.value = true
        posts.value = null
        try {
            const {data} = await axios(`https://www.reddit.com/r/marvelstudios/.json`)
            posts.value = data.data.children
            errorMessage.value = null
        } catch (error) {
           errorMessage.value='No se pudo cargar los posts' 
        }
        isLoading.value = false
    }

    const replaceImgAmp = (img) => {
        img = img.replaceAll("amp;", "");
        return img;
      };



    return{
        posts,
        isLoading,
        errorMessage,
        post,
        
        replaceImgAmp: (img) =>replaceImgAmp(img),
        searchPostsById: (id) =>searchPostsById(id),
        searchPosts: () =>searchPosts(),
    }
}

export default useReddit

