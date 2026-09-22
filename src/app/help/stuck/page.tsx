import { permanentRedirect } from "next/navigation";

export default function Page() {
  permanentRedirect("/troubleshooting/stuck-softlock");
}

