const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h1 className="mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              Tech Ariser Global collects information that you provide directly to us when you use our services, 
              contact us, or interact with our website. This may include your name, email address, phone number, 
              company information, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about our services, offers, and updates</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with trusted service providers who assist us in operating our website and conducting 
              our business, as long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. You can choose to accept or decline cookies. 
              Most web browsers automatically accept cookies, but you can usually modify your browser setting to 
              decline cookies if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting 
              the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Email:</strong> hr@techariser.com</p>
              <p><strong>Phone:</strong> +1 945-274-5643</p>
              <p><strong>Address:</strong> 4400 Bandera Drive, Prosper, TX, USA</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
