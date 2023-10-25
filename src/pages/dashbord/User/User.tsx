import Button from "../../../components/ui/button";


const Users = () => {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30,
      country: "USA",
    },
    {
      name: "Alice Smith",
      email: "alice.smith@example.com",
      age: 25,
      country: "Canada",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      age: 28,
      country: "UK",
    },
    {
      name: "Eva Martinez",
      email: "eva.martinez@example.com",
      age: 35,
      country: "Spain",
    },
    // Add more user objects as needed
  ];

  return (
    <div >
      <ul className="text-red-500 flex flex-col justify-center items-center rounded-xl border ">
        {users.map((user, idx) => (
          <div className="flex justify-between border w-3/4  p-4 gap-4 shadow-xl mt-5" key={idx}>
            <div>
              <img className="w-12 h-12 rounded-full" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg" alt="" />
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
        ))}
      </ul>
    </div>
  );
};

export default Users;