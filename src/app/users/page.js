"use client";
import React, { useState, useEffect } from "react";
import UserCard from "@/components/UserCard";

import { fetchAllUser } from "@/utils/users";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  // use if error => example show modal or replace route error or etc
  const [isError, setIsError] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchAllUser()
      .then((res) => {
        setIsLoading(false);
        setDatas(res.data.data);
      })
      .catch((err) => {
        if (err) setIsError(!isError);
      });
  }, [isLoading, isError]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="md:grid grid-cols-2 lg:grid-cols-3">
          {Array.from(Array(9), (e, idx) => (
            <UserCard key={idx} isLoading={isLoading} data={e} />
          ))}
        </div>
      ) : (
        <div className="md:grid grid-cols-2 lg:grid-cols-3">
          {Array.isArray(datas) &&
            datas.length > 0 &&
            datas.map((data, idx) => (
              <UserCard key={idx} isLoading={isLoading} data={data} />
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Users;
