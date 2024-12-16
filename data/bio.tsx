import {
  Globe,
  ImageIcon,
  Layout,
  Palette,
  LinkIcon,
  Shield,
  Star,
  Mail,
  MessageCircle,
  FileText,
  Eye,
} from "lucide-react";

export const features = [
  {
    icon: <ImageIcon className="w-6 h-6 text-purple-400" />,
    title: "Customizable",
    description:
      "Create a beautiful, customizable profile page to showcase your online presence",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Shareable bio link",
    description:
      "Easily share your bio page link with anyone, anywhere using your very own bio link",
  },
];

export const featuredBios = [
  {
    username: "Aiden",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/oxzn20ru.png",
    bioLink: "https://e-z.bio/aiden",
    socialCount: "23236",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Nado",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/c9qhakma.png",
    bioLink: "https://e-z.bio/vx",
    socialCount: "2195",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Always",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/t1zkap63.png",
    bioLink: "https://e-z.bio/az",
    socialCount: "2195",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Eva",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/jd4fkwjs.png",
    bioLink: "https://e-z.bio/eva",
    socialCount: "1885",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Kyuiki",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/jld517td.png",
    bioLink: "https://e-z.bio/ky",
    socialCount: "1283",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Loud",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/imk3oqi3.png",
    bioLink: "https://e-z.bio/loud",
    socialCount: "1146",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "not_noob",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/es9ddfjw.png",
    bioLink: "https://e-z.bio/ffs",
    socialCount: "782",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Karan",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/95mufzns.png",
    bioLink: "https://e-z.bio/dma",
    socialCount: "708",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Keiran",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/3cssfo64.png",
    bioLink: "https://e-z.bio/anon",
    socialCount: "624",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Bran",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/3zh7wdcw.png",
    bioLink: "https://e-z.bio/glaive",
    socialCount: "530",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "Linqfy",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/6xz6kcto.png",
    bioLink: "https://e-z.bio/qq",
    socialCount: "182",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
  {
    username: "entity",
    image:
      "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/zt88b00o.png",
    bioLink: "https://e-z.bio/entity",
    socialCount: "74",
    primaryPlatform: <Eye className="w-4 h-4" />,
  },
];

export const customizationOptions = [
  {
    icon: <Palette className="w-5 h-5 text-purple-400" />,
    title: "Choose your style",
    description: "Almost every aspect of your bio is wholly customizable",
  },
  {
    icon: <Layout className="w-5 h-5 text-purple-400" />,
    title: "Layout",
    description:
      "We have two distinct layouts to choose from to best suit your style",
  },
  {
    icon: <LinkIcon className="w-5 h-5 text-purple-400" />,
    title: "Social links",
    description:
      "Add your social links with any supported platforms or add your own",
  },
];

export const premiumFeatures = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Secondary bio alias",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Use unicode in your bio alias",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Sexy donator badge",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Premium role on discord",
  },
];

export const supportChannels = [
  {
    icon: <Mail className="w-5 h-5 text-purple-400" />,
    href: "mailto:support@e-z.gg",
    title: "Email Support",
    description: "Our support email is support@e-z.gg",
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
    href: "https://discord.gg/ez",
    title: "Discord",
    description: "Get staff and community support in our Discord",
  },
  {
    icon: <FileText className="w-5 h-5 text-purple-400" />,
    href: "/faq",
    title: "FAQ",
    description: "Browse some of our common questions",
  },
];

export const bestPractices = [
  "Regularly update your bio page content",
  "Use high-quality images",
  "Organize links by importance",
  "Use a consistent color scheme",
];
