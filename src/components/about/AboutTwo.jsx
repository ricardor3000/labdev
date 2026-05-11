"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Tabs, Tab, TabContent } from "react-bootstrap";

function AboutTwo({ service }) {
  const firstSectionKey = service?.sections?.[0]?.title || "section-0";
  const [activeKey, setActiveKey] = useState(firstSectionKey);

  useEffect(() => {
    if (service?.sections?.[0]?.title) {
      setActiveKey(service.sections[0].title);
    }
  }, [service]);

  if (!service) return null;

  const activeSection =
    service.sections.find((section) => section.title === activeKey) ||
    service.sections[0];

  const getSectionNumber = (index) => String(index + 1).padStart(2, "0");

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
      `}</style>

      <div className="rts-about-our-company-h2 rts-section-gap" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2 mt_sm--30">
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
                      {service.sections.map((section, index) => (
                        <Tab
                          key={`${service.slug}-${section.title}`}
                          eventKey={section.title}
                          title={`${getSectionNumber(index)}. ${section.title}`}
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
                                {/* <i className="fas fa-check-circle" /> */}
                                <p className="disc">{paragraph}</p>
                              </div>
                            );
                          })}

                          <Link
                            className="rts-btn btn-primary-2 color-h-black"
                            href={`/service-details/${service.slug}`}
                          >
                            Ver servicio
                          </Link>
                        </div>
                      </TabContent>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-1">
              <div className="about-company-thumbnail">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTwo;