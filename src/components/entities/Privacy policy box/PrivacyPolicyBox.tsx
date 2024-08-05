import React from 'react';

interface PrivacyPolicyBoxProps {
  color: string;
}

const PrivacyPolicyBox: React.FC<PrivacyPolicyBoxProps> = ({ color }) => {
  const textStyle = {
    color: color,
  };
  return (
    <div className="flex items-center text-sm" style={textStyle}>
      <input type="checkbox" id="consent" className="w-4 h-4 mr-2" />
      <label htmlFor="consent">
        Согласен с условиями <a href="#" className="underline">Политики конфиденциальности данных</a>
      </label>
    </div>
  );
};

export default PrivacyPolicyBox;
