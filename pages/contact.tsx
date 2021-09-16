import React from 'react';
import HeaderSection from '../components/ui/organisms/HeaderSection/HeaderSection';
import SocialSection from '../components/ui/organisms/SocialSection/SocialSection';
import PageTemplate from '../components/ui/templates/PageTemplate';

const ContactPage = () => (
  <PageTemplate title="Contacto | Cristian Sotomayor">
    <HeaderSection />

    <div className="container mx-auto sm:px-0 px-8">
      <SocialSection />
    </div>
  </PageTemplate>
);

export default ContactPage;
