import { RotateCcw, X } from "lucide-react";
import { useState } from "react";
import logo from "./logonY.png";
import coding from "./coding.svg";

export default function StartupCon({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    interest: "",
    info: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", project: "", interest: "", info: "" });
    setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY", // from web3forms.com
          name: form.name,
          email: form.email,
          project: form.project,
          interest: form.interest,
          message: form.info,
        }),
      });

      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
      if (data.success)
        setForm({ name: "", email: "", project: "", interest: "", info: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-6 ">
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="object-contain transition-transform duration-300 hover:scale-125"
            />
          </div>
        </div>
        <div className="flex items-center gap-5 text-purple-600">
          <button
            type="button"
            aria-label="Reset"
            className="p-1"
            onClick={handleReset}
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button aria-label="Close" className="p-1" onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 sm:gap-4">
        <div className="line1 flex-1 h-[2px] bg-black"></div>
        <img
          src={coding}
          className="w-15 sm:w-20 md:w-22 shrink-0"
          alt="coding"
        />
        <div className="line2 flex-1 h-[2px] bg-black"></div>
      </div>

      {/* Main content */}
      <main className="max-w-2xl mx-auto px-6 pt-12 pb-20 text-center">
        <h1 className="text-3xl sm:text-4xl font-normal leading-snug max-w-xl mx-auto mb-14">
          Want to discuss a startup collaboration? I'm most definitely game.
        </h1>

        <form
          id="startupForm"
          className="text-left space-y-7"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-slate-400 mb-2.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-3 border border-slate-200 rounded-md focus:outline-none focus:border-purple-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-400 mb-2.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-3 border border-slate-200 rounded-md focus:outline-none focus:border-purple-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="project" className="block text-slate-400 mb-2.5">
                Which of project
              </label>
              <select
                id="project"
                name="project"
                value={form.project}
                onChange={handleChange}
                className="w-full px-3.5 py-3 border border-slate-200 rounded-md focus:outline-none focus:border-purple-600 appearance-none pr-9"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236C3CE1' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.1rem",
                }}
              >
                <option value=""></option>
                <option value="Responsive Design">Responsive Design</option>
                <option value="Dynamic Responsive Website">
                  Dynamic Responsive Website
                </option>
                <option value="Static Web Page">Static Web Page</option>
              </select>
            </div>
            <div>
              <label htmlFor="interest" className="block text-slate-400 mb-2.5">
                Your Interest
              </label>
              <select
                id="interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="w-full px-3.5 py-3 border border-slate-200 rounded-md focus:outline-none focus:border-purple-600 appearance-none pr-9"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236C3CE1' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.1rem",
                }}
              >
                <option value=""></option>
                <option value="5 $ - 20 $">5 $ - 20 $</option>
                <option value="20 $ - 40 $">20 $ - 40 $</option>
                <option value="40 $ - 50 $">40 $ - 50 $</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-slate-400 mb-2.5">
              Add Additional Information
            </label>
            <input
              id="additionalInfo"
              name="info"
              type="text"
              value={form.info}
              onChange={handleChange}
              className="w-full px-3.5 py-3 border border-slate-200 rounded-md focus:outline-none focus:border-purple-600"
            />
          </div>
        </form>

        {status === "sent" && (
          <p className="text-green-600 text-sm mt-4">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-4">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          form="startupForm"
          disabled={status === "sending"}
          className="px-8 py-2 rounded-3xl border-2 mt-10 font-semibold border-[#6e07f3] text-[#6e07f3] bg-white text-[1.1rem] cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-[#6e07f3] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </main>
    </div>
  );
}