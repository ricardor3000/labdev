"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Tabs, Tab, TabContent } from "react-bootstrap";

function AboutTwo({ service }) {
  const visibleSections = useMemo(() => {
    if (!service?.sections) return [];

    return service.sections.filter(
      (section) => section.title !== "Conclusión + CTA"
    );
  }, [service]);

  const conclusionSection = useMemo(() => {
    if (!service?.sections) return null;

    return service.sections.find(
      (section) => section.title === "Conclusión + CTA"
    );
  }, [service]);

  const firstSectionKey = visibleSections?.[0]?.title || "section-0";
  const [activeKey, setActiveKey] = useState(firstSectionKey);

  useEffect(() => {
    if (visibleSections?.[0]?.title) {
      setActiveKey(visibleSections[0].title);
    }
  }, [visibleSections]);

  if (!service) return null;

  const activeSection =
    visibleSections.find((section) => section.title === activeKey) ||
    visibleSections[0];

  return (
    <div>
      <style jsx global>{`
        .service-tabs-vertical {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 10px;
        }

        .service-tabs-vertical .nav-item {
          width: 100%;
        }

        .service-tabs-vertical .nav-link {
          width: 100%;
          text-align: left;
        }

        .service-conclusion-row {
          margin-top: 70px;
        }

        .service-conclusion-box {
          padding-top: 35px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          width: 100%;
        }

        .service-conclusion-box h6 {
          margin-bottom: 16px;
          font-size: 28px;
          line-height: 1.15;
        }

        .service-conclusion-box p {
          margin-bottom: 8px !important;
          max-width: 100%;
          line-height: 1.35 !important;
        }

        .service-conclusion-box p:last-child {
          margin-bottom: 0 !important;
        }

        @media (max-width: 767px) {
          .service-conclusion-row {
            margin-top: 45px;
          }

          .service-conclusion-box {
            padding-top: 28px;
          }

          .service-conclusion-box h6 {
            font-size: 24px;
            line-height: 1.12;
          }

          .service-conclusion-box p {
            line-height: 1.3 !important;
            margin-bottom: 7px !important;
          }
        }
      `}</style>

      <div className="rts-about-our-company-h2 rts-section-gap" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2 mt_sm--30">
              <div className="title-area about-company">
                <span>{service.category}</span>

                <h2 className="title">{service.title}</h2>
              </div>

              <div className="about-company-wrapper">
                <p className="disc">{service.summary}</p>

                <div className="rts-tab-style-one">
                  <div className="align-items-start contoler-company">
                    <Tabs
                      activeKey={activeKey}
                      onSelect={(key) => setActiveKey(key)}
                      id={`service-tabs-${service.slug}`}
                      className="mb-3 nav button-area flex-column service-tabs-vertical"
                    >
                      {visibleSections.map((section) => (
                        <Tab
                          key={`${service.slug}-${section.title}`}
                          eventKey={section.title}
                          title={section.title}
                        />
                      ))}
                    </Tabs>

                    {activeSection && (
                      <TabContent>
                        <div className="rts-tab-content-one">
                          {activeSection.paragraphs.map((paragraph, index) => {
                            if (index === 0) {
                              return (
                                <p className="disc" key={index}>
                                  {paragraph}
                                </p>
                              );
                            }

                            return (
                              <div className="check-area" key={index}>
                                <p className="disc">{paragraph}</p>
                              </div>
                            );
                          })}

                          <Link
                            className="rts-btn btn-primary-2 color-h-black"
                            href="https://reuniones.clientify.com/#/AdolfoAliste/lapdev" target="blank"
                          >
                            Solicitar reunión de diagnóstico
                          </Link>
                        </div>
                      </TabContent>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1">
              <div className="about-company-thumbnail">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>

          {conclusionSection && (
            <div className="row service-conclusion-row">
              <div className="col-12">
                <div className="title-area about-company service-conclusion-box">
                 {/*  <h6 className="title">{conclusionSection.title}</h6> */}

                  {conclusionSection.paragraphs.map((paragraph, index) => (
                    <p className="disc" key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutTwo;