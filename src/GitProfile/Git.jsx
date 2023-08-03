import { useState } from "react";
import classes from './git.module.css';
import Loader1 from '../Loaders/Loader1'
import UseFetch from "./useFetch";

function Github(){
    const [search, setSearch] = useState('oluwasegun31');
    const [user, setUser] = useState('');

    // onclick to change the search value from input
    const searchUser = ()=> {
       if(user === ''){
        alert('Enter a Username')
       }else{
            setSearch(user);
            setUser('');
       }
    }

    // fetching data
   const {name, img, followers, repo, organization, isLoading} = UseFetch(`https://api.github.com/search/users?q=${search}`)
    return(
        <>
            {isLoading && <Loader1/>}
            <section className={classes.gitContainer}>
                <h2 style={{marginTop: '1rem', fontSize: '2rem'}}>Github Search</h2>
                <div className={classes.gitSearch}>
                    <input 
                        type="text"
                        value={user}
                        onChange={(e)=> setUser(e.target.value)}
                    />
                    <button onClick={searchUser}>Search</button>
                </div>
                <div className={classes.avatar}>
                    <img src={img} alt="avatar" />
                </div>
                <div className={classes.name}>
                    <p>{name}</p>
                </div>
                <div className={classes.details}>
                    <div>
                        <p>Followers</p>
                        <p>{followers}</p>
                    </div>
                    <div>
                        <p>Repo</p>
                        <p>{repo}</p>
                    </div>
                    <div>
                        <p>Organization</p>
                        <p>{organization}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Github