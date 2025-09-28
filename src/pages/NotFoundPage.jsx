import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { HomeIcon } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <SeoHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to the CustomerServicesCenter homepage."
      />

      <section className="section flex items-center min-h-[60vh]">
        <div className="container text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-slate-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't seem to exist. It might have been moved, deleted, or never existed in the first place.
          </p>
          <Link to="/" className="btn btn-primary inline-flex items-center">
            <HomeIcon className="h-5 w-5 mr-2" />
            Return to Homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
