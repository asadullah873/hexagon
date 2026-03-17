import type { StaticImageData } from "next/image";

// Import images (change .jpg to .png if your files are png)
import RentalImg from "@/assets/services/rental.png";
import SalesImg from "@/assets/services/sales.png";
import RepairImg from "@/assets/services/repair.png";
import InstallationImg from "@/assets/services/installation.png";
import EngineeringImg from "@/assets/services/engineering.png";
import LicensingImg from "@/assets/services/license.png";

export type ServiceKey =
  | "rental"
  | "sales"
  | "repair"
  | "installation"
  | "engineering"
  | "licensing";

export type ServiceDef = {
  slug: ServiceKey;
  title: string;
  image: StaticImageData;
  tagline: string;
  body: string[];
};

export const SERVICES: Record<ServiceKey, ServiceDef> = {
  rental: {
    slug: "rental",
    title: "Rental",
    image: RentalImg,
    tagline: "Scaffold Rental Newark NJ",
    body: [
      "Hexagon Scaffolding delivers reliable Scaffold Rental Newark NJ solutions built for demanding construction environments. We supply secure access systems for commercial buildings, residential projects and industrial sites across Newark, NJ, New Jersey and New York. Each scaffold rental undergoes strict inspection and load testing before dispatch. This keeps your project compliant and your workforce protected.",
      "Safe access improves productivity on every level. Our Access Scaffold Rental Newark NJ systems create stable platforms for multi-story operations. Crews move materials efficiently. Supervisors maintain clear oversight.We configure every structure according to site layout and load capacity. This planning prevents imbalance and reduces operational delays. From Newark, NJ projects to surrounding New Jersey developments. Our access scaffolds maintain strength under daily use.",
      "Exterior restoration and façade work demand reliable suspended systems. Our Swing Stage Rental Newark NJ service provides engineered platforms designed for vertical precision. Each unit includes certified rigging equipment and high performance motors. We also provide Swing Scaffold Rental New Jersey contractors trust for high rise access. For projects extending into New York. Our Electric Scaffold Rental New York systems deliver smooth vertical control and code compliant operation. Every swing stage installation includes anchorage inspection and balance testing. This ensures safe suspension at all working heights",
      "Challenging structures require flexible access solutions. Our Rope Scaffold Rental NJ systems adapt to confined or irregular building designs. Secure tie-backs maintain platform stability. We also support vertical transport with R&G Hoist Rental New York equipment. This improves material movement while reducing manual handling risks.",
      "Different projects require specialized scaffold configurations. We supply: Tube & Clamp Scaffold Rental NJ for custom frameworks and structural modificationsC-Hook Scaffold Rental New Jersey for reinforced and heavy duty access supportThese systems adjust to complex architectural designs without compromising load performance.",
      "Hexagon Scaffolding coordinates timely delivery, structured setup planning and organized dismantling. Our rental inventory remains maintained, safety labeled and deployment ready. Contractors across Newark, NJ and surrounding New Jersey regions rely on our scaffold rental expertise for consistent structural support",
      "Strong access systems protect workers and timelines. That commitment drives every scaffold rental we provide."
    ],
  },
  sales: {
    slug: "sales",
    title: "Sales",
    image: SalesImg,
    tagline: "Scaffolding Sales Newark NJ",
    body: [
      "Hexagon Scaffolding delivers premium Scaffolding Sales Newark NJ solutions built for strength, compliance and long term performance. Contractors across Newark, NJ invest in equipment that withstands demanding site conditions while meeting strict safety standards. We supply durable scaffold systems engineered for commercial builds, residential developments,façade restoration and industrial projects",
      "As a trusted Scaffold Supplier New Jersey, we provide frame scaffolding, system scaffolds, tube and clamp systems and custom configurations tailored to your project scope. Each component meets load bearing requirements and undergoes quality inspection before distribution. This commitment ensures your crews work on stable platforms that support productivity without compromise",
      "Construction timelines demand dependable materials. Our Scaffolding Equipment Sales New York service supports contractors managing multi-state projects with seamless equipment access. From Newark, NJ to job sites throughout New Jersey and New York. Our scaffold inventory aligns with evolving construction demands",
      "We supply high performance Scaffold Accessories Newark NJ contractors rely on for complete system integration. Adjustable base plates, guardrails, cross braces, coupling pins and planks integrate smoothly into existing structures. These accessories strengthen overall framework stability while maintaining adaptability for unique site layouts",
      "Safety drives every construction environment. As a reliable Safety Gear Supplier Newark NJ we provide protective helmets, harnesses, lanyards, guardrail systems and OSHA compliant solutions. Our Life Line Safety Equipment NJ inventory supports fall protection planning for elevated worksites, reinforcing secure access at every level.",
      "Structural integrity depends on quality hardware. We supply heavy duty Construction Bolts Newark NJ builders trust for secure scaffold assembly. Each bolt meets performance standards to maintain joint strength and structural alignment.",
      "Exterior finishing and façade projects require specialized anchoring solutions. As an established EFIS Hook Supplier New York. We provide durable hooks designed to support insulation and finishing systems on elevated structures. These components streamline exterior installation processes while maintaining secure positioning.",
      "Every project demands equipment that performs consistently under pressure. Our Scaffolding Sales Newark NJ service focuses on long term durability, easy assembly and code compliance. Contractors choose reliable scaffold systems because they strengthen worker confidence and support structured progress from foundation to final inspection.",
      "Hexagon Scaffolding strengthens construction operations across Newark NJ, New Jersey and New York by supplying professional grade scaffold systems and safety equipment. We align our products with industry standards, helping contractors build with confidence and precision.",
      "When your project demands reliable structure, certified hardware and compliant safety solutions. Our scaffold sales division delivers performance that stands the test of time."
    ],
  },
  repair: {
    slug: "repair",
    title: "Repair",
    image: RepairImg,
    tagline: "Scaffold Repair Newark NJ",
    body: [
      "Hexagon Scaffolding provides dependable Scaffold Repair Newark NJ services designed to restore structural integrity and maintain safe working platforms. Construction equipment operates under constant pressure. In order for scaffolding systems to continue operating safely on demanding job sites. Our repair team examines, fixes and strengthens them.",
      "Well maintained scaffolding is essential to the safety of workers and the timely completion of projects for contractors in Newark, NJ.Our technicians handle structural adjustments, damaged parts replacement and stability checks. This detailed approach helps prevent operational interruptions and safety risks.",
      "Our Scaffolding Repair Services New Jersey focus on strengthening the durability of scaffold structures used in commercial, residential and industrial construction. Frames, braces, connectors and platforms require proper alignment and reinforcement after extended use. We assess each component carefully before applying repairs.",
      "Projects across New Jersey and neighboring New York sites require consistent equipment reliability.When scaffold systems are properly repaired, their lifespan is increased and safety regulations are upheld. Our technicians maintain each scaffold unit's performance using cutting edge equipment and tried and true repair techniques.",
      "Preventive care plays a major role in safe operations. Contractors who oversee projects in several states can benefit from our Scaffold Maintenance New York service. Early indicators of corrosion, damage or structural imbalance are found through routine inspections.",
      "Motorized systems require careful technical attention. Our Motor Scaffold Repair NJ service restores mechanical performance for powered platforms used on high rise buildings. Technicians inspect motors, control panels and lifting mechanisms to maintain smooth vertical movement.",
      "We also handle Suspended Scaffold Repair New Jersey projects involving swing stages and rope supported platforms. Secure anchoring points and balanced suspension systems ensure proper operation at elevated heights.",
      "Vertical transport equipment supports productivity on busy construction sites. Our Material Hoist Repair Newark service focuses on restoring lifting systems that move tools and materials between levels. Reliable hoists reduce delays and support efficient workflow.",
      "In addition, our team performs Scaffold Coupler Repair Newark to restore connection strength between structural components. In order to stabilize scaffold frameworks, couplers are essential. Maintaining correct alignment and structural support is facilitated by fixing worn connectors.",
      "Well maintained scaffolding protects workers and project schedules. Our Scaffold Repair Newark NJ services strengthen structural performance while reducing equipment replacement costs. Contractors across Newark NJ, New Jersey and New York rely on Hexagon Scaffolding to maintain safe and dependable scaffold systems.",
      "Strong structures support successful construction. Our repair specialists ensure every scaffold remains reliable for the challenges of modern building projects",
    ],
  },
  installation: {
    slug: "installation",
    title: "Installation",
    image: InstallationImg,
    tagline: "Scaffold Installation Newark NJ",
    body: [
      "Hexagon Scaffolding delivers dependable Scaffold Installation Newark NJ services built for safe and efficient construction access. Proper installation determines the stability of every scaffold system. Our trained installation crews assemble structures with precision ensuring each platform supports workers, materials and tools safely. This planning helps maintain structural balance and supports productive work environments.",
      "Every construction site presents unique structural challenges. Our Scaffolding Installation New Jersey service focuses on creating stable access platforms for commercial buildings, residential renovations and industrial projects. Proper alignment, secure connections and reinforced supports help maintain scaffold strength throughout the project duration.",
      "Installation crews assemble each scaffold structure according to engineered plans. Guardrails, base plates, braces and platforms are positioned carefully to support safe movement across all working levels. This attention to detail protects workers and ensures smooth construction progress.",
      "Our services extend beyond Newark, NJ to projects across New Jersey and nearby New York construction sites. Contractors rely on professionally installed scaffolding systems that meet performance and safety expectations.",
      "High rise construction and complex exterior work demand precise installation. Contractors who oversee projects in several locations can benefit from our scaffold setup New York service. For maintenance, structural repairs, roofing and façade work, proper scaffold assembly guarantees dependable access",
      "Our technicians perform thorough checks during every installation stage. Platform stability, joint connections and anchor points are inspected to maintain structural strength. This process helps create secure workspaces for crews operating at elevated heights.",
      "Different projects require different scaffold systems. Our System Scaffold Installation NJ solutions provide modular structures that adapt to building shapes and working heights. These systems offer strong load capacity while maintaining flexibility for multi level construction work.",
      "We also handle Pipe Scaffold Installation New York projects where traditional steel pipe frameworks offer reliable structural support. These installations are commonly used for large structures and restoration work requiring customized layouts.",
      "Worksite safety remains a priority in every installation. Our OSHA Scaffold Installation Newark NJ service follows strict guidelines for guardrails, access ladders and load distribution. These standards protect workers and maintain regulatory compliance.",
      "Our installation crews also provide Pump Jack Scaffold Installation NJ systems for siding work, exterior painting and residential construction. These lightweight platforms allow efficient vertical movement while maintaining stability.",
      "Professional installation ensures every scaffold performs safely under daily worksite demands. Contractors across Newark, NJ, New Jersey and New York depend on structured installation processes that strengthen jobsite safety.",
      "Hexagon Scaffolding combines practical field experience with organized installation planning. This approach ensures every scaffold structure supports productivity, protects workers and maintains stability throughout the construction process."
    ],
  },
  engineering: {
    slug: "engineering",
    title: "Engineering",
    image: EngineeringImg,
    tagline: "Scaffolding Engineering Services Newark NJ",
    body: [
      "In order to facilitate safe and effective construction operations, Hexagon Scaffolding provides cutting edge scaffolding engineering services in Newark, NJ. Accurate planning and technique  are essential for modern construction projects. Our engineering team creates scaffold systems that adhere to safety regulations, site conditions and structural requirements.",
      "Every scaffold structure must maintain stability while supporting personnel, tools and supplies. Before completing the design. Our experts assess the building's height, load capacity, wind exposure and anchor points.This approach ensures every scaffold structure remains secure during demanding construction activities across Newark, NJ and surrounding regions.",
      "Construction environments often include unique architectural designs and limited access areas. Our Scaffold Engineering New Jersey service focuses on creating custom scaffold layouts that adapt to complex structures. Engineers design safe frameworks that integrate with ongoing construction operations while maintaining full compliance with safety standards.",
      "Our team prepares detailed Scaffold Drawings Newark NJ that guide contractors during installation and assembly. These technical drawings outline platform positioning, support structures, tie in locations and material specifications. Clear documentation helps contractors execute scaffold installations accurately and efficiently.",
      "Projects across New Jersey and neighboring New York require reliable planning. Accurate engineering helps prevent structural stress, equipment failure and unsafe working platforms.",
      "High rise buildings and large commercial structures demand precise scaffold planning. Our Structural Scaffold Engineering New York service supports contractors managing tall structures, façade restoration and exterior construction work.",
      "Engineers conduct detailed Scaffold Load Calculations New York to ensure each scaffold frame safely supports the required weight. Load distribution analysis prevents structural imbalance and maintains platform stability at every working level.",
      "Our specialists also create C-Hook Scaffold Drawings New Jersey for projects requiring specialized support systems. These designs assist with façade work, suspended platforms and heavy duty scaffold configurations.",
      "Accurate reporting improves construction safety and inspection readiness. Our team prepares Parapet Report Scaffolding Newark documentation for projects that require rooftop anchoring and parapet support analysis. These reports help verify that scaffold installations meet structural guidelines and safety codes.",
      "We also provide CDS Scaffold Engineering Newark services for projects requiring certified design specifications. These engineering documents guide contractors through safe scaffold assembly while meeting industry standards.",
      "Engineering defines the foundation of every reliable scaffold system. Our Scaffolding Engineering Services Newark NJ focus on structural accuracy, safety compliance and efficient installation planning. For scaffolding structures to remain secure throughout the project lifecycle, contractors in Newark NJ, New Jersey and New York rely on expert engineering support.",
      "Technical expertise and real world field experience are combined in Hexagon Scaffolding. This method ensures productivity and safety throughout the entire project while enabling construction teams to work on stable platforms.",
    ],
  },
  licensing: {
    slug: "licensing",
    title: "Licensing",
    image: LicensingImg,
    tagline: "Stay informed about the latest licensing regulations and changes.",
    body: [
      "Permits and paperwork can slow projects more than the build itself. Hexagon helps you navigate licensing and compliance so your site stays productive and inspection-ready. We identify the approvals you need such as street or sidewalk occupancy and hoarding prepare the required documentation, and coordinate submissions with clients, general contractors, and local authorities. Throughout, we maintain method statements, risk assessments, handover tags, and inspection logs so records remain current for the duration of the project.",
      "Because requirements vary by city and scope, we tailor our approach and, where necessary, engage licensed professionals or specialist consultants to meet local rules. While we can’t control third-party timelines, complete and accurate applications reduce delays, and proactive scheduling helps inspections land when you need them. If you already have an internal safety team, we work alongside them to align standards and keep your project moving. Tell us where you’re building and what you’re planning; we’ll map the approvals path and handle the coordination."
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES) as ServiceKey[];

// Accept /services/<Name> in any case (e.g., "Rental", "rental")
export function toServiceKey(raw: string): ServiceKey | null {
  const key = raw.trim().toLowerCase() as ServiceKey;
  return key in SERVICES ? key : null;
}
