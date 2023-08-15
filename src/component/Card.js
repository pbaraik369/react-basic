import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = ({ course, likedCourse, setLikedCourse }) => {
  const info = `${course.description.substring(0, 200)}...`;
  const onClickHandler = () => {
    if (likedCourse.includes(course.id)) {
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("like removed");
    } else {
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]);
      } else {
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("like Successfully");
    }
  };

  return (
    <div className=" w-[300px] bg-indigo-600 text-white rounded">
      <div>
        <img src={course.image.url} alt={course.image.alt} />
      </div>
      <div className="flex justify-end items-start my-[-15px] mx-2">
        <button
          className="bg-white rounded-full p-1 opacity-90 hover:p-[6px] hover:duration-200 "
          onClick={onClickHandler}
        >
          {likedCourse.includes(course.id) ? (
            <FcLike fontSize="1.75rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" />
          )}
        </button>
      </div>
      <div className="p-2">
        <p className="font-bold text-black py-2">{course.title}</p>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default Card;
