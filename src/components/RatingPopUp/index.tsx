import {useState, ChangeEvent, useEffect} from "react";
import Greeting from "./Greeting";
import {usePostHotelReviewMutation} from "../../api/private-api";
import toastSuccess from "../../utils/toast-success";
import toastError from "../../utils/toast-error";
import {BeatSpinner} from "../spinner";
import Button from "../ui/button";
import {useGetHotelReviewByIdQuery} from "../../api/public-api";

interface RatingPopUpProps {
  hotelId: string | number;
}

const RatingPopUp: React.FC<RatingPopUpProps> = ({hotelId}) => {
  const {refetch} = useGetHotelReviewByIdQuery(hotelId);
  const [postHotelReview, {isLoading: reviewPostLoading}] =
    usePostHotelReviewMutation();
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRatingSubmit = () => {
    if (!hotelId) return alert("hoteId needed");

    const data = {rating, feedback: message, hotelId};

    postHotelReview(data)
      .unwrap()
      .then(({message}) => {
        refetch();
        setRating(0);
        setMessage("");
        setIsSubmitDisabled(true);
        setFeedbackSubmitted(true);
        toastSuccess(message);
      })
      .catch(({data: {message}}) => {
        const error = {message};
        toastError(error);
      });
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage: string = e.target.value;
    setMessage(newMessage);
  };

  useEffect(() => {
    if (rating === 0) {
      setIsSubmitDisabled(true);
      setErrorMessage("Please rate us");
      return;
    } else if (message.trim() === "") {
      setIsSubmitDisabled(true);
      setErrorMessage("Please comment us ");
      return;
    } else {
      setIsSubmitDisabled(false);
    }
    setErrorMessage(null);
  }, [rating, message]);

  return (
    <div>
      {feedbackSubmitted ? (
        <Greeting></Greeting>
      ) : (
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 w-full max-w-lg sm:mx-auto">
            <div className="bg-white min-w-1xl border-2 flex flex-col rounded-xl shadow-lg">
              <div className="px-4 lg:px-12 py-5">
                <h2 className="text-secondary-800 text-xl lg:text-3xl font-semibold">
                  Share your satisfaction!!
                </h2>
              </div>
              <div className="bg-primary-50 w-full flex flex-col items-center">
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-2xl font-semibold text-secondary-800">
                    Rating Us
                  </span>
                  <div className="flex items-center space-x-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <svg
                        key={index}
                        className={`w-8 h-8 ${
                          rating >= index
                            ? "text-yellow-500"
                            : "text-primary-200 dark:text-primary-500"
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
                    className="p-4 text-secondary-500 rounded-xl"
                    placeholder="Leave a message, if you want"
                    value={message}
                    onChange={handleMessageChange}></textarea>
                  {errorMessage && (
                    <p className="text-red-400 text-lg pt-3">{errorMessage}</p>
                  )}
                  <Button
                    onClick={handleRatingSubmit}
                    className={"w-full mt-4 mb-6"}
                    isDisabled={isSubmitDisabled}>
                    {reviewPostLoading ? <BeatSpinner /> : "Rate now"}
                  </Button>
                </div>
              </div>
              <div className="h-20 flex items-center justify-center">
                <a href="#" className="text-secondary-600">
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
