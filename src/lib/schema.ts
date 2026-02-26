// src/lib/schema.ts

// JSON-LD Structured Data Schemas

interface ProfessionalServiceSchema {
    '@context': string;
    '@type': string;
    name: string;
    serviceType: string;
    areaServed: string;
    provider: string;
}

interface SoftwareSourceCodeSchema {
    '@context': string;
    '@type': string;
    codeRepository: string;
    programmingLanguage: string;
    operatingSystem: string;
}

const professionalService: ProfessionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '',
    serviceType: '',
    areaServed: '',
    provider: '',
};

const softwareSourceCode: SoftwareSourceCodeSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    codeRepository: '',
    programmingLanguage: '',
    operatingSystem: '',
};

export { professionalService, softwareSourceCode };
export type { ProfessionalServiceSchema, SoftwareSourceCodeSchema };