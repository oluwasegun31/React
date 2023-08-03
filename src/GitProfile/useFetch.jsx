import { useEffect, useState } from "react";
import avatar from '../assets/icons8-anonymous-mask.svg';

export default function UseFetch(url){
    const [name, setName] = useState('Unknown');
    const [img, setImg] = useState(avatar);
    const [followers, setFollowers] = useState(0);
    const [repo, setRepo] = useState(0);
    const [organization, setOrganization] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        const fetchData = async()=> {
           try{
               const response = await fetch(url);
               setIsLoading(true)
               if(!response.ok){
                   throw new Error('Unable to load input')
               }else{
                   const data = await response.json();
                   // fetching img and name
                   setImg(data.items[0].avatar_url)
                   setName(data.items[0].login);
                   // to fetch followers 
                   const followResponse = await fetch(data.items[0].followers_url);
                   const followData = await followResponse.json();
                   setFollowers(followData.length)
                   // to fetch repo
                   const repourl = await fetch(data.items[0].repos_url);
                   const repoData = await repourl.json();
                   setRepo(repoData.length)
                   // to fetch organization
                   const orgUrl = await fetch(data.items[0].organizations_url);
                   const orgData = await orgUrl.json();
                   setOrganization(orgData.length);
                   setIsLoading(false)
               }
               
           }catch(err){
            //setting custom error message
               if(err.message === `Cannot read property 'avatar_url' of undefined`){
                   console.error('Unable to find user');
                   setIsLoading(false)
                   alert('unable to find user')
               }else{
                   setIsLoading(false)
                   console.error(err.message)
                   alert(err.message)
               }
               
           }
       }
       fetchData()
    }, [url])

    return{name, img, followers, repo, organization, isLoading}
}
