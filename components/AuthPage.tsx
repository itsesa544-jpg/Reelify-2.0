import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

interface AuthPageProps {
  onLoginSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [view, setView] = useState<'signup' | 'login'>('signup');

  const handleLogin = () => {
    // In a real app, you would handle the login logic here.
    // For this demo, we'll just call the success callback.
    onLoginSuccess();
  };

  const handleSignup = () => {
    // In a real app, you would handle the signup logic here.
    // For this demo, we'll just call the success callback.
    onLoginSuccess(); // Signing up also logs the user in
  };

  if (view === 'login') {
    return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setView('signup')} />;
  }

  return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setView('login')} />;
};

export default AuthPage;
