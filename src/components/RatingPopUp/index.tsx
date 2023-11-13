import {useState, ChangeEvent} from "react";
import Greeting from "./Greeting";

const RatingPopUp: React.FC = ({hotelId}) => {
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);

  const handleRatingSubmit = () => {
    if (!hotelId || !message) return alert("hoteId or feedback messing");

    const data = {rating, feedback: message, hotelId: hotelId};
    console.log(data);
    setRating(0);
    setMessage("");
    setIsSubmitDisabled(true);
    setFeedbackSubmitted(true);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setIsSubmitDisabled(newRating === 0);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage: string = e.target.value;
    setMessage(newMessage);
    setIsSubmitDisabled(rating === 0);
  };

  return (
    <div>
      {feedbackSubmitted ? (
        <Greeting></Greeting>
      ) : (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div className="bg-white min-w-1xl border-2 flex flex-col rounded-xl shadow-lg">
              <div className="px-4 lg:px-12 py-5">
                <h2 className="text-gray-800 text-xl lg:text-3xl font-semibold">
                  Share your satisfaction!!
                </h2>
              </div>
              <div className="bg-gray-200 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-2xl font-semibold text-gray-800">
                    Rating Us
                  </span>
                  <div className="flex items-center space-x-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <svg
                        key={index}
                        className={`w-8 h-8 ${
                          rating >= index
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-500"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                        onClick={() => handleRatingChange(index)}
                        style={{cursor: "pointer"}}>
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="w-3/4 flex flex-col">
                  <textarea
                    rows={3}
                    className="p-4 text-gray-500 rounded-xl"
                    placeholder="Leave a message, if you want"
                    value={message}
                    onChange={handleMessageChange}></textarea>
                  <button
                    onClick={handleRatingSubmit}
                    className={`py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white ${
                      isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitDisabled}>
                    Rate now
                  </button>
                </div>
              </div>
              <div className="h-20 flex items-center justify-center">
                <a href="#" className="text-gray-600">
                  Maybe later
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingPopUp;
