// All copy and content for the site, kept out of the components.

import pavMantraShot from './assets/previews/pav-mantra.webp'
import apoorvaShot from './assets/previews/apoorva.webp'
import hangoutShot from './assets/previews/hangout-cafe.webp'
import srimaShot from './assets/previews/srima.webp'
import shriRamRoyalShot from './assets/previews/shri-ram-royal.jpg'
import shibpurShot from './assets/previews/shibpur-school.webp'
import roomlyShot from './assets/previews/roomly.webp'
import stafflyShot from './assets/previews/staffly.webp'
import orderlyShot from './assets/previews/orderly.webp'
import sellSightShot from './assets/previews/sellsight.webp'
import eduviaShot from './assets/previews/eduvia.webp'
import medicoreShot from './assets/previews/medicore.webp'
import portalShot from './assets/previews/portal.webp'

import ankitPhoto from './assets/team/ankit.jpg'
import irfanPhoto from './assets/team/irfan.jpg'
import bhuvaneshPhoto from './assets/team/bhuvanesh.jpg'
import chandanPhoto from './assets/team/chandan.jpg'

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#products', label: 'Products' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export const STATS = [
  { label: 'Team experience', value: '34+', unit: 'yrs' },
  { label: 'Uptime we hold', value: '99.9', unit: '%' },
  { label: 'Live client sites', value: '6', unit: '' },
  { label: 'Products we built', value: '6', unit: '' },
]

export const MARQUEE = ['Websites', 'Web Applications', 'AI Agents', 'Automation', 'Dashboards', 'Care Plans', 'E-commerce', 'MVP Builds']

export const SERVICES = [
  { n: '01', title: 'Website Development', body: 'Business websites, landing pages, corporate sites, portfolios, restaurant sites, e-commerce and full redesigns.', benefit: 'Build a professional online presence that helps customers discover and trust your business.' },
  { n: '02', title: 'Custom Web Applications', body: 'Business dashboards, customer management systems, order management, booking systems, CRMs and custom portals.', benefit: 'We build custom web applications around the way your business actually works.' },
  { n: '03', title: 'AI & Automation', body: 'AI-powered tools, workflow automation, data automation, report generation, AI assistants and repetitive-task automation.', benefit: 'Reduce manual work and automate repetitive business processes with AI and modern automation tools.', accent: true },
  { n: '04', title: 'Data & Business Solutions', body: 'Dashboards, reporting systems, business analytics, data processing and Google Sheets / Excel automation.', benefit: 'Turn your business data into simple dashboards and actionable insights.' },
]

export const AI_CARDS = [
  { tag: '01 / listing-agent', title: 'Listing & content generation', body: 'Feed it a messy product name. Get an optimised title, a description, keyword tags and a quality score you can sort a whole catalogue by.', note: '4 hrs of copywriting becomes 6 minutes' },
  { tag: '02 / extraction-agent', title: 'Document & catalogue extraction', body: 'PDF price lists, scanned invoices, supplier catalogues — pulled into clean structured rows with a confidence score on every field.', note: 'only the uncertain rows reach a human' },
  { tag: '03 / reporting-agent', title: 'Reporting agents', body: 'An agent that reads your sales, traffic and review data weekly and writes the summary your manager would have written — anomalies first.', note: 'a Monday report that writes itself' },
  { tag: '04 / workflow-runner', title: 'Workflow automation', body: 'The connective tissue: form to sheet to WhatsApp to invoice. Triggered, retried, logged. The steps your team currently does by copy-paste at 6pm.', note: 'zero copy-paste, full audit trail' },
]

export const AI_CHECKS = [
  'Confidence score on every extracted field',
  'Low-confidence rows routed to a human review queue',
  'Full run log — input, output, model, cost, duration',
  'A plain-language monthly report, and a real person to call',
]

export const AUDIENCES = [
  { n: '/01', title: 'Small Businesses', body: 'Websites, automation and digital tools to help businesses operate more efficiently.' },
  { n: '/02', title: 'Startups', body: 'MVP development, landing pages and custom applications.' },
  { n: '/03', title: 'Restaurants & Food Businesses', body: 'Websites, ordering systems and business management tools.' },
  { n: '/04', title: 'Professional Services', body: 'Websites, appointment systems and lead-generation solutions.' },
  { n: '/05', title: 'Retail & Local Businesses', body: 'Digital presence, customer management and automation.' },
  { n: '/06', title: 'Growing Businesses', body: 'Custom software and dashboards to streamline operations.' },
]

export const REASONS = [
  { title: 'Business-Focused Solutions', body: 'We don’t just build software. We understand the business problem first and build the solution around it.' },
  { title: 'Custom, Not Template-Based', body: 'Every solution is designed according to your business requirements.' },
  { title: 'Modern Technology', body: 'We use modern web, AI and automation technologies to create scalable solutions.' },
  { title: 'Affordable for Growing Businesses', body: 'Professional digital solutions without the cost of a large agency.' },
  { title: 'Long-Term Support', body: 'We continue supporting your business after the project goes live.' },
]

export const CLIENTS = [
  { name: 'Pav Mantra', shot: pavMantraShot, url: 'https://aidevstudioone-max.github.io/pav-mantra-site/', host: 'pav-mantra-site', desc: 'Food brand site — menu, story, and ordering enquiries in one place.', chips: ['Menu', 'Brand story', 'Enquiries'] },
  { name: 'Apoorva Auto Parts', shot: apoorvaShot, url: 'https://aidevstudioone-max.github.io/apoorva-auto-parts-site/', host: 'apoorva-auto-parts-site', desc: 'Auto parts supplier — catalogue, coverage, and a direct enquiry line.', chips: ['Catalogue', 'Coverage area', 'Enquiries'] },
  { name: 'Hangout Cafe', shot: hangoutShot, url: 'https://aidevstudioone-max.github.io/hangout-cafe/', host: 'hangout-cafe', desc: 'Cafe & restaurant site — menu, location, and veg / non-veg dine-in details.', chips: ['Menu', 'Location', 'Dine-in info'] },
  { name: 'Srima Diagnostic & Medical', shot: srimaShot, url: 'https://aidevstudioone-max.github.io/Srima/', host: 'Srima', desc: 'Diagnostic centre & pharmacy — testing, reports, and prescription counsel.', chips: ['Test listings', 'Reports', 'Pharmacy'] },
  { name: 'Shri Ram Royal Bags & Comforts Zone', shot: shriRamRoyalShot, url: 'https://aidevstudioone-max.github.io/Shri-Ram-Royal/', host: 'Shri-Ram-Royal', desc: 'Gifting & bags retailer — engagement thalis, décor, kids products, and gift hampers.', chips: ['Collections', 'Engagement Thali', 'WhatsApp orders'] },
  { name: 'Shibpur Hindu Girls High School', shot: shibpurShot, url: 'https://aidevstudioone-max.github.io/ShibpurHinduGirlsHighSchool/', host: 'ShibpurHinduGirlsHighSchool', desc: 'School information site — about, school life, facilities, and directions.', chips: ['About', 'School life', 'Directions'] },
]

export const PRODUCTS = [
  { name: 'Stayloop', shot: roomlyShot, url: 'https://aidevstudioone-max.github.io/Stayloop/', host: 'Stayloop', desc: 'Hotel room booking & management — real-time availability, instant bookings, occupancy dashboard.' },
  { name: 'Teamloom', shot: stafflyShot, url: 'https://aidevstudioone-max.github.io/Teamloom/', host: 'Teamloom', desc: 'Employee management — directory, attendance, and leave requests in one dashboard.' },
  { name: 'Servemint', shot: orderlyShot, url: 'https://aidevstudioone-max.github.io/Servemint/', host: 'Servemint', desc: 'Restaurant point of sale — billing, tables, reservations, and daily reports in one dashboard.' },
  { name: 'SellSight', shot: sellSightShot, url: 'https://aidevstudioone-max.github.io/SellSight/', host: 'SellSight', desc: 'AI-powered product listing tool — generates optimised titles & descriptions and scores every listing.' },
  { name: 'Eduvia', shot: eduviaShot, url: 'https://aidevstudioone-max.github.io/eduvia-school-management/', host: 'eduvia-school-management', desc: 'School management — admissions, attendance, fee collection and transport, always in sync.' },
  { name: 'MediCore', shot: medicoreShot, url: 'https://aidevstudioone-max.github.io/medicore-hospital-management/', host: 'medicore-hospital-management', desc: 'Hospital & clinic management — real-time bed occupancy, unified OPD/IPD workflow, and billing that reconciles itself.' },
]

export const PORTAL = {
  url: 'https://aidevstudioone-max.github.io/Project-Management-Suite/',
  shot: portalShot,
  host: 'Project-Management-Suite',
  // What a shop owner can change without asking anyone
  editable: ['Text', 'Photos', 'Prices', 'Offers', 'Opening hours'],
  points: [
    'Change your text and swap your photos in a few clicks — a new menu, a new offer, a new price.',
    'Works on your phone, so you can update something while the shop is open.',
    'You look after the content. We look after everything underneath it.',
    'Would rather we did it? Raise a request and we pick it up.',
  ],
  note: 'Demo logins are on the sign-in screen — have a click around before you commit to anything.',
}

// Left-hand link grid in the footer.
// `external` links open in a new tab; the rest are in-page anchors.
// NOTE: "Know Our Team" is hidden for now — the /team and /about pages still
// exist and build, they just aren't linked from the site. To re-enable, add
// back: { label: 'Know Our Team', href: '/team.html', external: true }
export const FOOTER_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
  { label: 'Client Portal', href: PORTAL.url, external: true },
]


export const STEPS = [
  { n: '01', title: 'Discovery', body: 'We understand your business, requirements and goals.' },
  { n: '02', title: 'Planning', body: 'We define the solution, features, timeline and cost.' },
  { n: '03', title: 'Design', body: 'We create the user experience and interface.' },
  { n: '04', title: 'Development', body: 'We build and test the solution, with check-ins along the way.' },
  { n: '05', title: 'Launch', body: 'We deploy the final product and make it available to your customers.' },
  { n: '06', title: 'Support', body: 'We keep monitoring, maintaining and reporting — ongoing, not a one-time handoff.' },
]

// TEAM powers the standalone /team.html page and the per-person /about.html?m=<id> pages.
// `bio` is the one-liner on the team card; `about` is the first-person career-journey
// narrative shown on the About Me page, one string per paragraph.
export const TEAM = [
  {
    id: 'ankit-prakash',
    name: 'Ankit Prakash',
    role: 'Founder',
    photo: ankitPhoto,
    location: 'Hyderabad, India',
    bio: 'Nearly 11 years in operations and data across Yext and Amazon. Builds the dashboards and automation behind the scenes.',
    about: [
      "I've always been fascinated by the idea of turning complicated problems into simple, practical solutions. Over the last 11 years, I've had the opportunity to work across data analytics, operations, process optimization, automation, and technology with organizations such as Amazon and Yext.",
      "My career has taught me that data is much more than numbers on a screen. When used correctly, it can tell a story, uncover a problem, improve a process, and help people make better decisions. This belief has driven me to work on everything from KPI dashboards and large datasets to AI-powered productivity tools and workflow automation.",
      "Over time, I wanted to take everything I had learned and use it to build something of my own. That journey eventually led me to becoming a Founder. Today, I enjoy bringing together technology, business ideas, creativity, and problem-solving to build solutions that are genuinely useful.",
      "Outside of work, I'm a big fan of cricket, movies, and music. I enjoy composing music whenever inspiration strikes, exploring new technologies, experimenting with new ideas, and sometimes spending an entire weekend working on a random idea that I simply couldn't stop thinking about.",
      "For me, creativity doesn't really have an off switch — it just takes different forms.",
    ],
  },
  {
    id: 'chandan-jha',
    name: 'Chandan Jha',
    role: 'Chief Technology Officer',
    photo: chandanPhoto,
    location: 'Howrah, India',
    bio: '10+ years building scalable SaaS platforms in Ruby on Rails, Postgres and React. Leads the build — first line of code to what ships in production.',
    about: [
      "I've spent more than a decade building software, solving technical problems, and learning how to turn ideas into products that can scale. My journey in technology began with software development and gradually evolved into full-stack engineering, SaaS platforms, system optimization, microservices, and most recently, machine learning and AI.",
      "Over the years, I've worked on everything from building applications from scratch to improving the performance and reliability of large-scale systems. I've optimized databases and APIs, built microservices, worked with React and Ruby on Rails, introduced better testing practices, and developed ML-powered recommendation systems and customer-facing AI solutions.",
      "What I enjoy most about engineering is solving problems that initially look complicated. Whether it is improving system performance, designing a better architecture, eliminating a bottleneck, or helping another developer understand a difficult concept, I enjoy finding a solution that is both effective and simple.",
      "As CTO, I get to bring that mindset into everything we build. I believe great technology should not exist just for the sake of technology — it should solve real problems and create a better experience for the people using it.",
      "Outside technology, I enjoy exploring new developments in AI, learning about emerging technologies, watching movies, travelling, and spending time with friends and family.",
      "I'm naturally curious, so there is a good chance that even a casual conversation about a new idea can eventually turn into a technical discussion.",
    ],
  },
  {
    id: 'bhuvanesh-meethal',
    name: 'Bhuvanesh Meethal',
    role: 'Director – Client Relations',
    photo: bhuvaneshPhoto,
    location: 'Hyderabad, India',
    bio: '5 years in customer success and operations across finance and healthcare, holding a 98%+ CSAT while handling 300+ portfolios a month.',
    about: [
      "Throughout my career, I've learned that successful business relationships are built on one simple thing: trust.",
      "I've had the opportunity to work across healthcare, finance, operations, and customer success, which has given me a broad understanding of both business processes and the people behind them. Over the years, I've managed hundreds of client portfolios, handled a high volume of customer requests, and consistently focused on delivering a strong customer experience.",
      "What I enjoy most about my work is understanding what a client actually needs. Sometimes the problem a client describes is not the real problem. I like asking the right questions, understanding the situation, finding the root cause, and making sure the solution actually works.",
      "My experience in stakeholder management, quality control, process improvement, team leadership, and client advocacy has shaped the way I approach my role as Director – Client Relations. I believe a successful client relationship is not simply about completing a task or making a sale. It is about becoming someone the client knows they can depend on.",
      "Outside work, I enjoy travelling, discovering new places and trying different food. I also enjoy watching sports, listening to music, learning about personal finance, and spending quality time with family and friends.",
      "I believe that whether it is a client relationship or a personal relationship, the little things — listening, understanding, and being dependable — make the biggest difference.",
    ],
  },
  {
    id: 'irfan-azmi',
    name: 'Irfan Azmi',
    role: 'Director – Customer Success',
    photo: irfanPhoto,
    location: 'Kolkata, India',
    bio: '8+ years in customer success and insights across Amazon, HSBC, Foundever and Gradient Cyber. Owns client communication and the numbers behind it.',
    about: [
      "I've always been interested in the space where people, data, and business decisions come together.",
      "Over the last eight years, I've had the opportunity to work with organizations including Amazon, HSBC, Foundever, and Gradient Cyber, with my career evolving across customer service, customer success, data analysis, quality, reporting, and stakeholder management.",
      "One thing I've learned throughout this journey is that data becomes truly valuable when it helps someone make a better decision. That is why I enjoy analysing information, identifying trends, understanding customer behaviour, and turning complex data into insights that people can actually use.",
      "I've worked on KPI reporting, business reviews, dashboards, conversation analytics, project documentation, and AI-powered analytics solutions. These experiences have taught me to look at problems from both sides — the numbers behind the problem and the people experiencing it.",
      "As Director – Customer Success, I want to bring that same approach to every client relationship. For me, customer success isn't simply about solving a problem when it appears. It is about understanding expectations, communicating clearly, identifying opportunities to improve, and building relationships that last.",
      "Outside work, I enjoy travelling, watching movies and football, listening to music, exploring new technology, and spending time with friends and family. I also enjoy conversations about business, people, and the endless possibilities that technology can create.",
      "I believe the best solutions happen when we stop looking at customers as numbers and start understanding the people behind those numbers.",
    ],
  },
]

export const CARE_CHECKS = [
  'Uptime and performance monitored continuously',
  'Security updates and backups handled for you',
  'A plain-language report every month',
  'A real person to call, not a ticket into the void',
]

export const PLANS = [
  {
    name: 'Basic',
    price: '₹4,999',
    unit: 'one-time',
    desc: 'For a local business that needs to be found, called and trusted.',
    features: [
      'Single-page site, mobile first',
      'WhatsApp and click-to-call buttons',
      'Enquiry form straight to your inbox',
      'Free SSL and first year of hosting',
      'Google Business Profile set up',
    ],
    cta: 'Get a Free Consultation',
  },
  {
    name: 'Starter',
    price: '₹9,999',
    unit: 'one-time',
    desc: 'For small local businesses and professional portfolios.',
    features: [
      '5 to 7 pages — home, about, services, gallery, contact',
      'Responsive, minimalist design',
      'Basic on-page SEO setup',
      'Free SSL and first year of hosting',
      'Access to the support and tracking portal',
    ],
    cta: 'Get a Free Consultation',
  },
  {
    name: 'Professional',
    price: '₹18,999',
    unit: 'one-time',
    desc: 'For growing agencies, SMEs and first-time e-commerce.',
    features: [
      'Up to 15 dynamic pages',
      'Content management system with admin panel',
      'E-commerce for up to 30 products',
      'WhatsApp, social and payment gateway setup',
      'Track progress live in the operations portal',
    ],
    cta: 'Get a Free Consultation',
    featured: true,
  },
  {
    name: 'Premium',
    price: '₹25,000+',
    unit: 'custom quote',
    desc: 'For established brands needing unique UX and complex architecture.',
    features: [
      '20+ pages or unlimited dynamic categories',
      'Custom build — no themes, no page builders',
      'Advanced interactive and 3D components',
      'Advanced SEO and performance work',
      'Priority lifecycle management, dedicated contact',
    ],
    cta: "Let's discuss your requirements",
  },
]

export const FAQS = [
  { q: 'How much does a website cost?', a: 'A single-page site starts at ₹4,999, a 5–7 page site at ₹9,999, and a CMS build with e-commerce at ₹18,999. Larger or custom projects are quoted from ₹25,000. All prices exclude 18% GST — contact us for an exact quote.' },
  { q: 'How long does a website take?', a: 'Most business websites are completed within a few weeks, depending on requirements and how quickly content and feedback come back to us.' },
  { q: 'Do you provide maintenance?', a: 'Yes. Every build includes free SSL and the first year of hosting, and you get access to our support portal to raise queries and follow the work. Ongoing maintenance is arranged to suit the project after launch.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We can redesign existing websites and improve their performance, usability and appearance without starting from zero.' },
  { q: 'Do you build custom software?', a: 'Yes. Beyond websites, we build custom web applications, dashboards, AI tools and business automation — see our Custom Web Applications and AI & Automation services above.' },
]

export const BUSINESS_TYPES = ['Restaurant', 'Retail', 'Professional Services', 'Startup', 'Real Estate', 'Other']
export const NEEDS = ['Website', 'Web Application', 'AI Solution', 'Automation', 'Dashboard', 'Other']

export const CONTACT = {
  email: 'hello@thikaana.co',
  phone: '+919022683699',
  whatsapp: '919022683699',
}

// Social icons in the footer. A row entry with no `href` renders as a
// greyed-out "coming soon" icon — fill in the Facebook URL to activate it.
export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thikaana-support-1b8685430' },
  { label: 'Instagram', href: 'https://www.instagram.com/thikaana.co' },
  { label: 'Facebook', href: '' },
]
