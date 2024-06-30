import React from "react";
import "../App.css";
import CTA from "../CTA/cta";
import { IonIcon } from "@ionic/react";

const Body = () => {
  return (
    <main>
      <article>
        <section class="about" id="about">
          <div class="container">
            <div class="about-top">
              <h2 class="h2 section-title">
                Digital Marketing Services We Offer
              </h2>

              <p class="section-text">
                Need a hand with digital marketing? That's what we're here for!
                From creating engaging websites and getting your site to rank
                higher in searches to managing your social media with flair, we
                love helping businesses like yours stand out. Here are the key
                services we offer to make your digital marketing efforts
                successful and stress-free:
              </p>

              <ul class="about-list">
                <li>
                  <div class="about-card">
                    <div class="card-icon"></div>

                    <h3 class="h3 card-title">Website Development</h3>

                    <p class="card-text">
                      At Weforbrands, we partner with you to fully understand
                      your business. Our team is skilled in a wide variety of
                      CMS platforms and coding languages, and we know how to
                      make websites work better in many ways. We're known for
                      having one of the best web development teams around, ready
                      to create a personalized plan that fits exactly what you
                      need. Whether you want to draw more visitors, update your
                      content, or secure your site, we’re here to help boost
                      your online presence.
                    </p>
                  </div>
                </li>

                <li>
                  <div class="about-card">
                    <div class="card-icon"></div>

                    <h3 class="h3 card-title">
                      Search Engine Optimization (SEO)
                    </h3>

                    <p class="card-text">
                      Our SEO strategy is designed to make your website more
                      visible and get it to the top of search results. We use
                      safe and approved SEO methods, along with detailed
                      analytics and keyword research, to make your site more
                      noticeable. By tweaking your website's content and layout,
                      we help it attract more attention from search engines. Our
                      goal is to build strong links and improve your site's
                      credibility with on-site, off-site, and local SEO. This
                      will help bring more visitors to your website.
                    </p>
                  </div>
                </li>

                <li>
                  <div class="about-card">
                    <div class="card-icon"></div>

                    <h3 class="h3 card-title">Social Media Marketing</h3>

                    <p class="card-text">
                      Social media opens doors to new customers and deeper
                      connections. Our approach taps into the latest trends and
                      platforms to talk directly to your audience. We take care
                      of your social media from top to bottom—boosting your
                      visibility online, driving sales, and fostering
                      connections. Expect everything, from creating fresh
                      content to running targeted ad campaigns and monitoring
                      engagement.
                    </p>
                  </div>
                </li>

                <li>
                  <div class="about-card">
                    <div class="card-icon">
                      <IonIcon name="rocket-outline"></IonIcon>
                    </div>

                    <h3 class="h3 card-title">Content Marketing</h3>

                    <p class="card-text">
                      We create content that matters. Our content marketing
                      efforts are designed to produce and distribute
                      high-quality, relevant content that resonates most with
                      your target market. From insightful blogs and compelling
                      videos to informative infographics and engaging
                      newsletters, we pinpoint the best ways to reach your
                      audience. Our goal is to enhance your brand’s presence and
                      credibility and guide your audience toward profitable
                      actions.
                    </p>
                  </div>
                </li>

                <li>
                  <div class="about-card">
                    <div class="card-icon">
                      <IonIcon name="rocket-outline"></IonIcon>
                    </div>

                    <h3 class="h3 card-title">Digital Branding</h3>

                    <p class="card-text">
                      Digital branding is all about establishing a powerful,
                      unified presence for your brand online. We develop a
                      signature visual style and a unique brand voice that sets
                      you apart. Our approach involves getting to know the heart
                      of your business—its goals, values, and character—and
                      translating these into compelling digital designs and
                      effective marketing materials that speak directly to your
                      audience. This ensures that every interaction with your
                      brand is impactful and memorable.
                    </p>
                  </div>
                </li>

                <li>
                  <div class="about-card">
                    <div class="card-icon">
                      <IonIcon name="rocket-outline"></IonIcon>
                    </div>

                    <h3 class="h3 card-title">Press Releases</h3>

                    <p class="card-text">
                      Our press releases deliver your news effectively to keep
                      stakeholders updated and capture media interest. We
                      distribute your announcements widely on social media,
                      industry forums, online blogs, and through traditional
                      media channels. This comprehensive coverage ensures that
                      your message is heard loud and clear across diverse
                      audiences.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <CTA />
          </div>
        </section>

        <section class="features" id="features">
          <div class="container">
            <ul class="features-list">
              <li class="features-item">
                <figure class="features-item-banner">
                  <img
                    src="./assets/images/agency3.webp"
                    alt="feature banner"
                  />
                </figure>

                <div class="feature-item-content">
                  <h3 class="h2 item-title">Streamlining Your Costs</h3>

                  <p class="item-text">
                    We at WeForBrands recognize the value of affordable options
                    that meet your ongoing budgetary requirements. Our
                    dedication to affordability is combined with an open pricing
                    structure that guarantees you always know what you're
                    getting.
                  </p>
                </div>
              </li>

              <li class="features-item">
                <figure class="features-item-banner">
                  <img
                    src="./assets/images/agency6.webp"
                    alt="feature banner"
                  />
                </figure>

                <div class="feature-item-content">
                  <h3 class="h2 item-title">
                    Transparent Pricing, Measurable Value
                  </h3>

                  <p class="item-text">
                    We take pleasure in providing clear, uncomplicated pricing
                    to assist you in controlling your costs without sacrificing
                    quality. By using our services, you can track the efficiency
                    of every dollar you spend by investing in observable,
                    quantifiable results. We're committed to offering
                    high-quality services that directly support the expansion
                    and success of your company, making sure your investment in
                    our digital know-how pays off.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Body;
