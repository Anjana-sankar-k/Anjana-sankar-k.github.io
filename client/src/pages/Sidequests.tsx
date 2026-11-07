/** Burgundy editorial sidequest board for the interests that make the portfolio human. */
import { ArrowUpRight } from "lucide-react";
import PortfolioLayout, { PageIntro } from "@/components/PortfolioLayout";
const quests = [
	["Writing", "Connect Medium", "https://medium.com/@anjanasankar50"],
	["Reading", "A curated list of books", "https://sturdy-tarn-d7e.notion.site/Anjana-s-curated-list-of-book-recs-3fccb1b52b6980748198f82ce25f69f4?pvs=73"],
	["Hosting", "Hosted multiple events as an active community builder."],
	["Being a polyglot", "Obsessed with learning languages. I can survive French, Chinese, and Korean."],
	["Travel", "Community management at a hostel will do this to you, and soon enough you'll be going to new places."],
	["Tarot", "Picked it up as a random hobby, then ended up reading for way too many people."],
	["Dancing", "Been dancing ever since I can remember; trained in Bharatanatyam + Mohiniyattam."],
];
export default function Sidequests() { return <PortfolioLayout><main className="inner-page"><PageIntro eyebrow="03 / SIDEQUESTS" title={<>The things I do<br /><span>just because.</span></>} description="Not every useful skill needs to fit neatly into a job title. These are the little worlds I keep returning to." /><div className="quest-grid">{quests.map(([title, note, href], i) => <article className="quest-card" key={title}><span className="quest-number">0{i + 1}</span>{href ? <a href={href} target="_blank" rel="noreferrer"><h2>{title}</h2><p>{note}</p><ArrowUpRight size={17} /></a> : <><h2>{title}</h2><p>{note}</p><ArrowUpRight size={17} /></>}</article>)}</div></main></PortfolioLayout>; }
