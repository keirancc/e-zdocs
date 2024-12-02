export interface FAQ {
  id: string;
  question: string;
  shortAnswer: string;
  category: string;
  sections: {
    title: string;
    content: string;
    type?: "text" | "bullets" | "steps" | "code" | "warning" | "note";
  }[];
  images?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  relatedQuestions?: string[];
  additionalNotes?: string[];
  lastUpdated?: string;
}

export const faqs: FAQ[] = [
  {
    id: "features",
    question: "But what do I get?",
    shortAnswer:
      "E-Z Host and E-Z Bio offer a range of features for standard users, including file hosting and customizable bio pages.",
    category: "Services",
    sections: [
      {
        title: "E-Z Host Features",
        type: "bullets",
        content: `
Fast and reliable file hosting
Support for image, video, audio and application MIME types
Customizable upload settings
Shareable direct links
RESTful API for uploads, pastes and link shortening
& Much, much more`,
      },
      {
        title: "E-Z Bio Features",
        type: "bullets",
        content: `
Infinitely customizable bio page
Multiple layout options
Social media links integration
Mobile-friendly design
Play your favourite music on your bio`,
      },
    ],
    images: [
      {
        url: "/assets/faq/bio-example.png",
        alt: "Example bio page",
        caption: "My personal bio page - e-z.bio/keiran",
      },
    ],
    relatedQuestions: ["premium-features", "account-creation"],
    additionalNotes: [
      "Features may be subject to change",
      "Some features might have usage restrictions for standard users",
      "A premium upgrade is available for purchase",
    ],
    lastUpdated: "2024-12-01",
  },

  {
    id: "account-creation",
    question: "How do I create an E-Z account?",
    shortAnswer:
      "Creating an account is fairly easy, all you need is an invite code, a discord account and a valid email address.",
    category: "Account Management",
    sections: [
      {
        title: "Requirements",
        type: "bullets",
        content: `
A valid invite code, either from an existing member or by purchasing one
A Discord account
A valid email address
A secure password (can be reset by our support team on discord)`,
      },
      {
        title: "Registration Steps",
        type: "steps",
        content: `
1. Visit e-z.gg
2. Click the "Register" button in the top right corner
3. Enter your username
4. Choose a secure password
5. Enter your email address
6. Enter your invite code which you should receive by email
7. Accept our Terms of Service
8. Click "Register"
`,
      },
      {
        title: "After Registration",
        type: "text",
        content:
          "Once completed, you'll have full access to all E-Z services and features. Make sure to join our Discord server to stay updated with the latest news and updates.",
      },
      {
        title: "Important Security Notes",
        type: "warning",
        content: `
- Never share your account credentials
- Enable 2FA for additional security
- Use a unique password not used on other services
- Keep your invite code private until registered`,
      },
    ],
    images: [
      {
        url: "/assets/faq/signup-page.png",
        alt: "E-Z signup page",
        caption: "The E-Z signup page with registration form",
      },
    ],
    relatedQuestions: ["password-reset", "account-verification"],
    additionalNotes: [
      "Account creation is subject to our Terms of Service",
      "Multiple accounts per user are now allowed",
      "Ensure you read our rules (in the discord) and our TOS carefully before registering",
      "Invite codes are single use and should be used responsibly",
    ],
    lastUpdated: "2024-12-01",
  },
  {
    id: "password-reset",
    question: "How do I reset my password?",
    shortAnswer:
      "Open a ticket in our Discord server and request a password reset, ensuring you have access to the email linked to your account.",
    category: "Account Management",
    sections: [
      {
        title: "Reset Process",
        type: "steps",
        content: `
1. Visit our discord server - which you should already be in
2. Open the 'support' channel
3. Click the 'Open Ticket' button
4. In the form, inform them of your issue
5. If you have a valid email address linked to your account, you will be asked to open an email
6. Once verified, you will be able to change your password
        `,
      },
      {
        title: "Important Information",
        type: "warning",
        content: `
Check your spam folder if you don't receive the email
Make sure to use a strong, unique password
Previous sessions will be logged out`,
      },
      //       {
      //         title: "Password Requirements",
      //         type: "bullets",
      //         content: `
      // - Minimum 5 characters
      // `
      //       }
    ],
    images: [
      {
        url: "/assets/faq/support-ticket.png",
        alt: "Support ticket form",
        caption: "The support ticket form",
      },
    ],
    relatedQuestions: ["account-creation", "account-security"],
    additionalNotes: [
      "You absolutely need a valid email address to reset your password",
      "The only way to reset your password is through a support ticket",
      "Consider enabling 2FA after resetting your password",
      "Please don't spam the chat in our Discord while waiting for a staff response",
      "You should probably try using a password manager like Proton Pass (my personal choice)",
    ],
    lastUpdated: "2024-12-01",
  },
];

export function getFAQ(id: string): FAQ | undefined {
  return faqs.find((faq) => faq.id === id);
}

export function getRelatedFAQs(id: string): FAQ[] {
  const faq = getFAQ(id);
  if (!faq || !faq.relatedQuestions) return [];
  return faqs.filter((f) => faq.relatedQuestions?.includes(f.id)) || [];
}
