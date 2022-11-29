import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";

function App() {
  var pricecard = [
    {
      price: 0,
      plan: "free",
      features: [
        {
          highlight: false,
          plan: "Single User"
        },
        {
          plan: "5GB Storage"
        },
        {
          plan: "Unlimited Public Projects"
        },
        {
          plan: "Community Access"
        },
        {
          textMute : true,
          plan: "Unlimited Private Projects"
        },
        {
          textMute : true,
          plan: "Dedicated Phone Support"
        },
        {
          textMute : true,
          plan: "Free Subdomain"
        },
        {
          textMute : true,
          plan: "Monthly Status Reports"
        },
      ],
    },
    {
      price: 9,
      plan: "plus",
      features: [
        {
          highlight: true,
          plan: "5 Users"
        },
        {
          plan: "50GB Storage"
        },
        {
          plan: "Unlimited Public Projects"
        },
        {
          plan: "Community Access"
        },
        {
          plan: "Unlimited Private Projects"
        },
        {
          plan: "Dedicated Phone Support"
        },
        {
          plan: "Free Subdomain"
        },
        {
          textMute : true,
          plan: "Monthly Status Reports"
        },
      ],
    },
    {
      price: 49,
      plan: "pro",
      features: [
        {
          highlight: true,
          plan: "Unlimited Users"
        },
        {
          plan: "150GB Storage"
        },
        {
          plan: "Unlimited Public Projects"
        },
        {
          plan: "Community Access"
        },
        {
          plan: "Unlimited Private Projects"
        },
        {
          plan: "Dedicated Phone Support"
        },
        {
          plan: "Unlimited Free Subdomains"
        },
        {
          plan: "Monthly Status Reports"
        },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {pricecard.map((card) => {
            return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
