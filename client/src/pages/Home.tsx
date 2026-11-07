/**
 * Minimal punk-rock homepage: blunt identity, raw signal details, and no decorative portrait bay.
 */
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import PortfolioLayout from "@/components/PortfolioLayout";

export default function Home() {
  return <PortfolioLayout>
    <main className="home-page">
      <section className="home-hero home-hero--solo">
        <div className="home-copy">
          <p className="editorial-eyebrow"><span className="eyebrow-dot" /> Personal site / Anjana Sankar</p>
          <div className="home-title-meta"><span>01</span><span></span></div>
          <h1>Hi, I am<br /><span>Anjana Sankar.</span></h1>
          <p className="home-tagline">A developer who loves marketing and coffee.<br /><em>In that order. Probably.</em></p>
          <div className="home-actions"><Link href="/projects" className="gold-button">Explore the work <ArrowUpRight size={16} /></Link><Link href="/about" className="quiet-link">A little more about me <ArrowDownRight size={15} /></Link></div>
        </div>
        <div className="home-signal-block"><span className="signal-slash"></span><p>Building useful things.<br />Making people care.<br />Learning in public.</p><span className="signal-tag">CURIOUS / RESTLESS / OPEN</span></div>
      </section>
      <section className="home-lower">
        <div className="home-lower-label"><Sparkles size={15} /> Current interests</div>
        <p>Multidisciplinary research, NLP, AI, a lot of experimentation, and the kind of community-building that makes a good idea feel possible.</p>
        <div className="home-links"><Link href="/work">Work & community <ArrowUpRight size={15} /></Link><Link href="/sidequests">Sidequests <ArrowUpRight size={15} /></Link><Link href="/contact">Have a good opportunity? <ArrowUpRight size={15} /></Link></div>
      </section>
    </main>
  </PortfolioLayout>;
}
