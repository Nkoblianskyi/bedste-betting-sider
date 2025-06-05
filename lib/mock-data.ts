export interface BettingSite {
  id: number
  name: string
  url: string
  bonus: string
  rating: number
  calls: number
  logo: string
  featured?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "ComeOn",
    url: "https://www.comeon.com/da",
    bonus: "100% op til 1.000 kr.",
    rating: 5,
    calls: 32344,
    logo: "/cameon.png",
    featured: true,
  },
  {
    id: 2,
    name: "Betsson",
    url: "https://www.betsson.dk/",
    bonus: "Fodbold Kombi-boost op til 70%",
    rating: 5,
    calls: 28971,
    logo: "/betsson.png",
    featured: true,
  },
  {
    id: 3,
    name: "GetLucky",
    url: "https://www.getlucky.com/da",
    bonus: "Få et 100 kr. FREE BET",
    rating: 4.9,
    calls: 26156,
    logo: "/getlucky.png",
    featured: true,
  },
  {
    id: 4,
    name: "LeoVegas",
    url: "https://www.leovegas.dk/",
    bonus: "Få op til 1.000 kr. i kontanter",
    rating: 4.9,
    calls: 24987,
    logo: "/lasvegas.svg",
  },
  {
    id: 5,
    name: "Expekt",
    url: "https://www.expekt.dk/",
    bonus: "Få 500 kr. live FREE BET",
    rating: 4.8,
    calls: 21654,
    logo: "/expekt.svg",
  },
]

export const getCurrentMonth = () => {
  const months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ]
  return months[new Date().getMonth()]
}

export const getCurrentYear = () => new Date().getFullYear()
