import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const employees = [
    {
      name: "Ahmed Nawaz Gondal",
      jobPosition: "Software Engineer",
      about:
        "Ahmed is a skilled developer with 5 years of experience in full-stack web development, specializing in JavaScript and Python.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      name: "Muhammad Ibad",
      jobPosition: "Web Developer & Project Manager",
      about:
        "Ibad has over 8 years of experience in managing complex projects and is known for his strong leadership and problem-solving skills.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    },
    {
      name: "Rameez Rafiq",
      jobPosition: "UX/UI Designer",
      about:
        "Rameez is a creative designer with a keen eye for detail, specializing in creating intuitive user interfaces and experiences.",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    },
    {
      name: "Shujaat Asghar",
      jobPosition: "Data Analyst",
      about:
        "Shujaat is a data expert with a passion for turning raw data into actionable insights, with a strong background in statistical analysis.",
      image:
        " https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    },
  ];

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Our team is a diverse group of passionate professionals dedicated
              to delivering innovative solutions and exceptional results.
              Together, we bring creativity, expertise, and a commitment to
              excellence to everything we do.
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {employees.map((data, index) => (
              <div
                key={index}
                className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={data.image}
                    alt={data.name}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{data.name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {data.jobPosition}
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {data.about}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
