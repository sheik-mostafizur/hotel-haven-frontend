const formatPostDate = (postDate: string) => {
  const currentDate: any = new Date();
  const postDateObj: any = new Date(postDate);
  const timeDifference = currentDate - postDateObj;
  const secondsDifference = Math.floor(timeDifference / 1000);

  if (secondsDifference < 60) {
    return `${secondsDifference} seconds ago`;
  } else if (secondsDifference < 3600) {
    const minutesDifference = Math.floor(secondsDifference / 60);
    return `${minutesDifference} minute${minutesDifference > 1 ? "s" : ""} ago`;
  } else if (secondsDifference < 86400) {
    const hoursDifference = Math.floor(secondsDifference / 3600);
    return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
  } else {
    const daysDifference = Math.floor(secondsDifference / 86400);
    return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
  }
};
export default formatPostDate;
