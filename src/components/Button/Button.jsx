"use client";
export default function Button() {
  return (
    <button
      className=" bg-orange-300 w-24 font-semibold rounded-lg text-blue-950"
      onClick={() => {
        console.log("logout");
      }}
    >
      Logout
    </button>
  );
}
