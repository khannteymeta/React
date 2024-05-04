import { Message } from "./Message";
import { Image } from "./Image";
import { Author } from "./Author";
export const Profile = () => {
  return (
    <article>
      <Message />
      <Author />
      <Image />
    </article>
  );
};
