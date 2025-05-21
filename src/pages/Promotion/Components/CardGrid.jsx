








import card1 from "@/assets/promotioms/card1.png";
import card2 from "@/assets/promotioms/card2.png";
import card3 from "@/assets/promotioms/card3.png";
import card4 from "@/assets/promotioms/card4.png";
import card5 from "@/assets/promotioms/card5.png";
import card6 from "@/assets/promotioms/card6.png";
import card7 from "@/assets/promotioms/card7.png";
import card8 from "@/assets/promotioms/card8.png";
import card9 from "@/assets/promotioms/card9.png";
import card10 from "@/assets/promotioms/card10.png";
import card11 from "@/assets/promotioms/card11.png";
import card12 from "@/assets/promotioms/card12.png";
import card13 from "@/assets/promotioms/card13.png";
import card14 from "@/assets/promotioms/card14.png";
import card15 from "@/assets/promotioms/card15.png";

const PromotionsGrid = () => {
  // Sample promotion data - in a real app this would come from an API or props
  const promotions = [
    {
      id: 1,
      image: card1,
      title: "Join the Smartsoft provider's tournament with a total of 6.000.000₺ prize money in selected games!",
      buttonText: "MORE INFO"
    },
    {
      id: 2,
      image: card2,
      title: "With the transfer to a friend feature, you can send money to any friend 7/24.",
      buttonText: "MORE INFO"
    },
    {
      id: 3,
      image: card3,
      title: "Join Pragmatic's tournament with a total of 74.000.000₺ in prizes in selected games!",
      buttonText: "MORE INFO"
    },
    {
      id: 4,
      image: card4,
      title: "Weekly cashback bonus for all players up to 15% of your losses!",
      buttonText: "MORE INFO"
    },
    {
      id: 5,
      image: card5,
      title: "Exclusive VIP rewards program with personalized bonuses and gifts!",
      buttonText: "MORE INFO"
    },
    {
      id: 6,
      image: card6,
      title: "Free spins tournament with 10.000.000₺ prize pool running all month!",
      buttonText: "MORE INFO"
    },
    {
      id: 7,
      image: card7,
      title: "Deposit match bonus: Get 100% extra up to 5.000₺ on your first deposit!",
      buttonText: "MORE INFO"
    },
    {
      id: 8,
      image: card8,
      title: "Daily drops & wins with hourly jackpots and random rewards!",
      buttonText: "MORE INFO"
    },
    {
      id: 9,
      image: card9,
      title: "Weekend special: Double loyalty points on all table games!",
      buttonText: "MORE INFO"
    },
    {
      id: 10,
      image: card10,
      title: "Refer a friend and both get 1.000₺ bonus credit instantly!",
      buttonText: "MORE INFO"
    },
    {
      id: 11,
      image: card11,
      title: "Special sports betting promotion: Risk-free first bet up to 2.000₺!",
      buttonText: "MORE INFO"
    },
    {
      id: 12,
      image: card12,
      title: "Monthly slot race with 20.000.000₺ in guaranteed prizes!",
      buttonText: "MORE INFO"
    },
    {
      id: 13,
      image: card13,
      title: "Birthday bonus: Get special gifts and free spins on your special day!",
      buttonText: "MORE INFO"
    },
    {
      id: 14,
      image: card14,
      title: "Live casino welcome package with 50% cashback on first day losses!",
      buttonText: "MORE INFO"
    },
    {
      id: 15,
      image: card15,
      title: "Mystery Monday: Random bonuses and surprises every week!",
      buttonText: "MORE INFO"
    }
  ];

  return (
    <div className="bg-[#1e1e20] text-white p-8">
      <h1 className="text-lg font-bold mb-5">Promotions</h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-2"
                style={{ borderBottom:'0.8px solid rgba(255, 255, 255, 0.2)' }}
      >
        <div className="w-full flex justify-center text-center px-8 pt-6 bg-[#151516]">
          <div className="border-b-4 border-yellow-500 py-2 pb-6 px-4 text-yellow-500 text-md">All</div>
        </div>
      </div>
      
      {/* Promotions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map(promo => (
          <div key={promo.id} className="bg-[#1e1e20] overflow-hidden"
          style={{ border:'0.8px solid rgba(255, 255, 255, 0.2)' }}
          >
            <div className="w-full h-58  overflow-hidden relative">
              {/* Image with overlay effect */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <img 
                src={promo.image} 
                alt={promo.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-normal mb-4">{promo.title}</p>
              <button className="border-2 border-white px-6 py-2 text-sm font-semibold">
                {promo.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsGrid;