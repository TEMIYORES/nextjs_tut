import Link from "next/link";
import React from "react";
// async function fetchCourses() {
//   const response = await fetch("http://localhost:3000/api/courses", {
//     next: {
//       revalidate: 60,
//     },
//   });
//   const courses = await response.json();
//   return courses;
// }
const Courses = async ({ courses }) => {
  //   const courses = await fetchCourses();
  return (
    <div className="courses">
      {courses.map((course) => {
        return (
          <div key={course.id} className="card">
            <h2 className="text-[2rem]">{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link className="btn my-2" href={course.link} target="_blank">
              Go To Course
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
