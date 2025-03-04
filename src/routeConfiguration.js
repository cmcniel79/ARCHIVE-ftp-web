import React from 'react';
// import {
//   AboutPage,
//   AuthenticationPage,
//   CheckoutPage,
//   ContactDetailsPage,
//   ContactPage,
//   FAQPage,
//   FollowingPage,
//   EditListingPage,
//   EmailVerificationPage,
//   EventsPage,
//   EventTypePage,
//   EventHostPage,
//   InboxPage,
//   LandingPage,
//   LikedListingsPage,
//   ListingPage,
//   MapPage,
//   ManageListingsPage,
//   NotFoundPage,
//   PasswordChangePage,
//   PasswordRecoveryPage,
//   PasswordResetPage,
//   StripePayoutPage,
//   PaymentMethodsPage,
//   PrivacyPolicyPage,
//   ProfilePage,
//   ProfileSettingsPage,
//   SingleEventPage,
//   SearchPage,
//   StyleguidePage,
//   TermsOfServicePage,
//   TransactionPage,
// } from './containers';
import loadable from '@loadable/component';
import getPageDataLoadingAPI from './containers/pageDataLoadingAPI';
import { NotFoundPage } from './containers';

// routeConfiguration needs to initialize containers first
// Otherwise, components will import form container eventually and
// at that point css bundling / imports will happen in wrong order.
import { NamedRedirect } from './components';

const pageDataLoadingAPI = getPageDataLoadingAPI();

const AboutPage = loadable(() => import(/* webpackChunkName: "AboutPage" */ './containers/AboutPage/AboutPage'));
const AuthenticationPage = loadable(() => import(/* webpackChunkName: "AuthenticationPage" */ './containers/AuthenticationPage/AuthenticationPage'));
const CheckoutPage = loadable(() => import(/* webpackChunkName: "CheckoutPage" */ './containers/CheckoutPage/CheckoutPage'));
const ContactDetailsPage = loadable(() => import(/* webpackChunkName: "ContactDetailsPage" */ './containers/ContactDetailsPage/ContactDetailsPage'));
const ContactPage = loadable(() => import(/* webpackChunkName: "ContactPage" */ './containers/ContactPage/ContactPage'));
const DeletionPolicyPage = loadable(() => import(/* webpackChunkName: "DeletionPolicyPage" */ './containers/DeletionPolicyPage/DeletionPolicyPage'));
const EditListingPage = loadable(() => import(/* webpackChunkName: "EditListingPage" */ './containers/EditListingPage/EditListingPage'));
const EmailVerificationPage = loadable(() => import(/* webpackChunkName: "EmailVerificationPage" */ './containers/EmailVerificationPage/EmailVerificationPage'));
const EventHostPage = loadable(() => import(/* webpackChunkName: "EventHostPage" */ './containers/EventHostPage/EventHostPage'));
const EventsPage = loadable(() => import(/* webpackChunkName: "EventsPage" */ './containers/EventsPage/EventsPage'));
const EventTypePage = loadable(() => import(/* webpackChunkName: "EventTypePage" */ './containers/EventTypePage/EventTypePage'));
const FAQPage = loadable(() => import(/* webpackChunkName: "FAQPage" */ './containers/FAQPage/FAQPage'));
const FollowingPage = loadable(() => import(/* webpackChunkName: "FollowingPage" */ './containers/FollowingPage/FollowingPage'));
const InboxPage = loadable(() => import(/* webpackChunkName: "InboxPage" */ './containers/InboxPage/InboxPage'));
const LandingPage = loadable(() => import(/* webpackChunkName: "LandingPage" */ './containers/LandingPage/LandingPage'));
const LikedListingsPage = loadable(() => import(/* webpackChunkName: "LikedListingsPage" */ /* webpackPrefetch: true */ './containers/LikedListingsPage/LikedListingsPage'));
const ListingPage = loadable(() => import(/* webpackChunkName: "ListingPage" */ /* webpackPrefetch: true */ './containers/ListingPage/ListingPage'));
const ManageListingsPage = loadable(() => import(/* webpackChunkName: "ManageListingsPage" */ './containers/ManageListingsPage/ManageListingsPage'));
const MapPage = loadable(() => import(/* webpackChunkName: "MapPage" */ './containers/MapPage/MapPage'));
const NativeTimePrivacyPolicyPage = loadable(() => import(/* webpackChunkName: "PrivacyPolicyPage" */ './containers/NativeTimePrivacyPolicyPage/NativeTimePrivacyPolicyPage'));
const PasswordChangePage = loadable(() => import(/* webpackChunkName: "PasswordChangePage" */ './containers/PasswordChangePage/PasswordChangePage'));
const PasswordRecoveryPage = loadable(() => import(/* webpackChunkName: "PasswordRecoveryPage" */ './containers/PasswordRecoveryPage/PasswordRecoveryPage'));
const PasswordResetPage = loadable(() => import(/* webpackChunkName: "PasswordResetPage" */ './containers/PasswordResetPage/PasswordResetPage'));
const PaymentMethodsPage = loadable(() => import(/* webpackChunkName: "PaymentMethodsPage" */ './containers/PaymentMethodsPage/PaymentMethodsPage'));
const PrivacyPolicyPage = loadable(() => import(/* webpackChunkName: "PrivacyPolicyPage" */ './containers/PrivacyPolicyPage/PrivacyPolicyPage'));
const ProfilePage = loadable(() => import(/* webpackChunkName: "ProfilePage" */ './containers/ProfilePage/ProfilePage'));
const ProfileSettingsPage = loadable(() => import(/* webpackChunkName: "ProfileSettingsPage" */ './containers/ProfileSettingsPage/ProfileSettingsPage'));
const SearchPage = loadable(() => import(/* webpackChunkName: "SearchPage" */ /* webpackPrefetch: true */  './containers/SearchPage/SearchPage'));
const SingleEventPage = loadable(() => import(/* webpackChunkName: "SingleEventPage" */ './containers/SingleEventPage/SingleEventPage'));
const StripePayoutPage = loadable(() => import(/* webpackChunkName: "StripePayoutPage" */ './containers/StripePayoutPage/StripePayoutPage'));
const TermsOfServicePage = loadable(() => import(/* webpackChunkName: "TermsOfServicePage" */ './containers/TermsOfServicePage/TermsOfServicePage'));
const TransactionPage = loadable(() => import(/* webpackChunkName: "TransactionPage" */ './containers/TransactionPage/TransactionPage'));

// Styleguide helps you to review current components and develop new ones
const StyleguidePage = loadable(() => import(/* webpackChunkName: "StyleguidePage" */ './containers/StyleguidePage/StyleguidePage'));

export const ACCOUNT_SETTINGS_PAGES = [
  'ContactDetailsPage',
  'PasswordChangePage',
  'StripePayoutPage',
  'PaymentMethodsPage',
];

export const EVENT_HOST_PAGES = [
  'EventDetailsPage',
  'EventSellersPage',
  'EventHostPage'
];

// https://en.wikipedia.org/wiki/Universally_unique_identifier#Nil_UUID
const draftId = '00000000-0000-0000-0000-000000000000';
const draftSlug = 'draft';

const RedirectToLandingPage = () => <NamedRedirect name="LandingPage" />;

// NOTE: Most server-side endpoints are prefixed with /api. Requests to those
// endpoints are indended to be handled in the server instead of the browser and
// they will not render the application. So remember to avoid routes starting
// with /api and if you encounter clashing routes see server/index.js if there's
// a conflicting route defined there.

// Our routes are exact by default.
// See behaviour from Routes.js where Route is created.
const routeConfiguration = () => {
  return [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
      loadData: pageDataLoadingAPI.LandingPage.loadData,
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: props => <ContactPage {...props} />,
      loadData: ContactPage.loadData,
    },
    {
      path: '/events',
      name: 'EventsPage',
      component: props => <EventsPage {...props} />,
    },
    {
      path: '/events/:type',
      name: 'EventTypePage',
      component: props => <EventTypePage {...props} />,
    },
    {
      path: '/event-details',
      name: 'EventDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EventHostPage {...props} tab="details"/>,
    },
    {
      path: '/event-photos',
      name: 'EventPhotosPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EventHostPage {...props} tab="photos"/>,
    },
    {
      path: '/event-sellers',
      name: 'EventSellersPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <EventHostPage {...props} tab="sellers"/>,
    },
    {
      path: '/s',
      name: 'SearchPage',
      component: SearchPage,
      loadData: pageDataLoadingAPI.SearchPage.loadData,
    },
    {
      path: '/l',
      name: 'ListingBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/l/:slug/:id',
      name: 'ListingPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/checkout',
      name: 'CheckoutPage',
      auth: true,
      component: CheckoutPage,
      setInitialValues: pageDataLoadingAPI.CheckoutPage.setInitialValues,
    },
    {
      path: '/l/:slug/:id/:variant',
      name: 'ListingPageVariant',
      auth: true,
      authPage: 'LoginPage',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/l/new',
      name: 'NewListingPage',
      auth: true,
      component: () => (
        <NamedRedirect
          name="EditListingPage"
          params={{ slug: draftSlug, id: draftId, type: 'new', tab: 'description' }}
        />
      ),
    },
    {
      path: '/l/:slug/:id/:type/:tab',
      name: 'EditListingPage',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },
    {
      path: '/l/:slug/:id/:type/:tab/:returnURLType',
      name: 'EditListingStripeOnboardingPage',
      auth: true,
      component: EditListingPage,
      loadData: pageDataLoadingAPI.EditListingPage.loadData,
    },

    {
      path: '/faq',
      name: 'FAQPage',
      component: FAQPage,
    },

    {
      path: '/map',
      name: 'MapPage',
      component: MapPage,
      loadData: MapPage.loadData,
    },

    // Canonical path should be after the `/l/new` path since they
    // conflict and `new` is not a valid listing UUID.
    {
      path: '/l/:id',
      name: 'ListingPageCanonical',
      component: ListingPage,
      loadData: pageDataLoadingAPI.ListingPage.loadData,
    },
    {
      path: '/u',
      name: 'ProfileBasePage',
      component: RedirectToLandingPage,
    },
    {
      path: '/u/:id',
      name: 'ProfilePage',
      component: ProfilePage,
      loadData: pageDataLoadingAPI.ProfilePage.loadData,
    },
    {
      path: '/profile-settings',
      name: 'ProfileSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ProfileSettingsPage,
    },
    {
      path: '/events/:eventType/:slug/:id',
      name: 'SingleEventPage',
      component: props => <SingleEventPage {...props} />,
      loadData: pageDataLoadingAPI.SingleEventPage.loadData,
    },

    // Note: authenticating with IdP (e.g. Facebook) expects that /login path exists
    // so that in the error case users can be redirected back to the LoginPage
    // In case you change this, remember to update the route in server/api/auth/loginWithIdp.js
    {
      path: '/login',
      name: 'LoginPage',
      component: AuthenticationPage,
      extraProps: { tab: 'login' },
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: AuthenticationPage,
      extraProps: { tab: 'signup' },
    },
    {
      path: '/confirm',
      name: 'ConfirmPage',
      component: AuthenticationPage,
      extraProps: { tab: 'confirm' },
    },
    {
      path: '/recover-password',
      name: 'PasswordRecoveryPage',
      component: PasswordRecoveryPage,
    },
    {
      path: '/inbox',
      name: 'InboxBasePage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="InboxPage" params={{ tab: 'sales' }} />,
    },
    {
      path: '/inbox/:tab',
      name: 'InboxPage',
      auth: true,
      authPage: 'LoginPage',
      component: InboxPage,
      loadData: pageDataLoadingAPI.InboxPage.loadData,
    },
    {
      path: '/order/:id',
      name: 'OrderPage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="OrderDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/order/:id/details',
      name: 'OrderDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'customer' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'customer' }),
      setInitialValues: pageDataLoadingAPI.TransactionPage.setInitialValues,
    },
    {
      path: '/sale/:id',
      name: 'SalePage',
      auth: true,
      authPage: 'LoginPage',
      component: props => <NamedRedirect name="SaleDetailsPage" params={{ ...props.params }} />,
    },
    {
      path: '/sale/:id/details',
      name: 'SaleDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: TransactionPage,
      extraProps: { transactionRole: 'provider' },
      loadData: params =>
        pageDataLoadingAPI.TransactionPage.loadData({ ...params, transactionRole: 'provider' }),
    },
    {
      path: '/likes',
      name: 'LikedListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: LikedListingsPage,
      loadData: pageDataLoadingAPI.LikedListingsPage.loadData,
    },
    {
      path: '/following',
      name: 'FollowingPage',
      auth: true,
      authPage: 'LoginPage',
      component: FollowingPage,
      loadData: pageDataLoadingAPI.FollowingPage.loadData,
    },
    {
      path: '/listings',
      name: 'ManageListingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ManageListingsPage,
      loadData: pageDataLoadingAPI.ManageListingsPage.loadData,
    },
    {
      path: '/account',
      name: 'AccountSettingsPage',
      auth: true,
      authPage: 'LoginPage',
      component: () => <NamedRedirect name="ContactDetailsPage" />,
    },
    {
      path: '/account/contact-details',
      name: 'ContactDetailsPage',
      auth: true,
      authPage: 'LoginPage',
      component: ContactDetailsPage,
      loadData: pageDataLoadingAPI.ContactDetailsPage.loadData,
    },
    {
      path: '/account/change-password',
      name: 'PasswordChangePage',
      auth: true,
      authPage: 'LoginPage',
      component: PasswordChangePage,
    },
    {
      path: '/account/payments',
      name: 'StripePayoutPage',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/account/payments/:returnURLType',
      name: 'StripePayoutOnboardingPage',
      auth: true,
      authPage: 'LoginPage',
      component: StripePayoutPage,
      loadData: pageDataLoadingAPI.StripePayoutPage.loadData,
    },
    {
      path: '/account/payment-methods',
      name: 'PaymentMethodsPage',
      auth: true,
      authPage: 'LoginPage',
      component: PaymentMethodsPage,
      loadData: pageDataLoadingAPI.PaymentMethodsPage.loadData,
    },
    {
      path: '/terms-of-service',
      name: 'TermsOfServicePage',
      component: TermsOfServicePage,
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicyPage',
      component: PrivacyPolicyPage,
    },
    {
      path: '/native-time-privacy-policy',
      name: 'NativeTimePolicyPage',
      component: NativeTimePrivacyPolicyPage,
    },
    {
      path: '/account-deletion',
      name: 'DeletionPolicyPage',
      component: DeletionPolicyPage,
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/g/:group',
      name: 'StyleguideGroup',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component',
      name: 'StyleguideComponent',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component/:example',
      name: 'StyleguideComponentExample',
      component: StyleguidePage,
    },
    {
      path: '/styleguide/c/:component/:example/raw',
      name: 'StyleguideComponentExampleRaw',
      component: StyleguidePage,
      extraProps: { raw: true },
    },
    {
      path: '/notfound',
      name: 'NotFoundPage',
      component: props => <NotFoundPage {...props} />,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /reset-password endpoint
    {
      path: '/reset-password',
      name: 'PasswordResetPage',
      component: PasswordResetPage ,
    },

    // Do not change this path!
    //
    // The API expects that the application implements /verify-email endpoint
    {
      path: '/verify-email',
      name: 'EmailVerificationPage',
      auth: true,
      authPage: 'LoginPage',
      component: EmailVerificationPage,
      loadData: pageDataLoadingAPI.EmailVerificationPage.loadData,
    },
  ];
};

export default routeConfiguration;
