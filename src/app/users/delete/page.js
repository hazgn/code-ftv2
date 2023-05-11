"use client";
import React, { useEffect, useState } from "react";

import { fetchAllUser, deleteUserById } from "@/utils/users";

const DeleteUser = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchAllUser().then((res) => {
      setDatas(res.data.data);
    });
  }, []);

  const deleteHandler = (id) => {
    deleteUserById(id)
      .then(() => {
        fetchAllUser().then((res) => {
          setDatas(res.data.data);
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Something Error?");
      });
  };
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th className="border">Firstname</th>
            <th className="border">Lastname</th>
            <th className="border">Age</th>
            <th className="border">Setup</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(datas) &&
            datas.length > 0 &&
            datas.map((data, idx) => (
              <tr key={idx}>
                {/* <td>{data.id}</td> */}
                <td className="border">{data.firstName}</td>
                <td className="border">{data.lastName}</td>
                <td className="border">{data.age}</td>
                <td className="border ">
                  <p
                    className="text-red-500 font-lg cursor-pointer hover:text-violet-500 text-center"
                    onClick={() => {
                      deleteHandler(data.id);
                    }}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteUser;
