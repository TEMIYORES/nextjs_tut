import { NextResponse } from "next/server";
import courses from "./data.json";
import { v4 as uuidv4 } from "uuid";
export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, link, level } = await request.json();
  const NewCourse = {
    id: uuidv4(),
    title,
    description,
    link,
    level,
  };
  courses.push(NewCourse);
  return NextResponse.json(courses);
}
