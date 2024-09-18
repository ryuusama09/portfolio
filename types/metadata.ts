export interface Metadata {
  author: {
    name: string;
    username: string;
    firstName: string;
    lastName: string;
    label: string;
  };
  site: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
    keywords: string[];
    language: string;
    charset: string;
  };
}
