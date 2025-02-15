import Mainpage from "./widgets/agentiaai/page";
import FeaturesPage from "./widgets/keypoints/page";
import FuturePage from "./widgets/future-ai/page";
import PricingPage from "./widgets/pricing/page";
import ContactForm from "./widgets/contact/page";

export default function Home() {
  return (
    <div>
      <section>
        <Mainpage />
        <FeaturesPage />
        <FuturePage/>
        <PricingPage/>
        <ContactForm/>
      </section>
    </div>
  );
}
