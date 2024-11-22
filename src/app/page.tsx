"use client";

import Scene from "@/components/Three/Scene";

import Wave from "@/ui/Wave";

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nickname = formData.get("nickname") as string;
    // const showOnboarding = formData.get("scales") as string;

    console.log(nickname);
    fetch("http://localhost:3001/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ nickname }),
    });
  };

  // const onClick = () => {
  //   fetch("http://localhost:3001/api/v1/users/suggestions", {
  //     method: "GET",
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then(console.log);
  // };

  return (
    <div>
      <Wave>
        <Scene />
      </Wave>

      <div className="px-6 mt-16">
        <h1 className="text-4xl text-left">
          <b>Task Manager</b>
        </h1>

        <p className="text-left text-[#4A90E2]">Your Productivity Playground</p>

        <form className="mt-8 flex flex-col items-left" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nickname"
            placeholder="Nickname"
            className="h-[52px] p-4 mb-2 border rounded-xl"
          />
          <div className="ml-2 mb-6">
            <input type="checkbox" id="scales" name="scales" className="mr-2" />
            <label htmlFor="scales" className="text-[#8C8C8C]">
              Show me the onboarding magic!
            </label>
          </div>
          <button className="border p-2 m-2 bg-[#4A90E2] text-white rounded-xl h-[52px] text-xl">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
