// Content for the redesign demo. Copied from the live components so the demo
// shows real copy — no lorem, nothing invented.

import pavMantraShot from './assets/previews/pav-mantra.webp'
import apoorvaShot from './assets/previews/apoorva.webp'
import hangoutShot from './assets/previews/hangout-cafe.webp'
import srimaShot from './assets/previews/srima.webp'
import shriRamRoyalShot from './assets/previews/shri-ram-royal.jpg'
import shibpurShot from './assets/previews/shibpur-school.webp'
import roomlyShot from './assets/previews/roomly.webp'
import stafflyShot from './assets/previews/staffly.webp'
import orderlyShot from './assets/previews/orderly.webp'
import sellSightShot from './assets/previews/commerce-ai.webp'
import eduviaShot from './assets/previews/eduvia.webp'
import medicoreShot from './assets/previews/medicore.webp'

import ankitPhoto from './assets/team/ankit.jpg'
import irfanPhoto from './assets/team/irfan.jpg'
import bhuvaneshPhoto from './assets/team/bhuvanesh.jpg'
import chandanPhoto from './assets/team/chandan.jpg'

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#products', label: 'Products' },
  { href: '#team', label: 'Team' },
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
  { name: 'Stayloop', shot: roomlyShot, url: 'https://aidevstudioone-max.github.io/Roomly/', host: 'Stayloop', desc: 'Hotel room booking & management — real-time availability, instant bookings, occupancy dashboard.' },
  { name: 'Teamloom', shot: stafflyShot, url: 'https://aidevstudioone-max.github.io/Staffly/', host: 'Teamloom', desc: 'Employee management — directory, attendance, and leave requests in one dashboard.' },
  { name: 'Servemint', shot: orderlyShot, url: 'https://aidevstudioone-max.github.io/Orderly/', host: 'Servemint', desc: 'Restaurant point of sale — billing, tables, reservations, and daily reports in one dashboard.' },
  { name: 'SellSight', shot: sellSightShot, url: 'https://aidevstudioone-max.github.io/SellSight/', host: 'SellSight', desc: 'AI-powered product listing tool — generates optimised titles & descriptions and scores every listing.' },
  { name: 'Eduvia', shot: eduviaShot, url: 'https://aidevstudioone-max.github.io/eduvia-school-management/', host: 'eduvia-school-management', desc: 'School management — admissions, attendance, fee collection and transport, always in sync.' },
  { name: 'MediCore', shot: medicoreShot, url: 'https://aidevstudioone-max.github.io/medicore-hospital-management/', host: 'medicore-hospital-management', desc: 'Hospital & clinic management — real-time bed occupancy, unified OPD/IPD workflow, and billing that reconciles itself.' },
]

export const STEPS = [
  { n: '01', title: 'Discovery', body: 'We understand your business, requirements and goals.' },
  { n: '02', title: 'Planning', body: 'We define the solution, features, timeline and cost.' },
  { n: '03', title: 'Design', body: 'We create the user experience and interface.' },
  { n: '04', title: 'Development', body: 'We build and test the solution, with check-ins along the way.' },
  { n: '05', title: 'Launch', body: 'We deploy the final product and make it available to your customers.' },
  { n: '06', title: 'Support', body: 'We keep monitoring, maintaining and reporting — ongoing, not a one-time handoff.' },
]

export const TEAM = [
  { name: 'Ankit Prakash', role: 'Founder', bio: '11 years in operations and data across Yext and Amazon. Builds the dashboards and automation behind the scenes.', photo: ankitPhoto },
  { name: 'Chandan Jha', role: 'Chief Technology Officer', bio: '10+ years building Ruby on Rails platforms across Munich, Stuttgart, and Bengaluru. Leads the build — first line of code to what ships in production.', photo: chandanPhoto },
  { name: 'Bhuvanesh Meethal', role: 'Director – Client Relations', bio: '5 years in finance and healthcare operations with a 98%+ client satisfaction record. Keeps delivery on schedule.', photo: bhuvaneshPhoto },
  { name: 'Irfan Azmi', role: 'Director – Customer Success', bio: '8+ years across Amazon, HSBC, and Foundever. Owns client communication and the numbers behind it.', photo: irfanPhoto },
]

export const CARE_CHECKS = [
  'Uptime and performance monitored continuously',
  'Security updates and backups handled for you',
  'A plain-language report every month',
  'A real person to call, not a ticket into the void',
]

export const PLANS = [
  { name: 'Starter', price: '₹1,999', unit: '/mo care', desc: 'For a single small-business site that needs to stay up and current.', features: ['Website build quoted separately, from ₹35,000', 'Uptime & performance monitoring', 'Security updates & backups', 'Monthly plain-language report'], cta: 'Get a Free Consultation' },
  { name: 'Growth', price: '₹4,999', unit: '/mo care', desc: 'For a business that is actively growing and wants the site to keep pace.', features: ['Everything in Starter', 'Faster turnaround on content edits', 'Quarterly performance review call', 'Priority support'], cta: 'Get a Free Consultation', featured: true },
  { name: 'Scale', price: 'Custom', unit: '', desc: 'For multiple sites, e-commerce, custom applications, or automation layered on top of the site.', features: ['Everything in Growth', 'Custom web apps & dashboards', 'AI & automation add-ons', 'Dedicated point of contact'], cta: "Let's discuss your requirements" },
]

export const FAQS = [
  { q: 'How much does a website cost?', a: 'Website builds start from ₹35,000, depending on the number of pages, functionality and integrations required. Ongoing care plans start from ₹1,999/month. Contact us for a free consultation and an exact quote.' },
  { q: 'How long does a website take?', a: 'Most business websites are completed within a few weeks, depending on requirements and how quickly content and feedback come back to us.' },
  { q: 'Do you provide maintenance?', a: 'Yes. Every project can go under one of our care plans — monitoring, backups, security updates and a monthly report, so nothing goes stale after launch.' },
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
