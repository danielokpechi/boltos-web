import type { Metadata } from 'next';
import { A } from '@/components/A';
import { cx } from '@/lib/cx';
import { routes } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

const toc = [
  { id: 'what', n: '1', t: 'What Are Cookies' },
  { id: 'how', n: '2', t: 'What and How We Use Cookies' },
  { id: 'customise', n: '3', t: 'Customising Your Cookie Preferences' },
  { id: 'contact', n: '4', t: 'More Information and Contact' },
];

const typeTable = [
  ['Strictly necessary cookies', 'These cookies are essential to enable you to use the features of our services, such as maintaining your playlist. Without these cookies, services you have asked for, such as e-billing, cannot be provided. In summary, these cookies enable the services you have specifically asked for and make using our services possible.'],
  ['Login-related cookies', 'We use cookies when you are logged in so that we can remember this. This prevents you from having to log in every time you visit a new page. These cookies are typically removed or cleared when you log out, to ensure that you can only access restricted features and areas while logged in.'],
  ['Email and newsletter cookies', 'This site offers newsletter and email subscription services, and cookies may be used to remember whether you are already registered and whether to show certain notifications that are only valid for subscribed or unsubscribed users.'],
  ['Order processing cookies', 'This site offers e-commerce and payment facilities, and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.'],
  ['Survey cookies', 'From time to time we offer user surveys and questionnaires to provide you with insights and helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part, or to provide you with accurate results after you change pages.'],
  ['Form cookies', 'When you submit data through a form, such as those found on contact pages or comment forms, cookies may be set to remember your details for future correspondence.'],
  ['Site preference cookies', 'To provide you with a good experience on this site, we offer the ability to set your preferences for how the site runs. To remember your preferences, we need to set cookies so that this information can be retrieved whenever you interact with a page that is affected by them.'],
  ['Third-party cookies', 'In some cases we also use cookies provided by trusted third parties. This site uses Google Analytics, one of the most widespread and trusted analytics solutions on the web, to help us understand how you use the site and how we can improve your experience. These cookies may track things such as how long you spend on the site and which pages you visit, so that we can continue to produce engaging content. We may also use social media buttons or plugins that allow you to connect with your social network. For these to work, social media sites will set cookies through our site, which may be used to enhance your profile on their site or contribute to the data they hold, for the purposes outlined in their respective privacy policies.'],
  ['Account-related cookies', 'If you create an account with us, we will use cookies for the management of the signup process and for general administration. These cookies will usually be deleted when you log out, though in some cases they may remain afterwards in order to remember your site preferences while logged out.'],
];

const classTable = [
  ['Strictly necessary cookies', 'We use these cookies to provide the service you request. Without them, the functionality on our platforms would not be possible; they are an integral part of our services.'],
  ['Performance and analytics cookies, which can include survey cookies and login performance cookies', 'We use these cookies to understand how well our platform is performing and how we can improve it. These cookies are essential for upgrading our current services.'],
  ['Functional cookies, which can include site preference cookies and account-related cookies', 'We use these cookies to tailor our services to you. You have full control over them through our in-platform banner and settings.'],
  ['Third-party cookies, such as Google Analytics', 'We may allow our partners to use cookies or similar technologies on or outside our Services for the purposes identified above.'],
];

export const metadata: Metadata = {
  title: "Cookie Policy, BoltOS",
  description: "Why BoltOS uses cookies, how it applies to you, and how to control them.",
};

export default function Page() {
  return (
    <>
    <div className={cn('cp')}>
      <div className={cn('cp-inner')}>
        <header className={cn('cp-header')}>
          <div className={cn('cp-eyebrow')}><span className={cn('cp-eyebrow-rule')}></span><span>Legal</span></div>
          <h1>Cookie Policy</h1>
          <p className={cn('cp-updated')}>Last updated: 12 November 2025</p>
          <p className={cn('cp-lede')}>Welcome to our Cookie Policy ("Policy").</p>
          <p className={cn('cp-lede')}>This Policy will help you understand why we use cookies, how this applies to you, and how you can control the cookies you accept.</p>
        </header>

        <div className={cn('cp-layout')}>
          <aside className={cn('cp-toc')} aria-label="Contents">
            <div className={cn('cp-toc-label')}>Contents</div>
            <nav>
              <ol>
                {toc.map((s, __i) => <li key={__i}><A href={`#${s.id}`}>{s.n}. {s.t}</A></li>)}
                <li className={cn('cp-toc-extra')}><A href={routes.privacy}>Privacy Policy</A></li>
              </ol>
            </nav>
          </aside>

          <article className={cn('cp-body')}>
            <section id="what">
              <h2>1. What Are Cookies</h2>
              <p>1.1 Cookies, also known as browser cookies or tracking cookies, are small, often encrypted text files located in browser directories. They are used by web developers to help users navigate websites efficiently and to perform certain functions. The term also encompasses a range of technologies, including but not limited to:</p>
              <ul>
                <li>(a) pixel tags, which indicate whether a page or email has been viewed;</li>
                <li>(b) mobile device identifiers; and</li>
                <li>(c) web storage used on both desktop and mobile devices.</li>
              </ul>
              <p>1.2 Cookies can generally be broken down into two categories:</p>
              <ul>
                <li>(a) Session cookies, which expire once you close the website; and</li>
                <li>(b) Persistent cookies, which stay attached to your browser until you delete them.</li>
              </ul>
              <p>1.3 There is also a distinction between cookies set by the website you visit, known as first-party cookies, and third-party cookies. Third-party cookies are usually set by the partners of the site you visit; Google Analytics is a good example.</p>
              <p>1.4 We use a combination of cookies throughout our platforms to improve our services, as detailed in this Policy. Cookies also help us remember your preferences.</p>
            </section>

            <section id="how">
              <h2>2. What and How We Use Cookies</h2>
              <p>The following table shows the different cookies we use in order to provide you with the best possible service. If you have any questions regarding the cookies we use, please refer to the contact section of this Policy.</p>
              <div className={cn('cp-table-wrap')}>
                <table className={cn('cp-table')}>
                  <thead><tr><th scope="col">Cookie type</th><th scope="col">Purpose</th></tr></thead>
                  <tbody>
                    {typeTable.map(([type, purpose]) => (
                      <tr><th scope="row">{type}</th><td>{purpose}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>The following table outlines how we use the different classes of cookies to maintain and enhance our services, and how they apply to you.</p>
              <div className={cn('cp-table-wrap')}>
                <table className={cn('cp-table')}>
                  <thead><tr><th scope="col">Cookie class</th><th scope="col">Purpose and explanation</th></tr></thead>
                  <tbody>
                    {classTable.map(([cls, purpose]) => (
                      <tr><th scope="row">{cls}</th><td>{purpose}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="customise">
              <h2>3. Customising Your Cookie Preferences</h2>
              <p>We want you to have as much control over your cookie traceability as possible. If you want to check or change what types of cookies you accept, this can be done within your browser settings or directly from our site. Please note that some third-party partners and affiliates, including advertising networks and providers of external services such as web traffic analysis, may have cookie policies of their own over which we have no control. Should you wish to change your third-party cookie preferences, you can do so in your browser settings or on the sites of those third-party providers.</p>
            </section>

            <section id="contact">
              <h2>4. More Information and Contact</h2>
              <p>We may make changes to this Policy from time to time.</p>
              <p>To understand how we use your personal data, please see our <A href={routes.privacy}>Privacy Policy</A>.</p>
              <p>If you are looking for more information, you can contact us at the address and email below:</p>
              <p><em>Bolt Global Media UK Ltd, Venture X White City, 1 Lyric Square, London, W6 0NB, United Kingdom</em></p>
              <p><A href="mailto:contact@bolt.global">contact@bolt.global</A></p>
            </section>
          </article>
        </div>
      </div>
    </div>
    </>
  );
}
