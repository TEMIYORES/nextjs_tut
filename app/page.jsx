"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Courses from "./components/Courses";
import Loading from "./loading";
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const courses = await response.json();
      setCourses(courses);
      setLoading(false);
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <h1 className="text-[5rem]">Welcome to upplux</h1>
      <CourseSearch getSearchResult={(result) => setCourses(result)} />
      {loading ? <Loading /> : <Courses courses={courses} />}
    </div>
  );
};

export default HomePage;
