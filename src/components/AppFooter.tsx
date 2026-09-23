import Link from "@/components/DocumentLink";
import Image from "next/image";
import { siteName } from "@/config/site";
import { steamStore } from "@/lib/content";
import styles from "@/style/layout/footer.module.css";
import SocialShare from "@/components/SocialShare";

export default function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <Link href="/" className={styles.brand}>
            <Image src="/images/logo.png" width={58} height={58} alt="" />
            <span><b>Drag&apos;n <em>Wash</em></b><small>PLAYER FIELD MANUAL</small></span>
          </Link>
          <p>Walkthroughs, dragon stories, endings and practical fixes for your next shift in the wash bay.</p>
          <SocialShare />
          <div className={styles.coverage} aria-label="Guide coverage">
            <span><b>3</b> Dragons</span><span><b>3</b> Endings</span><span><b>5</b> Guides</span>
          </div>
          <a href={steamStore} target="_blank" rel="noopener noreferrer">Official game on Steam <span aria-hidden="true">↗</span></a>
        </div>
        <div>
          <strong><small>01</small> Start Playing</strong>
          <nav aria-label="Start playing">
            <Link href="/guides">Guides <span>First wash & tools</span></Link>
            <Link href="/walkthrough">Walkthrough <span>Full story flow</span></Link>
            <Link href="/dragons">Dragons <span>Meet all three</span></Link>
            <Link href="/endings">Endings <span>Routes & replay</span></Link>
            <Link href="/troubleshooting">Troubleshooting <span>Get unstuck</span></Link>
          </nav>
        </div>
        <div>
          <strong><small>02</small> Game &amp; Community</strong>
          <nav aria-label="Player resources">
            <Link href="/mods">Mods <span>Projects & status</span></Link>
            <Link href="/mods/localization">Localization <span>Languages & setup</span></Link>
            <Link href="/updates">Updates <span>Patch timeline</span></Link>
            <Link href="/#buy">Stores & Platforms <span>Where to play</span></Link>
            <Link href="/#adult-content">Content Questions <span>Before you buy</span></Link>
            <Link href="/#screenshots">Screenshots <span>Visual field log</span></Link>
          </nav>
        </div>
        <div>
          <strong><small>03</small> Legal & Site</strong>
          <nav aria-label="Legal navigation">
            <Link href="/legal/about-us" rel="noopener noreferrer nofollow">About Us <span>How we work</span></Link>
            <Link href="/legal/contact-us" rel="noopener noreferrer nofollow">Contact Us <span>Corrections & notices</span></Link>
            <Link href="/legal/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</Link>
            <Link href="/legal/copyright" rel="noopener noreferrer nofollow">Copyright</Link>
            <Link href="/sources">Editorial Standards <span>How facts are checked</span></Link>
          </nav>
        </div>
        <div className={styles.note}>
          <div><span>WASH BAY STATUS</span><b><i aria-hidden="true" /> FIELD MANUAL ONLINE</b></div>
          <div><p>Copyright © {year} {siteName}. All rights reserved.</p><p>Independent fan site. Not affiliated with, endorsed by, or operated by Gator Dragon Games or the official Drag&apos;n Wash website.</p></div>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
