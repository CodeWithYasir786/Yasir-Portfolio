import { RotateCcw, X } from "lucide-react";
import { useState } from "react";
import logo from "./logonY.png";
import coding from "./coding.svg";

export default function SayHello({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", info: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({ name: "", email: "", info: "" });
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
          message: form.info,
        }),
      });

      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
      if (data.success) setForm({ name: "", email: "", info: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 sm:px-10 py-6">
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
          Thanks for taking the time to reach out. How can I help you today?
        </h1>

        <form
          id="contactForm"
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

          <div>
            <label htmlFor="additionalInfo" className="block text-slate-400 mb-2.5">
              Your Message
            </label>
            <input
              id="additionalInfo"
              name="info"
              type="text"
              value={form.info}
              onChange={handleChange}
              required
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
          form="contactForm"
          disabled={status === "sending"}
          className="px-8 py-2 rounded-3xl border-2 mt-10 font-semibold border-[#6e07f3] text-[#6e07f3] bg-white text-[1.1rem] cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-[#6e07f3] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
      </main>
    </div>
  );
}