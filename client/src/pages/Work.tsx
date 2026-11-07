/** Burgundy editorial work archive for roles, responsibilities, and community leadership. */
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import PortfolioLayout, { PageIntro } from "@/components/PortfolioLayout";

type Entry = { title: string; description: string; href?: string; linkLabel?: string };

const work: Entry[] = [
	{ title: "Coach at Major League Hacking", description: "Helped organise and mentor at 15+ international hackathons.", href: "https://mlh.com", linkLabel: "Explore MLH" },
	{ title: "Community Manager at Zostel Kochi", description: "Managed a community of backpackers at Zostel Kochi for two months, handling social media and on-site activities. The Kochi property has been part of the city for 3+ years.", href: "https://zostel.com", linkLabel: "Explore Zostel" },
	{ title: "Tech at Tessat", description: "Helped build the software for Tessat's initial product, a CanSat.", href: "https://tessat.space/", linkLabel: "Visit Tessat" },
	{ title: "Technical Writer and Marketing at Latelogic", description: "Worked on SEO and marketing at a product studio that has launched multiple products.", href: "https://latelogic.com/", linkLabel: "Visit Latelogic" },
	{ title: "My first ever job — ghost writing for Tell Me Why", description: "There is no reason for me to write this here, but it is so beloved to me. I grew up reading these books and ended up writing in the same one. Full circle moments, for real." },
	{ title: "Tech at Sherx", description: "Helped build prototypes for a growing finance management product during its early testing days." },
];

const community: Entry[] = [
	{ title: "Women in Tech Lead at TinkerHub — Computer Science chapter", description: "Led hackathons and out-of-the-box activities like open mics, creating space for women in tech to express themselves." },
	{ title: "Content Head at IRES-SEDS CUSAT", description: "Helped host SpaceUp three years consecutively, and led the team's newsletters and social media content." },
	{ title: "Content, Marketing and Community at Make-A-Ton", description: "Led content and marketing across blogs, Instagram, LinkedIn, and X, and became lead organiser for hosting the hackathon from A to Z across multiple events." },
	{ title: "Community at Code Sakhi", description: "Supported women-in-tech activities and helped create spaces for learning and connection." },
	{ title: "Student Lead at IEDC CUSAT", description: "Led startup-friendly activities and Founder Next Door, a hands-on programme that bridges the gap between actual founders and aspiring ones." },
	{ title: "Curation at TEDx CUSAT", description: "Handled curation and brought people together around the event's ideas and conversations." },
];

function List({ items }: { items: Entry[] }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return <div className="archive-list">{items.map((item, i) => {
		const isOpen = openIndex === i;
		return <div className={`archive-item${isOpen ? " is-open" : ""}`} key={item.title}>
			<button className="archive-row" type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : i)}>
				<span className="archive-index">0{i + 1}</span><span>{item.title}</span><ChevronDown size={16} />
			</button>
			{isOpen && <div className="archive-detail"><p>{item.description}</p>{item.href && <a href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} <ArrowUpRight size={14} /></a>}</div>}
		</div>;
	})}</div>;
}
export default function Work() { return <PortfolioLayout><main className="inner-page"><PageIntro eyebrow="01 / WORK + COMMUNITY" title={<>Things I’ve<br /><span>helped happen.</span></>} description="A growing archive of jobs, teams, and communities that taught me how to make things move." /><section className="archive-section"><div><p className="section-kicker">WORK</p><p className="section-note">The paid, practical, slightly chaotic kind.</p></div><List items={work} /></section><section className="archive-section"><div><p className="section-kicker">COMMUNITY</p><p className="section-note">The people-first, everyone-should-be-in-the-room kind.</p></div><List items={community} /></section></main></PortfolioLayout>; }
