import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // console.log("Hello world!");
  // throw new Error();
  return (
    <div>
      <h1>This is Home Page</h1>
      <Counter />
      <Link href="/">
        <button className="btn btn-accent">Home</button>
      </Link>
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
    </div>
  );
};

export default HomePage;
