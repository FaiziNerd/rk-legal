/**
 * Blog content.
 *
 * This is sample data that mirrors the Figma "Blog" and "Blog Post" designs so
 * the pages are fully built. When Contentful credentials are available, replace
 * this module with a Contentful fetch that returns the same shape (see the
 * `Post` type) — the page components won't need to change.
 */

export const categories = [
  "Personal injury",
  "Lemon law",
  "Workers' comp",
  "Firm news",
] as const;

export type Category = (typeof categories)[number];

/** A block of article body content — a tiny rich-text model. */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ol"; items: { lead?: string; text: string }[] }
  | { t: "ul"; items: string[] }
  | { t: "callout"; title: string; text: string }
  | { t: "cta"; title: string; text: string };

export type Post = {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string; // display date, e.g. "September 18, 2026"
  readTime: string; // e.g. "7 min read"
  image: string; // path under /public
  featured?: boolean;
  deck?: string; // longer standfirst on the post page
  body?: Block[];
};

export const posts: Post[] = [
  {
    slug: "first-24-hours-after-a-car-accident",
    category: "Personal injury",
    title: "What to do in the first 24 hours after a car accident in California",
    excerpt:
      "See a doctor, take photos, and hold off on a recorded statement to the other driver's insurer. Here is a simple checklist for the first day, and why each step protects your claim.",
    date: "September 18, 2026",
    readTime: "7 min read",
    image: "/images/blog-24-hours.jpg",
    featured: true,
    deck: "A calm checklist for the day of a crash: what to do at the scene, why to see a doctor the same day, and how to handle the first call from an insurance company.",
    body: [
      {
        t: "p",
        text: "The first day after a crash is confusing. You may be sore, your car may not start, and the other driver's insurance company may already be calling. What you do in these first 24 hours can protect your health and your claim. Here is a plain checklist you can follow, even from your phone.",
      },
      { t: "h2", text: "First, make sure everyone is safe" },
      {
        t: "p",
        text: "If you can, move out of traffic to the shoulder or a nearby parking lot and turn on your hazard lights. Call 911 if anyone is hurt. California law requires you to stop at the scene of any crash that involves an injury or damage to property. Stay calm and don't argue about who caused it. Police and insurers will look at fault later.",
      },
      { t: "h2", text: "What to do at the scene" },
      {
        t: "ol",
        items: [
          {
            lead: "Call the police.",
            text: "A police report gives you an independent record of what happened. If officers don't come out, write down the time you called and the location.",
          },
          {
            lead: "Swap information with the other driver.",
            text: "Get their name, phone number, driver's license number, license plate, insurance company and policy number.",
          },
          {
            lead: "Take photos.",
            text: "Photograph both cars, the road, traffic signals, skid marks and any cuts or bruises. Wide shots help as much as close-ups.",
          },
          {
            lead: "Get witness names and numbers.",
            text: "People leave quickly, and an independent witness can make a real difference later.",
          },
          {
            lead: "Say as little as possible about fault.",
            text: "Being polite is fine, but a simple “I'm sorry” can be read as admitting blame.",
          },
        ],
      },
      { t: "h2", text: "Get checked by a doctor the same day" },
      {
        t: "p",
        text: "Adrenaline can hide pain for hours. Whiplash, concussions and back injuries often show up the next morning. Go to urgent care, the emergency room or your own doctor within 24 hours, and tell them you were in a car accident. A same-day visit protects your health, and it creates a medical record that connects your injuries to the crash. Waiting gives the insurance company room to argue you were hurt somewhere else.",
      },
      { t: "h2", text: "Keep a simple record" },
      {
        t: "p",
        text: "Start a folder or a note on your phone today. It takes a few minutes a day and saves a lot of stress later. Keep track of:",
      },
      {
        t: "ul",
        items: [
          "The claim number and the name of every adjuster who calls you",
          "Receipts for towing, a rental car, prescriptions and co-pays",
          "Days you miss from work and the pay you lose",
          "A few lines each day about your pain, your sleep and what you can't do",
          "Every letter, email and text from any insurance company",
        ],
      },
      {
        t: "callout",
        title: "Talk to someone before you give a recorded statement",
        text: "The other driver's insurance company may call within a day and ask to record your side of the story. You aren't required to give them one, and what you say can be used to pay you less. Call us first. It's free, and there's no pressure to sign anything.",
      },
      { t: "h2", text: "Report the crash to the right places" },
      {
        t: "p",
        text: "Tell your own insurance company about the crash soon, and stick to the basic facts. In California you also have to report the crash to the DMV on an SR-1 form within 10 days if anyone was hurt or killed, or if property damage is over $1,000. This is separate from any police report, and it's your job to file it.",
      },
      { t: "h2", text: "Don't sign or settle too soon" },
      {
        t: "p",
        text: "Early offers often arrive before you know how badly you're hurt or how long treatment will take. Once you sign a release, you usually can't ask for more later. In California you generally have two years from the accident to file an injury lawsuit, and some deadlines are much shorter, such as six months to file a claim against a city, county or state agency. Getting advice early keeps your options open.",
      },
      {
        t: "cta",
        title: "Hurt in a crash? Ask us first.",
        text: "Tell us what happened and we'll call you back. No win, no fee.",
      },
    ],
  },
  {
    slug: "is-my-car-a-lemon-30-day-rule",
    category: "Lemon law",
    title: "Is my car a lemon? The 30-day rule explained",
    excerpt:
      "If your new car spent more than 30 days in the shop in its first 18 months, the law may presume it is a lemon.",
    date: "September 15, 2026",
    readTime: "6 min read",
    image: "/images/blog-30-day.jpg",
  },
  {
    slug: "workers-comp-claim-denied-what-happens-next",
    category: "Workers' comp",
    title: "Workers' comp claim denied? Here is what happens next",
    excerpt:
      "A denial letter is not the final word. Here is how objections, medical exams and hearings work.",
    date: "September 9, 2026",
    readTime: "5 min read",
    image: "/images/blog-wc-denied.jpg",
  },
  {
    slug: "dog-bite-injuries-california-strict-liability",
    category: "Personal injury",
    title: "Dog bite injuries in California: strict liability in plain English",
    excerpt:
      "California holds dog owners responsible for most bites, even if the dog never bit anyone before.",
    date: "September 3, 2026",
    readTime: "4 min read",
    image: "/images/blog-dog-bite.jpg",
  },
  {
    slug: "uber-accident-whose-insurance-pays",
    category: "Personal injury",
    title: "Uber accident: whose insurance pays?",
    excerpt:
      "Hurt as a passenger or hit by a rideshare driver? Several policies may apply. Here is which one pays.",
    date: "August 20, 2026",
    readTime: "5 min read",
    image: "/images/blog-uber.jpg",
  },
  {
    slug: "used-car-lemon-law-when-a-used-car-qualifies",
    category: "Lemon law",
    title: "Used car lemon law: when a used car qualifies",
    excerpt:
      "Some used cars are covered too, when they came with a dealer or manufacturer warranty. Here is how to check.",
    date: "August 6, 2026",
    readTime: "6 min read",
    image: "/images/blog-used-car.jpg",
  },
  {
    slug: "help-with-your-case-in-armenian",
    category: "Firm news",
    title: "Help with your case in Armenian: what to expect when you call",
    excerpt:
      "Our staff speak Armenian and English. Here is what happens on the first call, and what to have ready.",
    date: "June 24, 2026",
    readTime: "3 min read",
    image: "/images/blog-armenian.jpg",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Other posts to show under an article, newest first, excluding the current one. */
export function getRelated(slug: string, limit = 5): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}
