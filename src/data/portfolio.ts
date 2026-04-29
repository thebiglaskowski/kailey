import type { ImageMetadata } from 'astro';
import dmdInstagram from '../assets/dmd-instagram.png';
import dmdCampaign from '../assets/dmd-campaign.jpg';
import personalInfographic from '../assets/personal-infographic.png';
import benniBuzzLogo from '../assets/benni-buzz-logo.png';
import plumbingSpring from '../assets/plumbing-spring-special.jpg';
import plumbingWaterHeater from '../assets/plumbing-water-heater.jpg';

export interface PortfolioItem {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: ImageMetadata;
  images?: ImageMetadata[];
  imageAlt: string;
  results?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  pullQuote?: string;
  featured?: {
    shortTitle: string;
    tag: string;
    fit?: 'cover' | 'contain';
  };
}

export const portfolio: PortfolioItem[] = [
  {
    slug: 'delta-mu-delta',
    title: 'Delta Mu Delta — Brand Identity & Recruitment Campaign',
    subtitle: 'Social Media Manager, Nu Gamma Chapter · Ferris State University',
    description:
      'As founding Social Media Manager for the Nu Gamma chapter of the Delta Mu Delta International Honor Society in Business, I built a cohesive brand identity from the ground up — bridging the gap between a national academic organization and the Ferris State student body. I led a multi-channel approach combining a refreshed digital presence with traditional outreach, including a targeted advertisement designed for the business school newspaper.',
    images: [dmdInstagram, dmdCampaign],
    imageAlt: 'Delta Mu Delta Instagram graphic and newspaper advertisement',
    results: [
      '40% increase in social media engagement',
      '13 new chapter members recruited from a single newspaper campaign',
      "Established the chapter's visual identity and tone of voice across platforms",
    ],
    ctaLabel: 'Download Full Campaign (PDF)',
    ctaHref: '/delta-mu-delta.pdf',
    featured: { shortTitle: 'Delta Mu Delta', tag: 'Brand Identity & Recruitment' },
  },
  {
    slug: 'ben-jerrys',
    title: "Ben & Jerry's — Strategic Profile Analysis",
    subtitle: 'MGMT 488 · Strategic Analysis Project · October 2025',
    description:
      "A four-phase strategic profile of Ben & Jerry's Homemade Holdings Inc. examining the company's competitive position, operational challenges, financial performance under Unilever, and the ethical tension surrounding the planned 2025 demerger. The report culminates in an original innovation proposal — the Social Mission Funded Flavor program — designed to resolve the conflict between brand autonomy, supply chain complexity, and shareholder pressure.",
    imageAlt: "Ben & Jerry's strategic analysis",
    ctaLabel: 'Download Full Case Study (PDF)',
    ctaHref: '/ben-jerrys-strategic-analysis.pdf',
    pullQuote:
      "The long-term success of Ben & Jerry's depends on their ability to transform their operational weaknesses into strategic assets to highlight their differentiation so they can flourish in the post-demerger market.",
  },
  {
    slug: 'personal-brand',
    title: 'Personal Brand Infographic',
    subtitle: 'Self-directed · 2025',
    description:
      'A visual representation of what it actually looks like to be a Class of 2026 BBA student, mother of four, wife, and Honors Society member. Created to communicate personal brand and time-management philosophy in a single glance.',
    image: personalInfographic,
    imageAlt: 'Class of 2026 personal brand infographic',
    featured: { shortTitle: 'Personal Brand', tag: 'Infographic Design' },
  },
  {
    slug: 'benni-buzz',
    title: 'Benni Buzz — Logo Design',
    subtitle: 'Brand identity work · Logo',
    description:
      'Custom logo design featuring hand-styled retro typography, a bold lavender base, and citrus illustration — built to feel playful, fresh, and instantly recognizable.',
    image: benniBuzzLogo,
    imageAlt: 'Benni Buzz logo design',
    featured: { shortTitle: 'Benni Buzz', tag: 'Logo Design', fit: 'contain' },
  },
  {
    slug: 'a-plus-plumbing',
    title: 'A+ Plumbing, Heating & Cooling — Promotional Campaigns',
    subtitle: 'M&V Pro Services · 2023',
    description:
      'A series of seasonal promotional graphics designed for Facebook and Instagram, supporting limited-time service offers. Part of a broader social media management role overseeing all digital marketing for a small local corporation.',
    images: [plumbingSpring, plumbingWaterHeater],
    imageAlt: 'A+ Plumbing promotional campaigns',
  },
  {
    slug: 'asscher-roofing',
    title: 'Asscher Roofing — SEO Blog Library',
    subtitle: 'M&V Pro Services · 2022–2023',
    description:
      "Authored the full blog library for Asscher Roofing as part of broader SEO strategy work for the parent corporation. Topics range from roofing maintenance and storm damage to seasonal homeowner guides — written to rank, written to convert, and written in the brand's voice.",
    imageAlt: 'Asscher Roofing blog library',
    ctaLabel: 'View Blog Library',
    ctaHref: 'https://www.asscherroofing.com/our-blog',
  },
];

export const featuredPortfolio = portfolio.filter(p => p.featured);
