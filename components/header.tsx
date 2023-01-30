import Image from "next/image";
export default function Header() {
  return (
    <header className="text-lg flex justify-between max-w-[1600px] mx-auto px-4">
      <Image src={"/logo.png"} width="100" height="100" alt="logo" />
      <Image src={"/user.png"} width="100" height="100" alt="logo" />
    </header>
  );
}
