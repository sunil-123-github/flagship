import React from 'react'
import './CoreServicesCSS/CoreServicesBox.css'
import { useState } from 'react'
import Design from './CoreServicesIMAGES/design.webp'
import Production from './CoreServicesIMAGES/production.jpg'
import Installing from './CoreServicesIMAGES/download.jpg'
import Maintenace from './CoreServicesIMAGES/maintenace.jpg'
import Servicing from './CoreServicesIMAGES/servicing.jpg'
import Marketing from './CoreServicesIMAGES/marketing.jpg'
import Economics from './CoreServicesIMAGES/economics.webp'
import Audit from './CoreServicesIMAGES/audit.jpg'
import { DesigningSlider } from './Designing/DesigningSlider'

export const CoreServicesBox = () => {

  const [elementState, setElementState] = useState({
    name: 'DESIGN',
    age: "Mechanical design, which is also known as machine design or engineering design, is the process of designing effective parts or components for machinery. Those working in the mechanical design field study how mechanical components operate in various situations in order to create a reliable system. Designing mechanical components is a multi-faceted process that involves creating precise, functional, and efficient parts for machines, devices, and systems. This process encompasses a series of stages, each contributing to the final product's quality and functionality. Designing mechanical components involves a systematic approach to creating functional and efficient parts for various machines, devices, and systems. Here's a step-by-step guide to help you with the process.",
    img: Design
  });

  const handleButton1Click = () => {
    setElementState({
      name: 'DESIGN',
      age: "Mechanical design, which is also known as machine design or engineering design, is the process of designing effective parts or components for machinery. Those working in the mechanical design field study how mechanical components operate in various situations in order to create a reliable system. Designing mechanical components is a multi-faceted process that involves creating precise, functional, and efficient parts for machines, devices, and systems. This process encompasses a series of stages, each contributing to the final product's quality and functionality. Designing mechanical components involves a systematic approach to creating functional and efficient parts for various machines, devices, and systems. Here's a step-by-step guide to help you with the process.",
      img: Design
    });
  };

  const handleButton2Click = () => {
    setElementState({
      name: "PRODCUTION",
      age: "Offering you a complete choice of services which include lavender fragnance oil, pine fragnance oil, mogra perfume, almond fragrance for cream, fragrances for incense sticks and cosmetic and body care products fragrance. The production of mechanical components involves turning design concepts into physical objects through various manufacturing processes. These processes are selected based on factors such as the component's complexity, material properties, required quantities, tolerances, and cost considerations. Here are some common manufacturing methods used in the production of mechanical components. ",
      img: Production
    });
  };

  const handleButton3Click = () => {
    setElementState({
      name: "INSTALLING",
      age: "Installing mechanical components typically involves physically mounting and connecting various parts within a mechanical system. The specific steps and procedures may vary depending on the components you are working with. However, I can provide you with some general guidelines that can be applicable in most cases s one of the four main project departments in the construction sector: static, architectural, electrical and mechanical In recent times, electromechanical electrical installation projects have become almost two working together with almost the foundation. Mechanical installation projects are prepared by mechanical engineers and technical painters. In these projects, which determine the mechanical infrastructure of buildings, industrial facilities, it is stated how the building's heating, cooling, ventilation, fire prevention system will be and the types and powers of these devices and where the clean water and sewage lines of the building will pass.",
      img: Installing
    });
  };

  const handleButton4Click = () => {
    setElementState({
      name: "MAINTENANCE",
      age: "Maintaining mechanical components is essential for their longevity and optimal performance. Here are some general guidelines for maintaining mechanical component Maintaining mechanical components is essential for their longevity and optimal performance. Here are some general guidelines for maintaining mechanical component Maintaining mechanical components is crucial for ensuring the longevity, reliability, and optimal performance of machinery and systems. Regular maintenance helps prevent breakdowns, reduces downtime, and can even enhance overall efficiency. Here's a general overview of how to approach the maintenance of mechanical components",
      img: Maintenace
    });
  };

  const handleButton5Click = () => {
    setElementState({
      name: "SERVICING",
      age: "Mechanical systems are easier to work on but require more regular maintenance. For example mechanical systems will usually need adjustments over time due to cable stretch, as well as periodic re-adjustment due to pad wear (similar to rubber rim brake pads). Servicing mechanical components is a critical aspect of maintaining the functionality and reliability of machinery and systems. Servicing involves a more comprehensive and in-depth approach compared to routine maintenance. It typically includes tasks that go beyond basic checks and adjustments. Here's a detailed description of how to approach the servicing of mechanical components",
      img: Servicing
    });
  };

  const handleButton6Click = () => {
    setElementState({
      name: "MARKETING",
      age: "Marketing engineering was coined to describe the process used by marketers to utilize knowledge-based data in decision-making. The marketing engineering process strives to improve the efficiency and effectiveness of marketing by using information technologies. Marketing mechanical products involves promoting and selling products related to machinery, equipment, and mechanical systems. This can range from industrial machinery and components to consumer products that have mechanical functions. Here's a general outline of how to approach marketing mechanical products Understand your target audience, including their needs, preferences, challenges, and purchasing behavior. Identify the industries or sectors where your mechanical products have the most relevance.",
      img: Marketing
    });
  };

  const handleButton7Click = () => {
    setElementState({
      name: "AUDITING",
      age: "The structural and mechanical audit is an investment by the client to ensure that either new or existing machinery is safe to operate, complies with relevant codes, and can achieve the required operational parameters.producing a product that meets your company's specifications, addressing costly disruptions, and preventing (further) costly disruptions once production is launched The structural and mechanical audit is an investment by the client to ensure that either new or existing machinery is safe to operate, complies with relevant codes.Auditing a mechanical company involves conducting a thorough and systematic examination of its financial, operational, and management processes to assess compliance, effectiveness, and efficiency. The goal of an audit is to provide an independent evaluation of the company's activities and to ensure that it is operating in accordance with relevant laws, regulations, and industry standards. Here's how the auditing process for a mechanical company can be approached ",
      img: Audit
    });
  };

  const handleButton8Click = () => {
    setElementState({
      name: "FINANCE",
      age: "Engineering economics is a field that addresses the dynamic environment of economic calculations and principles through the prism of engineering. It is a fundamental skill that all successful engineering firms employ in order to retain competitive advantage and market share. The financial aspect of a mechanical company is a crucial component of its overall operations. It involves managing finances, budgeting, tracking expenses, generating revenue, and ensuring financial stability. Here are some key financial aspects that a mechanical company needs to consider",
      img: Economics
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <button type="button" class="btn btn-info btn-radius inherit m-2" onClick={handleButton1Click}>
            <div>
              <i class="bi bi-cc-square-fill"></i> <b>Desiging</b>
            </div>

          </button>
          <button type="button" class="btn btn-secondary btn-radius inherit m-2" onClick={handleButton2Click}>

            <div>
              <i class="bi bi-fan"></i> <b>Production</b>
            </div>

          </button>
          <button type="button" class="btn btn-success btn-radius inherit m-2" onClick={handleButton3Click}>
            <div>
              <i class="bi bi-cc-square-fill"></i> <b>Installing</b>
            </div>

          </button>
          <button type="button" class="btn btn-danger btn-radius inherit m-2" onClick={handleButton4Click}>

            <div>
              <i class="bi bi-fan"></i> <b>Maintenace</b>
            </div>

          </button>  <button type="button" class="btn btn-radius btn-warning inherit m-2" onClick={handleButton5Click}>
            <div>
              <i class="bi bi-cc-square-fill"></i> <b>Servicing</b>
            </div>

          </button>
          <button type="button" class="btn btn-light btn-radius inherit m-2" onClick={handleButton6Click}>

            <div>
              <i class="bi bi-fan"></i> <b>Marketing</b>
            </div>

          </button>
          <button type="button" class="btn btn-radius btn-success inherit m-2" onClick={handleButton7Click}>
            <div>
              <i class="bi bi-cc-square-fill"></i> <b>Auditing</b>
            </div>

          </button>
          <button type="button" class="btn btn-radius btn-dark inherit m-2" onClick={handleButton8Click}>

            <div>
              <i class="bi bi-fan"></i> <b>Finance</b>
            </div>

          </button>

        </div>
        <div className="col-8">
          <h2 className='heading-color'><b>{elementState.name}</b></h2>
          <img src={elementState.img} alt="" width="445" height="230" className='mb-3 img-shadow' />
          <p><b>{elementState.age}</b></p>
        </div>
      </div>
      <hr />
     
     
    </div>
  )
}
