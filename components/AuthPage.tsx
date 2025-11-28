import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import type { User } from '../types';
import { mariaKhan } from '../constants';

interface AuthPageProps {
  onLoginSuccess: (user: User) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [view, setView] = useState<'signup' | 'login'>('signup');

  const handleRegularAuth = () => {
    // For this demo, any login/signup attempt will log in as Maria Khan.
    onLoginSuccess(mariaKhan);
  };

  const handleGoogleLogin = () => {
    // Simulate a successful Google login with a default user.
    onLoginSuccess(mariaKhan);
  };

  if (view === 'login') {
    return (
      <LoginPage 
        onLogin={handleRegularAuth} 
        onGoogleLogin={handleGoogleLogin}
        onSwitchToSignup={() => setView('signup')} 
      />
    );
  }

  return (
    <SignupPage 
      onSignup={handleRegularAuth} 
      onGoogleLogin={handleGoogleLogin}
      onSwitchToLogin={() => setView('login')} 
    />
  );
};

export default AuthPage;
