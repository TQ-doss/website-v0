// src/lib/schema.ts

type JsonLdObject = Record<string, unknown>;

function createSchema(type: string, fields: JsonLdObject): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...fields,
  };
}

// Define the ProfessionalService schema
const professionalService = createSchema('ProfessionalService', {
  name: '',
  serviceType: '',
  areaServed: '',
  provider: '',
});

// Define the SoftwareSourceCode schema
const softwareSourceCode = createSchema('SoftwareSourceCode', {
  codeRepository: '',
  programmingLanguage: '',
  operatingSystem: '',
});

export { createSchema, professionalService, softwareSourceCode };
