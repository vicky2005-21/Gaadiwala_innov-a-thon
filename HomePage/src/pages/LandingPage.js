import Header from "../components/Header";
import SectionText2 from "../components/SectionText2";
import Section7 from "../components/Section7";
import Section6 from "../components/Section6";
import Section5 from "../components/Section5";
import Section4 from "../components/Section4";
import FooterComponentsColumn from "../components/FooterComponentsColumn";
import styles from "./LandingPage.module.css";
import { Link } from 'react-router-dom'; 

const LandingPage = () => {
  return (
    <div className={styles.landingPage6}>
      <Header />
      <section className={styles.section}>
        <div className={styles.col}>
          <SectionText2 />
        </div>
        <div className={styles.wrapperCol}>
          <img
            className={styles.colIcon}
            loading="lazy"
            alt=""
            src="/col.svg"
          />
        </div>
      </section>
      <Section7 />
      <Section6 />
      <Section5 />
      <section className={styles.section1}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <div className={styles.mainHeadline}>
              Building apps just got easier
            </div>
            <h1 className={styles.secondaryHeadline}>
              Answers to your questions
            </h1>
          </div>
          <div className={styles.paragraph}>
            Nunc aliquam dignissim tristique donec adipiscing aliquam sed
            auctor. Dignissim nisl viverra tempus odio tellus urna nulla
            interdum. Nulla egestas purus faucibus tortor auctor nullam purus.
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer}>
              <a href="http://localhost:3000/" className={styles.buttonLink}>
                  <b className={styles.buttonText}>Get Started</b>
              </a>
              </div>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button2}>
              <img
                className={styles.iconJamIconsOutlineL2}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL3}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.button3}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL5}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
              <div className={styles.badge}>
                <div className={styles.text}>9</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faqItem}>
            <div className={styles.toggle}>
              <div className={styles.question}>ADD SOME QUESTIONS?</div>
              <img
                className={styles.iconIoniconsFilledChe}
                alt=""
                src="/icon--ionicons--filled--chevrondown.svg"
              />
            </div>
            <div className={styles.text1}>
              <div className={styles.answer}>
                Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
                consequat donec id fermentum. Metus, tortor tellus ornare
                mauris, convallis quis. Tristique vulputate enim, vitae sodales
                nisl enim est. Ut diam volutpat, enim convallis. Pulvinar
                posuere gravida vitae fringilla eu tellus neque est feugiat.
              </div>
            </div>
          </div>
          <div className={styles.faqItem1}>
            <div className={styles.toggle1}>
              <div className={styles.question1}>ADD SOME QUESTIONS?</div>
              <img
                className={styles.iconIoniconsFilledChe1}
                alt=""
                src="/icon--ionicons--filled--chevrondown.svg"
              />
            </div>
            <div className={styles.text2}>
              <div className={styles.answer1}>
                Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
                consequat donec id fermentum. Metus, tortor tellus ornare
                mauris, convallis quis. Tristique vulputate enim, vitae sodales
                nisl enim est. Ut diam volutpat, enim convallis. Pulvinar
                posuere gravida vitae fringilla eu tellus neque est feugiat.
              </div>
            </div>
          </div>
          <div className={styles.faqItem2}>
            <div className={styles.toggle2}>
              <div className={styles.question2}>ADD SOME QUESTIONS?</div>
              <img
                className={styles.iconIoniconsFilledChe2}
                alt=""
                src="/icon--ionicons--filled--chevrondown.svg"
              />
            </div>
            <div className={styles.text3}>
              <div className={styles.answer2}>
                Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
                consequat donec id fermentum. Metus, tortor tellus ornare
                mauris, convallis quis. Tristique vulputate enim, vitae sodales
                nisl enim est. Ut diam volutpat, enim convallis. Pulvinar
                posuere gravida vitae fringilla eu tellus neque est feugiat.
              </div>
            </div>
          </div>
          <div className={styles.faqItem3}>
            <div className={styles.toggle3}>
              <div className={styles.question3}>ADD SOME QUESTIONS?</div>
              <img
                className={styles.iconIoniconsFilledChe3}
                alt=""
                src="/icon--ionicons--filled--chevrondown.svg"
              />
            </div>
            <div className={styles.text4}>
              <div className={styles.answer3}>
                Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
                consequat donec id fermentum. Metus, tortor tellus ornare
                mauris, convallis quis. Tristique vulputate enim, vitae sodales
                nisl enim est. Ut diam volutpat, enim convallis. Pulvinar
                posuere gravida vitae fringilla eu tellus neque est feugiat.
              </div>
            </div>
          </div>
          <div className={styles.faqItem4}>
            <div className={styles.toggle4}>
              <div className={styles.question4}>ADD SOME QUESTIONS?</div>
              <img
                className={styles.iconIoniconsFilledChe4}
                alt=""
                src="/icon--ionicons--filled--chevrondown.svg"
              />
            </div>
            <div className={styles.text5}>
              <div className={styles.answer4}>
                Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
                consequat donec id fermentum. Metus, tortor tellus ornare
                mauris, convallis quis. Tristique vulputate enim, vitae sodales
                nisl enim est. Ut diam volutpat, enim convallis. Pulvinar
                posuere gravida vitae fringilla eu tellus neque est feugiat.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section4 />
      <footer className={styles.footer}>
        <div className={styles.columns}>
          <FooterComponentsColumn
            linkName="Categories"
            linkName1="User Interface"
            linkName2="User Experience"
            linkName3="Digital Media"
            linkName4="Lifestyle"
            linkName5="Programming"
            linkName6="Animation"
          />
          <FooterComponentsColumn
            linkName="Product"
            linkName1="Pricing"
            linkName2="Overview"
            linkName3="Browse"
            linkName4="Accessibility"
            linkName5="Five"
            linkName6="Changelog"
            propMinWidth="57px"
            propMinWidth1="50px"
            propMinWidth2="65px"
            propMinWidth3="54px"
            propMinWidth4="unset"
            propMinWidth5="29px"
            propMinWidth6="77px"
          />
          <FooterComponentsColumn
            linkName="Solutions"
            linkName1="Brainstorming"
            linkName2="Ideation"
            linkName3="Wireframing"
            linkName4="Research"
            linkName5="Design"
            linkName6="Concept"
            propMinWidth="68px"
            propMinWidth1="unset"
            propMinWidth2="58px"
            propMinWidth3="unset"
            propMinWidth4="67px"
            propMinWidth5="49px"
            propMinWidth6="60px"
          />
          <FooterComponentsColumn
            linkName="Resources"
            linkName1="Help Center"
            linkName2="Blog"
            linkName3="Tutorials"
            linkName4="FAQs"
            linkName5="Community"
            linkName6="Events"
            propMinWidth="76px"
            propMinWidth1="unset"
            propMinWidth2="32px"
            propMinWidth3="62px"
            propMinWidth4="38px"
            propMinWidth5="unset"
            propMinWidth6="48px"
          />
          <FooterComponentsColumn
            linkName="Support"
            linkName1="Contact Us"
            linkName2="Developers"
            linkName3="Documentation"
            linkName4="Integrations"
            linkName5="Reports"
            linkName6="Webinar"
            propMinWidth="58px"
            propMinWidth1="79px"
            propMinWidth2="unset"
            propMinWidth3="unset"
            propMinWidth4="unset"
            propMinWidth5="56px"
            propMinWidth6="59px"
          />
          <FooterComponentsColumn
            linkName="Company"
            linkName1="About"
            linkName2="Press"
            linkName3="Events"
            linkName4="Careers"
            linkName5="Customers"
            linkName6="Partners"
            propMinWidth="68px"
            propMinWidth1="43px"
            propMinWidth2="41px"
            propMinWidth3="48px"
            propMinWidth4="56px"
            propMinWidth5="78px"
            propMinWidth6="61px"
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.logoContainer}>
            <div className={styles.logoGrey}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <h3 className={styles.zoomerr}>GaadiWala</h3>
            </div>
          </div>
          <div className={styles.companyname202x}>
            @ 2024 All rights reserved.
          </div>
          <div className={styles.footerComponentsverticalMen}>
            <div className={styles.footerComponentslinkfooter}>
              <img
                className={styles.iconJamIconsOutlineL6}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName}>Terms</div>
              <div className={styles.badge1}>
                <img
                  className={styles.iconJamIconsOutlineL7}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer3}>
                  <div className={styles.buttonText3}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL8}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter1}>
              <img
                className={styles.iconJamIconsOutlineL9}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName1}>Privacy</div>
              <div className={styles.badge2}>
                <img
                  className={styles.iconJamIconsOutlineL10}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer4}>
                  <div className={styles.buttonText4}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel1}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL11}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter2}>
              <img
                className={styles.iconJamIconsOutlineL12}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName2}>Support</div>
              <div className={styles.badge3}>
                <img
                  className={styles.iconJamIconsOutlineL13}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer5}>
                  <div className={styles.buttonText5}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel2}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL14}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter3}>
              <img
                className={styles.iconJamIconsOutlineL15}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName3}>About</div>
              <div className={styles.badge4}>
                <img
                  className={styles.iconJamIconsOutlineL16}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer6}>
                  <div className={styles.buttonText6}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel3}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL17}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter4}>
              <img
                className={styles.iconJamIconsOutlineL18}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName4}>Resources</div>
              <div className={styles.badge5}>
                <img
                  className={styles.iconJamIconsOutlineL19}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer7}>
                  <div className={styles.buttonText7}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel4}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL20}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter5}>
              <img
                className={styles.iconJamIconsOutlineL21}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName5}>Contact</div>
              <div className={styles.badge6}>
                <img
                  className={styles.iconJamIconsOutlineL22}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer8}>
                  <div className={styles.buttonText8}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel5}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL23}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter6}>
              <img
                className={styles.iconJamIconsOutlineL24}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName6}>Seven</div>
              <div className={styles.badge7}>
                <img
                  className={styles.iconJamIconsOutlineL25}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer9}>
                  <div className={styles.buttonText9}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel6}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL26}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter7}>
              <img
                className={styles.iconJamIconsOutlineL27}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName7}>Eight</div>
              <div className={styles.badge8}>
                <img
                  className={styles.iconJamIconsOutlineL28}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer10}>
                  <div className={styles.buttonText10}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel7}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL29}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter8}>
              <img
                className={styles.iconJamIconsOutlineL30}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName8}>Nine</div>
              <div className={styles.badge9}>
                <img
                  className={styles.iconJamIconsOutlineL31}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer11}>
                  <div className={styles.buttonText11}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel8}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL32}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
            <div className={styles.footerComponentslinkfooter9}>
              <img
                className={styles.iconJamIconsOutlineL33}
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className={styles.linkName9}>Ten</div>
              <div className={styles.badge10}>
                <img
                  className={styles.iconJamIconsOutlineL34}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className={styles.textContainer12}>
                  <div className={styles.buttonText12}>BETA</div>
                </div>
                <img
                  className={styles.iconIconoirCancel9}
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL35}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
          </div>
          <div className={styles.footerComponentssocialIcons}>
            <img
              className={styles.iconJamIconsOutlineL36}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--youtube1.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL37}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--facebook1.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL38}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--twitter1.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL39}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--instagram1.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL40}
              loading="lazy"
              alt=""
              src="/icon--jamicons--outline--logos--linkedin1.svg"
            />
            <img
              className={styles.iconBootstrapOutlineL}
              alt=""
              src="/icon--bootstrap--outline--logos--medium.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL41}
              alt=""
              src="/icon--jamicons--outline--logos--pinterest.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL42}
              alt=""
              src="/icon--jamicons--outline--logos--behance.svg"
            />
            <img
              className={styles.iconJamIconsOutlineL43}
              alt=""
              src="/icon--jamicons--outline--logos--dribbble.svg"
            />
            <img
              className={styles.iconBootstrapOutlineL1}
              alt=""
              src="/icon--bootstrap--outline--logos--tiktok.svg"
            />
          </div>
          <div className={styles.appDownload}>
            <div className={styles.button1}>
              <img
                className={styles.appStoreFilled}
                alt=""
                src="/app-store--filled.svg"
              />
            </div>
            <div className={styles.button4}>
              <div className={styles.googlePlay}>
                <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-1.svg"
                />
                <div className={styles.getItOn}>GET IT ON</div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-2.svg"
                />
                <img
                  className={styles.vectorIcon4}
                  alt=""
                  src="/vector-3.svg"
                />
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/vector-5.svg"
                />
                <img
                  className={styles.vectorIcon7}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.disclaimer}>
          <div className={styles.disclaimer1}>
            In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum,
            non. Tellus mattis enim volutpat habitasse. Semper posuere lectus
            consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam
            eget volutpat vestibulum elit. Blandit aliquet bibendum pellentesque
            turpis id penatibus faucibus id nunc. Aenean rhoncus, erat
            pellentesque eu. Quis morbi condimentum phasellus in ultricies eu
            amet.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
