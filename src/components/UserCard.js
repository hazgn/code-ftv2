import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import ImageDefault from "@/assets/img/default-img.png";
import spin from "@/assets/svg/spin.svg";

const UserCard = ({ isLoading, data }) => {
  const router = useRouter();

  let photo = "";

  if (data && data.photo) photo = data.photo;

  const detailHandler = () => {
    router.push(`/users/detail/${data.id}`);
  };

  return (
    <div className="border border-blue-300 shadow shadow-green-600 rounded-md p-4 w-full mb-5 md:max-w-[240px] xl:max-w-[25vw]">
      <div className="flex space-x-4">
        {isLoading ? (
          <React.Fragment>
            <div className="animate-pulse rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="grid grid-cols-3 gap-4 animate-pulse">
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 animate-pulse">
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 animate-pulse">
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              </div>

              <button
                className="bg-indigo-500 py-1 w-full rounded-lg flex justify-center"
                type="button"
                disabled
              >
                <div className="h-5 w-5 mr-2 relative">
                  <Image src={spin} alt="avatar" className="rounded-full" />
                </div>
                Loading...
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="h-10 w-10 relative">
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
                alt="avatar"
                className="rounded-full object-cover"
                fill
                onError={(e) => {
                  e.currentTarget.src = ImageDefault;
                }}
              />
            </div>

            <div className="flex-1 space-y-4">
              <p className="h-2 text-xs">Firstname : {data.firstName}</p>
              <p className="h-2 text-xs">Lastname : {data.lastName}</p>
              <p className="h-2 text-xs">Age : {data.age}</p>
              <button
                className="bg-indigo-500 py-1 w-full rounded-lg"
                type="button"
                onClick={detailHandler}
              >
                Detail
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default UserCard;
