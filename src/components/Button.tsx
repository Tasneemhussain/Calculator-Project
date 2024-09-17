type ButtonProps = {
  onClick: () => void;
  label?: string;
};

const Button = ({ onClick, label  }: ButtonProps) => {
  return <div className="button" onClick={onClick}> 
   {label || "="}
  </div>;

   
       
};

export default Button;
