import {createContext, useReducer } from "react";

export const Postlist = createContext({
  postlistdata : [],
  addpost : () => {},
  deletepost : () => {},
  Addserverposts : () => {}
})


const usereducefun = (cupostlist,action) =>{
  let newpostlist = cupostlist;

  if(action.type === "DELETE_POST"){
   newpostlist = cupostlist.filter(item => item.id !== action.payload.postlistid)
  }
  else if(action.type === "ADD_POST"){
    newpostlist = [action.payload,...cupostlist]
  }
  else if(action.type === "ADD_SERVER_POSTS"){
    newpostlist = action.payload.posts;
  }

  return newpostlist;

}


function Postlistprovider({children}){
  const [postlist,dispatchpostlist] = useReducer(usereducefun,[])

  function addpost(title,description,reaction,userid,hashtags){
    dispatchpostlist({
      type:"ADD_POST",
      payload : {
        id : Date.now(),
        cardtitle : title,
        desc : description,
        reaction : reaction,
        userid: userid,
        hashtags : hashtags.split(" ")
      }
    })


  }

  function deletepost(postlistid){
    dispatchpostlist({
      type:"DELETE_POST",
      payload : {postlistid}
    })


  
  }
  function Addserverposts(posts){
    dispatchpostlist({
      type : "ADD_SERVER_POSTS",
      payload:{posts}
    })
  }

  return <Postlist.Provider value={{postlist,addpost,deletepost,Addserverposts}}>
      {children}
  </Postlist.Provider>
  
}
// const Default_postlistdata = [{
//   id : 1,
//   cardtitle : "going to mumbai",
//   desc : "its been a while since i go to mumbai",
//   reaction : 2,
//   userid: "user_1",
//   hashtags : ["mumbai","beach","travelling"]
// },{
//   id : 2,
//   cardtitle : "going to kerala",
//   desc : "going to to the most beautiful place",
//   reaction : 9,
//   userid: "user_3",
//   hashtags : ["kerala","beach","travelling"]
// }]
export default Postlistprovider;



