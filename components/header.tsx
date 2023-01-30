import Image from "next/image";
export default function Header() {
  return (
    <header className="text-lg flex justify-between max-w-[1600px] mx-auto px-10">
      <Image
        src={process.env.NEXT_PUBLIC_GITHUB_PAGES + "/logo.png"}
        width="100"
        height="100"
        alt="logo"
      />
      <Image
        src={process.env.NEXT_PUBLIC_GITHUB_PAGES + "/user.png"}
        width="100"
        height="100"
        alt="logo"
      />
    </header>
  );
}
