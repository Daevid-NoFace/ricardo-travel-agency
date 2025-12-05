import { useEffect, useState } from 'react';

interface ReCaptchaWrapperProps {
  sitekey: string;
  onChange: (token: string | null) => void;
  onExpired: () => void;
}

export default function ReCaptchaWrapper({ sitekey, onChange, onExpired }: ReCaptchaWrapperProps) {
  const [ReCAPTCHA, setReCAPTCHA] = useState<any>(null);

  useEffect(() => {
    // Only load ReCAPTCHA on the client side
    import('react-google-recaptcha').then((module) => {
      setReCAPTCHA(() => module.default);
    });
  }, []);

  if (!ReCAPTCHA) {
    return (
      <div className="flex justify-center items-center h-[78px]">
        <div className="animate-pulse bg-gray-200 rounded w-[304px] h-[78px]"></div>
      </div>
    );
  }

  return (
    <ReCAPTCHA
      sitekey={sitekey}
      onChange={onChange}
      onExpired={onExpired}
    />
  );
}
