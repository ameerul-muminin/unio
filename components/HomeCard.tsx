"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";

interface HomeCardProps {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void
}

const HomeCard = ({className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        "bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[220px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-10 rounded-[10px]">
        <Image src={img} alt="meeting" width={24} height={24} />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
