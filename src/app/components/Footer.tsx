import React from "react";

interface Interest {
  label: string;
  img: string;
  description: string;
  url?: string;
  rotate?: number; // small tilt, like the reference image
}

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

const interests: Interest[] = [
  {
    label: "Web Design Museum, 1995–1997",
    img: favicon("webdesignmuseum.org"),
    description: "An archive of screenshots and videos of websites from the early web.",
    url: "https://www.webdesignmuseum.org/web-design-history?timeline=1995-1997",
    rotate: 4,
  },
  {
    label: "Are.na",
    img: favicon("are.na"),
    description: "A calm, ad-free platform for collecting images, links, and ideas into channels.",
    url: "https://www.are.na",
    rotate: -4,
  },
  {
    label: "Neal.fun",
    img: favicon("neal.fun"),
    description: "A homepage full of polished, weird browser experiments and interactive toys.",
    url: "https://neal.fun/",
    rotate: 2,
  },
  {
    label: "Falling Falling",
    img: favicon("fallingfalling.com"),
    description: "A hypnotic, ever-shifting wall of falling color.",
    url: "https://www.fallingfalling.com/",
    rotate: -5,
  },
  {
    label: "Wiby",
    img: favicon("wiby.me"),
    description: "A search engine that only surfaces small, handmade, old-style web pages.",
    url: "https://wiby.me/?q=",
    rotate: 3,
  },
  {
    label: "Yesterweb",
    img: favicon("yesterweb.org"),
    description: "A community built around reviving personal websites and old-web values.",
    url: "https://yesterweb.org/",
    rotate: -4,
  },
  {
    label: "Radiooooo",
    img: favicon("radiooooo.com"),
    description: "Pick a country and a decade on a map, and it plays music from that moment.",
    url: "http://app.radiooooo.com/",
    rotate: 4,
  },
  {
    label: "Webcore",
    img: favicon("aesthetics.fandom.com"),
    description: "The internet aesthetic built from early-2000s UI, pixel graphics, and dial-up nostalgia.",
    url: "https://aesthetics.fandom.com/wiki/Webcore",
    rotate: -2,
  },
  {
    label: "Frutiger Aero",
    img: "https://picsum.photos/seed/frutigeraero/64/64",
    description: "The glossy, optimistic 2000s design style of bubbles, glass, and blue skies.",
    rotate: -2,
  },
  {
    label: "Frutiger Aero Archive",
    img: favicon("frutigeraeroarchive.org"),
    description: "A digital museum of Frutiger Aero wallpapers, music, and software.",
    url: "https://frutigeraeroarchive.org/",
    rotate: 5,
  },
  {
    label: "Old Computers",
    img: favicon("oldcomputers.net"),
    description: "A museum of vintage computers, with photos and specs for each machine.",
    url: "https://oldcomputers.net/",
    rotate: -3,
  },
  {
    label: "Textfiles Directory",
    img: favicon("textfiles.com"),
    description: "A sprawling archive of old text files, BBS documents, and internet ephemera.",
    url: "http://textfiles.com/directory.html",
    rotate: 3,
  },
];

export default function InterestsFlow() {
  return (
    <div className="bg-gray-200 px-10 py-12 font-serif">
      <p className="mx-auto max-w-3xl text-center text-base leading-loose text-neutral-900">
        {interests.map((item, i) => (
          <span key={item.label} className="inline-flex items-center gap-2">
            {item.url ? (
              
              <a  href={item.url}
                target="_blank"
                rel="noreferrer"
                title={item.description}
                className="mr-0.5 text-neutral-900 no-underline border-b border-stone-300"
              >
                {item.label}
              </a>
            ) : (
              <span title={item.description} className="mr-0.5">
                {item.label}
              </span>
            )}
            <img
              src={item.img}
              alt={item.label}
              title={item.description}
              className="h-[26px] w-[26px] rounded object-cover shadow-md"
              style={{ transform: `rotate(${item.rotate ?? 0}deg)` }}
            />
            {i < interests.length - 1 && <span className="mr-2">,</span>}
          </span>
        ))}
      </p>

      <footer className="mt-16 border-t border-neutral-400 px-6 py-8 text-center">
        <p className="text-base italic tracking-wide text-black">
          things i&apos;m into
        </p>
        <p className="mt-1 text-base italic tracking-wide text-black">
          i&apos;m passionate about creative coding and people exploring design and themselves through the internet
        </p>
      </footer>
    </div>
  );
}