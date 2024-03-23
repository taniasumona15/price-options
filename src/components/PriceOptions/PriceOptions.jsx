import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    
        const priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
              "Access to cardio area",
              "Access to weightlifting area",
              "Locker usage",
              "Showers",
              "Free Wi-Fi",
              "24/7 access",
              "Fitness assessment upon sign up"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "features": [
              "All Basic Membership features",
              "Access to group fitness classes",
              "Access to sauna",
              "Personal trainer consultation (once a month)",
              "Nutritional guidance",
              "Access to online workout videos"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 80,
            "features": [
              "All Standard Membership features",
              "Access to swimming pool",
              "Towel service",
              "Discounts on merchandise",
              "Priority booking for classes",
              "Unlimited guest passes",
              "Complimentary smoothie per visit",
              "Access to specialized fitness programs"
            ]
          }
        ];
      
      

    return (
        <div>
            <h2 className="text-3xl">Best prices in the town</h2>
            {
                priceOptions.map((option) => <PriceOption key={option.id} option1111={option}></PriceOption> )
            }
        </div>
    );
};

export default PriceOptions;