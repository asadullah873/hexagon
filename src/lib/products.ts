import type { StaticImageData } from "next/image";

// Import product banner images
import MotorsBanner from "@/assets/products/motors.png";
import OutriggerBanner from "@/assets/products/outrigger.png";
import PlatformsBanner from "@/assets/products/platforms.png";
import AccessoriesBanner from "@/assets/products/accessories.png";

// Import motor images (folder order)
import BetamaxLeoXxlSinglePhase from "@/assets/motors/BETAMAX-LEO-XXL-SINGLE-PHASE.jpg";
import BetamaxLeoXxlVfg from "@/assets/motors/BETAMAX-LEO-XXL-VFG.jpg";
import BetamaxLeoXxl from "@/assets/motors/BETAMAX-LEO-XXL.jpg";
import BisoAirMotors from "@/assets/motors/BISO-AIR-MOTORS.jpg";
import GeneratorsQuickReference from "@/assets/motors/GENERATORS-QUICK-REFERENCE.jpg";
import GriphoistMechanicalHoistManual from "@/assets/motors/GRIPHOIST-MECHANICAL-HOIST-MANUAL.jpg";
import LnxOperatorsManual from "@/assets/motors/LNX-OPERATOR'S-MANUAL-03112014.jpg";
import PowerClimber1000Pc1 from "@/assets/motors/POWER-CLIMBER-1000-PC1.jpg";
import SkyclimberAlphaHoist1000 from "@/assets/motors/SKYCLIMBER-ALPHA-HOIST-1000.jpg";
import SkyclimberCompact1000HoistManual from "@/assets/motors/SKYCLIMBER-COMPACT-1000-HOIST-MANUAL.jpg";
import SkyclimberCompact750HoistManual from "@/assets/motors/SKYCLIMBER-COMPACT-750-HOIST-MANUAL.jpg";
import SkyclimberCx1250Hoist from "@/assets/motors/SKYCLIMBER-CX-1250-HOIST.jpg";
import SkyclimberModel4Hoist from "@/assets/motors/SKYCLIMBER-MODEL-4-HOIST.jpg";
import SpiderNewYorker1000 from "@/assets/motors/SPIDER-NEW-YORKER-1000.jpg";
import SpiderSc1000Sc1500OperatorsManual from "@/assets/motors/SPIDER-SC1000--SC1500-OPERATOR'S-MANUAL.jpg";
import TractelTirakMotors2015EditionManual from "@/assets/motors/TRACTEL-TIRAK-MOTORS-2015-EDITION-MANUAL.jpg";
import TractelTirakTeManual from "@/assets/motors/TRACTEL-TIRAK-TE-MANUAL.jpg";
import TractelTms600ManualHoistManual from "@/assets/motors/TRACTEL-TMS-600-MANUAL-HOIST-MANUAL.jpg";

// Import outrigger system images (folder order)
import WinsafeOutrigger135Reach from "@/assets/outrigger-systems/13.5'-REACH-WINSAFE-OUTRIGGER.jpg";
import AltrexOutRiggerSystem from "@/assets/outrigger-systems/ALTREX-OUT-RIGGER-SYSTEM.jpg";
import CableTrussInstructions from "@/assets/outrigger-systems/CABLE-TRUSS-INSTRUCTIONS.jpg";
import SkyclimberOutriggerSystem from "@/assets/outrigger-systems/SKYCLIMBER-OUTRIGGER-SYSTEM.jpg";
import SpiderOutriggerSystem from "@/assets/outrigger-systems/SPIDER-OUTRIGGER-SYSTEM.jpg";
import TractelOutriggerSystem from "@/assets/outrigger-systems/TRACTLE-OUTRIGGER-SYSTEM.jpg";
import Winsafe1500SeriesOutriggerSystem from "@/assets/outrigger-systems/WINSAFE-1500-SERIES-OUTRIGGER-SYSTEM.jpg";
import WinsafeCableTrussSystem from "@/assets/outrigger-systems/WINSAFE-CABLE-TRUSS-SYSTEM-18'-OR-20'.jpg";

// Import accessories images (folder order)
import AdjustableRopeLanyard from "@/assets/accessories/ADJUSTABLE-ROPE-LANYARD.jpg";
import AluminumTripod from "@/assets/accessories/ALUMINUM-TRIPOD.jpg";
import AnchorSlingRated10000Lbs from "@/assets/accessories/ANCHOR-SLING-RATED-10,000-LBS..jpg";
import AnchorSlingRated5000Lbs from "@/assets/accessories/ANCHOR-SLING-RATED-5,000-LBS..jpg";
import AnchorageDRing from "@/assets/accessories/ANCHORAGE-D-RING.jpg";
import ConnectorsCarbiners from "@/assets/accessories/CONNECTORS---CARBINERS.jpg";
import FallstopBeamClamp from "@/assets/accessories/FALLSTOP-BEAM-CLAMP.jpg";
import FallstopBeamTrolley from "@/assets/accessories/FALLSTOP-BEAM-TROLLEY.jpg";
import FallstopWireFormConnector from "@/assets/accessories/FALLSTOP-WIRE-FORM-CONNECTOR.jpg";
import FallstopWireRopeGrab from "@/assets/accessories/FALLSTOP-WIRE-ROPE-GRAB.jpg";
import GripgrabRopeGrab from "@/assets/accessories/GRIPGRAB-ROPE-GRAB.jpg";
import MillerRoofstriderSpecSheet from "@/assets/accessories/MILLER-ROOFSTRIDER-RM50P-&-RM65G-SPECIFICATION-SHEET.jpg";
import TractelRebarChainAssembly from "@/assets/accessories/TRACTEL-REBAR-CHAIN-ASSEMBLY.jpg";
import TractelRebarWebAssembly from "@/assets/accessories/TRACTEL-REBAR-WEB-ASSEMBLY.jpg";

// Import platform images (alphabetical order)
import AllaltrexManuals from "@/assets/platforms/allaltrex-manuals.jpg";
import AltrexbeeAccess from "@/assets/platforms/altrexbee-access.jpg";
import LouisvilleRopeScaffold from "@/assets/platforms/louisville-rope-scaffold.jpg";
import SkyclimberMkd from "@/assets/platforms/skyclimber-mkd.jpg";
import SkyclimberService from "@/assets/platforms/skyclimber-service.jpg";
import SkyclimberSky from "@/assets/platforms/skyclimber-sky.jpg";
import TracelChairManual from "@/assets/platforms/tracel-chair-manual.jpg";
import TracelConfinedSpaces from "@/assets/platforms/tracel-confined-spaces.jpg";
import TracelScaffoldVariance from "@/assets/platforms/tracel-scaffold-variance.jpg";
import TracelSkysafeKnockdown from "@/assets/platforms/tracel-skysafe-knockdown.jpg";
import WinsafeManuals from "@/assets/platforms/winsafe-manuals.jpg";
import WinsafeOperatingInstructions from "@/assets/platforms/winsafe-operating-instructions.jpg";
import WinsafeSupermodPlatforms from "@/assets/platforms/winsafe-supermod-platforms.jpg";

// PDF static paths (URL encoded for compatibility)
const AllAltrexManualsPdf = "/Suspended%20Scaffolding%20Platforms/ALL%20ALTREX%20MANUALS.pdf";
const SkyclimberServiceBulletinPdf = "/Suspended%20Scaffolding%20Platforms/SKY%20CLIMBER%20SERVICE%20BULLETIN%20%23151.pdf";
const SkyclimberSkyStageUltraPdf = "/Suspended%20Scaffolding%20Platforms/SKY%20CLIMBER%20SKY%20STAGE%20ULTRA%20(SSU)%20MANUAL.pdf";
const SkyclimberMkdPdf = "/Suspended%20Scaffolding%20Platforms/SKYCLIMBER%20MKD%20MODULAR%20PLATFORM%20MANUAL.pdf";
const TractelModularScaffoldVariancePdf = "/Suspended%20Scaffolding%20Platforms/TRACTEL%20MODULAR%20SCAFFOLD%20VARIANCE.pdf";
const TractelSolsitBosunChairPdf = "/Suspended%20Scaffolding%20Platforms/TRACTEL%20SOLSIT%20BOSUN%20CHAIR%20MANUAL.pdf";
const TractelThrusafeModularPlatformPdf = "/Suspended%20Scaffolding%20Platforms/TRACTEL%20THRUSAFe%20MODULAR%20PLATFORM%20FOR%20CONFINED%20SPACES.pdf";

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  href?: string;
  title?: string;
};

export type ProductName =
  | "Suspended Scaffolding Platforms"
  | "Suspended Scaffolding Motors"
  | "Suspended Scaffolding Outrigger Systems"
  | "Suspended Scaffolding Accessories";

export type Product = {
  name: ProductName;
  slug: string;
  banner: StaticImageData;
  tagline: string;
  paragraphs: string[];
  gallery: GalleryItem[];
  gridImages?: StaticImageData[];
};

export const PRODUCTS: Record<ProductName, Product> = {
  "Suspended Scaffolding Platforms": {
    name: "Suspended Scaffolding Platforms",
    slug: "suspended-scaffolding-platforms",
    banner: PlatformsBanner,
    tagline: "Versatile suspended platforms engineered for safety, efficiency, and adaptability across construction projects.",
    paragraphs: [
      "Our suspended scaffolding platforms combine robust construction with innovative design to deliver reliable access solutions for vertical work environments. Built to withstand demanding conditions while ensuring worker safety and comfort.",
      "Featuring modular components and flexible configurations, these platforms adapt to various project requirements and building structures. Each platform includes integrated safety systems and ergonomic features for optimal productivity.",
      "From maintenance work to major construction projects, our suspended platforms provide the foundation for safe and efficient vertical access solutions."
    ],
    gallery: [
      { src: SkyclimberMkd, alt: "Suspended Scaffolding Platforms - Skyclimber MKD", title: "Skyclimber MKD", href: SkyclimberMkdPdf },
      { src: AllaltrexManuals, alt: "Suspended Scaffolding Platforms - All Altrex Manuals", title: "Altrex Manuals", href: AllAltrexManualsPdf },
      { src: AltrexbeeAccess, alt: "Suspended Scaffolding Platforms - Altrex Bee Access", title: "Altrex Bee Access" },
      { src: LouisvilleRopeScaffold, alt: "Suspended Scaffolding Platforms - Louisville Rope Scaffold", title: "Louisville Rope Scaffold" },

      { src: SkyclimberService, alt: "Suspended Scaffolding Platforms - Skyclimber Service", title: "Skyclimber Service", href: SkyclimberServiceBulletinPdf },
      { src: SkyclimberSky, alt: "Suspended Scaffolding Platforms - Skyclimber Sky", title: "Skyclimber Sky", href: SkyclimberSkyStageUltraPdf },
      { src: TracelChairManual, alt: "Suspended Scaffolding Platforms - Tracel Chair Manual", title: "Tracel Chair Manual", href: TractelSolsitBosunChairPdf },
      { src: TracelConfinedSpaces, alt: "Suspended Scaffolding Platforms - Tracel Confined Spaces", title: "Tracel Confined Spaces", href: TractelThrusafeModularPlatformPdf },
      { src: TracelScaffoldVariance, alt: "Suspended Scaffolding Platforms - Tracel Scaffold Variance", title: "Tracel Scaffold Variance", href: TractelModularScaffoldVariancePdf },
      { src: TracelSkysafeKnockdown, alt: "Suspended Scaffolding Platforms - Tracel Skysafe Knockdown", title: "Tracel Skysafe Knockdown" },
      { src: WinsafeManuals, alt: "Suspended Scaffolding Platforms - Winsafe Manuals", title: "Winsafe Manuals" },
      { src: WinsafeOperatingInstructions, alt: "Suspended Scaffolding Platforms - Winsafe Operating Instructions", title: "Winsafe Operating Instructions" },
      { src: WinsafeSupermodPlatforms, alt: "Suspended Scaffolding Platforms - Winsafe Supermod Platforms", title: "Winsafe Supermod Platforms" }
    ]
  },
  "Suspended Scaffolding Motors": {
    name: "Suspended Scaffolding Motors",
    slug: "suspended-scaffolding-motors",
    banner: MotorsBanner,
    tagline: "High-performance motors designed for reliable suspended scaffolding operations.",
    paragraphs: [
      "Our suspended scaffolding motors are engineered for maximum efficiency and durability in demanding construction environments. Built with precision components and advanced safety features, these motors provide consistent power delivery for smooth operation.",
      "Each motor undergoes rigorous testing to ensure compliance with industry standards and safety regulations. Our comprehensive maintenance program extends equipment life while minimizing downtime.",
      "From single-person platforms to heavy-duty multi-point systems, our motor solutions scale to meet your project requirements with proven reliability and performance."
    ],
    gallery: [
      { src: BetamaxLeoXxlSinglePhase, alt: "Suspended Scaffolding Motors - Betamax Leo XXL Single Phase", title: "Betamax Leo XXL Single Phase", href: "/Suspended%20Scaffolding%20Motors/BETAMAX%20LEO%20XXL%20SINGLE%20PHASE.pdf" },
      { src: BetamaxLeoXxlVfg, alt: "Suspended Scaffolding Motors - Betamax Leo XXL VFG", title: "Betamax Leo XXL VFG", href: "/Suspended%20Scaffolding%20Motors/BETAMAX%20LEO%20XXL%20VFG.pdf" },
      { src: BetamaxLeoXxl, alt: "Suspended Scaffolding Motors - Betamax Leo XXL", title: "Betamax Leo XXL", href: "/Suspended%20Scaffolding%20Motors/BETAMAX%20LEO%20XXL.pdf" },
      { src: BisoAirMotors, alt: "Suspended Scaffolding Motors - Biso Air Motors", title: "Biso Air Motors", href: "/Suspended%20Scaffolding%20Motors/BISO%20AIR%20MOTORS.pdf" },
      { src: GeneratorsQuickReference, alt: "Suspended Scaffolding Motors - Generators Quick Reference", title: "Generators Quick Reference", href: "/Suspended%20Scaffolding%20Motors/GENERATORS%20QUICK%20REFERENCE.pdf" },
      { src: GriphoistMechanicalHoistManual, alt: "Suspended Scaffolding Motors - Griphoist Mechanical Hoist Manual", title: "Griphoist Mechanical Hoist", href: "/Suspended%20Scaffolding%20Motors/GRIPHOIST%20MECHANICAL%20HOIST%20MANUAL.pdf" },
      { src: LnxOperatorsManual, alt: "Suspended Scaffolding Motors - LNX Operators Manual", title: "LNX Operators Manual", href: "/Suspended%20Scaffolding%20Motors/LNX%20OPERATOR%27S%20MANUAL%2003112014.pdf" },
      { src: PowerClimber1000Pc1, alt: "Suspended Scaffolding Motors - Power Climber 1000 PC1", title: "Power Climber 1000 PC1", href: "/Suspended%20Scaffolding%20Motors/POWER%20CLIMBER%201000%20PC1.pdf" },
      { src: SkyclimberAlphaHoist1000, alt: "Suspended Scaffolding Motors - Skyclimber Alpha Hoist 1000", title: "Skyclimber Alpha Hoist 1000", href: "/Suspended%20Scaffolding%20Motors/SKYCLIMBER%20ALPHA%20HOIST%201000.pdf" },
      { src: SkyclimberCompact1000HoistManual, alt: "Suspended Scaffolding Motors - Skyclimber Compact 1000 Hoist Manual", title: "Skyclimber Compact 1000", href: "/Suspended%20Scaffolding%20Motors/SKYCLIMBER%20COMPACT%201000%20HOIST%20MANUAL.pdf" },
      { src: SkyclimberCompact750HoistManual, alt: "Suspended Scaffolding Motors - Skyclimber Compact 750 Hoist Manual", title: "Skyclimber Compact 750", href: "/Suspended%20Scaffolding%20Motors/SKYCLIMBER%20COMPACT%20750%20HOIST%20MANUAL.pdf" },
      { src: SkyclimberCx1250Hoist, alt: "Suspended Scaffolding Motors - Skyclimber CX 1250 Hoist", title: "Skyclimber CX 1250 Hoist" },
      { src: SkyclimberModel4Hoist, alt: "Suspended Scaffolding Motors - Skyclimber Model 4 Hoist", title: "Skyclimber Model 4 Hoist", href: "/Suspended%20Scaffolding%20Motors/SKYCLIMBER%20MODEL%204%20HOIST.pdf" },
      { src: SpiderNewYorker1000, alt: "Suspended Scaffolding Motors - Spider New Yorker 1000", title: "Spider New Yorker 1000", href: "/Suspended%20Scaffolding%20Motors/SPIDER%20NEW%20YORKER%201000.pdf" },
      { src: SpiderSc1000Sc1500OperatorsManual, alt: "Suspended Scaffolding Motors - Spider SC1000 SC1500 Operators Manual", title: "Spider SC1000 SC1500 Manual", href: "/Suspended%20Scaffolding%20Motors/SPIDER%20SC1000%20%20SC1500%20OPERATOR%20S%20MANUAL.pdf" },
      { src: TractelTirakMotors2015EditionManual, alt: "Suspended Scaffolding Motors - Tractel Tirak Motors 2015 Edition Manual", title: "Tractel Tirak Motors 2015", href: "/Suspended%20Scaffolding%20Motors/TRACTEL%20TIRAK%20MOTORS%202015%20EDITION%20MANUAL.pdf" },
      { src: TractelTirakTeManual, alt: "Suspended Scaffolding Motors - Tractel Tirak TE Manual", title: "Tractel Tirak TE Manual" },
      { src: TractelTms600ManualHoistManual, alt: "Suspended Scaffolding Motors - Tractel TMS 600 Manual Hoist Manual", title: "Tractel TMS 600 Manual", href: "/Suspended%20Scaffolding%20Motors/TRACTEL%20TMS%20600%20MANUAL%20HOIST%20MANUAL.pdf" }
    ],
  },
  "Suspended Scaffolding Outrigger Systems": {
    name: "Suspended Scaffolding Outrigger Systems",
    slug: "suspended-scaffolding-outrigger-systems",
    banner: OutriggerBanner,
    tagline: "Advanced outrigger systems providing enhanced stability and safety for suspended platforms.",
    paragraphs: [
      "Our outrigger systems are designed to maximize stability and load distribution for suspended scaffolding applications. Featuring adjustable configurations and robust construction, these systems adapt to various building geometries and project requirements.",
      "Engineered with safety as the primary focus, our outrigger systems include automatic locking mechanisms and load monitoring capabilities. This ensures optimal performance while maintaining the highest safety standards.",
      "Whether working on high-rise buildings or complex architectural features, our outrigger systems provide the foundation for safe and efficient suspended scaffolding operations."
    ],
    gallery: [
      { src: WinsafeOutrigger135Reach, alt: "Suspended Scaffolding Outrigger Systems - 13.5 Reach Winsafe Outrigger", title: "13.5' Reach Winsafe Outrigger", href: "/Suspended%20Scaffolding%20Outrigger%20Systems/13.5%20REACH%20WINSAFE%20OUTRIGGER.pdf" },
      { src: AltrexOutRiggerSystem, alt: "Suspended Scaffolding Outrigger Systems - Altrex Out Rigger System", title: "Altrex Outrigger System", href: "/Suspended%20Scaffolding%20Outrigger%20Systems/ALTREX%20OUT%20RIGGER%20SYSTEM.pdf" },
      { src: CableTrussInstructions, alt: "Suspended Scaffolding Outrigger Systems - Cable Truss Instructions", title: "Cable Truss Instructions" },
      { src: SkyclimberOutriggerSystem, alt: "Suspended Scaffolding Outrigger Systems - Skyclimber Outrigger System", title: "Skyclimber Outrigger System", href: "/Suspended%20Scaffolding%20Outrigger%20Systems/SKYCLIMBER%20OUTRIGGER%20SYSTEM.pdf" },
      { src: SpiderOutriggerSystem, alt: "Suspended Scaffolding Outrigger Systems - Spider Outrigger System", title: "Spider Outrigger System" },
      { src: TractelOutriggerSystem, alt: "Suspended Scaffolding Outrigger Systems - Tractel Outrigger System", title: "Tractel Outrigger System" },
      { src: Winsafe1500SeriesOutriggerSystem, alt: "Suspended Scaffolding Outrigger Systems - Winsafe 1500 Series Outrigger System", title: "Winsafe 1500 Series System", href: "/Suspended%20Scaffolding%20Outrigger%20Systems/WINSAFE%201500%20SERIES%20OUTRIGGER%20SYSTEM.pdf" },
      { src: WinsafeCableTrussSystem, alt: "Suspended Scaffolding Outrigger Systems - Winsafe Cable Truss System 18 Or 20", title: "Winsafe Cable Truss 18'/20'", href: "/Suspended%20Scaffolding%20Outrigger%20Systems/WINSAFE%20CABLE%20TRUSS%20SYSTEM%2018%27%20OR%2020%27.pdf" }
    ]
  },
  "Suspended Scaffolding Accessories": {
    name: "Suspended Scaffolding Accessories",
    slug: "suspended-scaffolding-accessories",
    banner: AccessoriesBanner,
    tagline: "Comprehensive accessory range enhancing safety, functionality, and efficiency of suspended scaffolding systems.",
    paragraphs: [
      "Our comprehensive range of suspended scaffolding accessories is designed to enhance safety, improve functionality, and increase efficiency across all types of suspended scaffolding operations. Each accessory is engineered to integrate seamlessly with our core systems.",
      "From safety harnesses and fall protection equipment to specialized tools and maintenance components, our accessories ensure complete system compatibility and optimal performance. All products meet or exceed industry safety standards.",
      "Our expert team provides guidance on accessory selection and integration, ensuring your suspended scaffolding system operates at peak efficiency with maximum safety."
    ],
    gallery: [
      { src: AdjustableRopeLanyard, alt: "Suspended Scaffolding Accessories - Adjustable Rope Lanyard", title: "Adjustable Rope Lanyard", href: "/Suspended%20Scaffolding%20Accessories/ADJUSTABLE%20ROPE%20LANYARD.pdf" },
      { src: AluminumTripod, alt: "Suspended Scaffolding Accessories - Aluminum Tripod", title: "Aluminum Tripod" },
      { src: AnchorSlingRated10000Lbs, alt: "Suspended Scaffolding Accessories - Anchor Sling Rated 10000 Lbs", title: "Anchor Sling 10,000 lbs", href: "/Suspended%20Scaffolding%20Accessories/ANCHOR%20SLING%20RATED%2010%2C000%20LBS..pdf" },
      { src: AnchorSlingRated5000Lbs, alt: "Suspended Scaffolding Accessories - Anchor Sling Rated 5000 Lbs", title: "Anchor Sling 5,000 lbs", href: "/Suspended%20Scaffolding%20Accessories/ANCHOR%20SLING%20RATED%205%2C000%20LBS..pdf" },
      { src: AnchorageDRing, alt: "Suspended Scaffolding Accessories - Anchorage D Ring", title: "Anchorage D-Ring", href: "/Suspended%20Scaffolding%20Accessories/ANCHORAGE%20D-RING.pdf" },
      { src: ConnectorsCarbiners, alt: "Suspended Scaffolding Accessories - Connectors Carbiners", title: "Connectors & Carabiners", href: "/Suspended%20Scaffolding%20Accessories/CONNECTORS%20-%20CARBINERS.pdf" },
      { src: FallstopBeamClamp, alt: "Suspended Scaffolding Accessories - Fallstop Beam Clamp", title: "Fallstop Beam Clamp", href: "/Suspended%20Scaffolding%20Accessories/FALLSTOP%20BEAM%20CLAMP.pdf" },
      { src: FallstopBeamTrolley, alt: "Suspended Scaffolding Accessories - Fallstop Beam Trolley", title: "Fallstop Beam Trolley", href: "/Suspended%20Scaffolding%20Accessories/FALLSTOP%20BEAM%20TROLLEY.pdf" },
      { src: FallstopWireFormConnector, alt: "Suspended Scaffolding Accessories - Fallstop Wire Form Connector", title: "Fallstop Wire Form Connector", href: "/Suspended%20Scaffolding%20Accessories/FALLSTOP%20WIRE%20FORM%20CONNECTOR.pdf" },
      { src: FallstopWireRopeGrab, alt: "Suspended Scaffolding Accessories - Fallstop Wire Rope Grab", title: "Fallstop Wire Rope Grab", href: "/Suspended%20Scaffolding%20Accessories/FALLSTOP%20WIRE%20ROPE%20GRAB.pdf" },
      { src: GripgrabRopeGrab, alt: "Suspended Scaffolding Accessories - Gripgrab Rope Grab", title: "Gripgrab Rope Grab", href: "/Suspended%20Scaffolding%20Accessories/GRIPGRAB%20ROPE%20GRAB.pdf" },
      { src: MillerRoofstriderSpecSheet, alt: "Suspended Scaffolding Accessories - Miller Roofstrider Specification Sheet", title: "Miller Roofstrider Specs", href: "/Suspended%20Scaffolding%20Accessories/MILLER%20ROOFSTRIDER%20RM50P%20%26%20RM65G%20SPECIFICATION%20SHEET.pdf" },
      { src: TractelRebarChainAssembly, alt: "Suspended Scaffolding Accessories - Tractel Rebar Chain Assembly", title: "Tractel Rebar Chain Assembly" },
      { src: TractelRebarWebAssembly, alt: "Suspended Scaffolding Accessories - Tractel Rebar Web Assembly", title: "Tractel Rebar Web Assembly", href: "/Suspended%20Scaffolding%20Accessories/TRACTEL%20REBAR%20WEB%20ASSEMBLY.pdf" }
    ]
  }
};

export const PRODUCT_NAMES = Object.keys(PRODUCTS) as (keyof typeof PRODUCTS)[];

// Export slugs in order
export const PRODUCT_SLUGS = PRODUCT_NAMES.map(name => PRODUCTS[name].slug);

// Export products by slug for easy lookup
export const PRODUCTS_BY_SLUG = PRODUCT_NAMES.reduce((acc, name) => {
  acc[PRODUCTS[name].slug] = PRODUCTS[name];
  return acc;
}, {} as Record<string, Product>);

/** Accepts raw route param (slug) and returns the matching product (or null) */
export function getProductByParam(param: string) {
  return PRODUCTS_BY_SLUG[param] ?? null;
}

export function getProductByName(name: string): Product | null {
  return (PRODUCTS as Record<string, Product>)[name] ?? null;
}

export function productHref(input: string): string {
  // If input matches a known slug, use it directly
  if (PRODUCTS_BY_SLUG[input]) {
    return `/products/${input}`;
  }
  
  // Otherwise, treat as product name and map to slug
  const product = getProductByName(input);
  if (product) {
    return `/products/${product.slug}`;
  }
  
  // Fallback for unknown inputs
  return `/products/${encodeURIComponent(input)}`;
}
