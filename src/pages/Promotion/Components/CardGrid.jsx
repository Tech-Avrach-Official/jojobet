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
  const promotions = [
    {
      id: 1,
      image: card1,
      title:
        "Join the Smartsoft provider's tournament with a total of 6.000.000₺ prize money in selected games!",
      buttonText: "MORE INFO",
    },
    {
      id: 2,
      image: card2,
      title:
        "With the transfer to a friend feature, you can send money to any friend 7/24.",
      buttonText: "MORE INFO",
    },
    {
      id: 3,
      image: card3,
      title:
        "Join Pragmatic's tournament with a total of 74.000.000₺ in prizes in selected games!",
      buttonText: "MORE INFO",
    },
    {
      id: 4,
      image: card4,
      title:
        "Join the Fugaso provider's tournament with 32.900.000₺ prize money in selected games!",
      buttonText: "MORE INFO",
    },
    {
      id: 5,
      image: card5,
      title:
        "Join the $100,000 Omaha 4 Card Poker Classic Tournament exclusive to Jojobet now!",
      buttonText: "MORE INFO",
    },
    {
      id: 6,
      image: card6,
      title:
        "The opportunity to earn a daily discount for all live casino and casino games is only at Jojobet.",
      buttonText: "MORE INFO",
    },
    {
      id: 7,
      image: card7,
      title: "Early settlement of basketball bets from Jojobet!",
      buttonText: "MORE INFO",
    },
    {
      id: 8,
      image: card8,
      title: "Early settlement of bets from Jojobet!",
      buttonText: "MORE INFO",
    },
    {
      id: 9,
      image: card9,
      title: "Grab the opportunity to win 1000x with Lightning Goal Rain!",
      buttonText: "MORE INFO",
    },
    {
      id: 10,
      image: card10,
      title:
        "Join Playson's tournament with 210.000.000₺ prize money for selected games!",
      buttonText: "MORE INFO",
    },
    {
      id: 11,
      image: card11,
      title:
        "Join the weekly Slot Tournament with 35.000.000₺ prize money exclusive to Jojobet now!",
      buttonText: "MORE INFO",
    },
    {
      id: 12,
      image: card12,
      title:
        "Join the 480,000,000₺ tournament with prizes across all games from provider Spinomenal now!",
      buttonText: "MORE INFO",
    },
    {
      id: 13,
      image: card13,
      title: "Multiplying Winnings at Lightning Roulette XXXtreme!",
      buttonText: "MORE INFO",
    },
    {
      id: 14,
      image: card14,
      title:
        "Activate SMS Authentication to make your account more secure, and get Sweet Bonanza 20 Freespins as a gift after activation!",
      buttonText: "MORE INFO",
    },
    {
      id: 15,
      image: card15,
      title: "Increase your odds, multiply your earnings!",
      buttonText: "MORE INFO",
    },
  ];

  return (
    <div className="bg-[#1e1e20] text-white p-8">
      <h1 className="text-lg font-bold mb-5">Promotions</h1>

      <div className="flex justify-center mb-2 border-b border-opacity-20 border-white">
        <div className="w-full flex justify-center text-center px-8 pt-6 bg-[#151516]">
          <div className="border-b-4 border-yellow-500 py-2 pb-6 px-4 text-yellow-500 text-md">
            All
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-[#1e1e20] overflow-hidden border border-opacity-20 border-white flex flex-col"
          >
            <div className="w-full h-60 overflow-hidden relative">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 pb-0 flex flex-col h-44">
              <p className="text-sm pt-4 font-normal mb-2 line-clamp-3">
                {promo.title}
              </p>
              <div className="mt-4">
                <button className="border-2 border-white px-6 py-2 text-sm font-semibold">
                  {promo.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsGrid;
