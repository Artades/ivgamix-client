
import Auth from '@/components/Auth/Auth';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: "Вход в систему"
};

const AuthPage = () => {

    return (
        <>
          <Auth />  
        </>
    );
};

export default AuthPage;