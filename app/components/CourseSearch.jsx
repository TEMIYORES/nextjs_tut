"use client";
import React, { useState } from "react";

const CourseSearch = ({ getSearchResult }) => {
  const [search, setSearch] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/courses/search?query=${search}`);
    const courses = await response.json();
    getSearchResult(courses);
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        className="search-input text-black"
        placeholder="search course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
