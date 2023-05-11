import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <div>
        <h1 className="text-center font-bold text-3xl">Wellcome</h1>
        <p className="mt-4 mb-2">
          Please select the menu in the bar for all features and more, or you
          can view all users by
        </p>

        <div className="text-center font-semibold text-cyan-600 hover:text-purple-600">
          <Link href="/users">clicking here!</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
