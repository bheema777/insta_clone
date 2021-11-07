import Post from "./Post";
import { useState, useEffect} from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../firebase";
import { snapshot_UNSTABLE } from "recoil";

// const posts = [
//     {
//         id: '123',
//         username: 'beem',
//         userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwwJMf5Qz-Bw/profile-displayphoto-shrink_200_200/0/1516703156496?e=1641427200&v=beta&t=G4jeS2S6Q8rP4oNOFTllAxiybdotefYC0_soV4RM-Y4',
//         img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwwJMf5Qz-Bw/profile-displayphoto-shrink_200_200/0/1516703156496?e=1641427200&v=beta&t=G4jeS2S6Q8rP4oNOFTllAxiybdotefYC0_soV4RM-Y4',
//         caption: "Demo",
//     },
//     {
//         id: '124',
//         username: 'beem',
//         userImg: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwwJMf5Qz-Bw/profile-displayphoto-shrink_200_200/0/1516703156496?e=1641427200&v=beta&t=G4jeS2S6Q8rP4oNOFTllAxiybdotefYC0_soV4RM-Y4',
//         img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEwwJMf5Qz-Bw/profile-displayphoto-shrink_200_200/0/1516703156496?e=1641427200&v=beta&t=G4jeS2S6Q8rP4oNOFTllAxiybdotefYC0_soV4RM-Y4',
//         caption: "Demo",
//     },
// ]

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() =>
        onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')), 
        snapshot => {
            setPosts(snapshot.docs);
         }
        ), 
        [db]
       );

    console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <Post 
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
                />
            ))}
            
        </div>
    )
}

export default Posts
