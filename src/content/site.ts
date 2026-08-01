/**
 * Single content source for the site.
 * Every page reads its copy from here, so this file is the editable layer
 * that a CMS backend can later write into without touching page markup.
 */

import foundersAsset from "@/assets/founders.jpg.asset.json";
import goryAsset from "@/assets/gory-retreat.jpg.asset.json";
import jamfruitAsset from "@/assets/jamfruit.jpg.asset.json";
import logoAsset from "@/assets/catde-logo.png.asset.json";
import markAsset from "@/assets/catde-mark.png.asset.json";

export const brand = {
  name: "The Chris & Tanya Devonshire-Ellis Development Foundation",
  shortName: "CATDE Foundation",
  domain: "CATDEFoundation.org",
  email: "info@catdefoundation.com",
  logo: logoAsset.url,
  mark: markAsset.url,
};

export const images = {
  founders: foundersAsset.url,
  gory: goryAsset.url,
  jamfruit: jamfruitAsset.url,
};

export const nav = [
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export const home = {
  eyebrow: "Founded June 2026",
  titleLines: ["Art that", "gives back"],
  standfirst:
    "The Chris & Tanya Devonshire-Ellis Foundation supports initiatives in the arts world on an international basis — funding worthwhile artistic projects that also deliver a societal benefit.",
  founderCaption: "Chris & Tanya Devonshire-Ellis, Founders",
  marquee: [
    "Nizhny Novgorod",
    "Colombo",
    "Nuwara Eliya",
    "St. Petersburg",
    "Belgrade",
    "Shanghai",
    "France",
  ],
};

export const about = {
  title: "About Us",
  body: [
    "The Chris & Tanya Devonshire-Ellis Foundation supports initiatives in the arts world on an international basis. Founded by Chris and Tanya Devonshire-Ellis in June 2026, it provides funding to worthwhile artistic projects that also provide a societal benefit.",
    "Chris and Tanya personally oversee projects, approve them and attend the end results. Projects currently approved include a literary cafe and events venue in Colombo, Sri Lanka, school literature donations and funding in Nuwara Eliya, the restoration of a Hindu Temple in Nuwara Eliya, the development of a 20 room artistic retreat in Nizhny Novgorod, an opera in St. Petersburg, the staging of a liturgy in Belgrade, student summer camp horse riding in Shanghai, and student University education fees in France. Others in the pipeline include a ballet school in Sri Lanka amongst others.",
  ],
  founderLink: {
    label: "Chris Devonshire-Ellis",
    href: "https://www.linkedin.com/in/chrisdevonshireellis/",
    prefix: "For more about Chris Devonshire-Ellis",
  },
  commitments: [
    {
      title: "Personally overseen",
      body: "Chris and Tanya approve each project, follow its progress and attend the end results in person.",
    },
    {
      title: "Artistic merit first",
      body: "Funding follows artistic ambition — literature, opera, liturgy, ballet, craft and restoration.",
    },
    {
      title: "Societal benefit",
      body: "Every supported project must return something lasting to the community around it.",
    },
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  status: string;
  body: string;
};

export const projects: Project[] = [
  {
    slug: "gory-artistic-retreat",
    title: "The Gory Artistic Retreat",
    location: "Nizhny Novgorod, Russia",
    image: images.gory,
    imageAlt:
      "Stone manor house under timber scaffolding during restoration at the Gory Artistic Retreat",
    status: "Opening mid-2027",
    body: "This substantial project has involved the acquisition of numerous buildings in a remote area of Russia equidistant between Moscow and St. Petersburg and is designed to allow Russian and other artists access to retreat and creative facilities denied them due to EU border restrictions. Numerous buildings are being restored and upgraded for visitor accommodation and use, with the main Manor House to provide a communal space and workshop as well as a recording studio. The facility is expected to open in mid-2027.",
  },
  {
    slug: "jam-fruit-tree-literary-house",
    title: "The Jam Fruit Tree Literary House",
    location: "Nugegoda, Sri Lanka",
    image: images.jamfruit,
    imageAlt:
      "Interior of the Jam Fruit Tree Literary House with lit timber bookshelves and open garden doors",
    status: "Opening September 2026",
    body: "Jam Fruit Publications are Sri Lanka's primary publisher of local literary talent and needed a new location to expand their business as well as offer literary events and assistance to local writers, artists and musicians. Their new facility will open in September 2026.",
  },
];

export const pipeline = [
  "Literary cafe and events venue — Colombo, Sri Lanka",
  "School literature donations and funding — Nuwara Eliya",
  "Restoration of a Hindu Temple — Nuwara Eliya",
  "An opera — St. Petersburg",
  "Staging of a liturgy — Belgrade",
  "Student summer camp horse riding — Shanghai",
  "Student University education fees — France",
  "A ballet school — Sri Lanka",
];

export const contact = {
  title: "Contact",
  intro: "To contact us please email:",
  email: brand.email,
  note: "We review every proposal personally. Please include a short description of the project, its location, its artistic aim and the societal benefit it delivers.",
};
