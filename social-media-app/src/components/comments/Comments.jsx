import React, { useContext } from 'react'
import "./Comments.scss"
import { AuthContext } from '../../context/authContext'

const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  const comments = [
    {
      id :1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name : "Parul",
      userId : "1",
      profilePicture : "https://i.postimg.cc/pr0SDxQ4/Anchal.jpg"
    },
    {
      id :1,
      desc: "Lorem, ipsum dolor.",
      name : "Parul",
      userId : "1",
      profilePicture : "https://i.postimg.cc/pr0SDxQ4/Anchal.jpg"
    },
  ]

  return (
    <div className='comments'>
      <div className="write">
         <img src={currentUser.profilePic} alt="" />
         <input type="text" placeholder='Write a comment' name="" id="" />
         <button>Send</button>
      </div>
      {comments.map(comment=>(
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>3 sec ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments