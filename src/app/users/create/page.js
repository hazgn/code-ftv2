"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { createUser } from "@/utils/users";
const CreateUser = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: 1,
    photo: "",
  });

  const cancelHandler = () => {
    setForm({
      firstName: "",
      lastName: "",
      age: 1,
      photo: "",
    });
  };

  const createHandler = () => {
    const body = {
      ...form,
      age: parseInt(form.age),
    };

    createUser(body)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          router.replace("/users");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong?");
      });
  };
  return (
    <div>
      <div className="flex space-x-5 py-2">
        <p className="w-[30%]">FirstName</p>
        <p>:</p>
        <input
          className="w-full h-auto border-0 shadow appearance-none rounded bg-transparent  leading-tight focus:outline-none focus:shadow-outline border-b-2"
          defaultValue={form.firstName}
          onChange={(e) =>
            setForm({
              ...form,
              firstName: e.target.value,
            })
          }
        />
      </div>
      <div className="flex space-x-5 py-2">
        <p className="w-[30%]">Lastname</p>
        <p>:</p>
        <input
          className="w-full h-auto border-0 shadow appearance-none rounded bg-transparent  leading-tight focus:outline-none focus:shadow-outline border-b-2"
          defaultValue={form.lastName}
          onChange={(e) =>
            setForm({
              ...form,
              lastName: e.target.value,
            })
          }
        />
      </div>
      <div className="flex space-x-5 py-2">
        <p className="w-[30%]">Age </p>
        <p>:</p>
        <input
          className="w-full h-auto border-0 shadow appearance-none rounded bg-transparent  leading-tight focus:outline-none focus:shadow-outline border-b-2"
          defaultValue={form.age}
          min={1}
          type="number"
          onChange={(e) =>
            setForm({
              ...form,
              age: e.target.value,
            })
          }
        />
      </div>
      <div className="flex space-x-5 py-2">
        <p className="w-[30%]">URL Photo </p>
        <p>:</p>
        <input
          className="w-full h-auto border-0 shadow appearance-none rounded bg-transparent  leading-tight focus:outline-none focus:shadow-outline border-b-2"
          defaultValue={form.photo}
          onChange={(e) =>
            setForm({
              ...form,
              photo: e.target.value,
            })
          }
        />
      </div>
      <div className="md:flex md:justify-center md:space-x-2 mt-3 md:ml-8">
        <button
          className="bg-red-500 py-1 w-full rounded-lg flex justify-center md:w-[20vw]"
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="bg-indigo-500 py-1 w-full rounded-lg flex justify-center mt-4 md:mt-0 md:w-[20vw]"
          type="button"
          onClick={createHandler}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
