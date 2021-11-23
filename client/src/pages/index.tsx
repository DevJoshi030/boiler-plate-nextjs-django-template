import { NextPage } from "next";
import { GetStaticProps } from "next";

interface IndexProps {
  msg: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/home");
  const data = await res.json();

  return {
    props: {
      msg: data,
    },
  };
};

const Index: NextPage<IndexProps> = ({ msg }) => {
  return (
    <>
      <h1 className="text-4xl text-green-500">{msg}</h1>
    </>
  );
};

export default Index;
