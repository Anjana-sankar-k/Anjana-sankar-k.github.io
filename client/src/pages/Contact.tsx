/** Burgundy contact page with a direct, human invitation to collaborate. */
import { ArrowUpRight, Mail } from "lucide-react";
import PortfolioLayout, { PageIntro } from "@/components/PortfolioLayout";
export default function Contact() { return <PortfolioLayout><main className="inner-page contact-page"><PageIntro eyebrow="05 / CONTACT" title={<>Let’s make something<br /><span>worth remembering.</span></>} description="Hit me up with an email if you can think of a good opportunity, collaboration, or project." /><a className="gold-button" href="mailto:hello@example.com"><Mail size={16} /> Send a message</a></main></PortfolioLayout>; }
