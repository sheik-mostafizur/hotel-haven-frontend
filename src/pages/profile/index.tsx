import {useParams} from "react-router-dom";
import Main from "../../layout/main";
import {useGetProfileQuery} from "../../api/private-api";

const Profile = () => {
  const {_id} = useParams();
  const {data, isLoading} = useGetProfileQuery(_id);

  const date = new Date(data?.joined);
  const joined = date.toLocaleDateString();

  return (
    <Main>
      <div className="flex items-center justify-center min-h-[500px]">
        {isLoading ? (
          <div className="min-w-[300px] max-w-lg shadow shadow-primary-50 p-4 flex flex-col gap-2">
            <div className="w-32 h-32 mx-auto mb-4  bg-primary-50 rounded-full"></div>
            <div className="w-full h-8 mx-auto mb-4 bg-primary-50 rounded-full"></div>
            <div className="w-full h-6 mx-auto mb-4 bg-primary-50 rounded-full"></div>
            <div className="w-full h-6 mx-auto mb-4 bg-primary-50 rounded-full"></div>
            <div className="w-full h-6 mx-auto mb-4 bg-primary-50 rounded-full"></div>
          </div>
        ) : (
          <div className="min-w-[300px] max-w-lg shadow shadow-primary-50 p-4 flex flex-col gap-4 bg-primary-50">
            <img
              className="w-32 mx-auto mb-4"
              src={
                data?.photoURL ||
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
              alt={data?.name}
            />
            <h4>Name: {data?.name}</h4>
            <p>
              <b>Age: </b>
              {data?.age}
            </p>
            <p>
              <b>Gender: </b>
              {data?.gender}
            </p>
            <p>
              <b>Joined: </b>
              {joined}
            </p>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Profile;
