import React, { useState } from "react";
import Card from "./Card";
const Cards = ({ courses, cotegory }) => {
  const [likedCourse, setLikedCourse] = useState([]);

  const getCourses = () => {
    if (cotegory === "All") {
      let allCourses = [];
      console.log(allCourses);
      Object.values(courses).forEach((courseCotegory) => {
        courseCotegory.forEach((course) => {
          allCourses.push(course);
          console.log(course);
        });
      });
      return allCourses;
    } else {
      return courses[cotegory];
    }
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourse={likedCourse}
            setLikedCourse={setLikedCourse}
          />
        );
      })}
    </div>
  );
};

export default Cards;
