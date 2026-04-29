
import { FAQItem, PricingPlan } from './types';

export const FAQS: FAQItem[] = [
  {
    question: "Wie schnell erhalte ich meinen Zugang?",
    answer: "Direkt nach der Zahlung erhältst du innerhalb von 5 Minuten deine Zugangsdaten per WhatsApp. Die Einrichtung dauert nochmals 5 Minuten. Du kannst innerhalb von 10 Minuten loslegen."
  },
  {
    question: "Wie funktioniert das Onboarding?",
    answer: "Abonniere ein Paket und wir senden dir sofort deine Zugangsdaten per WhatsApp. Dieser Vorgang dauert etwa 5 Minuten ab dem Zeitpunkt der Zahlung. Du erhältst auch eine Einrichtungsanleitung mitgeschickt."
  },
  {
    question: "Ist IPTV in der Schweiz legal?",
    answer: "Ja, die Nutzung von IPTV-Diensten ist in der Schweiz legal. IPTVSchweizer ist ein seriöser IPTV-Anbieter mit Premium-Infrastruktur und 24/7 Support."
  },
  {
    question: "Gibt es Einschränkungen bei Anfragen?",
    answer: "Nein! Mit deinem Abonnement erhältst du unbegrenzten Zugang zu allen 65.000+ Sendern und 175.000+ Filmen & Serien. Streame so viel du möchtest."
  },
  {
    question: "Wie funktioniert die Pause-Funktion?",
    answer: "Wir verstehen, dass du nicht immer aktiv schaust. Wenn du dein Abonnement pausierst, wird der Abrechnungszeitraum eingefroren. Beispiel: Nutzt du 21 Tage und pausierst danach, hast du noch 10 Tage für später übrig."
  },
  {
    question: "Bekomme ich eine kostenlose Testphase?",
    answer: "Wir bieten keine kostenlosen Testzeiträume an. Stattdessen erhältst du eine 15-Tage-Geld-zurück-Garantie. Das ist besser, weil du vollen Zugang hast (nicht eingeschränkt) und mehr Zeit, alles gründlich zu testen."
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer: "IPTVSchweizer funktioniert auf nahezu allen Geräten: Smart TVs (Samsung, LG, Sony), Fire Stick, Apple TV, Android/iOS Telefone und Tablets, PC/Mac, Android TV Boxen und mehr."
  },
  {
    question: "Gibt es Buffering beim Stream?",
    answer: "Nein! Wir nutzen Premium-Server mit 99,9% Uptime-Garantie. Kein Buffering, kein Lag, keine Unterbrechungen. Premium-Qualität, jederzeit."
  },
  {
    question: "Bekomme ich deutsche Sender?",
    answer: "Ja! Alle Schweizer Sender sind inklusive: SRF 1, SRF 2, RTS 1, RSI La 1, 3+, TV24 und viele mehr. Plus deutsche und internationale Sender."
  }
];

export interface DevicePricing {
  devices: number;
  price: string;
  monthlyPrice: string;
}

export interface SubscriptionTier {
  tier: "Premium";
  price: string;
  monthlyPrice: string;
  savings?: string;
  devicePricing: DevicePricing[];
  features: string[];
}

export interface PeriodPlan {
  months: number;
  label: string;
  description: string;
  tiers: SubscriptionTier[];
}

export const PERIOD_PLANS: PeriodPlan[] = [
  {
    months: 3,
    label: "3 Monate",
    description: "3 MONATE ZUGANG",
    tiers: [
      {
        tier: "Premium",
        price: "CHF 45.99",
        monthlyPrice: "CHF 15.00",
        devicePricing: [
          { devices: 1, price: "CHF 34.99", monthlyPrice: "CHF 11.67" },
          { devices: 2, price: "CHF 45.99", monthlyPrice: "CHF 15.00" },
          { devices: 3, price: "CHF 74.99", monthlyPrice: "CHF 21.67" },
          { devices: 4, price: "CHF 89.99", monthlyPrice: "CHF 26.67" }
        ],
        features: [
          "SD/HD/FULL HD/4K/8K/HDR-VR",
          "+80.000 Sender + Netflix",
          "SRF 1, SRF 2, RTS 1, RSI La 1, 3+, DAZN",
          "+200.000 Filme & Serien",
          "Tägliche Updates",
          "Alle Sport PPV Events",
          "VIP 24/7 Support",
          "Enterprise Anti-Freeze PRO",
          "Persönlicher VIP Manager",
          "Alle Geräte",
          "VPN Inklusive",
          "Exklusive VIP Inhalte",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      }
    ]
  },
  {
    months: 6,
    label: "6 Monate",
    description: "6 MONATE ZUGANG",
    tiers: [
      {
        tier: "Premium",
        price: "CHF 79.99",
        monthlyPrice: "CHF 10.00",
        savings: "Spare 35%",
        devicePricing: [
          { devices: 1, price: "CHF 44.99", monthlyPrice: "CHF 7.50" },
          { devices: 2, price: "CHF 79.99", monthlyPrice: "CHF 10.00" },
          { devices: 3, price: "CHF 99.99", monthlyPrice: "CHF 15.00" },
          { devices: 4, price: "CHF 139.99", monthlyPrice: "CHF 19.17" }
        ],
        features: [
          "SD/HD/FULL HD/4K/8K/HDR-VR",
          "+80.000 Sender + Netflix",
          "SRF 1, SRF 2, RTS 1, RSI La 1, 3+, DAZN",
          "+200.000 Filme & Serien",
          "Tägliche Updates",
          "Alle Sport PPV Events",
          "VIP 24/7 Support",
          "Enterprise Anti-Freeze PRO",
          "Persönlicher VIP Manager",
          "Alle Geräte",
          "VPN Inklusive",
          "Exklusive VIP Inhalte",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      }
    ]
  },
  {
    months: 12,
    label: "12+3 Monate",
    description: "12+3 MONATE ZUGANG",
    tiers: [
      {
        tier: "Premium",
        price: "CHF 125.99",
        monthlyPrice: "CHF 8.33",
        savings: "Spare 50%",
        devicePricing: [
          { devices: 1, price: "CHF 78.99", monthlyPrice: "CHF 5.83" },
          { devices: 2, price: "CHF 125.99", monthlyPrice: "CHF 8.33" },
          { devices: 3, price: "CHF 179.99", monthlyPrice: "CHF 12.00" },
          { devices: 4, price: "CHF 199.99", monthlyPrice: "CHF 15.00" }
        ],
        features: [
          "SD/HD/FULL HD/4K/8K/HDR-VR",
          "+80.000 Sender + Netflix",
          "SRF 1, SRF 2, RTS 1, RSI La 1, 3+, DAZN",
          "+200.000 Filme & Serien",
          "Tägliche Updates",
          "Alle Sport PPV Events",
          "VIP 24/7 Support",
          "Enterprise Anti-Freeze PRO",
          "Persönlicher VIP Manager",
          "Alle Geräte",
          "VPN Inklusive",
          "Exklusive VIP Inhalte",
          "Netflix, Amazon, HBO, Apple TV, Hulu"
        ]
      }
    ]
  }
];

export const SERVICES = [
  "Deutsche Sender", "Österreichische Sender", "Live Sport", "Filme & Serien", "Internationale Sender",
  "VOD", "Catch-up TV", "EPG", "Multi-screen", "99,9% Uptime", "HD & 4K", "Formel 1", "Super League"
];

export const STREAMING_SERVICES = [
  { name: "Netflix", logo: "/assets/streaming/neflix.png" },
  { name: "Prime Video", logo: "/assets/streaming/primevideo.png" },
  { name: "Apple TV+", logo: "/assets/streaming/appletv.png" },
  { name: "Hulu", logo: "/assets/streaming/HULU.png" },
  { name: "WOW", logo: "/assets/streaming/WOW_Logo_2022.svg" },
  { name: "DAZN", logo: "/assets/streaming/dazn.png" },
  { name: "Disney+", logo: "/assets/streaming/disnep.png" },
  { name: "Joyn", logo: "/assets/channels/joyn.svg" },
  { name: "Warner TV", logo: "/assets/streaming/warnertv.png" },
];

export const CHANNEL_LOGOS = [
  { name: "Viaplay", logo: "/assets/channels/viaplay.png" },
  { name: "Eurosport", logo: "/assets/channels/eurosport.png" },
  { name: "Sky Sports", logo: "/assets/channels/sky-sports.png" },
  { name: "DAZN", logo: "/assets/channels/dazn.png" },
  { name: "F1", logo: "/assets/channels/f1.png" },
  { name: "MagentaTV", logo: "/assets/channels/magenta.png" },
];

export const TOP_FILMS = [
  { title: "Gladiator II", posterUrl: "/assets/posters/gladiator-2.jpg" },
  { title: "Wicked", posterUrl: "/assets/posters/wicked.jpg" },
  { title: "Moana 2", posterUrl: "/assets/posters/moana-2.jpg" },
  { title: "Red One", posterUrl: "/assets/posters/red-one.jpg" },
  { title: "Dune: Part Two", posterUrl: "/assets/posters/dune-2.jpg" },
  { title: "Deadpool & Wolverine", posterUrl: "/assets/posters/deadpool-wolverine.jpg" },
  { title: "The Substance", posterUrl: "/assets/posters/the-substance.jpg" },
  { title: "Inside Out 2", posterUrl: "/assets/posters/inside-out-2.jpg" },
  { title: "Joker: Folie à Deux", posterUrl: "/assets/posters/joker-folie-a-deux.jpg" },
  { title: "Beetlejuice Beetlejuice", posterUrl: "/assets/posters/beetlejuice-2.jpg" },
  { title: "Alien: Romulus", posterUrl: "/assets/posters/alien-romulus.jpg" },
  { title: "Despicable Me 4", posterUrl: "/assets/posters/despicable-me-4.jpg" },
  { title: "Conclave", posterUrl: "/assets/posters/conclave.jpg" },
  { title: "Heretic", posterUrl: "/assets/posters/heretic.jpg" },
  { title: "F1", posterUrl: "/assets/posters/f1.jpg" }
];

export const TOP_TVSHOWS_NL = [
  { title: "Mocro Maffia", posterUrl: "/assets/tvshows/mocro-maffia.jpg" },
  { title: "Gooische Vrouwen", posterUrl: "/assets/tvshows/gooische-vrouwen.jpg" },
  { title: "LOL: Last One Laughing", posterUrl: "/assets/tvshows/lol-last-one-laughing.jpg" },
  { title: "Vandaag Inside", posterUrl: "/assets/tvshows/vandaag-inside.jpg" },
  { title: "Winter Vol Liefde", posterUrl: "/assets/tvshows/winter-vol-liefde.jpg" },
  { title: "Pandora", posterUrl: "/assets/tvshows/pandora.jpg" },
  { title: "Sprekend Nederland", posterUrl: "/assets/tvshows/sprekend-nederland.jpg" }
];

export const TOP_TVSHOWS_INTL = [
  { title: "Squid Game", posterUrl: "/assets/tvshows-intl/squid-game.jpg" },
  { title: "Wednesday", posterUrl: "/assets/tvshows-intl/wednesday.jpg" },
  { title: "The Last of Us", posterUrl: "/assets/tvshows-intl/the-last-of-us.jpg" },
  { title: "Stranger Things", posterUrl: "/assets/tvshows-intl/stranger-things.jpg" },
  { title: "Breaking Bad", posterUrl: "/assets/tvshows-intl/breaking-bad.jpg" },
  { title: "House of the Dragon", posterUrl: "/assets/tvshows-intl/house-of-the-dragon.jpg" },
  { title: "The Bear", posterUrl: "/assets/tvshows-intl/the-bear.jpg" },
  { title: "Severance", posterUrl: "/assets/tvshows-intl/severance.jpg" },
  { title: "Shōgun", posterUrl: "/assets/tvshows-intl/shogun.jpg" },
  { title: "Reacher", posterUrl: "/assets/tvshows-intl/reacher.jpg" }
];
