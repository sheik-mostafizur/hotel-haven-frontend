import {BlogCard} from "../../components/card";
import Container from "../../components/ui/container";

const Playground: React.FC = () => {
  const blog = {
    title: "A Culinary Journey Through Bangladesh",
    thumbnail:
      "https://storage.googleapis.com/buro-malaysia-storage/beta.toffeetest.com/buro/2019/07/36df1ba0-images_hotels-asia-2019-maldives-rubric.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil soluta accusamus repellendus eaque hic, consequatur atque totam mollitia eveniet, ipsam expedita amet provident perferendis est illum unde ut? Corporis tempora laboriosam deleniti suscipit illum? Iure, nemo natus deserunt qui placeat possimus. Maxime cum sint porro mollitia. Nemo qui laudantium labore ad quod enim fugit possimus mollitia hic totam inventore unde, eos fugiat fuga earum laboriosam suscipit ipsam! Ea recusandae libero eaque eos aspernatur est impedit molestiae cum beatae quisquam quae obcaecati itaque dolorum doloribus sapiente ut corrupti, temporibus nihil sed illo reprehenderit dolore a fugiat ex. Laborum, et nulla.",

    likeCount: 5,
    publishDate: "2023-01-15",
    userId: "2323df44fasdrwsdsdf",
    userName: "John Doe",
    userProfile:
      "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
  };
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <BlogCard blog={blog} />
    </Container>
  );
};

export default Playground;
