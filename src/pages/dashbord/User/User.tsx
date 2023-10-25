

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
        <div>
           <ul className="text-red-500">
        {users.map((user,idx) => (
          <li key={idx}>{user.name}</li>
        ))}
      </ul>
        </div>
    );
};

export default Users;