import {
  FolderGit2Icon,
  HouseIcon,
  Layers3Icon,
  PencilLineIcon,
  UserIcon,
} from "lucide-react";

// Navigation links configuration
export const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: HouseIcon,
  },
  {
    label: "About",
    href: "/about",
    icon: UserIcon,
  },
  {
    label: "Services",
    href: "/services",
    icon: Layers3Icon,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderGit2Icon,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: PencilLineIcon,
  },
];
