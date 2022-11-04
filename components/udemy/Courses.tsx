import CourseItme from "./CourseItem";
import { Course } from "@prisma/client";
import useSWR from "swr";

interface CoursesResponse {
    ok: boolean;
    courses: Course[];
  }

const Courses = () => {
    const { data } = useSWR<CoursesResponse>(`/api/courses`);
    console.log(data);

    return (
      <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
        <h2 className="text-4xl font-bold">A broad selection of courses</h2>
        <h3 className="text-xl">Choose from 183,000 online video courses with new addition published every month</h3>
        <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
            <h3>Python</h3>
            <h3>Excel</h3>
            <h3>Web Development</h3>
            <h3 className="text-black">JavaScript</h3>
            <h3>Data Science</h3>
            <h3>AWS Certification</h3>
            <h3>Drawing</h3>
        </div>

        <div className="text-left w-full border border-gray-300 p-7">
            <h2 className="text-2xl font-bold mb-2">Expand your career opportunities with Universe Code</h2>
            <h3>Below you can see some of my project and also what Im preparing guys. Subscribe the Like button, thanks for support.</h3>
            <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Universe Code</button>

            <div className="flex gap-4 flex-wrap lg:flex-now">
                {data?.courses?.map((item) => (
                    <div className="h-60 w-60" key={item.id}>
                        <CourseItme item={item}/>
                    </div>
                ))}
            </div>
        </div>
      </div>
    )
  }

  export default Courses