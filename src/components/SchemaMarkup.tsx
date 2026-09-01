import React from 'react';

export const SchemaMarkup: React.FC = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://samnvya.com/#organization',
        'name': 'SAMNVYA IMS PRIVATE LIMITED',
        'alternateName': 'Samnvya',
        'url': 'https://samnvya.com',
        'logo': 'https://samnvya.com/logo.png',
        'slogan': 'The Direct Digital World',
        'description': 'Information Management, ERP, Digital Libraries, and modular SaaS platforms for institutions, government bodies, and enterprises.',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '171/251, Pratap Nagar, Sanganer',
          'addressLocality': 'Jaipur',
          'addressRegion': 'Rajasthan',
          'postalCode': '302033',
          'addressCountry': 'IN'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+91-9509386565',
          'contactType': 'customer support',
          'email': 'samnvya.ims@gmail.com',
          'areaServed': 'IN',
          'availableLanguage': ['en', 'hi']
        }
      },
      {
        '@type': 'SoftwareApplication',
        'name': 'Samnvya Institutional ERP & Information Management System',
        'operatingSystem': 'Web, Cloud, Android, iOS',
        'applicationCategory': 'BusinessApplication, EducationalApplication',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'INR',
          'description': 'Customized SaaS and Enterprise quotation based on institutional scale.'
        },
        'publisher': {
          '@id': 'https://samnvya.com/#organization'
        }
      },
      {
        '@type': 'LocalBusiness',
        'name': 'SAMNVYA IMS PVT. LTD. Headquarters',
        'image': 'https://samnvya.com/office.jpg',
        'telephone': '+91-9509386565',
        'email': 'samnvya.ims@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '171/251, Pratap Nagar, Sanganer',
          'addressLocality': 'Jaipur',
          'addressRegion': 'Rajasthan',
          'postalCode': '302033',
          'addressCountry': 'IN'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 26.8048,
          'longitude': 75.8236
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:30',
          'closes': '18:30'
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
