import Image from "next/image";

const partnersData = [
    {id: 1, img: "/assets/partners/partnerlogo-1.png", title: "Partner-1", description: "partner"},
    {id: 2, img: "/assets/partners/partnerlogo-2.png", title: "Partner-2", description: "partner"},
    {id: 3, img: "/assets/partners/partnerlogo-3.png", title: "Partner-3", description: "partner"},
    {id: 4, img: "/assets/partners/partnerlogo-4.png", title: "Partner-4", description: "partner"},
    {id: 5, img: "/assets/partners/partnerlogo-5.png", title: "Partner-5", description: "partner"},
    {id: 6, img: "/assets/partners/partnerlogo-6.png", title: "Partner-6", description: "partner"},
    {id: 7, img: "/assets/partners/partnerlogo-7.png", title: "Partner-7", description: "partner"},
    {id: 8, img: "/assets/partners/partnerlogo-8.png", title: "Partner-8", description: "partner"},
    {id: 9, img: "/assets/partners/partnerlogo-9.png", title: "Partner-9", description: "partner"},
    {id: 10, img: "/assets/partners/partnerlogo-10.png", title: "Partner-10", description: "partner"},
    {id: 11, img: "/assets/partners/partnerlogo-11.png", title: "Partner-11", description: "partner"},
    {id: 12, img: "/assets/partners/partnerlogo-12.png", title: "Partner-12", description: "partner"},
];

const offerData = [
  {id: 1, img: "/assets/offerCards/branding.png", title: "Branding", description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"},
  {id: 2, img: "/assets/offerCards/development.png", title: "Web Development", description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus"},
  {id: 3, img: "/assets/offerCards/marketing.png", title: "Digital Marketing", description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."},
  {id: 4, img: "/assets/offerCards/mobile.png", title: "Mobile App", description: "Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"},
  {id: 5, img: "/assets/offerCards/seo.png", title: "SEO", description: "Integer ante non nunc, eget est justo vel semper nunc. Lacus"},
  {id: 6, img: "/assets/offerCards/user.png", title: "User testing", description: "Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."},
]


export function getPartnersData() {
    return partnersData.slice(0, 6);
  }

export function getPartnersDataSecond() {
    return partnersData.slice(6, 12);
  }

export function getOfferData() {
    return offerData;
  }