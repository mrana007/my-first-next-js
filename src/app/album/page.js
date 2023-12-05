import Image from "next/image";
import nextImage from "@/assets/nextJs.png";

const AlbumPage = () => {
  return (
    <div>
        <h1>Using Image Component</h1>
      <Image
        src="https://velog.velcdn.com/images/wish/post/ae424c35-84f8-411c-85f5-c96890ed2a1a/image.png"
        width={500}
        height={500}
        alt="next logo"
      />
        <h1>Using Image locally</h1>
      <Image
        src={nextImage}
        width={500}
        height={500}
        alt="next logo"
      />
        <h1>Using Image tag</h1>
      <img
        src="https://velog.velcdn.com/images/wish/post/ae424c35-84f8-411c-85f5-c96890ed2a1a/image.png"
        width="500"
        height="500"
        alt="next logo"
      />
    </div>
  );
};

export default AlbumPage;
