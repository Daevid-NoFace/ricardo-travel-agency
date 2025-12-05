import { useEffect, useState } from 'react';

interface ReCaptchaWrapperProps {
  sitekey: string;
  onChange: (token: string | null) => void;
  onExpired: () => void;
}

export default function ReCaptchaWrapper({ sitekey, onChange, onExpired }: ReCaptchaWrapperProps) {
  const [ReCAPTCHA, setReCAPTCHA] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only load ReCAPTCHA on the client side
    if (!sitekey) {
      setError('reCAPTCHA site key is missing');
      return;
    }

    import('react-google-recaptcha')
      .then((module) => {
        setReCAPTCHA(() => module.default);
      })
      .catch((err) => {
        console.error('Failed to load reCAPTCHA:', err);
        setError('Failed to load reCAPTCHA');
      });
  }, [sitekey]);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded-lg text-sm text-red-800">
        ⚠️ Error loading reCAPTCHA: {error}
      </div>
    );
  }

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
