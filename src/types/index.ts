// TypeScript interfaces

export interface Theme {
    name: string;
    backgroundColor: string;
    textColor: string;
    font: string;
}

export interface BlogPost {
    title: string;
    content: string;
    author: string;
    publishedDate: Date;
    tags: string[];
}

export interface PricingTier {
    tierName: string;
    price: number;
    features: string[];
}

export interface BentoItemConfig {
    itemName: string;
    itemType: string;
    isAvailable: boolean;
}