import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineDark' | 'whatsapp';
  children?: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: (e: any) => void;
  target?: string;
  rel?: string;
}

export function Button({ children, variant = 'primary', className = '', href, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-sm active:scale-95 text-sm sm:text-base';
  
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-md',
    secondary: 'bg-[#C5A880] text-white hover:bg-[#B3966D] hover:shadow-md', // Elegant Gold/Beige
    outline: 'border-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 hover:text-white',
    outlineDark: 'border-2 border-slate-800/80 text-slate-800 hover:bg-slate-900 hover:border-slate-900 hover:text-white',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BD5A] hover:shadow-md',
  };

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https');
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...(props as any)}>
      {children}
    </button>
  );
}
