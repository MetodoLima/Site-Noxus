import React from 'react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <div className="rounded-[31px] bg-gradient-to-b from-blue-900/80 to-slate-900/80 p-px">
      <div className="flex flex-col bg-gradient-to-b from-[#022964] to-[#060E1B] rounded-[30px] p-6 text-center h-full w-full">
      <div className="h-24 w-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-slate-900">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-white to-[#0066CC] text-transparent bg-clip-text mb-4">
        {title}
      </h3>
      <p className="text-lg md:text-xl font-regular text-white">
        {subtitle}
      </p>
      </div>
    </div>
  );
};
