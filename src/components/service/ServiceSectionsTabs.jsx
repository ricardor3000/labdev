"use client";

import React, { useState } from "react";
import { Tabs, Tab, TabContent } from "react-bootstrap";

function ServiceSectionsTabs({ sections }) {
  const [activeKey, setActiveKey] = useState("section-0");

  const activeSectionIndex = Number(activeKey.replace("section-", ""));
  const activeSection = sections[activeSectionIndex];

  return (
    <div className="about-company-wrapper mt--30">
      <div className="rts-tab-style-one">
        <div className="align-items-start contoler-company">
          <Tabs
              activeKey={activeKey}
              onSelect={(key) => setActiveKey(key)}
              id="service-details-tabs"
              className="mb-3 nav button-area flex-column"
            >
            {sections.map((section, index) => (
              <Tab
                key={index}
                eventKey={`section-${index}`}
                title={`${String(index + 1).padStart(2, "0")}. ${section.title}`}
              />
            ))}
          </Tabs>

          {activeSection && (
            <TabContent>
              {/* start tab content */}
              <div className="rts-tab-content-one">
                <h4 className="title mb--20">
                  {activeSection.title}
                </h4>

                {activeSection.paragraphs.map((paragraph, index) => {
                  if (index === 0) {
                    return (
                      <p key={index} className="disc">
                        {paragraph}
                      </p>
                    );
                  }

                  return (
                    <div className="check-area" key={index}>
                     {/*  <i className="fas fa-check-circle" /> */}
                      <p className="disc">
                        {paragraph}
                      </p>
                    </div>
                  );
                })}
              </div>
              {/* start tab content End */}
            </TabContent>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceSectionsTabs;