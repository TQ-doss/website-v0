// src/lib/metadata.ts

// Dynamic SEO Metadata Generation

interface Metadata {
    title: string;
    description: string;
    ogImage?: string;
    canonicalUrl: string;
}

function generateMetadata(title: string, description: string, canonicalUrl: string, ogImage?: string): Metadata {
    return {
        title,
        description,
        ogImage,
        canonicalUrl,
    };
}

export { generateMetadata };