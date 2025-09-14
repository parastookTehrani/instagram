import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { BsSave } from "react-icons/bs";

export default function Post() {
  const [likes, setLikes] = useState(false);
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState({});

  //   https: useEffect(() => {
  //     const fechdata = async () => {
  //       try {
  //         const token = localStorage.getItem("token");

  //         const res = await axios.get(
  //           "https://instagram-backend-ugd3.onrender.com/api/article/timeline?page=1&limit=1",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         );
  //         // console.log(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     fechdata();
  //   }, []);

  const Articles = [
    {
      id: "605c72a8c0d7d1d6b5f633c0",
      title: "This is the content of my first article.",
      user: {
        username: "john_doe",
        profilePicture:
          "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
      },
    },
    {
      id: "605c72a8c0d7d1d6b5f633c1",
      title: "Another test article",
      user: {
        username: "jane_doe",
        profilePicture:
          "https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg",
      },
    },
  ];

  //   const likeArticle = async (id) => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const res = await axios.get(
  //         `https://instagram-backend-ugd3.onrender.com/api/article/${id}/like`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       console.log(res.data);

  //       setLikes((prev) => ({
  //         ...prev,
  //         [id]: !prev[id],
  //       }));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const fetchComments = async (postId) => {
    try {
      const token = localStorage.getItem("token");
      
      const res = await axios.get(
        `https://instagram-backend-ugd3.onrender.com/api/comment/${postId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments((prev) => ({ ...prev, [postId]: res.data }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCommentChange = (postId, value) => {
    setCommentInput((prev) => ({ ...prev, [postId]: value }));
  };

  const submitComment = async (postId) => {
    const text = commentInput[postId];
    if (!text || !text.trim()) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://instagram-backend-ugd3.onrender.com/api/comment",
        { postId, text },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments((prev) => ({
        ...prev,
        [postId]: prev[postId] ? [res.data, ...prev[postId]] : [res.data],
      }));

      setCommentInput((prev) => ({ ...prev, [postId]: "" }));
    } catch (err) {
      console.log(err);
    }
  };

  const likeArticle = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    Articles.forEach((article) => fetchComments(article.id));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {Articles.map((item, i) => (
        <div
          key={i}
          className="w-full max-w-md bg-white border-b border-gray-200"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src={item.user.profilePicture}
                alt="profile"
              />
              <p className="font-semibold text-sm">{item.user.username}</p>
              <span className="text-xs text-gray-500">• 5h</span>
            </div>
            <button className="text-gray-500">⋮</button>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2UYjIh_mqRAWnKFUUyuHASqEEZzFbR2CMw&s"
            alt="post"
            className="w-full object-cover"
          />

          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex gap-4 text-2xl">
              <button onClick={() => likeArticle(item.id)}>
                {likes[item.id] ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
              <button>
                <FaRegComment />
              </button>
            </div>
            <button>
              <BsSave />
            </button>
          </div>

          <div className="px-4 text-sm font-semibold">
            {likes[item.id] ? "You and 741,368 others" : "741,368 likes"}
          </div>

          <div className="px-4 py-1 text-sm">
            <span className="font-semibold mr-1">{item.user.username}</span>
            {item.title}
          </div>

          <div className="px-4 text-sm text-gray-500">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => fetchComments(item.id)}
            >
              View all comments
            </button>
            {comments[item.id] &&
              comments[item.id].map((c, idx) => (
                <div key={idx} className="px-4 text-sm">
                  <span className="font-semibold mr-1">
                    {c.user.username}
                  </span>
                  {c.text}
                </div>
              ))}
          </div>

          <div className="px-4 py-2 border-t text-sm text-gray-500">
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Add a comment..."
              value={commentInput[item.id] || ""}
              onChange={(e) => handleCommentChange(item.id, e.target.value)}
            />
            <button
              className="mt-2 p-2 bg-blue-500 text-white rounded"
              onClick={() => submitComment(item.id)}
            >
              Post Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
