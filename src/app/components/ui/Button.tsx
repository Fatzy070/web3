type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'glow'; // Added 'glow'
  className?: string; // Always allow extra classes for positioning
  onClick?: () => void;
};

export const Button = ({ children, variant = 'primary', className = "", onClick }: ButtonProps) => {
  const baseStyles = "relative w-[190px] px-4 py-3 rounded-full capitalize transition-all duration-300 active:scale-95 flex items-center justify-center";
  
  const variants = {
    primary: 'bg-[#171717]  box-shadow-inset 2px -2px 4px #3f3f3f40, inset -2px 2px 4px #3f3f3f40; hover:bg-[#7d6cff]',
    
    glow: `bg-[#7d6cff]  hover:bg-[#29135d]
    shadow-inner
    `
  };

  return (
    
        <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
    
  );
};