import type { StaticImageData } from "next/image";
import avatar from "./aleixCV.jpg";

export interface Profile {
  fullName: string;
  avatarSrc: StaticImageData;
}

export const profile: Profile = {
  fullName: "Aleix Rodriguez",
  avatarSrc: avatar,
};
