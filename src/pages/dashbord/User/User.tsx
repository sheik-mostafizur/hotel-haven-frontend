import {useEffect, useState} from "react";
import Button from "../../../components/ui/button";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/admin/user")
      .then(({data}) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <ul className="text-primary-500 flex flex-col justify-center items-center rounded-xl border ">
        {isLoading ? (
          <h1 className="text-3xl">Loading...</h1>
        ) : (
          users.map((user, idx) => (
            <div
              className="flex justify-between border w-3/4  p-4 gap-4 shadow-xl mt-5"
              key={idx}>
              <div>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <div>
                <p className="text-xl font-semibold">{user.name}</p>
                <p className="text-xl font-semibold">{user.email}</p>
              </div>
              <div className=" ">
                <Button className="me-2">Make Admin </Button>
                <Button className="me-2">Make Mordaretor</Button>
                <Button className="me-2">Delete</Button>
              </div>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
