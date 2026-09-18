import WorkCard from "./WorkCard";
import work1 from "./Payroll.png";
import work2 from "./2work.png";
import work3 from "./3work.png";
import SEC from "./smartExpenseCalculator.jpg";
import Tapp from "./TodoApp.jpg";
import Wapp from "./weatherApp.jpg";

const w_str1 =
  "Easily track and manage your daily expenses with smart insights and summaries.";
const w_str2 =
  "Organize your tasks efficiently with a simple and intuitive task management interface.";
const w_str3 =
  "Get real-time weather updates and forecasts for your location with a clean, responsive design.";
const w_str4 =
  "React-based payroll system managing employees, attendance, leaves, salaries, payslips with efficient workflows";
const w_str5 =
  "Vancouver's tower crane rental service and support leader since 1974.";
const w_str6 =
  "Results-oriented, responsive and flexible full service civil engineering firm.";

function WorkContainer() {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-16 px-6 gap-6">
      <h2 className="text-3xl font-bold text-gray-800">My Recent Works</h2>
      <p className="text-gray-500 text-center max-w-lg">
        Here are a few past design projects I've worked on. Want to see more?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <WorkCard image={SEC} text={w_str1} />
        <WorkCard image={Tapp} text={w_str2} />
        <WorkCard image={Wapp} text={w_str3} />
        <WorkCard image={work1} text={w_str4} />
        <WorkCard image={work2} text={w_str5} />
        <WorkCard image={work3} text={w_str6} />
      </div>
      <button className="px-5 py-2.5 rounded-3xl border-2 border-[#6e07f3] text-[#6e07f3] bg-white text-[1.1rem] cursor-pointer transition-colors duration-30 ease-in-out hover:text-white hover:bg-[#6e07f3]">
        See More Dribble
      </button>
      {/* <button className="mt-4 px-6 py-2 border border-[#6e07f3] text-[#6e07f3] rounded-md hover:bg-[#6e07f3] hover:text-white transition-colors duration-300">
                See More Dribble
            </button> */}
    </div>
  );
}

export default WorkContainer;
