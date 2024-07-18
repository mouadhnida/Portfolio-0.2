import Image from "next/image";
import handcoding from "../../public/hand-coding-animate.svg";

export default function Home() {
  return (
    <div className="">
      <Image src={handcoding} alt="Picture of hand coding animate" />
    </div>
  );
}
