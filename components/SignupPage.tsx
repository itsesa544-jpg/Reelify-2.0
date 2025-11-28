import React from 'react';
import { CloseIcon, QuestionIcon, UserIcon, GoogleIcon, FacebookIcon } from '../constants';

interface SignupPageProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

const AuthButton: React.FC<{icon: React.ReactNode; label: string; onClick?: () => void; className?: string}> = ({ icon, label, onClick, className }) => (
    <button onClick={onClick} className={`w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors ${className}`}>
        <div className="w-5 mr-4">{icon}</div>
        <span className="flex-grow text-center">{label}</span>
    </button>
);

const SignupPage: React.FC<SignupPageProps> = ({ onSignup, onSwitchToLogin }) => {
  return (
    <div className="w-screen h-screen bg-white text-black flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <CloseIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
        <QuestionIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-8">
        <div className="w-full max-w-sm text-center">
            <h1 className="text-3xl font-bold mb-3">Sign up for Vibe</h1>
            <p className="text-gray-500 mb-8 text-sm">Create a profile, follow other accounts, make your own videos, and more.</p>
            
            <div className="space-y-4">
                <AuthButton 
                    icon={<UserIcon className="text-white"/>}
                    label="Use phone or email"
                    onClick={onSignup}
                    className="bg-red-500 text-white border-red-500 hover:bg-red-600"
                />
                <AuthButton 
                    icon={<GoogleIcon />}
                    label="Continue with Google"
                />
                <AuthButton 
                    icon={<FacebookIcon />}
                    label="Continue with Facebook"
                />
            </div>
        </div>
      </main>
      
      <footer className="shrink-0">
        <div className="px-8 py-4 text-center text-xs text-gray-500 border-t">
            By continuing, you agree to Vibe's <a href="#" className="font-semibold text-black">Terms of Service</a> and confirm that you have read Vibe's <a href="#" className="font-semibold text-black">Privacy Policy</a>.
        </div>
        <div className="bg-gray-100 p-6 text-center">
            <p className="text-sm">
                Already have an account?{' '}
                <button onClick={onSwitchToLogin} className="text-red-500 font-semibold hover:underline">Log in</button>
            </p>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
