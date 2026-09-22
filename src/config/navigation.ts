export type NavigationItem = {
  label: string;
  href: string;
  children?: { label: string; description: string; href: string }[];
};

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Guides",
    href: "/guides",
    children: [
      { label: "Beginner Guide", description: "Start your first wash", href: "/guides/beginner-guide" },
      { label: "How to Wash", description: "The hands-on sequence", href: "/guides/how-to-wash" },
      { label: "Washing Tools", description: "Pick the right tool", href: "/guides/washing-tools" },
      { label: "Controls & Settings", description: "Input and comfort", href: "/guides/controls" },
      { label: "Cleaning Tips", description: "Find missed spots", href: "/guides/cleaning-tips" },
      { label: "Troubleshooting", description: "Fix a stuck or broken run", href: "/troubleshooting" },
    ],
  },
  { label: "Walkthrough", href: "/walkthrough" },
  {
    label: "Dragons",
    href: "/dragons",
    children: [
      { label: "Alexander", description: "Character notes", href: "/dragons/alexander" },
      { label: "Ryan", description: "Character notes", href: "/dragons/ryan" },
      { label: "Conrad", description: "Character notes", href: "/dragons/conrad" },
      { label: "Romance & Choices", description: "How stories connect", href: "/romance" },
    ],
  },
  {
    label: "Endings",
    href: "/endings",
  },
  {
    label: "Mods",
    href: "/mods",
    children: [
      { label: "Localization", description: "Languages, setup and removal", href: "/mods/localization" },
    ],
  },
  { label: "Updates", href: "/updates" },
];
