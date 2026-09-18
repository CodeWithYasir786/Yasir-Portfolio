function Conversation({ onContact }) {
  return (
    <div className="w-[90vw] min-h-fit sm:min-h-[16vh] bg-[#141c3a] rounded-2xl text-white flex flex-col sm:flex-row justify-evenly items-center gap-6 sm:gap-4 px-6 py-8 sm:px-8 sm:py-6 text-center sm:text-left">
      <h1 className="text-xl sm:text-2xl font-black">Start a Project</h1>
      <div className="w-full sm:w-[40%]">
        <p className="text-base sm:text-xl">
          Interested in working together? We should queue up a time to chat.
          I'll buy the coffee.
        </p>
      </div>
      <button
        onClick={onContact}
        className="border-2 border-[#5be9b9] text-lg sm:text-xl px-5 py-2.5 rounded-3xl cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#141c3a] hover:bg-[#5be9b9] whitespace-nowrap"
      >
        Let's Do This
      </button>
    </div>
  );
}
export default Conversation;