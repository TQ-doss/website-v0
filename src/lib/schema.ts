import { Schema, setSchema } from 'jsonld-schema-builder';

// Define the ProfessionalService schema
const professionalService = new Schema('ProfessionalService', {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '',  // Add the name of the service
    serviceType: '',  // Define the type of service
    areaServed: '',  // Define the area served
    provider: '',  // Define the provider of the service
});

// Define the SoftwareSourceCode schema
const softwareSourceCode = new Schema('SoftwareSourceCode', {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    codeRepository: '',  // URL to the code repository
    programmingLanguage: '',  // Specify programming language
    operatingSystem: '',  // Specify OS details
});

// Export schemas
export { professionalService, softwareSourceCode };