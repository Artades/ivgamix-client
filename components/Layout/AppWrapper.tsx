'use client';
import React from 'react';
import Wrapper from './Wrapper/Wrapper';
import Header from './Header/Header';
import { usePathname } from 'next/navigation';

const AppWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
    const pathname = usePathname();
    return (
			<Wrapper>
				{pathname !== "/auth" && <Header />}
				<div className="">{children}</div>
			</Wrapper>
		);
};

export default AppWrapper;