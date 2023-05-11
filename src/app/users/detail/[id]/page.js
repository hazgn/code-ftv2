"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import ImageDefault from "@/assets/img/default-img.png";
import spin from "@/assets/svg/spin.svg";

import { fetchUserById, fetchPutUserById, deleteUserById } from "@/utils/users";

const DetailUser = ({ params }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({});
  const [formEdit, setFormEdit] = useState({
    firstName: "",
    lastName: "",
    age: 1,
    photo: "",
  });

  let photo = "";

  const { id } = params;

  if (data && data.photo) photo = data.photo;

  useEffect(() => {
    fetchUserById(id)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        if (err) router.back();
      });
  }, [id, router]);

  const deleteHandler = () => {
    deleteUserById(id)
      .then((res) => {
        console.log(res);
        setIsLoading(true);
        setTimeout(() => {
          router.replace("/users");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong?");
      });
  };

  const editHandler = () => {
    setFormEdit({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      photo: data.photo,
    });
    setIsEdit(!isEdit);
  };

  const saveEditHandler = () => {
    const body = {
      ...formEdit,
      age: parseInt(formEdit.age),
    };
    fetchPutUserById(id, body)
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        // you can add modals, toasts, alerts, and others while just empty to make it faster
        console.log(err);
        alert("something wrong?");
      });
  };

  return (
    <div>
      {isLoading ? (
        <React.Fragment>
          <div className="flex justify-center">
            <div className="animate-pulse rounded-lg bg-slate-700 h-52 w-[50vh]"></div>
          </div>
          <div className="flex-1 space-y-6 py-14">
            <div className="grid grid-cols-3 gap-4 animate-pulse">
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
              <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 animate-pulse">
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
              <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 animate-pulse">
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
              <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 animate-pulse">
              <div className="h-4 bg-slate-700 rounded col-span-1"></div>
              <div className="h-4 bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="md:flex md:justify-center">
              <button
                className="bg-red-500 py-1 w-full rounded-lg flex justify-center md:w-[20vw]"
                type="button"
                disabled
              >
                <div className="h-5 w-5 mr-2 relative">
                  <Image src={spin} alt="avatar" className="rounded-full" />
                </div>
                Loading...
              </button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="flex justify-center">
            <div className="h-52 w-[50vh] relative">
              <Image
                src={
                  !photo || photo === "N/A"
                    ? ImageDefault
                    : photo &&
                      !photo.includes("http") &&
                      !photo.includes("https")
                    ? ImageDefault
                    : photo
                }
                fill
                alt="avatar"
                className="object-cover rounded-lg"
                onError={(e) => {
                  e.currentTarget.src = ImageDefault;
                }}
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 py-14">
            {!isEdit ? (
              <div>
                <div className="flex space-x-5 py-2">
                  <p className="w-[30%]">FirstName</p>
                  <p>:</p>
                  <p className="w-full">{data.firstName}</p>
                </div>
                <div className="flex space-x-5 py-2">
                  <p className="w-[30%]">Lastname</p>
                  <p>:</p>
                  <p className="w-full">{data.lastName}</p>
                </div>
                <div className="flex space-x-5 py-2">
                  <p className="w-[30%]">Age </p>
                  <p>:</p>
                  <p className="w-full">{data.age}</p>
                </div>
                <div className="flex space-x-5 py-2 items-center">
                  <p className="w-[30%]">URL Photo </p>
                  <p>:</p>
                  <p className="w-full text-xs">{data.photo}</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex space-x-5 py-2">
                  <p className="w-[30%]">FirstName</p>
                  <p>:</p>
                  <input
                    className="w-full h-auto border-0 shadow appearance-none rounded bg-transparent  leading-tight focus:outline-none focus:shadow-outline border-b-2"
                    defaultValue={formEdit.firstName}
                    onChange={(e) =>
                      setFormEdit({
                        ...formEdit,
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
                    defaultValue={formEdit.lastName}
                    onChange={(e) =>
                      setFormEdit({
                        ...formEdit,
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
                    defaultValue={formEdit.age}
                    type="number"
                    onChange={(e) =>
                      setFormEdit({
                        ...formEdit,
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
                    defaultValue={formEdit.photo}
                    onChange={(e) =>
                      setFormEdit({
                        ...formEdit,
                        photo: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            )}
            <div className="md:flex md:justify-center md:space-x-3">
              <button
                className="bg-red-500 py-1 w-full rounded-lg flex justify-center md:w-[20vw]"
                type="button"
                onClick={deleteHandler}
              >
                Delete
              </button>
              <button
                className="bg-green-500 py-1 w-full rounded-lg flex justify-center mt-4 md:mt-0 md:w-[20vw]"
                type="button"
                onClick={editHandler}
              >
                {!isEdit ? "Edit" : "Cancel Edit"}
              </button>
              <button
                className={`${"bg-indigo-500 py-1 w-full rounded-lg flex justify-center mt-4 md:mt-0 md:w-[20vw] transition-all duration-500"} ${
                  !isEdit ? "opacity-50" : "opacity-100"
                }`}
                type="button"
                disabled={!isEdit}
                onClick={saveEditHandler}
              >
                Save Edit
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default DetailUser;
