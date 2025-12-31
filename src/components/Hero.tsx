import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-16">
      <div className="mb-8">
        {/* Placeholder for avatar */}
        <Image
          src="/images/avatar.png" // Placeholder image path
          alt="Avatar"
          width={120}
          height={120}
          className="rounded-full mx-auto shadow-lg"
        />
      </div>
      <h1 className="text-5xl font-bold text-notion-text-primary mb-4">
        Hi, I'm [Your Name]
      </h1>
      <p className="text-xl text-notion-gray-500 max-w-2xl mx-auto">
        A Frontend Developer building modern web experiences with a passion for clean design and user-centric solutions.
      </p>
    </section>
  );
};

export default Hero;
