import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');
    const servicesLink = screen.getByTestId('services-link');
    const communityLink = screen.getByTestId('community-link');
    const investorsLink = screen.getByTestId('investors-link');
    const signinLink = screen.getByTestId('signin-link');
    const signupLink = screen.getByTestId('signup-link');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(communityLink).toBeInTheDocument();
    expect(investorsLink).toBeInTheDocument();
    expect(signinLink).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });

  test('renders mobile navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const mobileHomeLink = screen.getByTestId('mobile-home-link');
    const mobileAboutLink = screen.getByTestId('mobile-about-link');
    const mobileServicesLink = screen.getByTestId('mobile-services-link');
    const mobileCommunityLink = screen.getByTestId('mobile-community-link');
    const mobileInvestorsLink = screen.getByTestId('mobile-investors-link');
    const mobileSigninLink = screen.getByTestId('mobile-signin-link');
    const mobileSignupLink = screen.getByTestId('mobile-signup-link');

    expect(mobileHomeLink).toBeInTheDocument();
    expect(mobileAboutLink).toBeInTheDocument();
    expect(mobileServicesLink).toBeInTheDocument();
    expect(mobileCommunityLink).toBeInTheDocument();
    expect(mobileInvestorsLink).toBeInTheDocument();
    expect(mobileSigninLink).toBeInTheDocument();
    expect(mobileSignupLink).toBeInTheDocument();
  });
});
