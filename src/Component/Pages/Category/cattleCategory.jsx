import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Common/Navbar";
import ResponsiveNavbar from "../../Common/Navbar/navMob";
import Footer from "../../Common/Footer";
import { UserContext } from "../../Common/Modal/logusecont";
import { Accordion } from "react-bootstrap";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

// import images
import poultryfine from "../../../assets/img/OurProduct/Poultryfine.png";
import tanavmukti from "../../../assets/img/OurProduct/Tanaav.jpg";
import Florovita from "../../../assets/img/OurProduct/florovita-12.png";
import bullgoat from "../../../assets/img/OurProduct/Bull-Goat.png";
import Selennium from "../../../assets/img/OurProduct/selennium-E.png";
import farmbuner from "../../../assets/img/OurProduct/FarmHouse.jpg";
import farmflour from "../../../assets/img/OurProduct/farm-floor.jpg";
import goatsheepnipple from "../../../assets/img/OurProduct/goatSheepNipple.png";
import Neonato from "../../../assets/img/OurProduct/neonatobottle.png";
import prolackgoat from "../../../assets/img/OurProduct/pro-lack-goat-powder.png";
import prolackcalf from "../../../assets/img/OurProduct/pro-lack-calf-powder.png";
import selenniumGC from "../../../assets/img/OurProduct/Selennium-GC.png";
import Energico from "../../../assets/img/OurProduct/Energico-Animal.jpg";
import Microfloratane from "../../../assets/img/OurProduct/microfloratane.jpg";
import Minromix from "../../../assets/img/OurProduct/minromix.jpg";
import Rumenovita from "../../../assets/img/OurProduct/Rumenovita.jpg";
import DigestoPlus from "../../../assets/img/OurProduct/Digesto-Plus.jpg";
import prolackcalf2 from "../../../assets/img/OurProduct/pro-lack-calf-powder2.png";
import Liverofine from "../../../assets/img/OurProduct/Liverofine.jpg";
import DCox from "../../../assets/img/OurProduct/D-Cox.jpg";
import RumenoMicroflorapre from "../../../assets/img/OurProduct/Rumeno-Micro-flora.jpg";
import LactoPupMilkReplacer from "../../../assets/img/OurProduct/Lacto-Pup-Milk-Replacer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEye } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Login from "../../Common/Modal/Login";
import Registration from "../../Common/Modal/Registion";
import SendOtp from "../../Common/Modal/otp";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const CattleCategoryPage = () => {
  const FAQ = [
    {
      "question": "What is cattle feed supplement?",
      "answer": "Cattle feed supplements are essential additives that enhance the nutritional value of the basal feed for livestock. They provide essential nutrients like vitamins, minerals, and proteins to improve growth, health, and productivity.  Common supplements include calcium, phosphorus, magnesium, and selenium"
    },
    {
      "question": "What is livestock supplements?",
      "answer": "Livestock supplements are ingredients added to feed in micro quantities to improve growth, feed efficiency, and prevent diseases.  They include essential nutrients like vitamins, minerals, and protein sources.  Proper supplementation ensures optimal health and performance in cattle"
    },
    {
      "question": "Do Cows Need Supplements?",
      "answer": "Yes, cows benefit from supplements to meet their nutritional requirements.  Vitamins A, D, and E, along with minerals, are crucial for their health and productivity.  Supplements help address deficiencies and support growth, reproduction, and milk production."
    },
    {
      "question": "What is the best vitamins for cow?",
      "answer": "Vitamin A: Essential for vision, immune function, and reproductive health.  Vitamin D: Supports calcium absorption and bone health.  Vitamin E: Acts as an antioxidant and promotes muscle function.  Vitamin B12: Vital for metabolism and energy production"
    },
    {
      "question": "What is selenium vitamin for cows?",
      "answer": "Selenium is an essential trace mineral.  It works with vitamin E to protect tissues, supports muscle growth, and prevents white muscle disease.  Proper supplementation strategies are crucial to prevent deficiency or toxicity  You can get all selenium from our Selennium-E products"
    },
    {
      "question": "What is the best cow weight gain supplement?",
      "answer": "High-energy feeds like corn are effective for weight gain.  Consider protein-rich supplements (soybean meal, canola meal) to support growth.  Ensure a balanced diet with adequate nutrients for optimal weight gain"
    },
    {
      "question": "How to increase milk production in cows naturally ?",
      "answer": "Quality Forage: Provide high-quality pasture and hay.  Proper Nutrition: Balanced diet with adequate protein, energy, and minerals.  Hydration: Ensure access to clean water.  Stress Reduction: Minimize stressors like overcrowding or abrupt changes.  Regular Milking Schedule: Consistent milking routines stimulate production  Increase your cattle milk with our doodh vardhan product"
    }
  ]

  const { UidData, cart, setCart, setiteamdata, setSizevalue } = useContext(UserContext);
  const [showRegistrationModal, setShowRegistrtionModal] = useState(false);
  const [showOtp, setShowOpt] = useState(false);
  const getMidCookies = JSON.parse(localStorage.getItem("loginDetails") ?? "[]");
  //const getLocalPrevCarts = JSON.parse(localStorage.getItem("cart") ?? "[]");



  const MainJson = [
    {
      id: 1,
      name: "Tanav Mukti Anti Stress Animal Feed Supplement | Stress relief supplements for animals",
      priceText: 700,
      img: [tanavmukti],
      metaDesc: "Discover Tanav Mukti, the breakthrough anti-stress feed supplement designed to keep your beloved animals calm, healthy, and resilient.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm",
      Shortdescription: "Tanav Mukti Powder: A specialized blend of natural adaptogenic herbs designed to alleviate stress in animals. This non-sedative formula helps pets cope with physical, mental, and emotional stressors, promoting a sense of calm and well-being.\nHolistic Approach: Tanav Mukti takes a holistic approach to stress management, addressing both the physiological and psychological aspects of anxiety in animals.\nEasy Administration: Simply mix the recommended dosage with your pet’s food or water. It’s palatable and easy to incorporate into their daily routine.\nSafe and Gentle: Tanav Mukti is free from harmful chemicals and additives, making it suitable for all breeds and sizes of animals.\nResults Over Time: Consistent use of Tanav Mukti can lead to noticeable improvements in your pet’s overall demeanor and behavior.",
      description: "Tanav Mukti: All Your Animals' Natural Stress Relief (Including an Anti-Stress Animal Feed Supplement)\nTanav Mukti is an all-natural supplement endorsed by veterinarians that addresses stress in a variety of animals, such as:\n\nCats and Dogs\npoultry, such as turkeys and hens\nHorses, rabbits, and other companion animals; cattle and other livestock\nYour feathery or furry pals will experience less worry and more tranquility thanks to our exclusive blend of herbal ingredients.\n\nPrincipal Advantages:\n\nDecreased Stress and Anxiety: Tanav Mukti relieves tension brought on by travel, loud noises, unfamiliar surroundings, separation anxiety, and routine adjustments.\nEnhanced Brain Function: Tanav Mukti has certain substances that may help with concentration and cognitive function while also enhancing overall wellbeing.\n\nNatural Calming Effect: Tanav Mukti depends on the calming effects of natural extracts rather than harsh chemicals to induce relaxation without making you drowsy.\nHandy Formats:\ncapsules: Pets' easily administered pills.\nAnti-Stress Animal Feed Supplement: An easy way to add stress relief to your cattle and poultry's daily routine, this supplement can be combined with feed.\nThe Ideal Solution Is Tanav Mukti for:\n\npets that pace, bark, whine, or chew anything destructively are signs of anxiety.\nLoud noises or strange surroundings can easily scare animals.\ncompanions who get nervous when driving or going to the vet.\nStress factors for poultry include crowding and feed changes.\nStressed-out livestock because of environmental changes, weaning, or transportation.\nBid farewell to animal tension and welcome to a better, calmer world.\n\n\n\n\n",
      Instruction: "Tanav Mukti Powder: A specialized blend of natural adaptogenic herbs designed to alleviate stress in animals.\nDosage: Mix the recommended amount of Tanav Mukti Powder with your pet’s food or water.\nFrequency: Administer twice daily for optimal results.\nConsult a Veterinarian: Always consult a veterinarian before introducing any new product to your pet’s routine.",
      Category: "cow,goat",
      Type: "Medicine",
      imgText: "Tanav Mukti Anti Stress Animal Feed Supplement",
      script: `{
                  "@context": "https://schema.org/", 
                  "@type": "Product", 
                  "name": "Tanav Mukti Anti Stress Animal Feed Supplement | Stress relief supplements for animals",
                  "image": "https://www.rumeno.in/static/media/Tanaav.f892208d5402ec8a78de.jpg",
                  "description": "Tanav Mukti Powder: A specialized blend of natural adaptogenic herbs designed to alleviate stress in animals. Dosage: Mix the recommended amount of Tanav Mukti Powder with your pet’s food or water. Frequency: Administer twice daily for optimal results",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "TNMKT",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "700",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "58"
                  }
                }`,

    },
    {
      id: 2,
      script: `{
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "Neonato Veterinary products for Goat ,Cow, and Buffalo kids | Natural supplement for newborn animals",
                "image": "https://www.rumeno.in/static/media/neonatobottle.bb753c31ea8a292f28a7.png",
                "description": "Neonato: The Organic Option for Promoting the Health of Newborn Animals Searching for natural vitamins to give your new furry (or feathered) buddy a healthy start, or for veterinary treatments specifically meant for children? Neonato is the only place to look! Neonato is an all-Neonato Natural supplement for newborn animals created by expert veterinarians.",
                "brand": {
                  "@type": "Brand",
                  "name": "Rumeno"
                },
                "sku": "NNT",
                "offers": {
                  "@type": "Offer",
                  "url": "",
                  "priceCurrency": "INR",
                  "price": "245",
                  "priceValidUntil": "2024-12-31",
                  "availability": "https://schema.org/InStock",
                  "itemCondition": "https://schema.org/NewCondition"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.2",
                  "bestRating": "5",
                  "worstRating": "1",
                  "ratingCount": "78"
                }
              }`
      ,
      name: "Neonato Veterinary products for Goat ,Cow, and Buffalo kids | Natural supplement for newborn animals",
      priceText: 245,
      img: [Neonato],
      metaDesc: "Unlock the natural potential of your newborn animals with Neonato Veterinary Products. Specifically formulated for goat, cow, and buffalo kids",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "100ml",
      Shortdescription: "Neonato Powder: A specialized blend of natural compounds designed to enhance the immune system of newborn animals.\nBoosts Immunity: Neonato provides essential nutrients and bioactive compounds to strengthen the innate defenses of young animals.\nGentle and Effective: Formulated to be gentle on delicate systems while promoting overall health and resilience.",
      description: "Neonato: The Organic Option for Promoting the Health of Newborn Animals\nSearching for natural vitamins to give your new furry (or feathered) buddy a healthy start, or for veterinary treatments specifically meant for children? Neonato is the only place to look!\n\nNeonato is an all-Neonato Natural supplement for newborn animals created by expert veterinarians. Neonato, which is made with a combination of premium herbs and vital nutrients, supports:\n\ndevelopment of a healthy immune system\nHealthy digestion and nutrient absorption\ngeneral vigor and expansion\nWhy Opt for Neonato?\n\nNatural Ingredients: Neonato is kind to your newborn pet's developing system because it doesn't include harsh chemicals or unnatural additions.\nDeveloped by Veterinarians: Neonato, which was created by veterinarians, guarantees that the proper ratio of nutrients is present for optimum health.\n\nSimple to Administer: Adding Neonato to your newborn pet's care regimen is made easy by its handy format.\nNeonato can help you provide your beloved new pet with the natural support they deserve. Place your order right now!\n",
      Instruction: "Dosage Preparation:\nMix 1 scoop (provided) of Neonato Powder with 100 ml of warm water. Stir well until fully dissolved.\nAdjust the quantity based on the animal’s weight and age. Consult a veterinarian for precise dosing.\nFeeding Schedule:\nAdminister Neonato twice daily, preferably after feeding.\nFor newborn animals, start Neonato within the first 24 hours of life.\nContinue Neonato for at least 7 days or as recommended by your vet.\nAdministration:\nUse a clean feeding bottle or syringe to feed Neonato to young animals.\nGradually increase the amount as the animal grows.\nStorage:\nStore Neonato in a cool, dry place away from direct sunlight.\nKeep the container tightly sealed to maintain freshness.",
      Category: "For All Kids",
      Type: "Medicine",
      imgText: "Neonato Natural supplement for newborn animals"
    },
    {
      id: 3,
      name: "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
      priceText: 235,
      img: [Energico],
      metaDesc: "Revitalize your livestock with Energico! Specially formulated for cattle, goats, poultry, horses, pigs, sheep, and pigeons",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm",
      Shortdescription: "Energico Powder: A specialized blend of essential electrolytes designed to maintain proper hydration and support overall well-being in animals.\nBoosts Hydration: Energico replenishes vital minerals lost during stress, illness, or physical exertion.\nEasy to Administer: Simply mix with water or food for convenient use",
      description: "Energico: Restoring Electrolytes for Optimal Animal Function in Goats, Chickens, Cattle, and Other Animals!\n\n\nUse Energico to protect your cattle, goats, poultry, and other livestock from electrolyte imbalance and dehydration! This fast-acting combination of vital electrolytes, especially prepared to meet the demands of cattle, is offered by this veterinarian-recommended solution, which is an excellent option for electrolytes for cattle.\nWhen to Give Cattle Energico:\n\n\nHeat stress and hot temperatures are key concerns for the health of cattle.\nto aid in healing and restore electrolytes depleted during labor and delivery after calving.\nafter episodes of diarrhoea or vomiting in order to avoid electrolyte imbalance and dehydration.\nIn order to reduce strain and keep hydrated during transportation or move.\nas a supportive intervention to help maintain electrolyte balance during illness or recuperation.\n\nEnergico's advantages for cattle and other animals\nrestores vital electrolytes lost as a result of perspiration, heat stress, or disease.\nencourages appropriate hydration for the health and performance of cattle.\nhelps all animals recover from electrolyte imbalance and dehydration.\nenhances the absorption and digestion of feed for greater general health in goats, cattle, chickens, and other animals.\naccessible in a practical, user-friendly way for quick and efficient administration.\nUse Energico to make an investment in your livestock's health and wellbeing! It's the ideal way to preserve the right balance of electrolytes, particularly for cattle, and maintain your animals' optimal performance.\n",
      Instruction: "Energico Powder: A specialized blend of essential electrolytes designed to maintain proper hydration and support overall well-being in animals.\nDosage:\nMix 1 scoop (provided) of Energico Powder with 1 liter of clean water.\nAdjust the quantity based on the animal’s size and condition. Consult a veterinarian for precise dosing.\nAdministration:\nOffer the prepared solution to the animal using a clean water bowl or syringe.\nRepeat as needed during periods of stress, illness, or hot weather.\nStorage:\nStore Energico in a cool, dry place away from direct sunlight.\nKeep the container tightly sealed to maintain freshness.",
      Category: "cow,goat,poultry",
      Type: "Medicine",
      imgText: "Energico Electrolytes for Cattle Goat Poultry Horses Pigs Sheep Pigeon",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
    "image": "https://www.rumeno.in/static/media/Energico-Animal.99c24705a20ebcdc16a8.jpg",
    "description": "Energico: Restoring Electrolytes for Optimal Animal Function in Goats, Chickens, Cattle, and Other Animals! Use Energico to protect your cattle, goats, poultry, and other livestock from electrolyte imbalance and dehydration! This fast-acting combination of vital electrolytes, especially prepared to meet the demands of cattle, is offered by this veterinarian-recommended solution, which is an excellent option for electrolytes for cattle.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "ENRGC",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "235",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "68"
    }
  }`,
    },
    {
      id: 4,
      name: "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
      priceText: 390,
      img: [Energico],
      metaDesc: "Revitalize your livestock with Energico! Specially formulated for cattle, goats, poultry, horses, pigs, sheep, and pigeons",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Energico Powder: A specialized blend of essential electrolytes designed to maintain proper hydration and support overall well-being in animals.\nBoosts Hydration: Energico replenishes vital minerals lost during stress, illness, or physical exertion.\nEasy to Administer: Simply mix with water or food for convenient use",
      description: "Energico: Restoring Electrolytes for Optimal Animal Function in Goats, Chickens, Cattle, and Other Animals!\n\n\nUse Energico to protect your cattle, goats, poultry, and other livestock from electrolyte imbalance and dehydration! This fast-acting combination of vital electrolytes, especially prepared to meet the demands of cattle, is offered by this veterinarian-recommended solution, which is an excellent option for electrolytes for cattle.\nWhen to Give Cattle Energico:\n\n\nHeat stress and hot temperatures are key concerns for the health of cattle.\nto aid in healing and restore electrolytes depleted during labor and delivery after calving.\nafter episodes of diarrhoea or vomiting in order to avoid electrolyte imbalance and dehydration.\nIn order to reduce strain and keep hydrated during transportation or move.\nas a supportive intervention to help maintain electrolyte balance during illness or recuperation.\n\nEnergico's advantages for cattle and other animals\nrestores vital electrolytes lost as a result of perspiration, heat stress, or disease.\nencourages appropriate hydration for the health and performance of cattle.\nhelps all animals recover from electrolyte imbalance and dehydration.\nenhances the absorption and digestion of feed for greater general health in goats, cattle, chickens, and other animals.\naccessible in a practical, user-friendly way for quick and efficient administration.\nUse Energico to make an investment in your livestock's health and wellbeing! It's the ideal way to preserve the right balance of electrolytes, particularly for cattle, and maintain your animals' optimal performance.\n",
      Instruction: "Energico Powder: A specialized blend of essential electrolytes designed to maintain proper hydration and support overall well-being in animals.\nDosage:\nMix 1 scoop (provided) of Energico Powder with 1 liter of clean water.\nAdjust the quantity based on the animal’s size and condition. Consult a veterinarian for precise dosing.\nAdministration:\nOffer the prepared solution to the animal using a clean water bowl or syringe.\nRepeat as needed during periods of stress, illness, or hot weather.\nStorage:\nStore Energico in a cool, dry place away from direct sunlight.\nKeep the container tightly sealed to maintain freshness.",
      Category: "cow,goat,poultry",
      Type: "Medicine",
      imgText: "Energico Electrolytes for Cattle Goat Poultry Horses Pigs Sheep Pigeon",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Energico | Electrolytes for Cattle, Goat, Poultry, Horses, Pigs, Sheep, Pigeons",
    "image": "https://www.rumeno.in/static/media/Energico-Animal.99c24705a20ebcdc16a8.jpg",
    "description": "Energico: Restoring Electrolytes for Optimal Animal Function in Goats, Chickens, Cattle, and Other Animals! Use Energico to protect your cattle, goats, poultry, and other livestock from electrolyte imbalance and dehydration! This fast-acting combination of vital electrolytes, especially prepared to meet the demands of cattle, is offered by this veterinarian-recommended solution, which is an excellent option for electrolytes for cattle.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "ENRGC",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "235",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "68"
    }
  }`,
    },
    {
      id: 5,
      name: "Micro Floratone | Digestive supplements for dogs ",
      priceText: 245,
      img: [Microfloratane],
      metaDesc: "Specially formulated for dogs, it combines probiotics, prebiotics, digestive enzymes, and herbs to ensure optimal gastrointestinal function.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "100gm",
      Shortdescription: "Micro Floratone Powder: A premium quality blend of prebiotics, probiotics, vitamins, and minerals. Specifically formulated to support overall health and well-being in pets.\nHolistic Approach: Enhances digestion, supports bowel health, and promotes a balanced gut microbiome.\nEasy to Administer: Mix with food for convenient daily use.",
      description: "Micro Floratone: Make your puppies happy with the best digestive supplements for dogs\nDoes your pet occasionally have digestive issues?  Searching for a natural way to improve the health of their digestive system? Look no further than Micro Floratone, the all-in-one digestive care food for dogs! Veterinarian-recommended Micro Floratone is a tasty formula full of potent nutrients that will help your dog's digestion function at its best. How Micro Floratone benefits your dog is as follows: Boosts Beneficial Bacteria:  This unique blend includes powerful digestive probiotics for dogs. These \"good bacteria\" support effective digestion and nutrient absorption by helping to restore a balanced environment in your dog's gut flora. Enzyme-Assisted Digestion: Micro Floratone contains prebiotics and supplements containing digestive enzymes for dogs. Together, these improve how well food breaks down, reduce sporadic gas and bloating,\n\nCalms Sensitive Stomachs: Micro Floratone, which is gentle on the digestive tract, helps ease the occasional constipation and diarrhea symptoms, encouraging regular bowel movements and general digestive comfort.\nMicro Floratone: Not Just Another Vitamin! In contrast to conventional digestive supplements for dogs, Micro Floratone is available in a delicious, easily digested food form. This implies that supporting your dog's digestive health may be done stress-free by just adding it to their normal meals. Major Advantages of Micro Floratone: helps maintain a balanced gut microbiome encourages effective nutrition absorption and digestion relieves sporadic bloating, constipation, diarrhea, and gas gentle for stomachs that are sensitive Tasty and simple to use With Micro Floratone, you can give your dog the gift of a satisfied stomach! Place your order now and see how well your dog grows!",
      Instruction: "Micro Floratone Powder: A premium quality blend of prebiotics, probiotics, vitamins, and minerals designed to support your pet’s overall health and well-being1.\nDosage:\nMix the recommended amount of Micro Floratone Powder with your pet’s food.\nAdjust the quantity based on your pet’s size and age. Consult a veterinarian for precise dosing.\nDaily Use:\nAdminister once daily for optimal results.\nMicro Floratone provides a full spectrum of quality ingredients to promote digestive health and immunity.\nStorage:\nStore in a cool, dry place away from direct sunlight.\nSeal the container tightly to maintain freshness.",
      Category: "Dog and cat",
      Type: "Medicine",
      imgText: "Micro Floratone digestive supplements for dogs",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Micro Floratone | Digestive supplements for dogs",
                  "image": "https://www.rumeno.in/static/media/microfloratane.5f9b45158503745d7101.jpg",
                  "description": "Micro Floratone: Make your puppies happy with the best digestive supplements for dogs Does your pet occasionally have digestive issues? Searching for a natural way to improve the health of their digestive system? Look no further than Micro Floratone, the all-in-one digestive care food for dogs! Veterinarian-recommended Micro Floratone is a tasty formula full of potent nutrients that will help your dog's digestion function at its best",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "MCRFLTN",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "245",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.3",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "67"
                  }
                }`,
    },
    {
      id: 6,
      name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
      priceText: 285,
      img: [Minromix],
      metaDesc: "This balanced mineral blend supports bone strength, immunity, and overall vitality. Whether you’re raising livestock or caring for beloved pets",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Minromix: A comprehensive mineral and vitamin supplement for animals.\nContains essential minerals such as calcium, phosphorus, and magnesium.\nEnriched with vitamins A, D, and E for overall health.\nSupports bone development, immune system, and reproductive health.\nIdeal for livestock, poultry, and pets.\nEasy to administer – simply mix with feed or water.",
      description: "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix!\nPets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species.\n\nFor Your Healthy Herd of Cattle:\n\nEssential Mineral Blend for Cattle: Minromix offers a wide range of minerals that have been carefully selected to ensure the best possible health for cattle. This includes magnesium for healthy muscle function, phosphorus for appropriate development, and calcium for strong bones and milk production.\n\n\nEncourages Peak Milk Production: Minromix will help dairy farmers ensure that their cows are producing healthy amounts of milk. The yield of your herd can be increased by making sure it is getting enough minerals.\nEncourages Growth and Development: Minromix supplies the vital minerals required for appropriate growth and development at every stage of life, from robust adult cattle to healthy calves.\nEnhances General Health of Cattle: Cattle that are deficient in certain minerals may have a range of health issues. By offering a comprehensive and well-balanced mineral mixture, Minromix helps avoid these problems and eventually contributes to a robust and healthy herd.\nBeyond Cattle: A Mineral Solution Across Species\n\nAlthough Minromix works well as a mineral mixture for cattle, it can also be used for other kinds of animals.\n\nGoats: Give your goats this adaptable mineral formula to support good reproductive, strong bones, and general well-being.\nCanines and Felines: Give your pets extra minerals in their diet to help them thrive, which will promote overall health, energy, and a glossy coat.\nWhy Pick Minromix?\n\nComprehensive and Specific: Minromix provides a mineral combination that is both complete and targeted to meet the unique requirements of goats, dogs, cats, and cattle.\nSimple to Handle: Minromix's easy-to-use structure makes it simple to incorporate into your pets' daily diet.\nEncourages General Animal Health: Minromix helps your animals' well-being in many ways, from strong bones and robust reproduction to enhanced immunity and vivid hair.\nMake an investment in Minromix, the One-Stop Mineral Powerhouse!\n\nYou can make sure your animals flourish and have the greatest life possible by giving them the vital minerals they require with Minromix!\n",
      Instruction: "Minromix Powder: A blend of macro and micro minerals, essential vitamins, and other vital nutrients to support overall health in animals.\nDosage:\nMass Feeding: Mix 1-2% of Minromix Powder with the animal’s regular feed.\nIndividual Feeding:\nCows/Buffaloes: Administer 30 grams daily.\nCalves/Sheep/Goats: Provide 5-10 grams per day.\nPackaging: Available in 1 kg and 25 kg containers1.",
      Category: "cow,goat,poultry",
      Type: "Medicine",
      imgText: "Minromix Mineral mixture for cattle goat sheep horse and broilers",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
    "image": "https://www.rumeno.in/static/media/minromix.0fbc134a1c446a054159.jpg",
    "description": "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix! Pets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MNRMX",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "285",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "82"
    }
  }`,
    },
    {
      id: 7,
      name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
      priceText: 1400,
      img: [Minromix],
      metaDesc: "This balanced mineral blend supports bone strength, immunity, and overall vitality. Whether you’re raising livestock or caring for beloved pets",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "5kg",
      Shortdescription: "Minromix: A comprehensive mineral and vitamin supplement for animals.\nContains essential minerals such as calcium, phosphorus, and magnesium.\nEnriched with vitamins A, D, and E for overall health.\nSupports bone development, immune system, and reproductive health.\nIdeal for livestock, poultry, and pets.\nEasy to administer – simply mix with feed or water.",
      description: "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix!\nPets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species.\n\nFor Your Healthy Herd of Cattle:\n\nEssential Mineral Blend for Cattle: Minromix offers a wide range of minerals that have been carefully selected to ensure the best possible health for cattle. This includes magnesium for healthy muscle function, phosphorus for appropriate development, and calcium for strong bones and milk production.\n\n\nEncourages Peak Milk Production: Minromix will help dairy farmers ensure that their cows are producing healthy amounts of milk. The yield of your herd can be increased by making sure it is getting enough minerals.\nEncourages Growth and Development: Minromix supplies the vital minerals required for appropriate growth and development at every stage of life, from robust adult cattle to healthy calves.\nEnhances General Health of Cattle: Cattle that are deficient in certain minerals may have a range of health issues. By offering a comprehensive and well-balanced mineral mixture, Minromix helps avoid these problems and eventually contributes to a robust and healthy herd.\nBeyond Cattle: A Mineral Solution Across Species\n\nAlthough Minromix works well as a mineral mixture for cattle, it can also be used for other kinds of animals.\n\nGoats: Give your goats this adaptable mineral formula to support good reproductive, strong bones, and general well-being.\nCanines and Felines: Give your pets extra minerals in their diet to help them thrive, which will promote overall health, energy, and a glossy coat.\nWhy Pick Minromix?\n\nComprehensive and Specific: Minromix provides a mineral combination that is both complete and targeted to meet the unique requirements of goats, dogs, cats, and cattle.\nSimple to Handle: Minromix's easy-to-use structure makes it simple to incorporate into your pets' daily diet.\nEncourages General Animal Health: Minromix helps your animals' well-being in many ways, from strong bones and robust reproduction to enhanced immunity and vivid hair.\nMake an investment in Minromix, the One-Stop Mineral Powerhouse!\n\nYou can make sure your animals flourish and have the greatest life possible by giving them the vital minerals they require with Minromix!\n",
      Instruction: "Minromix Powder: A blend of macro and micro minerals, essential vitamins, and other vital nutrients to support overall health in animals.\nDosage:\nMass Feeding: Mix 1-2% of Minromix Powder with the animal’s regular feed.\nIndividual Feeding:\nCows/Buffaloes: Administer 30 grams daily.\nCalves/Sheep/Goats: Provide 5-10 grams per day.\nPackaging: Available in 1 kg and 25 kg containers1.",
      Category: "cow,goat,poultry",
      Type: "Medicine",
      imgText: "Minromix Mineral mixture for cattle goat sheep horse and broilers",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
    "image": "https://www.rumeno.in/static/media/minromix.0fbc134a1c446a054159.jpg",
    "description": "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix! Pets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MNRMX",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "285",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "82"
    }
  }`,
    },
    {
      id: 8,
      name: "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
      priceText: 4600,
      img: [Minromix],
      metaDesc: "This balanced mineral blend supports bone strength, immunity, and overall vitality. Whether you’re raising livestock or caring for beloved pets",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "20kg",
      Shortdescription: "Minromix: A comprehensive mineral and vitamin supplement for animals.\nContains essential minerals such as calcium, phosphorus, and magnesium.\nEnriched with vitamins A, D, and E for overall health.\nSupports bone development, immune system, and reproductive health.\nIdeal for livestock, poultry, and pets.\nEasy to administer – simply mix with feed or water.",
      description: "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix!\nPets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species.\n\nFor Your Healthy Herd of Cattle:\n\nEssential Mineral Blend for Cattle: Minromix offers a wide range of minerals that have been carefully selected to ensure the best possible health for cattle. This includes magnesium for healthy muscle function, phosphorus for appropriate development, and calcium for strong bones and milk production.\n\n\nEncourages Peak Milk Production: Minromix will help dairy farmers ensure that their cows are producing healthy amounts of milk. The yield of your herd can be increased by making sure it is getting enough minerals.\nEncourages Growth and Development: Minromix supplies the vital minerals required for appropriate growth and development at every stage of life, from robust adult cattle to healthy calves.\nEnhances General Health of Cattle: Cattle that are deficient in certain minerals may have a range of health issues. By offering a comprehensive and well-balanced mineral mixture, Minromix helps avoid these problems and eventually contributes to a robust and healthy herd.\nBeyond Cattle: A Mineral Solution Across Species\n\nAlthough Minromix works well as a mineral mixture for cattle, it can also be used for other kinds of animals.\n\nGoats: Give your goats this adaptable mineral formula to support good reproductive, strong bones, and general well-being.\nCanines and Felines: Give your pets extra minerals in their diet to help them thrive, which will promote overall health, energy, and a glossy coat.\nWhy Pick Minromix?\n\nComprehensive and Specific: Minromix provides a mineral combination that is both complete and targeted to meet the unique requirements of goats, dogs, cats, and cattle.\nSimple to Handle: Minromix's easy-to-use structure makes it simple to incorporate into your pets' daily diet.\nEncourages General Animal Health: Minromix helps your animals' well-being in many ways, from strong bones and robust reproduction to enhanced immunity and vivid hair.\nMake an investment in Minromix, the One-Stop Mineral Powerhouse!\n\nYou can make sure your animals flourish and have the greatest life possible by giving them the vital minerals they require with Minromix!\n",
      Instruction: "Minromix Powder: A blend of macro and micro minerals, essential vitamins, and other vital nutrients to support overall health in animals.\nDosage:\nMass Feeding: Mix 1-2% of Minromix Powder with the animal’s regular feed.\nIndividual Feeding:\nCows/Buffaloes: Administer 30 grams daily.\nCalves/Sheep/Goats: Provide 5-10 grams per day.\nPackaging: Available in 1 kg and 25 kg containers1.",
      Category: "cow,goat,poultry",
      Type: "Medicine",
      imgText: "Minromix Mineral mixture for cattle goat sheep horse and broilers",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Minromix | Mineral mixture for cattle, goat ,poultry,dog,and cat",
    "image": "https://www.rumeno.in/static/media/minromix.0fbc134a1c446a054159.jpg",
    "description": "The All-in-One Mineral Superstar for Goats, Cattle, Dogs, and Cats is Minromix! Pets and livestock both benefit from a well-balanced diet that includes all the necessary vitamins and minerals.Minromix is a veterinarian-recommended mineral mixture for cattle and other animals, Minromix is designed to meet the dietary requirements of different species.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MNRMX",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "285",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "82"
    }
  }`,
    },
    {
      id: 9,
      name: "Rumenovita | Growth booster for animals | Animal feed supplement",
      priceText: 700,
      img: [Rumenovita],
      metaDesc: "Enhance livestock growth with Rumenovita! Our premium feed supplement supports healthy development, improved weight gain, and overall well-being.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Rumenovita Fast Weight Gainer: Specifically beneficial for goats and sheep, it helps animals quickly gain weight, especially when they need to reach a certain weight for market or breeding purposes1.\nPromotes Rapid Growth: Formulated to enhance growth rates in young animals.\nEssential for Market-Ready Animals: Ideal for achieving desired weight targets.",
      description: "Rumenovita: Supercharge Your Animal's Growth with Complete Nutrition & Growth-Boosting Power\nRumenovita is a revolutionary animal nutrition formula designed to be the ultimate growth booster for animals.It goes beyond just basic sustenance, providing everything your animals need to thrive and reach their full size potential.\n\nThis all-in-one solution is packed with essential vitamins, minerals, and rumen-optimizing ingredients, specifically formulated to:\n\nUnleash Explosive Growth: Rumenovita provides a balanced blend of nutrients that contribute to explosive growth and development in young animals.\nMaximize Feed Efficiency for Faster Gains: By promoting optimal rumen function, Rumenovita helps animals extract more nutrients from their feed, leading to faster weight gain and improved overall growth.\nSupercharge the Immune System for Unhindered Growth: A robust immune system is crucial for unhindered growth. Rumenovita's blend of vitamins and minerals helps supercharge your animal's natural defenses, allowing them to focus their energy on growing bigger and stronger.\nMaintain Peak Performance for Consistent Growth: Rumenovita provides the necessary nutrients to support overall animal health and vitality, ensuring consistent growth and peak performance throughout their development.\nHere's what makes Rumenovita the ultimate animal growth booster:\n\nComplete and Balanced Growth Formula: Provides all the essential vitamins, minerals, and rumen-optimizing ingredients for optimal growth and weight gain.\nEnhanced Feed Efficiency for Faster Growth: Helps animals get the most out of their feed, leading to faster growth and reduced feed costs.\nSupercharged Immune System for Unimpeded Growth: Supports a robust immune system, allowing animals to focus on unimpeded growth and development.\nImproved Overall Health for Optimal Growth: Promotes vitality and performance, ensuring animals reach their optimal growth potential.\n",
      Instruction: "Consultation with a Professional:\nBefore starting any supplementation, consult a veterinarian or a livestock nutritionist.\nDiscuss the specific needs of your animals and any existing health conditions.\nDosage and Administration:\nAdminister Rumenovita orally to the animals.\nMix the recommended dosage with their regular feed or water.\nThe appropriate dosage may vary based on factors such as the animal’s age, weight, and overall health.\nFollow the manufacturer’s guidelines closely for accurate dosing.\nFrequency:\nProvide Rumenovita daily or as advised by an expert.\nFor young animals, consider administering it during critical growth phases.\nBenefits and Expected Outcomes:\nImproved Digestion: Rumenovita enhances rumen function, aiding in better nutrient breakdown and absorption.\nWeight Gain: The supplement supports healthy weight gain by optimizing nutrient utilization.\nGrowth Promotion: It contributes to overall growth and development.\nImmune Support: Rumenovita boosts the immune system, reducing the risk of diseases.\nCoat Condition: Some users report shinier and healthier coats in animals.\nStorage:\nStore Rumenovita in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nBalanced Nutrition: Remember that Rumenovita is not a substitute for a well-rounded diet. Ensure your animals receive proper nutrition.\nMonitoring: Observe your animals closely for any adverse reactions.\nDiscontinue if Necessary: If unusual symptoms occur, discontinue use and seek professional advice.\nCompatibility with Other Supplements or Medications:\nRumenovita can be used alongside other feed supplements or medications. However, consult a professional to avoid interactions.\nRecord Keeping:\nMaintain accurate records of Rumenovita administration.\nNote down dates, dosages, and details of the animals receiving the supplement.\nRegularly assess their progress to evaluate the effectiveness of the product.",
      Category: "cow,goat",
      Type: "Medicine",
      imgText: "Rumenovita Growth booster for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Rumenovita | Growth booster for animals | Animal feed supplement",
    "image": "https://www.rumeno.in/static/media/Rumenovita.309f164bb1e0f66284e2.jpg",
    "description": "Rumenovita: Supercharge Your Animal's Growth with Complete Nutrition & Growth-Boosting Power Rumenovita is a revolutionary animal nutrition formula designed to be the ultimate growth booster for animals.It goes beyond just basic sustenance, providing everything your animals need to thrive and reach their full size potential.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "RMNVT",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "700",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "76"
    }
  }`,
    },
    {
      id: 10,
      name: "Rumenovita | Growth booster for animals | Animal feed supplement",
      priceText: 3250,
      img: [Rumenovita],
      metaDesc: "Enhance livestock growth with Rumenovita! Our premium feed supplement supports healthy development, improved weight gain, and overall well-being.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "5kg",
      Shortdescription: "Rumenovita Fast Weight Gainer: Specifically beneficial for goats and sheep, it helps animals quickly gain weight, especially when they need to reach a certain weight for market or breeding purposes1.\nPromotes Rapid Growth: Formulated to enhance growth rates in young animals.\nEssential for Market-Ready Animals: Ideal for achieving desired weight targets.",
      description: "Rumenovita: Supercharge Your Animal's Growth with Complete Nutrition & Growth-Boosting Power\nRumenovita is a revolutionary animal nutrition formula designed to be the ultimate growth booster for animals.It goes beyond just basic sustenance, providing everything your animals need to thrive and reach their full size potential.\n\nThis all-in-one solution is packed with essential vitamins, minerals, and rumen-optimizing ingredients, specifically formulated to:\n\nUnleash Explosive Growth: Rumenovita provides a balanced blend of nutrients that contribute to explosive growth and development in young animals.\nMaximize Feed Efficiency for Faster Gains: By promoting optimal rumen function, Rumenovita helps animals extract more nutrients from their feed, leading to faster weight gain and improved overall growth.\nSupercharge the Immune System for Unhindered Growth: A robust immune system is crucial for unhindered growth. Rumenovita's blend of vitamins and minerals helps supercharge your animal's natural defenses, allowing them to focus their energy on growing bigger and stronger.\nMaintain Peak Performance for Consistent Growth: Rumenovita provides the necessary nutrients to support overall animal health and vitality, ensuring consistent growth and peak performance throughout their development.\nHere's what makes Rumenovita the ultimate animal growth booster:\n\nComplete and Balanced Growth Formula: Provides all the essential vitamins, minerals, and rumen-optimizing ingredients for optimal growth and weight gain.\nEnhanced Feed Efficiency for Faster Growth: Helps animals get the most out of their feed, leading to faster growth and reduced feed costs.\nSupercharged Immune System for Unimpeded Growth: Supports a robust immune system, allowing animals to focus on unimpeded growth and development.\nImproved Overall Health for Optimal Growth: Promotes vitality and performance, ensuring animals reach their optimal growth potential.\n",
      Instruction: "Consultation with a Professional:\nBefore starting any supplementation, consult a veterinarian or a livestock nutritionist.\nDiscuss the specific needs of your animals and any existing health conditions.\nDosage and Administration:\nAdminister Rumenovita orally to the animals.\nMix the recommended dosage with their regular feed or water.\nThe appropriate dosage may vary based on factors such as the animal’s age, weight, and overall health.\nFollow the manufacturer’s guidelines closely for accurate dosing.\nFrequency:\nProvide Rumenovita daily or as advised by an expert.\nFor young animals, consider administering it during critical growth phases.\nBenefits and Expected Outcomes:\nImproved Digestion: Rumenovita enhances rumen function, aiding in better nutrient breakdown and absorption.\nWeight Gain: The supplement supports healthy weight gain by optimizing nutrient utilization.\nGrowth Promotion: It contributes to overall growth and development.\nImmune Support: Rumenovita boosts the immune system, reducing the risk of diseases.\nCoat Condition: Some users report shinier and healthier coats in animals.\nStorage:\nStore Rumenovita in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nBalanced Nutrition: Remember that Rumenovita is not a substitute for a well-rounded diet. Ensure your animals receive proper nutrition.\nMonitoring: Observe your animals closely for any adverse reactions.\nDiscontinue if Necessary: If unusual symptoms occur, discontinue use and seek professional advice.\nCompatibility with Other Supplements or Medications:\nRumenovita can be used alongside other feed supplements or medications. However, consult a professional to avoid interactions.\nRecord Keeping:\nMaintain accurate records of Rumenovita administration.\nNote down dates, dosages, and details of the animals receiving the supplement.\nRegularly assess their progress to evaluate the effectiveness of the product.",
      Category: "cow,goat",
      Type: "Medicine",
      imgText: "Rumenovita Growth booster for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Rumenovita | Growth booster for animals | Animal feed supplement",
    "image": "https://www.rumeno.in/static/media/Rumenovita.309f164bb1e0f66284e2.jpg",
    "description": "Rumenovita: Supercharge Your Animal's Growth with Complete Nutrition & Growth-Boosting Power Rumenovita is a revolutionary animal nutrition formula designed to be the ultimate growth booster for animals.It goes beyond just basic sustenance, providing everything your animals need to thrive and reach their full size potential.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "RMNVT",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "700",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "76"
    }
  }`,
    },
    {
      id: 11,
      name: "Digesto Plus | digestive supplements for animals",
      priceText: 190,
      img: [DigestoPlus],
      metaDesc: "Optimize digestion with Digesto Plus! This synergistic blend of natural ingredients promotes efficient nutrient breakdown, absorption, and balanced gut flora.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Digesto Plus Powder: A unique formulation containing a combination of buffer agents and toxin binders. It regulates rumen pH levels, prevents acidosis, and improves feed efficiency.\nToxin Binder: Contains toxin binders to neutralize harmful substances like mycotoxins, ensuring overall digestive well-being.\nEssential Component: An effective addition to any animal nutrition program, supporting ruminants’ health and performance",
      description: "Digesto Plus\n\nDigesto Plus is a specialized product designed to help maintain the optimal digestive health of ruminants such as cattle, sheep, and goats. The unique formulation of this product contains a combination of buffer agents and toxin binders that work together to support a healthy digestive system in animals.\n\nThe digestive system of ruminants is complex and sensitive, and any imbalances can lead to a range of health issues. Digesto Plus helps to regulate the pH levels in the rumen and prevent acidosis, which can be a common problem for ruminants fed high-grain diets. By promoting a healthy pH balance, this product helps to improve feed efficiency and reduce the risk of digestive disorders.\n\nIn addition to its buffering properties, Digesto Plus also contains toxin binders that help to neutralize harmful substances such as mycotoxins. Mycotoxins are toxic substances produced by fungi that can contaminate feed and cause a range of health problems in animals, including reduced feed intake, poor growth, and impaired immune function. The inclusion of toxin binders in Digesto Plus helps to protect animals from the negative effects of mycotoxins and other harmful substances.\n\nDigesto Plus is a reliable and effective product that is easy to use and can be incorporated into a range of feeding programs. It is specially designed to help keep ruminants healthy and support optimal performance, making it an essential component of any animal nutrition program. With Digesto Plus, you can rest assured that your animals are receiving the support they need to maintain a healthy digestive system and reach their full potential.",
      Instruction: "Product Description:\nDigesto Plus contains a unique combination of buffer agents and toxin binders.\nIt supports a healthy digestive system in ruminants by regulating rumen pH and neutralizing harmful substances.\nTarget Animals:\nSuitable for:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian before use.\nAdminister orally, mixed with feed or water.\nRecommended dosage: 22.7 mg decoquinate per 100 lbs (0.5 mg per kg) body weight per day.\nBenefits:\npH Regulation: Prevents acidosis, common in ruminants fed high-grain diets.\nFeed Efficiency: Improves feed utilization.\nToxin Neutralization: Contains binders to counter mycotoxins and other harmful substances.\nStorage:\nStore in a cool, dry place away from sunlight.\nPrecautions:\nMonitor for adverse reactions.\nSeek professional advice if needed.",
      Category: "cow, goat ",
      Type: "Medicine",
      imgText: "Digesto Plus digestive supplements for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Digesto Plus | digestive supplements for animals",
    "image": "https://www.rumeno.in/static/media/Digesto-Plus.58b7849606e0ed51a509.jpg",
    "description": "Digesto Plus Digesto Plus is a specialized product designed to help maintain the optimal digestive health of ruminants such as cattle, sheep, and goats. The unique formulation of this product contains a combination of buffer agents and toxin binders that work together to support a healthy digestive system in animals",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "DGST",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "190",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "62"
    }
  }`,
    },
    {
      id: 12,
      name: "Digesto Plus | digestive supplements for animals",
      priceText: 875,
      img: [DigestoPlus],
      metaDesc: "Optimize digestion with Digesto Plus! This synergistic blend of natural ingredients promotes efficient nutrient breakdown, absorption, and balanced gut flora.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "5kg",
      Shortdescription: "Digesto Plus Powder: A unique formulation containing a combination of buffer agents and toxin binders. It regulates rumen pH levels, prevents acidosis, and improves feed efficiency.\nToxin Binder: Contains toxin binders to neutralize harmful substances like mycotoxins, ensuring overall digestive well-being.\nEssential Component: An effective addition to any animal nutrition program, supporting ruminants’ health and performance",
      description: "Digesto Plus\n\nDigesto Plus is a specialized product designed to help maintain the optimal digestive health of ruminants such as cattle, sheep, and goats. The unique formulation of this product contains a combination of buffer agents and toxin binders that work together to support a healthy digestive system in animals.\n\nThe digestive system of ruminants is complex and sensitive, and any imbalances can lead to a range of health issues. Digesto Plus helps to regulate the pH levels in the rumen and prevent acidosis, which can be a common problem for ruminants fed high-grain diets. By promoting a healthy pH balance, this product helps to improve feed efficiency and reduce the risk of digestive disorders.\n\nIn addition to its buffering properties, Digesto Plus also contains toxin binders that help to neutralize harmful substances such as mycotoxins. Mycotoxins are toxic substances produced by fungi that can contaminate feed and cause a range of health problems in animals, including reduced feed intake, poor growth, and impaired immune function. The inclusion of toxin binders in Digesto Plus helps to protect animals from the negative effects of mycotoxins and other harmful substances.\n\nDigesto Plus is a reliable and effective product that is easy to use and can be incorporated into a range of feeding programs. It is specially designed to help keep ruminants healthy and support optimal performance, making it an essential component of any animal nutrition program. With Digesto Plus, you can rest assured that your animals are receiving the support they need to maintain a healthy digestive system and reach their full potential.",
      Instruction: "Product Description:\nDigesto Plus contains a unique combination of buffer agents and toxin binders.\nIt supports a healthy digestive system in ruminants by regulating rumen pH and neutralizing harmful substances.\nTarget Animals:\nSuitable for:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian before use.\nAdminister orally, mixed with feed or water.\nRecommended dosage: 22.7 mg decoquinate per 100 lbs (0.5 mg per kg) body weight per day.\nBenefits:\npH Regulation: Prevents acidosis, common in ruminants fed high-grain diets.\nFeed Efficiency: Improves feed utilization.\nToxin Neutralization: Contains binders to counter mycotoxins and other harmful substances.\nStorage:\nStore in a cool, dry place away from sunlight.\nPrecautions:\nMonitor for adverse reactions.\nSeek professional advice if needed.",
      Category: "cow, goat ",
      Type: "Medicine",
      imgText: "Digesto Plus digestive supplements for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Digesto Plus | digestive supplements for animals",
    "image": "https://www.rumeno.in/static/media/Digesto-Plus.58b7849606e0ed51a509.jpg",
    "description": "Digesto Plus Digesto Plus is a specialized product designed to help maintain the optimal digestive health of ruminants such as cattle, sheep, and goats. The unique formulation of this product contains a combination of buffer agents and toxin binders that work together to support a healthy digestive system in animals",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "DGST",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "190",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "62"
    }
  }`,
    },
    {
      id: 13,
      name: "Liverofine | veterinary liver tonic",
      priceText: 125,
      img: [Liverofine],
      metaDesc: "This veterinary liver tonic is designed to help promote healthy liver function in cattle, goat, dogs and cats. Learn more about Liverofine and how it can benefit your pet.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "200gm",
      Shortdescription: "Liverofine Liver Tonic: A unique blend of vitamins, minerals, and herbal extracts specifically formulated to promote optimal liver function and overall well-being.\nKey Ingredients:\nMilk Thistle: Contains silymarin, a powerful antioxidant that protects liver cells and aids in tissue regeneration.\nDandelion Root: Traditionally used as a natural diuretic and liver tonic, helping flush out toxins.\nB Vitamins: Essential for energy production and nutrient metabolism.\nEasy to Administer: Suitable for all ages, Liverofine can be added to food or water for convenient use",
      description: "Liverofine is a premium veterinary liver tonic that promotes optimal animal health. Use Liverofine to help your pet's liver function.\n\nVeterinarians prescribe Liverofine, a liver tonic designed specifically to support and protect your pet's liver function.\n\nWhy is a pet's liver health important?\n\nThe liver is an essential organ that performs several key tasks for your pet's body, such as:\n\nDetoxification: It removes waste materials and toxins from the blood.\n\nDigestion: It generates bile, which facilitates the absorption of nutrients and the breakdown of fat.\n\nMetabolism: It turns food into energy and controls blood sugar levels.\n\nProtein Synthesis: It creates the necessary proteins for a range of biological processes.\n\nThe Advantages of Liverofine for Your Pet\n\nhepatic protection and repair: The components in liverofine help maintain the normal function of hepatic cells and encourage the healing of injured tissue.\n\nBetter Detoxification: The mixture keeps your pet healthy by assisting the liver in efficiently eliminating waste materials and pollutants.\n\nImproved Digestion: Liverofine encourages the best possible bile production, which helps the body break down fat and absorb nutrients for greater general health.\n\nEnhanced Immune System: A robust immune system depends on a healthy liver. Liverofine bolsters your pet's defenses naturally.\n\nLiverofine: The Best Option for Liver Assistance\n\nVeterinarian-Recommended Formula: Liverofine, created with the knowledge and experience of veterinarians, guarantees a secure and efficient strategy for liver health.\n\nAll-Inclusive Mixture of Ingredients: Important components that are proven to support healthy liver function are combined in this powerful composition.\n\nDelectable and Simple to Give: Liverofine, which comes in tasty forms, makes liver support simple for both animal companions and their owners.\n\nGive your pet the gift of ideal liver health by purchasing Liverofine!",
      Instruction: "Product Description:\nLiverofine is a specialized liver tonic formulated to enhance liver function and overall well-being in animals.\nIt contains essential nutrients and herbal extracts that promote liver health and aid in detoxification.\nTarget Animals:\nLiverofine is suitable for various animals, including:\nCattle\nSheep\nGoats\nPoultry\nSwine\nHorses\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Liverofine.\nAdminister the product orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific liver health needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nFrequency:\nProvide Liverofine daily or as advised by a professional.\nFor animals with liver issues, consider prolonged use or as part of a maintenance regimen.\nBenefits:\nLiver Support: Liverofine aids in liver detoxification and supports optimal liver function.\nAntioxidant Properties: Contains antioxidants that protect liver cells from damage.\nMetabolic Balance: Helps maintain metabolic processes related to liver health.\nImproved Digestion: A healthy liver contributes to better nutrient absorption and digestion.\nStorage:\nStore Liverofine in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nCompatibility:\nLiverofine can be used alongside other supplements or medications. Consult a professional to avoid interactions.\nRecord Keeping:\nMaintain records of Liverofine administration, including dates, dosages, and animal details.\nRegularly assess the animals’ liver health to evaluate the effectiveness of the tonic.",
      Category: "poultry, goat, cow",
      Type: "Medicine",
      imgText: "Liverofine veterinary liver tonic",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Liverofine | veterinary liver tonic",
    "image": "https://www.rumeno.in/static/media/Liverofine.e956615d5fe6c67bac95.jpg",
    "description": "Liverofine is a premium veterinary liver tonic that promotes optimal animal health. Use Liverofine to help your pet's liver function. Veterinarians prescribe Liverofine, a liver tonic designed specifically to support and protect your pet's liver function.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "LIVRFN",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "125",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "76"
    }
  }`,
    },
    {
      id: 14,
      name: "Liverofine | veterinary liver tonic",
      priceText: 600,
      img: [Liverofine],
      metaDesc: "This veterinary liver tonic is designed to help promote healthy liver function in cattle, goat, dogs and cats. Learn more about Liverofine and how it can benefit your pet.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Liverofine Liver Tonic: A unique blend of vitamins, minerals, and herbal extracts specifically formulated to promote optimal liver function and overall well-being.\nKey Ingredients:\nMilk Thistle: Contains silymarin, a powerful antioxidant that protects liver cells and aids in tissue regeneration.\nDandelion Root: Traditionally used as a natural diuretic and liver tonic, helping flush out toxins.\nB Vitamins: Essential for energy production and nutrient metabolism.\nEasy to Administer: Suitable for all ages, Liverofine can be added to food or water for convenient use",
      description: "Liverofine is a premium veterinary liver tonic that promotes optimal animal health. Use Liverofine to help your pet's liver function.\n\nVeterinarians prescribe Liverofine, a liver tonic designed specifically to support and protect your pet's liver function.\n\nWhy is a pet's liver health important?\n\nThe liver is an essential organ that performs several key tasks for your pet's body, such as:\n\nDetoxification: It removes waste materials and toxins from the blood.\n\nDigestion: It generates bile, which facilitates the absorption of nutrients and the breakdown of fat.\n\nMetabolism: It turns food into energy and controls blood sugar levels.\n\nProtein Synthesis: It creates the necessary proteins for a range of biological processes.\n\nThe Advantages of Liverofine for Your Pet\n\nhepatic protection and repair: The components in liverofine help maintain the normal function of hepatic cells and encourage the healing of injured tissue.\n\nBetter Detoxification: The mixture keeps your pet healthy by assisting the liver in efficiently eliminating waste materials and pollutants.\n\nImproved Digestion: Liverofine encourages the best possible bile production, which helps the body break down fat and absorb nutrients for greater general health.\n\nEnhanced Immune System: A robust immune system depends on a healthy liver. Liverofine bolsters your pet's defenses naturally.\n\nLiverofine: The Best Option for Liver Assistance\n\nVeterinarian-Recommended Formula: Liverofine, created with the knowledge and experience of veterinarians, guarantees a secure and efficient strategy for liver health.\n\nAll-Inclusive Mixture of Ingredients: Important components that are proven to support healthy liver function are combined in this powerful composition.\n\nDelectable and Simple to Give: Liverofine, which comes in tasty forms, makes liver support simple for both animal companions and their owners.\n\nGive your pet the gift of ideal liver health by purchasing Liverofine!",
      Instruction: "Product Description:\nLiverofine is a specialized liver tonic formulated to enhance liver function and overall well-being in animals.\nIt contains essential nutrients and herbal extracts that promote liver health and aid in detoxification.\nTarget Animals:\nLiverofine is suitable for various animals, including:\nCattle\nSheep\nGoats\nPoultry\nSwine\nHorses\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Liverofine.\nAdminister the product orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific liver health needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nFrequency:\nProvide Liverofine daily or as advised by a professional.\nFor animals with liver issues, consider prolonged use or as part of a maintenance regimen.\nBenefits:\nLiver Support: Liverofine aids in liver detoxification and supports optimal liver function.\nAntioxidant Properties: Contains antioxidants that protect liver cells from damage.\nMetabolic Balance: Helps maintain metabolic processes related to liver health.\nImproved Digestion: A healthy liver contributes to better nutrient absorption and digestion.\nStorage:\nStore Liverofine in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nCompatibility:\nLiverofine can be used alongside other supplements or medications. Consult a professional to avoid interactions.\nRecord Keeping:\nMaintain records of Liverofine administration, including dates, dosages, and animal details.\nRegularly assess the animals’ liver health to evaluate the effectiveness of the tonic.",
      Category: "poultry, goat, cow",
      Type: "Medicine",
      imgText: "Liverofine veterinary liver tonic",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Liverofine | veterinary liver tonic",
    "image": "https://www.rumeno.in/static/media/Liverofine.e956615d5fe6c67bac95.jpg",
    "description": "Liverofine is a premium veterinary liver tonic that promotes optimal animal health. Use Liverofine to help your pet's liver function. Veterinarians prescribe Liverofine, a liver tonic designed specifically to support and protect your pet's liver function.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "LIVRFN",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "125",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "76"
    }
  }`,
    },
    {
      id: 15,
      name: "D-Cox | Weaning goat supplement",
      priceText: 250,
      img: [DCox],
      metaDesc: "Make Weaning Easier for Your Kids with D-Cox. This weaning goat supplement provides essential nutrients for a smooth transition from milk to solid feed. Shop D-Cox today!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "250gm",
      Shortdescription: "D-Cox Powder: Formulated to enhance growth rates in young goats during the critical weaning phase.\nSupports Weight Gain: Boosts weight gain and overall development.\nEasy Administration: Simply mix with feed for convenient use.",
      description: "D-Cox\n\nD-Cox is a natural feed supplement designed specifically for weaning goat and sheep kids. It is formulated to help support healthy growth and development while also providing protection against common diseases such as coccidia.\n\nWeaning is a critical period in the life of young animals, as it marks the transition from milk to solid food. During this time, the digestive system undergoes significant changes, and the animals may be more susceptible to digestive upsets and other health problems. D-Cox is designed to provide the essential nutrients and support needed to help young animals thrive during this period.\n\nThe key ingredient in D-Cox is a blend of natural herbs and botanicals that have been carefully selected for their nutritional and medicinal properties. These ingredients work together to support healthy digestion, boost immunity, and promote growth and development in young animals.\n\nOne of the most significant benefits of D-Cox is its ability to help prevent and treat coccidia, a common and potentially deadly disease that affects young goats and sheep. Coccidia is caused by a parasite that can infect the digestive tract, leading to diarrhea, dehydration, and weight loss. D-Cox contains natural compounds that help to eliminate these parasites, reducing the risk of infection and improving overall health and wellbeing.\n\nIn addition to its anti-coccidia properties, D-Cox also contains a range of other nutrients and ingredients that are essential for healthy growth and development in young animals. These include vitamins, minerals, amino acids, and digestive enzymes.\n\nD-Cox is easy to use and can be added to the animals' feed or water. It is safe and gentle on the digestive system, making it suitable for use with even the most delicate young animals.\n\nOverall, D-Cox is an excellent choice for farmers and animal breeders who want to ensure the health and wellbeing of their young goats and sheep during the critical weaning period. With its natural, herbal formula, D-Cox can help to support healthy growth and development, boost immunity, and provide protection against common diseases like coccidia.",
      Instruction: "Product Description:\nD-Cox is a coccidiostat formulated to prevent coccidiosis in young goats during the critical weaning phase.\nIt contains the active drug ingredient Decoquinate (6%) to combat Eimeria christenseni and E. ninakohlyakimovae, the common coccidia species affecting goats.\nTarget Animals:\nD-Cox is specifically intended for young goats during the weaning period.\nDosage and Administration:\nConsult a veterinarian or livestock expert before using D-Cox.\nAdminister the product orally, preferably mixed with feed or water.\nThe recommended dosage is to provide 22.7 mg decoquinate per 100 lbs (0.5 mg per kg) body weight per day.\nMix D-Cox thoroughly into the goat’s ration.\nDuration:\nFeed D-Cox for at least 28 days during periods of coccidiosis exposure or when experience indicates coccidiosis is likely to be a hazard.\nTypes of Medicated Feed:\nType C Medicated Feed (Complete Ration):\nMix D-Cox into the complete feed to provide the proper decoquinate levels daily.\nExample dosages:\n0.5 lbs per ton of feed (13.6 g/ton) for 20 lbs body weight\n0.7 lbs per ton of feed (19.0 g/ton) for 14.3 lbs body weight\n1.0 lb per ton of feed (27.2 g/ton) for 10 lbs body weight\nStorage:\nStore D-Cox in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor goats closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.",
      Category: "goat",
      Type: "Medicine",
      imgText: "D Cox Weaning goat supplement",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "D-Cox | Weaning goat supplement",
                  "image": "https://www.rumeno.in/static/media/D-Cox.a94b558940bc0e2ddaeb.jpg",
                  "description": "D-Cox is a natural feed supplement designed specifically for weaning goat and sheep kids. It is formulated to help support healthy growth and development while also providing protection against common diseases such as coccidia. Weaning is a critical period in the life of young animals, as it marks the transition from milk to solid food. During this time, the digestive system undergoes significant changes, and the animals may be more susceptible to digestive upsets and other health problems. D-Cox is designed to provide the essential nutrients and support needed to help young animals thrive during this period.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "DCX",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "250",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.2",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "55"
                  }
                }`,
    },
    {
      id: 16,
      name: "Rumeno Micro Flora | Pre + Probiotic Supplement for animals ",
      priceText: 90,
      img: [RumenoMicroflorapre],
      metaDesc: "Support Digestive Health in Animals with Rumeno Micro Flora. This prebiotic and probiotic supplement promotes gut health and may improve digestion in ruminant animals.  Learn more about Rumeno Micro Flora.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "50gm",
      Shortdescription: "Rumeno Micro Flora Powder: A premium quality blend of prebiotics and probiotics designed to support your pet’s overall health and well-being.\nDigestive Health: Promotes the growth of beneficial bacteria in your pet’s gut, while reducing harmful bacteria, leading to better digestion and stronger immunity.\nEssential Nutrients: Contains vitamins (A, B1, B2, B6, B12, D3, E, and K) and minerals (calcium, phosphorus, and iron) for optimal health.\n",
      description: "Rumeno Micro Flora\n\nIntroducing Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals.\n\nOur carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.\n\nUnlike many other pre+probiotic supplements, Rumeno Micro-Flora contains a high concentration of beneficial bacteria, including Lactobacillus spp, Bifidobacterium spp , Streptococcus spp, Sacchromyces spp, Bacillus spp, among others. Each strain is specially selected for its unique health benefits, and our manufacturing process ensures that the bacteria remain viable and active until consumed by your animal.\n\nPrebiotics are non-digestible fibers that serve as a food source for beneficial bacteria in the gut. When animals consume prebiotics, they pass through the digestive system undigested until they reach the colon, where they are fermented by the gut microbiota.\n\nCombining prebiotics and probiotics in a supplement can provide a range of health benefits for animals, as they work together to support a healthy gut microbiome. Here are some of the benefits that can result from a combination of prebiotics and probiotics:\n\nImproved digestive health: Probiotics introduce beneficial bacteria to the gut, while prebiotics provide the food source that helps these bacteria thrive. Together, they work to balance the gut microbiome, improve digestion, and reduce the risk of digestive disorders such as diarrhea, constipation, and irritable bowel syndrome.\n\nEnhanced immune function: The gut microbiome plays a critical role in immune function, and prebiotics and probiotics can work together to promote a healthy immune system. Probiotics can boost the production of immune cells, while prebiotics nourish the gut microbiota and support immune function.\n\nIncreased nutrient absorption: Prebiotics and probiotics can enhance the absorption of nutrients, such as calcium, magnesium, and iron, by improving the digestive process and promoting the growth of beneficial bacteria.\n\nReduced stress and anxiety: Studies have shown that prebiotics and probiotics can help to reduce stress and anxiety in animals, possibly by regulating the production of stress hormones in the body.\n\nImproved feed conversion: The prebiotics in Rumeno Micro-Flora can help to improve the digestibility of feed in farm animals, which can lead to more efficient feed conversion and better weight gain. This can be especially important for meat animals, as it can reduce the amount of time and feed required to reach market weight.\n\nIncreased milk production: In dairy animals, the combination of prebiotics and probiotics in Rumeno Micro-Flora can help to improve digestion and nutrient absorption, which can lead to increased milk production.\n\nEnhanced nutrient uptake: The probiotics in Rumeno Micro-Flora can help to promote the growth of beneficial bacteria in the gut, which can enhance the uptake of nutrients such as calcium, magnesium, and iron. This can help to improve overall health and wellbeing in farm animals, as well as support increased production.\n\nReduced risk of digestive disorders: The prebiotics and probiotics in Rumeno Micro-Flora can help to balance the gut microbiome, which can reduce the risk of digestive disorders such as diarrhea, bloat, and colic. This can help to keep animals healthy and productive, which can ultimately benefit the bottom line for farmers.\n\nNatural and safe: Rumeno Micro-Flora is made from high-quality, natural ingredients and is free from harsh chemicals and antibiotics. This means that it provides a safe and effective way to support production in farm animals without the risk of negative side effects or antibiotic resistance.\n\nBy supporting a healthy gut microbiome, prebiotics and probiotics can improve overall health and wellbeing in animals. This can include improved skin and coat health, increased energy levels, and reduced risk of chronic diseases.\n\nOverall, a combination of prebiotics and probiotics can provide a range of benefits for animals, from improved digestion and immune function to enhanced nutrient absorption and reduced stress. By working together to support a healthy gut microbiome, prebiotics and probiotics can help to promote optimal health and wellbeing in your furry friends.\n\nWhether you're a pet owner looking to support your furry friend's digestive health, or a farmer looking to improve the productivity and well-being of your livestock, Rumeno Micro-Flora is the perfect solution. Our easy-to-administer supplement can be added to your animal's food or water, and is suitable for all types of animals, including dogs, cats, horses, cows, goats, sheep, pigs, poultry, parrots, piegions and more.\n\nSo why wait? Try Rumeno Micro-Flora today and give your animal the gift of a healthy gut and improved overall health and wellness.",
      Instruction: "Product Description:\nRumeno Micro Flora is a specialized blend of prebiotics and probiotics formulated to enhance the microbial balance in the rumen of ruminant animals.\nIt promotes efficient digestion, nutrient absorption, and overall gut health.\nTarget Animals:\nSuitable for various ruminants, including:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Rumeno Micro Flora.\nAdminister the supplement orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific digestive needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nBenefits:\nPrebiotics: Nourish beneficial gut bacteria, creating an optimal environment for their growth.\nProbiotics: Introduce live beneficial microbes (such as Lactobacillus and Bifidobacterium) to the rumen.\nImproved Digestion: Enhances fiber breakdown and nutrient utilization.\nImmune Support: A healthy gut contributes to overall immune function.\nStorage:\nStore Rumeno Micro Flora in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nRecord Keeping:\nMaintain records of Rumeno Micro Flora administration, including dates, dosages, and animal details.\nRegularly assess the animals’ gut health to evaluate the effectiveness of the supplement.",
      Category: "goat ,cow",
      Type: "Medicine",
      imgText: "Rumeno Mico Flora Pre + Probiotic supplement for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Rumeno Micro Flora | Pre + Probiotic Supplement for animals",
    "image": "https://www.rumeno.in/static/media/Rumeno-Micro-flora.8fbf39e80d47c16a054a.jpg",
    "description": "Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals. Our carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MCRFL",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "1300",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "54"
    }
  }`,
    },
    {
      id: 17,
      name: "Rumeno Micro Flora | Pre + Probiotic Supplement for animals ",
      priceText: 350,
      img: [RumenoMicroflorapre],
      metaDesc: "Support Digestive Health in Animals with Rumeno Micro Flora. This prebiotic and probiotic supplement promotes gut health and may improve digestion in ruminant animals.  Learn more about Rumeno Micro Flora.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "250gm",
      Shortdescription: "Rumeno Micro Flora Powder: A premium quality blend of prebiotics and probiotics designed to support your pet’s overall health and well-being.\nDigestive Health: Promotes the growth of beneficial bacteria in your pet’s gut, while reducing harmful bacteria, leading to better digestion and stronger immunity.\nEssential Nutrients: Contains vitamins (A, B1, B2, B6, B12, D3, E, and K) and minerals (calcium, phosphorus, and iron) for optimal health.\n",
      description: "Rumeno Micro Flora\n\nIntroducing Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals.\n\nOur carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.\n\nUnlike many other pre+probiotic supplements, Rumeno Micro-Flora contains a high concentration of beneficial bacteria, including Lactobacillus spp, Bifidobacterium spp , Streptococcus spp, Sacchromyces spp, Bacillus spp, among others. Each strain is specially selected for its unique health benefits, and our manufacturing process ensures that the bacteria remain viable and active until consumed by your animal.\n\nPrebiotics are non-digestible fibers that serve as a food source for beneficial bacteria in the gut. When animals consume prebiotics, they pass through the digestive system undigested until they reach the colon, where they are fermented by the gut microbiota.\n\nCombining prebiotics and probiotics in a supplement can provide a range of health benefits for animals, as they work together to support a healthy gut microbiome. Here are some of the benefits that can result from a combination of prebiotics and probiotics:\n\nImproved digestive health: Probiotics introduce beneficial bacteria to the gut, while prebiotics provide the food source that helps these bacteria thrive. Together, they work to balance the gut microbiome, improve digestion, and reduce the risk of digestive disorders such as diarrhea, constipation, and irritable bowel syndrome.\n\nEnhanced immune function: The gut microbiome plays a critical role in immune function, and prebiotics and probiotics can work together to promote a healthy immune system. Probiotics can boost the production of immune cells, while prebiotics nourish the gut microbiota and support immune function.\n\nIncreased nutrient absorption: Prebiotics and probiotics can enhance the absorption of nutrients, such as calcium, magnesium, and iron, by improving the digestive process and promoting the growth of beneficial bacteria.\n\nReduced stress and anxiety: Studies have shown that prebiotics and probiotics can help to reduce stress and anxiety in animals, possibly by regulating the production of stress hormones in the body.\n\nImproved feed conversion: The prebiotics in Rumeno Micro-Flora can help to improve the digestibility of feed in farm animals, which can lead to more efficient feed conversion and better weight gain. This can be especially important for meat animals, as it can reduce the amount of time and feed required to reach market weight.\n\nIncreased milk production: In dairy animals, the combination of prebiotics and probiotics in Rumeno Micro-Flora can help to improve digestion and nutrient absorption, which can lead to increased milk production.\n\nEnhanced nutrient uptake: The probiotics in Rumeno Micro-Flora can help to promote the growth of beneficial bacteria in the gut, which can enhance the uptake of nutrients such as calcium, magnesium, and iron. This can help to improve overall health and wellbeing in farm animals, as well as support increased production.\n\nReduced risk of digestive disorders: The prebiotics and probiotics in Rumeno Micro-Flora can help to balance the gut microbiome, which can reduce the risk of digestive disorders such as diarrhea, bloat, and colic. This can help to keep animals healthy and productive, which can ultimately benefit the bottom line for farmers.\n\nNatural and safe: Rumeno Micro-Flora is made from high-quality, natural ingredients and is free from harsh chemicals and antibiotics. This means that it provides a safe and effective way to support production in farm animals without the risk of negative side effects or antibiotic resistance.\n\nBy supporting a healthy gut microbiome, prebiotics and probiotics can improve overall health and wellbeing in animals. This can include improved skin and coat health, increased energy levels, and reduced risk of chronic diseases.\n\nOverall, a combination of prebiotics and probiotics can provide a range of benefits for animals, from improved digestion and immune function to enhanced nutrient absorption and reduced stress. By working together to support a healthy gut microbiome, prebiotics and probiotics can help to promote optimal health and wellbeing in your furry friends.\n\nWhether you're a pet owner looking to support your furry friend's digestive health, or a farmer looking to improve the productivity and well-being of your livestock, Rumeno Micro-Flora is the perfect solution. Our easy-to-administer supplement can be added to your animal's food or water, and is suitable for all types of animals, including dogs, cats, horses, cows, goats, sheep, pigs, poultry, parrots, piegions and more.\n\nSo why wait? Try Rumeno Micro-Flora today and give your animal the gift of a healthy gut and improved overall health and wellness.",
      Instruction: "Product Description:\nRumeno Micro Flora is a specialized blend of prebiotics and probiotics formulated to enhance the microbial balance in the rumen of ruminant animals.\nIt promotes efficient digestion, nutrient absorption, and overall gut health.\nTarget Animals:\nSuitable for various ruminants, including:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Rumeno Micro Flora.\nAdminister the supplement orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific digestive needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nBenefits:\nPrebiotics: Nourish beneficial gut bacteria, creating an optimal environment for their growth.\nProbiotics: Introduce live beneficial microbes (such as Lactobacillus and Bifidobacterium) to the rumen.\nImproved Digestion: Enhances fiber breakdown and nutrient utilization.\nImmune Support: A healthy gut contributes to overall immune function.\nStorage:\nStore Rumeno Micro Flora in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nRecord Keeping:\nMaintain records of Rumeno Micro Flora administration, including dates, dosages, and animal details.\nRegularly assess the animals’ gut health to evaluate the effectiveness of the supplement.",
      Category: "goat ,cow",
      Type: "Medicine",
      imgText: "Rumeno Mico Flora Pre + Probiotic supplement for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Rumeno Micro Flora | Pre + Probiotic Supplement for animals",
    "image": "https://www.rumeno.in/static/media/Rumeno-Micro-flora.8fbf39e80d47c16a054a.jpg",
    "description": "Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals. Our carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MCRFL",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "1300",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "54"
    }
  }`,
    },
    {
      id: 18,
      name: "Rumeno Micro Flora | Pre + Probiotic Supplement for animals ",
      priceText: 650,
      img: [RumenoMicroflorapre],
      metaDesc: "Support Digestive Health in Animals with Rumeno Micro Flora. This prebiotic and probiotic supplement promotes gut health and may improve digestion in ruminant animals.  Learn more about Rumeno Micro Flora.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm",
      Shortdescription: "Rumeno Micro Flora Powder: A premium quality blend of prebiotics and probiotics designed to support your pet’s overall health and well-being.\nDigestive Health: Promotes the growth of beneficial bacteria in your pet’s gut, while reducing harmful bacteria, leading to better digestion and stronger immunity.\nEssential Nutrients: Contains vitamins (A, B1, B2, B6, B12, D3, E, and K) and minerals (calcium, phosphorus, and iron) for optimal health.\n",
      description: "Rumeno Micro Flora\n\nIntroducing Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals.\n\nOur carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.\n\nUnlike many other pre+probiotic supplements, Rumeno Micro-Flora contains a high concentration of beneficial bacteria, including Lactobacillus spp, Bifidobacterium spp , Streptococcus spp, Sacchromyces spp, Bacillus spp, among others. Each strain is specially selected for its unique health benefits, and our manufacturing process ensures that the bacteria remain viable and active until consumed by your animal.\n\nPrebiotics are non-digestible fibers that serve as a food source for beneficial bacteria in the gut. When animals consume prebiotics, they pass through the digestive system undigested until they reach the colon, where they are fermented by the gut microbiota.\n\nCombining prebiotics and probiotics in a supplement can provide a range of health benefits for animals, as they work together to support a healthy gut microbiome. Here are some of the benefits that can result from a combination of prebiotics and probiotics:\n\nImproved digestive health: Probiotics introduce beneficial bacteria to the gut, while prebiotics provide the food source that helps these bacteria thrive. Together, they work to balance the gut microbiome, improve digestion, and reduce the risk of digestive disorders such as diarrhea, constipation, and irritable bowel syndrome.\n\nEnhanced immune function: The gut microbiome plays a critical role in immune function, and prebiotics and probiotics can work together to promote a healthy immune system. Probiotics can boost the production of immune cells, while prebiotics nourish the gut microbiota and support immune function.\n\nIncreased nutrient absorption: Prebiotics and probiotics can enhance the absorption of nutrients, such as calcium, magnesium, and iron, by improving the digestive process and promoting the growth of beneficial bacteria.\n\nReduced stress and anxiety: Studies have shown that prebiotics and probiotics can help to reduce stress and anxiety in animals, possibly by regulating the production of stress hormones in the body.\n\nImproved feed conversion: The prebiotics in Rumeno Micro-Flora can help to improve the digestibility of feed in farm animals, which can lead to more efficient feed conversion and better weight gain. This can be especially important for meat animals, as it can reduce the amount of time and feed required to reach market weight.\n\nIncreased milk production: In dairy animals, the combination of prebiotics and probiotics in Rumeno Micro-Flora can help to improve digestion and nutrient absorption, which can lead to increased milk production.\n\nEnhanced nutrient uptake: The probiotics in Rumeno Micro-Flora can help to promote the growth of beneficial bacteria in the gut, which can enhance the uptake of nutrients such as calcium, magnesium, and iron. This can help to improve overall health and wellbeing in farm animals, as well as support increased production.\n\nReduced risk of digestive disorders: The prebiotics and probiotics in Rumeno Micro-Flora can help to balance the gut microbiome, which can reduce the risk of digestive disorders such as diarrhea, bloat, and colic. This can help to keep animals healthy and productive, which can ultimately benefit the bottom line for farmers.\n\nNatural and safe: Rumeno Micro-Flora is made from high-quality, natural ingredients and is free from harsh chemicals and antibiotics. This means that it provides a safe and effective way to support production in farm animals without the risk of negative side effects or antibiotic resistance.\n\nBy supporting a healthy gut microbiome, prebiotics and probiotics can improve overall health and wellbeing in animals. This can include improved skin and coat health, increased energy levels, and reduced risk of chronic diseases.\n\nOverall, a combination of prebiotics and probiotics can provide a range of benefits for animals, from improved digestion and immune function to enhanced nutrient absorption and reduced stress. By working together to support a healthy gut microbiome, prebiotics and probiotics can help to promote optimal health and wellbeing in your furry friends.\n\nWhether you're a pet owner looking to support your furry friend's digestive health, or a farmer looking to improve the productivity and well-being of your livestock, Rumeno Micro-Flora is the perfect solution. Our easy-to-administer supplement can be added to your animal's food or water, and is suitable for all types of animals, including dogs, cats, horses, cows, goats, sheep, pigs, poultry, parrots, piegions and more.\n\nSo why wait? Try Rumeno Micro-Flora today and give your animal the gift of a healthy gut and improved overall health and wellness.",
      Instruction: "Product Description:\nRumeno Micro Flora is a specialized blend of prebiotics and probiotics formulated to enhance the microbial balance in the rumen of ruminant animals.\nIt promotes efficient digestion, nutrient absorption, and overall gut health.\nTarget Animals:\nSuitable for various ruminants, including:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Rumeno Micro Flora.\nAdminister the supplement orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific digestive needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nBenefits:\nPrebiotics: Nourish beneficial gut bacteria, creating an optimal environment for their growth.\nProbiotics: Introduce live beneficial microbes (such as Lactobacillus and Bifidobacterium) to the rumen.\nImproved Digestion: Enhances fiber breakdown and nutrient utilization.\nImmune Support: A healthy gut contributes to overall immune function.\nStorage:\nStore Rumeno Micro Flora in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nRecord Keeping:\nMaintain records of Rumeno Micro Flora administration, including dates, dosages, and animal details.\nRegularly assess the animals’ gut health to evaluate the effectiveness of the supplement.",
      Category: "goat ,cow",
      Type: "Medicine",
      imgText: "Rumeno Mico Flora Pre + Probiotic supplement for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Rumeno Micro Flora | Pre + Probiotic Supplement for animals",
    "image": "https://www.rumeno.in/static/media/Rumeno-Micro-flora.8fbf39e80d47c16a054a.jpg",
    "description": "Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals. Our carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MCRFL",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "1300",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "54"
    }
  }`,
    },
    {
      id: 19,
      name: "Rumeno Micro Flora | Pre + Probiotic Supplement for animals ",
      priceText: 1300,
      img: [RumenoMicroflorapre],
      metaDesc: "Support Digestive Health in Animals with Rumeno Micro Flora. This prebiotic and probiotic supplement promotes gut health and may improve digestion in ruminant animals.  Learn more about Rumeno Micro Flora.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Rumeno Micro Flora Powder: A premium quality blend of prebiotics and probiotics designed to support your pet’s overall health and well-being.\nDigestive Health: Promotes the growth of beneficial bacteria in your pet’s gut, while reducing harmful bacteria, leading to better digestion and stronger immunity.\nEssential Nutrients: Contains vitamins (A, B1, B2, B6, B12, D3, E, and K) and minerals (calcium, phosphorus, and iron) for optimal health.\n",
      description: "Rumeno Micro Flora\n\nIntroducing Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals.\n\nOur carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.\n\nUnlike many other pre+probiotic supplements, Rumeno Micro-Flora contains a high concentration of beneficial bacteria, including Lactobacillus spp, Bifidobacterium spp , Streptococcus spp, Sacchromyces spp, Bacillus spp, among others. Each strain is specially selected for its unique health benefits, and our manufacturing process ensures that the bacteria remain viable and active until consumed by your animal.\n\nPrebiotics are non-digestible fibers that serve as a food source for beneficial bacteria in the gut. When animals consume prebiotics, they pass through the digestive system undigested until they reach the colon, where they are fermented by the gut microbiota.\n\nCombining prebiotics and probiotics in a supplement can provide a range of health benefits for animals, as they work together to support a healthy gut microbiome. Here are some of the benefits that can result from a combination of prebiotics and probiotics:\n\nImproved digestive health: Probiotics introduce beneficial bacteria to the gut, while prebiotics provide the food source that helps these bacteria thrive. Together, they work to balance the gut microbiome, improve digestion, and reduce the risk of digestive disorders such as diarrhea, constipation, and irritable bowel syndrome.\n\nEnhanced immune function: The gut microbiome plays a critical role in immune function, and prebiotics and probiotics can work together to promote a healthy immune system. Probiotics can boost the production of immune cells, while prebiotics nourish the gut microbiota and support immune function.\n\nIncreased nutrient absorption: Prebiotics and probiotics can enhance the absorption of nutrients, such as calcium, magnesium, and iron, by improving the digestive process and promoting the growth of beneficial bacteria.\n\nReduced stress and anxiety: Studies have shown that prebiotics and probiotics can help to reduce stress and anxiety in animals, possibly by regulating the production of stress hormones in the body.\n\nImproved feed conversion: The prebiotics in Rumeno Micro-Flora can help to improve the digestibility of feed in farm animals, which can lead to more efficient feed conversion and better weight gain. This can be especially important for meat animals, as it can reduce the amount of time and feed required to reach market weight.\n\nIncreased milk production: In dairy animals, the combination of prebiotics and probiotics in Rumeno Micro-Flora can help to improve digestion and nutrient absorption, which can lead to increased milk production.\n\nEnhanced nutrient uptake: The probiotics in Rumeno Micro-Flora can help to promote the growth of beneficial bacteria in the gut, which can enhance the uptake of nutrients such as calcium, magnesium, and iron. This can help to improve overall health and wellbeing in farm animals, as well as support increased production.\n\nReduced risk of digestive disorders: The prebiotics and probiotics in Rumeno Micro-Flora can help to balance the gut microbiome, which can reduce the risk of digestive disorders such as diarrhea, bloat, and colic. This can help to keep animals healthy and productive, which can ultimately benefit the bottom line for farmers.\n\nNatural and safe: Rumeno Micro-Flora is made from high-quality, natural ingredients and is free from harsh chemicals and antibiotics. This means that it provides a safe and effective way to support production in farm animals without the risk of negative side effects or antibiotic resistance.\n\nBy supporting a healthy gut microbiome, prebiotics and probiotics can improve overall health and wellbeing in animals. This can include improved skin and coat health, increased energy levels, and reduced risk of chronic diseases.\n\nOverall, a combination of prebiotics and probiotics can provide a range of benefits for animals, from improved digestion and immune function to enhanced nutrient absorption and reduced stress. By working together to support a healthy gut microbiome, prebiotics and probiotics can help to promote optimal health and wellbeing in your furry friends.\n\nWhether you're a pet owner looking to support your furry friend's digestive health, or a farmer looking to improve the productivity and well-being of your livestock, Rumeno Micro-Flora is the perfect solution. Our easy-to-administer supplement can be added to your animal's food or water, and is suitable for all types of animals, including dogs, cats, horses, cows, goats, sheep, pigs, poultry, parrots, piegions and more.\n\nSo why wait? Try Rumeno Micro-Flora today and give your animal the gift of a healthy gut and improved overall health and wellness.",
      Instruction: "Product Description:\nRumeno Micro Flora is a specialized blend of prebiotics and probiotics formulated to enhance the microbial balance in the rumen of ruminant animals.\nIt promotes efficient digestion, nutrient absorption, and overall gut health.\nTarget Animals:\nSuitable for various ruminants, including:\nCattle\nSheep\nGoats\nDosage and Administration:\nConsult a veterinarian or livestock expert before using Rumeno Micro Flora.\nAdminister the supplement orally, preferably mixed with feed or water.\nThe recommended dosage may vary based on the animal’s weight, age, and specific digestive needs.\nFollow the manufacturer’s guidelines for accurate dosing.\nBenefits:\nPrebiotics: Nourish beneficial gut bacteria, creating an optimal environment for their growth.\nProbiotics: Introduce live beneficial microbes (such as Lactobacillus and Bifidobacterium) to the rumen.\nImproved Digestion: Enhances fiber breakdown and nutrient utilization.\nImmune Support: A healthy gut contributes to overall immune function.\nStorage:\nStore Rumeno Micro Flora in a cool, dry place away from direct sunlight.\nFollow any specific storage instructions provided on the packaging.\nPrecautions:\nMonitor animals closely for any adverse reactions.\nDiscontinue use if unusual symptoms occur and seek professional advice.\nRecord Keeping:\nMaintain records of Rumeno Micro Flora administration, including dates, dosages, and animal details.\nRegularly assess the animals’ gut health to evaluate the effectiveness of the supplement.",
      Category: "goat ,cow",
      Type: "Medicine",
      imgText: "Rumeno Mico Flora Pre + Probiotic supplement for animals",
      script: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Rumeno Micro Flora | Pre + Probiotic Supplement for animals",
    "image": "https://www.rumeno.in/static/media/Rumeno-Micro-flora.8fbf39e80d47c16a054a.jpg",
    "description": "Rumeno Micro-Flora, a powerful pre+probiotic supplement for animals. With a unique blend of multi beneficial bacteria, Rumeno Micro-Flora is formulated to support the digestive health of your beloved pets and farm animals. Our carefully crafted blend of pre+probiotics contains a diverse range of live microorganisms that work together to promote a healthy gut microbiome. By supporting the growth of good bacteria and suppressing harmful pathogens, Rumeno Micro-Flora helps to improve nutrient absorption, boost immunity, and reduce digestive issues such as bloating, gas, and diarrhea.",
    "brand": {
      "@type": "Brand",
      "name": "Rumeno"
    },
    "sku": "MCRFL",
    "offers": {
      "@type": "Offer",
      "url": "",
      "priceCurrency": "INR",
      "price": "1300",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "54"
    }
  }`,
    },
    {
      id: 20,
      name: "Lacto-Pup Milk Replacer | Milk Replacer for Puppies",
      priceText: 600,
      img: [LactoPupMilkReplacer],
      metaDesc: "Give orphaned or weaning puppies the nutrition they need with Lacto-Pup Milk Replacer. This complete food provides essential vitamins, minerals, and DHA for healthy development. Shop Lacto-Pup Milk Replacer for your puppies.",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "500gm",
      Shortdescription: "Complete Milk Replacement: Ideal for newborn puppies, Lacto-Pup provides essential nutrients and amino acids, closely resembling natural mother’s milk.\nBoosts Cognitive Development: Enriched with DHA (Docosahexaenoic acid) for cognitive development and visual acuity.\nVersatile Use: Suitable for weaning puppies, pregnant or lactating mothers, and convalescing animals. Lacto-Pup has been trusted for over 100 years in saving young lives",
      description: "The Caring Option for Orphaned or Underweight Puppies: Lacto Pup Milk Replacer\n\nGive Your Adorable Dogs the Start in Life They Merit\n\nA full milk substitute that has been scientifically developed, Lacto Pup Milk Replacer is intended especially for the sensitive requirements of underweight or orphaned puppies. The vital nutrients your pet needs to flourish are provided by Lacto Pup Milk Replacer, whether they are missing their mother or just need a nutritious boost.\n\nMore Than Just Milk Replacer for Puppies, It's Nurturing Care:\n\nPerfectly Balanced Nutrition: Lacto Pup Milk Replacer is a comprehensive and balanced source of protein, lipids, carbs, vitamins, and minerals that tastes a lot like real mother's milk. This guarantees healthy growth and development at a very important time in your puppy's life.\n\nSimple Digestion: Lacto Pup Milk Replacer is a puppy milk replacer made with nutrients that are simple to digest, which helps to gently nourish your puppy's developing digestive system. This reduces the possibility of upset stomach and guarantees they get the vital nutrients they require.\n\nPromotes a Healthy Immune System: Lacto Pup Milk Replacer is made with essential nutrients that are specifically chosen to boost your puppy's immune system as it develops, assisting them in fending off illnesses and maintaining their health.\n\nEncourages Strong Growth and Development: Lacto Pup Milk Replacer helps your puppy grow strong bones and muscles, preparing them for a healthy life, by giving all the necessary building blocks.\n\nThe Best Option for Your Puppy's Requirements:\n\nTrusted by Breeders & doctors: Providing a dependable and efficient means of guaranteeing ideal nutrition for underweight or orphaned puppies, Lacto Pup Milk Replacer is the product of choice for breeders and doctors across the globe.\n\nSimple Mixing and Feeding: Lacto Pup Milk Replacer is conveniently packaged as a powder that dissolves quickly in warm water, making feeding quick and simple.\n\nSeveral Feeding Choices: Lacto Pup Milk Replacer adjusts to your unique feeding preferences and can be used with a bottle, syringe, or feeding cup.\n\nUse Lacto Pup Milk Replacer to provide your beloved puppies with the loving care they need. It's the ideal way to guarantee their healthy growth and a solid foundation in life.",
      Instruction: "Product Description:\nLacto-Pup Milk Replacer is designed to provide essential nutrition for puppies during their early stages of life.\nIt closely resembles natural mother’s milk, ensuring optimal growth and development.\nTarget Animals:\nSuitable for:\nNewborn puppies\nOrphaned puppies\nUnderweight puppies\nPreparation:\nUsing the scoop provided, add Lacto-Pup Milk Replacer to warm water (allow boiled water to cool before use).\nStir until completely dissolved.\nAllow the mixture to cool until lukewarm (around 38°C or blood temperature).\nFeeding Equipment:\nUse proper feeding equipment, such as the Beaphar Feeding Set or Beaphar Feeding Syringes.\nEnsure the equipment is clean and sterile.\nRecommended Dilution:\nThe recommended dilution for different puppy weights:\nFor 250g (0.25kg) puppies: Add 7 level scoops to 100ml warm water.\nFor 500g (0.5kg) puppies: Add 160ml per day.\nFor 1000g (1kg) puppies: Add 250ml per day.\nFor 2000g (2kg) puppies: Add 400ml per day.\nFor 5000g (5kg) puppies: Add 900ml per day.\nFeeding Frequency:\nAdjust the volume per day based on the puppy’s weight and age.\nSplit the daily volume across the recommended number of feeds per day.\nGradually transition to solid food after the 28th day.\nStorage:\nPrepared Lacto-Pup Milk Replacer can be refrigerated for up to 24 hours.\nReheat to 38°C or blood temperature before feeding.",
      Category: "dog",
      Type: "Medicine",
      imgText: "Lacto Pup Milk Replacer For Puppies",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Lacto-Pup Milk Replacer | Milk Replacer for Puppies",
                  "image": "https://www.rumeno.in/static/media/Lacto-Pup-Milk-Replacer.0683b2701f8fe6234860.jpg",
                  "description": "The Caring Option for Orphaned or Underweight Puppies: Lacto Pup Milk Replacer Give Your Adorable Dogs the Start in Life They Merit A full milk substitute that has been scientifically developed, Lacto Pup Milk Replacer is intended especially for the sensitive requirements of underweight or orphaned puppies. The vital nutrients your pet needs to flourish are provided by Lacto Pup Milk Replacer, whether they are missing their mother or just need a nutritious boost. More Than Just Milk Replacer for Puppies, It's Nurturing Care",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "LPMR",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "600",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.4",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "61"
                  }
                }`,
    },
    {
      id: 21,
      name: "Poultryfine | Anti bacterial poultry feed supplement",
      priceText: 1600,
      img: [poultryfine],
      metaDesc: "Protect Your Flock with Poultryfine. This antibacterial poultry feed supplement helps prevent and manage common infections, promoting healthier birds and improved flock performance. Learn more about Poultryfine today!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "For broller ,Breeder, & layer: 0.1 to 0.3 % or follow Veterinarian’s instruction Dilute the product in water according to instruction",
      description: "Poultryfine: Your Trusted Solution for Poultry Health and Growth\n\nAre you looking for top-quality antibacterial products to enhance the health and productivity of your poultry? Look no further! Poultryfine offers a comprehensive range of poultry feed supplements designed to promote growth, boost immunity, and maintain overall well-being.\n\nKey Features:\nAntibacterial Formulation: Our products are fortified with powerful antibacterial agents that help prevent and manage infections. Say goodbye to common poultry ailments and ensure a healthier flock.\nGrowth Promotion: Poultryfine’s antibacterial growth promoters stimulate optimal growth rates. Your birds will thrive, reaching their full potential in no time.\nNutrient-Rich: Our supplements are packed with essential vitamins, minerals, and amino acids. They support bone health, feather quality, and egg production.\nDigestive Health: A healthy gut is crucial for poultry. Poultryfine’s formulations aid digestion, improve nutrient absorption, and maintain gut flora balance.\nWhy Choose Poultryfine?\nScientifically Formulated: Our team of experts ensures that each product is backed by rigorous research and development.\nSafe and Effective: Poultryfine products are safe for your birds and the environment. We prioritize sustainability and animal welfare.\nEasy to Administer: Whether you’re a small-scale farmer or a large poultry operation, our supplements are user-friendly and convenient.\nProduct Range:\nPoultryfine Antibacterial Growth Promoter: Boost growth rates and immunity while keeping infections at bay.\nPoultryfine Immune Boost: Strengthen your flock’s defenses against diseases.\nPoultryfine NutriVit: A complete nutritional package for optimal health.\nPoultryfine GutGuard: Maintain gut health for better digestion and nutrient utilization.",
      Instruction: "Dosage and Administration:\nMix Poultryfine with the regular feed at the recommended dosage. The typical dosage is X grams per Y kilograms of feed (specific values should be provided on the product label).\nAdminister the supplemented feed to your poultry flock consistently.\nFrequency:\nProvide Poultryfine daily as part of the birds’ regular diet.\nFor optimal results, maintain a consistent feeding schedule.\nStorage:\nStore Poultryfine in a cool, dry place away from direct sunlight.\nEnsure the packaging is tightly sealed to prevent moisture or contamination.\nHygiene and Cleanliness:\nRegularly clean and disinfect feeding equipment, waterers, and the feeding area.\nAvoid cross-contamination by handling the supplement with clean hands and utensils.\nMonitoring:\nObserve your poultry flock for any signs of improved health, reduced bacterial infections, or enhanced productivity.\nAdjust the dosage if necessary based on flock size and specific health conditions.",
      Category: "poultry",
      Type: "Medicine",
      imgText: "Poultryfine Anti bacterial Poulry Feed Supplement",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Poultryfine | Anti bacterial poultry feed supplement",
                  "image": "https://www.rumeno.in/static/media/Poultryfine.72a530f3de321acd531c.png",
                  "description": "Poultryfine: Your Trusted Solution for Poultry Health and Growth Are you looking for top-quality antibacterial products to enhance the health and productivity of your poultry? Look no further! Poultryfine offers a comprehensive range of poultry feed supplements designed to promote growth, boost immunity, and maintain overall well-being.Poultryfine’s antibacterial growth promoters stimulate optimal growth rates",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "PTRYFN",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "1600",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.2",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "64"
                  }
                }`,
    },
    {
      id: 22,
      name: "Florovita-12 | Broiler weight gainer | Probiotic supplement for poultry",
      priceText: 1300,
      img: [Florovita],
      metaDesc: "Boost Broiler Growth & Wellbeing with Florovita-12. This probiotic supplement promotes healthy digestion, improves weight gain, and supports overall broiler health. Learn more about Florovita-12!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "1kg",
      Shortdescription: "Mix 50 gm Florovita-12 powder in 100 litre of water.",
      description: "Florovita-12: Probiotic Supplement for Poultry and Broiler Weight Gainer\nOverview:\nFlorovita-12 is a powerful probiotic supplement for poultry, meticulously designed to enhance the health and weight gain of poultry, especially broilers. Whether you’re a commercial poultry farmer or a backyard enthusiast, Florovita-12 provides essential nutrients for optimal growth.\n\nKey Features:\nProbiotic Power: Florovita-12 is a poultry feed supplements that contains a blend of beneficial probiotics that support gut health. A balanced gut microbiome improves nutrient absorption, digestion, and overall well-being.\nWeight Gain Formula: Broilers need efficient weight gain for optimal meat production. Florovita-12 also acts as a broiler weight gainer, promoting healthy muscle development and robust growth.\nVitamins and Minerals: Beyond probiotics, this supplement includes essential vitamins (such as vitamin B12) and minerals (like zinc and manganese). These micronutrients contribute to overall health and vitality.\nDigestive Comfort: A well-functioning digestive system reduces stress and ensures efficient feed utilization. Florovita-12 supports digestive comfort, leading to better feed conversion.\nBenefits:\nImproved Feed Efficiency: Florovita-12 helps broilers convert feed into weight gain more effectively.\nEnhanced Muscle Mass: Healthy weight gain translates to better meat yield and quality.\nStress Reduction: Probiotics support stress tolerance, especially during environmental changes or disease challenges.\nFlorovita-12: Boost your poultry’s growth with our premium poultry weight gain supplement. Specifically designed for poultry, Florovita-12 supports muscle development and efficient feed conversion. Watch your birds thrive! \nDirections for Use:\nMix: Blend the recommended amount of Florovita-12 with your poultry feed.\nAdminister: Offer daily according to weight and species guidelines.\nObserve: Monitor your poultry’s weight gain and adjust dosage if needed.\nQuality Assurance:\nScientifically Formulated: Florovita-12 is developed by poultry nutrition experts.\nThird-Party Tested: Rigorous quality checks ensure purity, potency, and safety.\nNo Artificial Additives: Free from artificial colors, flavors, and preservatives.\nChoose Florovita-12:\nInvest in your poultry’s health and weight gain with Florovita-12. Watch your broilers thrive!",
      Instruction: "Dosage and Administration:\r\nMix Florovita-12 with the regular feed at the recommended dosage. The typical dosage is X grams per Y kilograms of feed (specific values should be provided on the product label).\r\nAdminister the supplemented feed to your poultry flock consistently.\r\nFrequency:\r\nProvide Florovita-12 daily as part of the birds’ regular diet.\r\nFor optimal results, maintain a consistent feeding schedule.\r\nStorage:\r\nStore Florovita-12 in a cool, dry place away from direct sunlight.\r\nEnsure the packaging is tightly sealed to prevent moisture or contamination.\r\nHygiene and Cleanliness:\r\nRegularly clean and disinfect feeding equipment, waterers, and the feeding area.\r\nAvoid cross-contamination by handling the supplement with clean hands and utensils.\r\nMonitoring:\r\nObserve your poultry flock for any signs of improved health, reduced bacterial infections, or enhanced productivity.\r\nAdjust the dosage if necessary based on flock size and specific health conditions.",
      Category: "poultry",
      Type: "Medicine",
      imgText: "Florovita-12 Broiler Weight Gainer",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Florovita-12 | Broiler weight gainer | Probiotic supplement for poultry",
                  "image": "https://www.rumeno.in/static/media/florovita-12.a41251e04c6a475d0836.png",
                  "description": "Florovita-12: Probiotic Supplement for Poultry and Broiler Weight Gainer Overview: Florovita-12 is a powerful probiotic supplement for poultry, meticulously designed to enhance the health and weight gain of poultry, especially broilers. Whether you’re a commercial poultry farmer or a backyard enthusiast, Florovita-12 provides essential nutrients for optimal growth. Key Features: Probiotic Power: Florovita-12 is a poultry feed supplements that contains a blend of beneficial probiotics that support gut health.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "FLRV",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "1300",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.3",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "64"
                  }
                }`,
    },
    {
      id: 23,
      name: "Bull Goat | Goat weight gain supplement",
      priceText: 1175,
      img: [bullgoat],
      metaDesc: "Supercharge Your Bull Goat's Growth with Bull Goat Supplement. This targeted formula provides essential nutrients to help your male goat reach his full weight potential. Shop Bull Goat today!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "5kg",
      Shortdescription: "2 grams per kg body weight",
      description: "Bull Goat: Your Ultimate Solution for Goat Health and Weight Gain\n\nAre you seeking top-notch goat weight gain supplements to ensure your goats thrive? Look no further! Bull Goat offers a comprehensive range of products designed to enhance goat health, promote weight gain, and boost overall well-being.\n\nKey Features:\nHigh-Protein Formula: Our goat weight gain supplement is packed with essential nutrients, including protein. This protein supports muscle development and overall body mass, ensuring your goats reach their full potential.\nOptimal Nutrient Balance: Bull Goat provides a balanced blend of vitamins, minerals, and amino acids. These nutrients contribute to bone health, coat quality, and reproductive performance.\nDigestive Support: A healthy gut is crucial for goats. Our supplement aids digestion, improves nutrient absorption, and maintains gut flora balance.\nWhy Choose Bull Goat?\nScientifically Formulated: Our team of experts ensures that each product is backed by rigorous research and development.\nSafe and Effective: Bull Goat products are safe for your goats and promote overall well-being.\nEasy to Administer: Whether you’re a small-scale goat keeper or a large farm, our supplements are user-friendly and convenient.\nProduct Range:\nBull Goat Weight Gain Booster: Accelerate weight gain and muscle development with this high-protein supplement.\nBull Goat Health Essentials: A complete nutritional package for optimal goat health.\nBull Goat Digestive Aid: Maintain gut health for better digestion and nutrient utilization.",
      Instruction: "Dosage and Administration:\r\nMix Bull Goat with the regular goat feed at the recommended dosage. The typical dosage is X grams per Y kilograms of feed (specific values should be provided on the product label).\r\nAdminister the supplemented feed to your goats consistently.\r\nFrequency:\r\nProvide Bull Goat daily as part of the goats’ regular diet.\r\nFor optimal results, maintain a consistent feeding schedule.\r\nStorage:\r\nStore Bull Goat in a cool, dry place away from direct sunlight.\r\nEnsure the packaging is tightly sealed to prevent moisture or contamination.\r\nMonitoring:\r\nObserve your goats for any signs of improved weight gain, enhanced appetite, and overall health.\r\nAdjust the dosage if necessary based on individual goat needs and specific health conditions.",
      Category: "goat",
      Type: "Medicine",
      imgText: "Bull Goat Goat weight gain supplement",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Bull Goat | Goat weight gain supplement",
                  "image": "https://www.rumeno.in/static/media/Bull-Goat.ec068f108419e5ad356b.png",
                  "description": "Bull Goat: Your Ultimate Solution for Goat Health and Weight Gain Are you seeking top-notch goat weight gain supplements to ensure your goats thrive? Look no further! Bull Goat offers a comprehensive range of products designed to enhance goat health, promote weight gain, and boost overall well-being.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "BGT",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "1175",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.2",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "62"
                  }
                }`,
    },
    {
      id: 24,
      name: "Selennium-E | Selenium supplement for poultry | Poultry feed supplement",
      priceText: 260,
      img: [Selennium],
      metaDesc: "Support Flock Health & Performance with Selenium-E. This essential poultry feed supplement provides organic selenium and Vitamin E for stronger immunity, improved egg production, and healthier birds. Learn more about Selenium-E!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "300g",
      Shortdescription: "Water Soluble Dose 5-gm / 100 Birds For Chicks / Grower /Layers 5 5-gm / 50 Birds for Broilers Feed Mix: 200 gm / ton feed",
      description: "Selenium-E: Your Poultry’s Essential Nutrient Boost\n\nIntroducing Selenium-E is a premium poultry feed supplement meticulously crafted to enhance the health and productivity of your feathered friends. Packed with vital vitamins and minerals, this specialized formula ensures your poultry flock thrives in every aspect.\n\nSelennium-E is a premium selenium supplement for poultry, meticulously crafted to meet the specific needs of poultry (chickens, ducks, turkeys, etc.). Whether you raise chickens, ducks, turkeys, or other poultry, selenium-E provides essential nutrients for optimal health.\n\nKey Features:\nSelenium Boost: Selennium-E is a high-quality feed supplement for poultry that contains a concentrated dose of selenium, supporting antioxidant defenses, immune function, and overall vitality in poultry. This essential trace mineral plays a crucial role in maintaining their well-being.\nVitamins and Minerals: Beyond selenium, this supplement includes a balanced blend of vitamins (such as vitamin E) and minerals (including zinc and copper). These micronutrients contribute to feather quality, egg production, and bone strength.\nFeed Efficiency: Selennium-E enhances feed utilization, ensuring that your poultry get the most out of their diet. Improved nutrient absorption translates to better growth and performance.\nImmune Support: A robust immune system is essential for disease resistance. The selenium in Selennium-E bolsters immune responses, helping your poultry stay healthy.\nBenefits:\nHealthy Egg Production: Selennium-E positively influences egg quality and production rates.\nStrong Bones and Feathers: The combination of selenium and other nutrients supports skeletal health and feather integrity.\nReduced Stress: Antioxidant properties help combat oxidative stress, especially during challenging conditions.\nDirections for Use:\nMix: Blend the recommended amount of selenium-E with your poultry feed.\nAdminister: Offer daily according to weight and species guidelines.\nObserve: Monitor your poultry’s well-being and adjust dosage if needed.\nQuality Assurance:\nScientifically Formulated: Selennium-E is developed by poultry nutrition experts.\nThird-Party Tested: Rigorous quality checks ensure purity, potency, and safety.\nNo Artificial Additives: Free from artificial colors, flavors, and preservatives.\nChoose Selennium-E:\nInvest in your poultry’s health with selenium-E. Provide the essential nutrients they need to thrive!",
      Instruction: "Dosage and Administration:\r\nMix Selenium-E with the regular poultry feed at the recommended dosage. The typical dosage is X grams per Y kilograms of feed (specific values should be provided on the product label).\r\nAdminister the supplemented feed to your poultry flock consistently.\r\nFrequency:\r\nProvide Selenium-E daily as part of the birds’ regular diet.\r\nFor optimal results, maintain a consistent feeding schedule.\r\nStorage:\r\nStore Selenium-E in a cool, dry place away from direct sunlight.\r\nEnsure the packaging is tightly sealed to prevent moisture or contamination.\r\nMonitoring:\r\nObserve your poultry flock for any signs of improved health, especially related to selenium deficiency.\r\nAdjust the dosage if necessary based on flock size and specific health conditions.",
      Type: "Medicine",
      imgText: "Selennium-E Selenium supplement for poultry",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Selennium-E | Selenium supplement for poultry | Poultry feed supplement",
                  "image": "https://www.rumeno.in/static/media/selennium-E.b6a025d4d3b6ab1524c0.png",
                  "description": "Selenium-E is a premium poultry feed supplement meticulously crafted to enhance the health and productivity of your feathered friends. Packed with vital vitamins and minerals, this specialized formula ensures your poultry flock thrives in every aspect. Selennium-E is a premium selenium supplement for poultry, meticulously crafted to meet the specific needs of poultry (chickens, ducks, turkeys, etc.). Whether you raise chickens, ducks, turkeys, or other poultry, selenium-E provides essential nutrients for optimal health. Key Features: Selenium Boost: Selennium-E is a high-quality feed supplement for poultry that contains a concentrated dose of selenium, supporting antioxidant defenses, immune function, and overall vitality in poultry.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "SELE",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "260",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "56"
                  }
                }`,
    },
    {
      id: 25,
      name: "Farm house floor burner",
      priceText: 3000,
      img: [farmbuner],
      metaDesc: "High-Powered Weeding & More: Four Burner Flame Gun.  Eliminate weeds, clear brush, and tackle other tasks efficiently with this powerful 4-burner flame thrower. Shop flame guns today!",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Shortdescription: "A floor burner is an essential component in livestock housing, particularly in poultry and dairy farms. Let’s explore its significance and characteristics:\n\nPurpose:\nThe floor burner serves multiple purposes for animals:\nResting: Animals frequently use the floor for resting.\nMovement: It provides a surface for animals to move around.\nFeeding: Animals access their feed on the floor.\nMilking: In dairy farms, cows are milked on the floor.\nQualities:\nThe floor must possess specific qualities to meet these purposes:\nComfort: Animals should find the floor reasonably cool during hot weather and warm during cooler days.\nProtection: It shields animals from external elements such as rain, sun, and wind.\nSafety: The floor prevents predators (e.g., dogs, cats, snakes) from accessing the animals.\nHygiene: Proper flooring minimizes disease transmission and ensures cleanliness.",
      description: "Farmhouse Floor Burner: Enhancing Warmth and Rustic Charm\n\nA farmhouse floor burner is more than just a functional heating appliance—it’s a captivating centerpiece that infuses warmth and character into your living space. Whether you’re nestled in the countryside or embracing farmhouse aesthetics in an urban setting, this versatile burner adds rustic allure to any room.\n\nKey Features:\n\nNatural Materials: Crafted from timeless materials like wood or stone, the farmhouse floor burner pays homage to traditional architecture. The use of reclaimed wood imparts a rich patina, while stone veneer creates a low-profile yet eye-catching design.\nVersatility: From modest hearth surrounds to dramatic floor-to-ceiling accent walls, the farmhouse floor burner adapts seamlessly to various spaces. Its rugged appeal complements both minimalist and cozy interiors.\nBudget-Friendly Options:\nTimber Beam Mantelpiece: An affordable solution, a simple timber beam serves as a rustic mantel. Consider sourcing reclaimed wood for added character.\nPainted Brick Fireplace: Transform a brick fireplace with a coat of heat-resistant paint. Opt for earthy tones or neutrals to evoke a welcoming ambiance.\nModern Farmhouse Inspiration:\nMalm Gas Fire: For a retro-futuristic touch, install a Malm gas fire. Interior designer Leanne Ford used one in her rustic LA bolthole.\nConcrete Block Chimney: Architects in Maine created an industrial-style chimney using concrete blocks, blending contemporary design with utilitarian aesthetics.\nCreate a Cozy Haven: Whether you’re curling up with a book or hosting friends, the farmhouse floor burner radiates comfort and nostalgia. Let its flames dance and transform your space into a charming retreat.",
      Instruction: "Here are the instructions for using a floor burner effectively:\n\nPlacement and Safety:\nSelect a Suitable Location: Place the floor burner in an area with proper ventilation and away from flammable materials.\nStable Surface: Ensure the floor is stable and level to prevent accidents.\nClearance: Maintain adequate clearance around the burner to prevent overheating nearby objects.\nIgnition and Operation:\nFuel Type: Identify the type of fuel your floor burner uses (e.g., wood, gas, pellets).\nIgnition: Follow the manufacturer’s instructions to ignite the burner safely.\nAdjust Flames: Adjust the flame intensity using controls provided (if applicable).\nMaintenance and Cleaning:\nRegular Cleaning: Remove ashes and debris from the burner regularly.\nInspect Components: Check for any damaged parts, leaks, or blockages.\nChimney Maintenance: If your floor burner has a chimney, ensure it’s clean and free of creosote buildup.\nSafety Precautions:\nCarbon Monoxide (CO) Monitoring: Install a CO detector near the burner to detect any leaks.\nFire Extinguisher: Keep a fire extinguisher nearby.\nChildproofing: If you have children or pets, take precautions to prevent accidental contact with the burner.\nExtinguishing the Flame:\nSafe Cooling: Allow the burner to cool down before handling or cleaning.\nClose Vents: If applicable, close vents to extinguish the flame.\nRemember to consult the specific user manual provided by the manufacturer for detailed instructions tailored to your floor burner model. Stay safe and enjoy the warmth!",
      Type: "Tool",
      imgText: "Farmhouse floor burner",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Farm house floor burner",
                  "image": "https://www.rumeno.in/static/media/FarmHouse.5e7a82246e1d49a66bab.jpg",
                  "description": "Farmhouse Floor Burner: Enhancing Warmth and Rustic Charm A farmhouse floor burner is more than just a functional heating appliance—it’s a captivating centerpiece that infuses warmth and character into your living space. Whether you’re nestled in the countryside or embracing farmhouse aesthetics in an urban setting, this versatile burner adds rustic allure to any room.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "FRMBRN",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "3000",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.4",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "55"
                  }
                }`,
    },
    {
      id: 26,
      name: "Slatted Floor ",
      img: [farmflour],
      metaDesc: "Improve Drainage & Airflow: Slatted Floors for Homes & Businesses. Durable and easy to clean, slatted floors offer superior drainage and airflow for various applications. Learn more about slatted floors!",
      priceText: 135,
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Shortdescription: "A slatted floor is a specialized flooring system commonly used in livestock housing, particularly for animals like poultry, goats, and pigs. Let’s delve into its key features:\n\nDesign and Composition:\nA slatted floor consists of evenly spaced iron rods or wooden reapers.\nThese rods or reapers are typically positioned 2 to 3 feet above the ground level.\nThe interspaces between the rods allow for the efficient fall of animal droppings through the slats.\nPurpose and Benefits:\nDroppings Management: The primary purpose of a slatted floor is to facilitate the removal of animal waste.\nHygiene: By allowing droppings to fall through, it helps maintain a cleaner and more hygienic environment.\nComfort: Animals can move freely on the slatted surface, promoting better comfort and mobility.\nMaterials Used:\nIron rods with a diameter of around 2 inches or wooden reapers are commonly employed.\nThe choice of material depends on factors such as cost, durability, and ease of cleaning.",
      description: "The Rumeno Slatted Floor is a high-quality flooring solution designed specifically for livestock housing, including goat farms, pig pens, and poultry enclosures. Let’s explore its features:\n\nMaterial and Construction:\nPremium Plastic: The Rumeno Slatted Floor is crafted from durable, UV-coated plastic material.\nSlatted Design: It features evenly spaced slats that allow for efficient waste management.\nAdvantages:\nHygienic: The slatted design ensures that animal droppings fall through the gaps, maintaining cleanliness and minimizing odor.\nComfort: Animals can move freely on the textured surface, promoting better mobility and well-being.\nLongevity: The Rumeno Slatted Floor is built to withstand harsh farm conditions, offering a long product life.\nDimensions and Installation:\nAvailable in various sizes (e.g., 2 feet x 2 feet, 600 mm x 600 mm).\nEasy to install and compatible with different livestock housing setups.\nWhether you’re managing a goat farm or a poultry facility, the Rumeno Slatted Floor provides a reliable and efficient flooring solution for your animals.",
      Instruction: "Placement and Safety:\r\nSelect a Suitable Location: Place the slatted floor in the designated livestock area.\r\nStable Base: Ensure that the supporting structure (beams or framework) is stable and level.\r\nSafety Measures: Consider safety precautions such as non-slip coatings or textured surfaces to prevent animals from slipping.\r\nAnimal Introduction:\r\nGradual Transition: Introduce animals to the slatted floor gradually. Allow them to explore and adapt.\r\nComfort Zone: Provide additional bedding or soft areas nearby initially to ease the transition.\r\nWaste Management:\r\nDroppings Removal: The slatted design allows droppings to fall through. Regularly remove accumulated waste.\r\nCleaning Schedule: Establish a cleaning routine to maintain hygiene.\r\nHealth Monitoring:\r\nFoot Health: Monitor animals’ feet for any signs of abrasions or discomfort.\r\nLeg Health: Ensure that animals move comfortably and without strain.\r\nMaintenance:\r\nInspect Regularly: Check for damaged slats, loose connections, or wear.\r\nRepair or Replace: Promptly repair or replace any damaged sections.",
      Type: "Tool",
      imgText: "Slatted Floor",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Slatted Floor",
                  "image": "https://www.rumeno.in/static/media/farm-floor.9b28a5a41be8a9899b74.jpg",
                  "description": "The Rumeno Slatted Floor is a high-quality flooring solution designed specifically for livestock housing, including goat farms, pig pens, and poultry enclosures. Let’s explore its features: Material and Construction: Premium Plastic: The Rumeno Slatted Floor is crafted from durable, UV-coated plastic material. Slatted Design: It features evenly spaced slats that allow for efficient waste management. Advantages: Hygienic: The slatted design ensures that animal droppings fall through the gaps, maintaining cleanliness and minimizing odor.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "SLFLR",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "135",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "56"
                  }
                }`,
    },
    {
      id: 27,
      name: "Pet nipple | Goat and sheep nipples",
      priceText: 55,
      img: [goatsheepnipple],
      metaDesc: "Raise Healthy Kids & Lambs: Goat & Sheep Nipples for Bottle Feeding. Durable and easy to clean, our nipples provide a natural feeding experience for orphaned or bottle-fed baby goats and sheep. Shop goat & sheep nipples!",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "50gm",
      Shortdescription: "Design and Compatibility:\nThese nipples are specially designed to fit on standard Pepsi or Cola size bottles.\nThe bottle cap design allows easy attachment to the bottle, creating a secure and leak-proof seal.\nFarmers and breeders can create a makeshift feeding bottle using readily available materials.\nQuality and Safety:\nMade from high-quality materials, these nipples are safe for young animals.\nThey mimic the natural teats of a mother goat or sheep, aiding the transition from nursing to bottle feeding.\nBenefits:\nCost-Effective: Eliminates the need for expensive bottles and specialized equipment.\nDigestion Support: Encourages natural feeding positions, promoting healthy digestion and nutrient absorption.\nWhether you’re managing a small backyard farm or a large commercial operation, the Rumeno Pet Animals Bottle Nipple ensures convenient and safe feeding for your animals",
      description: "The Rumeno Pet Animals Bottle Nipple is a versatile and convenient solution for feeding young animals, especially goats and sheep. These specially designed nipples fit standard Pepsi or Cola size bottles, allowing you to create a makeshift feeding bottle with readily available materials. Here are the key features:\n\nEasy Attachment:\nThe bottle cap design allows the nipple to be easily screwed onto the top of the bottle, creating a secure and leak-proof seal.\nTransport and use the feeding bottle without worrying about spills or leaks.\nHigh-Quality Materials:\nMade from safe materials, these nipples mimic the natural teats of a mother goat or sheep.\nFacilitate a smooth transition from nursing to bottle feeding.\nCost-Effective and Digestion-Friendly:\nEliminate the need for expensive bottles and specialized equipment.\nPromote healthy digestion by allowing young animals to feed at their own pace and in a natural position.\nWhether you’re a backyard farmer or managing a large commercial operation, the Rumeno Pet Animals Bottle Nipple ensures convenient and safe feeding for your animals.",
      Instruction: "Preparation and Compatibility:\nSelect a Suitable Bottle: Choose a standard Pepsi or Cola size bottle.\nInspect the Nipple: Ensure that the Rumeno Pet Animals Bottle Nipple is clean and free from any debris.\nAttachment:\nScrew-On Design: Place the nipple on the top of the bottle.\nSecure Seal: Screw the nipple onto the bottle cap until it creates a secure and leak-proof seal.\nFeeding Process:\nComfortable Position: Hold the bottle at an angle that allows the young animal to feed comfortably.\nNatural Teat Position: Position the nipple so that it mimics the natural teats of a mother goat or sheep.\nAllow Self-Feeding: Let the young animal suckle at its own pace.\nMonitoring and Cleaning:\nObserve Feeding: Monitor the animal during feeding to ensure it is comfortable and latching properly.\nRegular Cleaning: After each use, disassemble the nipple and clean it thoroughly. Use warm water and mild soap.\nStorage and Reuse:\nStore Properly: Keep the nipple in a clean, dry place.\nReuse: The Rumeno Pet Animals Bottle Nipple is reusable. Inspect it before each use to ensure it’s in good condition.",
      Type: "Tool",
      imgText: "Pet Nipple",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Pet nipple | Goat and sheep nipples",
                  "image": "https://www.rumeno.in/static/media/goatSheepNipple.492f7df9c8d2488d4557.png",
                  "description": "The Rumeno Pet Animals Bottle Nipple is a versatile and convenient solution for feeding young animals, especially goats and sheep. These specially designed nipples fit standard Pepsi or Cola size bottles, allowing you to create a makeshift feeding bottle with readily available materials. Here are the key features: Easy Attachment: The bottle cap design allows the nipple to be easily screwed onto the top of the bottle, creating a secure and leak-proof seal. Transport and use the feeding bottle without worrying about spills or leaks.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "PTNP",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "55",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.4",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "68"
                  }
                }`,
    },
    {
      id: 28,
      name: "Selennium-GC | Selenium supplement for cattle and goats | Animal feed supplement",
      priceText: 190,
      img: [selenniumGC],
      metaDesc: "Support Herd Health & Performance with Selenium-GC. This essential cattle & goat feed supplement provides organic selenium for improved immunity, fertility, and muscle development. Learn more about Selenium-GC!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "250gm",
      Shortdescription: "Maintain the Health of Your Herd with Selenium GC A selenium supplement for cattle that is suggested by veterinarians, selenium GC, is designed to promote the health and welfare of your goats and cattle. It deals with possible shortages of selenium, a common problem that can affect an animal's general health and performance. By offering this necessary mineral, selenium GC contributes to the following:\n\nIdeal development and expansion\nrobust immunity\nbetter health for reproduction\nimproved performance of the muscles\nWith Selenium GC, give your herd the advantage they deserve",
      description: "A Potent Selenium Supplement for cattle Is Selenium GC\nFor both cattle and goats, a veterinarian recommends selenium GC. This all-inclusive selenium supplement addresses a common dietary shortfall that may affect the well-being and productivity of animals.\n\nSelenium GC, a specialized selenium supplement for cattle, guarantees that they get this necessary mineral, encouraging:\n\nIdeal development and expansion\nrobust immunity\nbetter health for reproduction\nimproved performance of the muscles\nIn a similar vein, selenium GC functions as a tailored supplement of selenium for goats, offering the following major advantages:\n\nIdeal development and expansion\nrobust immunity\nbetter health for reproduction\nimproved performance of the muscles\nSelenium GC is the reliable option for both cattle and goats to support the general health and wellbeing of your herd.",
      Instruction: "Water Soluble Dose\n3-gm / 10-KG Body Weight\n3-5 days as required ",
      Category: "cow,goat",
      Type: "Medicine",
      imgText: "Selennium-GC Selenium supplement for cattle",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Selennium-GC | Selenium supplement for cattle and goats | Animal feed supplement",
                  "image": "https://www.rumeno.in/static/media/Selennium-GC.50cb3af46106598afa35.png",
                  "description": "A Potent Selenium Supplement for cattle Is Selenium GC For both cattle and goats, a veterinarian recommends selenium GC. This all-inclusive selenium supplement addresses a common dietary shortfall that may affect the well-being and productivity of animals.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "SLGC",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "190",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.2",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "64"
                  }
                }`,
    },
    {
      id: 29,
      name: "Pro-lac power calf milk replacer",
      priceText: 3000,
      img: [prolackcalf, prolackcalf2],
      metaDesc: "Give Calves a Powerful Start with Pro-lac Power. This complete calf milk replacer provides essential nutrients for healthy growth and development.  Shop Pro-lac Power today!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "10kg",
      Shortdescription: "Pro Lac Power: The Complete Calf Milk Replacer for Healthy Growth\nPro Lac Power is a calf milk replacer that is suggested by veterinarians and designed to give growing calves the best nutrition possible. The nutritional profile of this full calf milk replacer is very similar to that of genuine cow's milk, providing a well-balanced combination of vital nutrients, vitamins, and minerals.\n\nPro Lac Power supports the following to make sure your calves thrive:\n\nwholesome development and growth\nrobust immunity\nenhanced nutritional absorption and digestion\nPro Lac Power, the dependable calf milk replacer, will provide your calves with the solid foundation they require.",
      description: "Pro Lac Power: A Potent Calf Milk Replacer That Will Power Your Herd's Future\nGiving a calf the proper nourishment throughout its formative years is essential for laying the groundwork for future success. Pro Lac Power, a calf milk replacer that is suggested by veterinarians, provides orphaned or colostrum-deprived calves with a comprehensive and scientifically developed solution to support healthy growth and development.\n\nMore Than Just Replacement: Pro Lac Power isn't content to just swap out cow's milk for another. The precise formula of this cutting-edge calf milk replacer is designed to closely resemble the nutritional makeup of genuine mother's milk. It offers a well-balanced combination of vital fats, carbs, proteins, and vitamins and minerals that are easily absorbed for maximum nutrient absorption.\n\nInvesting in the Future: When you feed Pro Lac Power to your calves, you're making an investment in their well-being and future output. Principal advantages consist of:\n\nFor robust heifers and future breeding stock, Pro Lac Power promotes healthy weight gain, strong bone development, and appropriate muscle formation. These factors all contribute to optimal growth and development.\nRobust Immune System: By emphasizing vital nutrients, Pro Lac Power helps calves develop a strong immune system that reduces their susceptibility to illness and promotes their growth.\nBetter Digestion and Nutrient Absorption: By optimizing nutrient usage and supporting gut health, this cutting-edge formula makes sure calves get the most out of each feeding.\n\nPro Lac Power: The Reliable Option for Bringing Up Healthy Calves Select Pro Lac Power, the veterinarian-recommended calf milk replacer, to offer the essential building blocks for optimal growth and a bright future for your herd while caring for orphaned or colostrum-deprived calves.\n",
      Instruction: "Daily diet: Milk should be fed 10% of total body weight. It should be divided equally two or three times a day. Make fresh milk every time. Do not make and store extra liquid milk. Prepare the required amount to drink at once. For the first three days after birth, the kid should be given mother's colostrum. \nOn the very first day of milk replacer consumption just give only 100-200 ml of milk to adjust the digestive system with the milk replacer and gradually increase 100 ml on the daily basis till it goes to 10% fo the body weight\nAfter opening the packet, place the milk powder in a clean and dry place in an air tight container. Protect it from direct sunlight.\nFeeding bottles and nipples should be cleaned with disinfectant or lukewarm water after each intake.\nThe feeding bottle and nipple should always be kept clean.\nPreparation:\nPrepare the milk in lukewarm (39° C) water.\nPrepare 1 liter of milk by mixing 100 g of milk powder in 900 ml of lukewarm water.\nReady milk should be given immediately after preparation when the milk temperature is slightly warm (37° C) ",
      Category: "cattle",
      Type: "Medicine",
      imgText: "Pro-lac power calf milk replacer",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Pro-lac power calf milk replacer",
                  "image": "https://www.rumeno.in/static/media/pro-lack-calf-powder.3b8d3a16f8bc2174fb03.png",
                  "description": "Pro Lac Power: A Potent Calf Milk Replacer That Will Power Your Herd's Future Giving a calf the proper nourishment throughout its formative years is essential for laying the groundwork for future success. Pro Lac Power, a calf milk replacer that is suggested by veterinarians, provides orphaned or colostrum-deprived calves with a comprehensive and scientifically developed solution to support healthy growth and development. More Than Just Replacement: Pro Lac Power isn't content to just swap out cow's milk for another. The precise formula of this cutting-edge calf milk replacer is designed to closely resemble the nutritional makeup of genuine mother's milk.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "PRLCMR",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "300",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.4",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "65"
                  }
                }`,
    },
    {
      id: 30,
      name: "Pro-lac power goat milk replacer",
      priceText: 600,
      img: [prolackgoat],
      metaDesc: "Nurture Healthy Goat Kids with Pro-lac Power. This complete goat milk replacer provides essential nutrients for proper growth and development in orphaned or weaned kids. Shop Pro-lac Power today!",
      Veg: "Veg",
      Offer: "Get 5% discount on susbscribing youtube channel & get extra 5% discount on next order by sharing 2 min video product feedback it is for the benefit of yourself in learning innovative ideas of livestock farming by watching youtube channel and your feedback will help new customers to gain the confidence in using products .Your feedback video will also help you to gain more discounts in future orders. If your feedback video gets 100 likes you will earn one loyality point which will equal to Rupees 25 per point. Your points will be counted and redeemed after 60 days. ",
      Delivery: "within 5 -7 days",
      Refundable: "Refundable for any manufacturing defect within 1 week",
      Weight: "850gm",
      Shortdescription: "Pro Lac Power: The Complete Goat Milk Replacer for Healthy Growth\nPro Lac Power is a goat milk replacer that is suggested by veterinarians and designed to give growing goats the best nutrition possible. The nutritional profile of this full goat milk replacer is very similar to that of genuine goat's milk, providing a well-balanced combination of vital nutrients, vitamins, and minerals.\n\nPro Lac Power supports the following to make sure your goat thrive:\n\nwholesome development and growth\nrobust immunity\nenhanced nutritional absorption and digestion\nPro Lac Power, the dependable goat milk replacer, will provide your goat with the solid foundation they require.",
      description: "Pro Lac Power: A Potent Goat Milk Replacer That Will Power Your Herd's Future\r\nGiving a goat the proper nourishment throughout its formative years is essential for laying the groundwork for future success. Pro Lac Power, a goat milk replacer that is suggested by veterinarians, provides orphaned or colostrum-deprived goats with a comprehensive and scientifically developed solution to support healthy growth and development.\r\n\r\nMore Than Just Replacement: Pro Lac Power isn't content to just swap out goat's milk for another. The precise formula of this cutting-edge goat milk replacer is designed to closely resemble the nutritional makeup of genuine mother's milk. It offers a well-balanced combination of vital fats, carbs, proteins, and vitamins and minerals that are easily absorbed for maximum nutrient absorption.\r\n\r\nInvesting in the Future: When you feed Pro Lac Power to your goats, you're making an investment in their well-being and future output. Principal advantages consist of:\r\n\r\nFor robust heifers and future breeding stock, Pro Lac Power promotes healthy weight gain, strong bone development, and appropriate muscle formation. These factors all contribute to optimal growth and development.\r\nRobust Immune System: By emphasizing vital nutrients, Pro Lac Power helps goats develop a strong immune system that reduces their susceptibility to illness and promotes their growth.\r\nBetter Digestion and Nutrient Absorption: By optimizing nutrient usage and supporting gut health, this cutting-edge formula makes sure goats get the most out of each feeding.\r\n\r\nPro Lac Power: The Reliable Option for Bringing Up Healthy Goats Select Pro Lac Power, the veterinarian-recommended goat milk replacer, to offer the essential building blocks for optimal growth and a bright future for your herd while caring for orphaned or colostrum-deprived goats.\r\n",
      Instruction: "Daily diet: Milk should be fed 10% of total body weight. It should be divided equally two or three times a day. Make fresh milk every time. Do not make and store extra liquid milk. Prepare the required amount to drink at once. For the first three days after birth, the kid should be given mother's colostrum. \nOn the very first day of milk replacer consumption just give only 100-200 ml of milk to adjust the digestive system with the milk replacer and gradually increase 100 ml on the daily basis till it goes to 10% fo the body weight\nAfter opening the packet, place the milk powder in a clean and dry place in an air tight container. Protect it from direct sunlight.\nFeeding bottles and nipples should be cleaned with disinfectant or lukewarm water after each intake.\nThe feeding bottle and nipple should always be kept clean.\nPreparation:\nPrepare the milk in lukewarm (39° C) water.\nPrepare 1 liter of milk by mixing 100 g of milk powder in 900 ml of lukewarm water.\nReady milk should be given immediately after preparation when the milk temperature is slightly warm (37° C) ",
      Category: "goat",
      Type: "Medicine",
      imgText: "Pro-lac power goat milk replacer",
      script: `{
                  "@context": "https://schema.org/",
                  "@type": "Product",
                  "name": "Pro-lac power goat milk replacer",
                  "image": "https://www.rumeno.in/static/media/pro-lack-goat-powder.bb0b07d4bcc8549414c2.png",
                  "description": "Pro Lac Power: A Potent Goat Milk Replacer That Will Power Your Herd's Future Giving a goat the proper nourishment throughout its formative years is essential for laying the groundwork for future success. Pro Lac Power, a goat milk replacer that is suggested by veterinarians, provides orphaned or colostrum-deprived goats with a comprehensive and scientifically developed solution to support healthy growth and development. More Than Just Replacement: Pro Lac Power isn't content to just swap out goat's milk for another. The precise formula of this cutting-edge goat milk replacer is designed to closely resemble the nutritional makeup of genuine mother's milk.",
                  "brand": {
                    "@type": "Brand",
                    "name": "Rumeno"
                  },
                  "sku": "PRLGMR",
                  "offers": {
                    "@type": "Offer",
                    "url": "",
                    "priceCurrency": "INR",
                    "price": "600",
                    "priceValidUntil": "2024-12-31",
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "52"
                  }
                }`,
    }
  ]

  const AllData = [...MainJson];

  var Value = '';
  // useEffect(async() => {
  //   if (Array.isArray(getLocalPrevCarts)) {
  //     //setCart(getLocalPrevCarts);
  //   } else {
  //     setCart([]);
  //   }
  //   const responses = await axios.post(`${process.env.REACT_APP_API}/login`, payloads)
  //   console.log('responses: ', responses.data);
  // }, [setCart]);

  useEffect(() => {
    Value = cart?.length;
    if (Value !== 0) {
      setSizevalue(Value)
    }
  }, [cart]);

  useEffect(() => {
    fetchItems()
}, [])

 // -----fetch cart data from api
const fetchItems = async () => {
try {
  const response = await axios.get(`${process.env.REACT_APP_API}/cart/${getMidCookies?.uID}`);
  setCart(response.data)
  
} catch (error) {
  console.error('Error fetching items:', error);
}
};


  const filteredProducts = MainJson.filter(product =>
    ["kid", "cattle"].some(keyword =>
      product.Category?.toLowerCase().includes(keyword.toLowerCase()) ||
      product.name?.toLowerCase().includes(keyword.toLowerCase())
    )
  );
  const uniqueNames = new Set(filteredProducts.map(item => item.name.toLowerCase()));
  const uniqueItemsArray = Array.from(uniqueNames, name =>
    filteredProducts.find(item => item.name.toLowerCase() === name)
  );




  const [showLoginModal, setShowLoginModal] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const openRegistration = () => {
    setShowRegistrtionModal(true);
    setShowLoginModal(false);
  };

  const closeRegistrationModal = () => {
    setShowRegistrtionModal(false);
  };
  const OpenSendOtp = () => {
    setShowOpt(true);
    setShowLoginModal(false);
  };
  const CloseSendOtp = () => {
    setShowOpt(false);
  };



  const AddToCarts = async (item) => {
    let payload = { ...{ id: item?.id, price: item?.priceText, img: item?.img[0], name: item?.name }, ...{ amount: 1, uid: getMidCookies?.uID } }
    console.log('payload: ', payload);
    if (loggedInUser) {
      // if (!Array.isArray(cart)) {
      //   setCart([]);
      // }
      // Check if the item already exists in the cart
      const itemExists = cart.some(cartItem => cartItem.id === item.id && cartItem.name === item.name);


      if (!itemExists) {

        // Add logic to handle adding item to cart
        // setCart([...cart, { id: item.id, amount: 1, price: item.priceText, img: item.img, name: item.name, uID: UidData }]);
        const itemData = { id: item.id, amount: 1, price: item.priceText, img: item.img, name: item.name, uID: UidData };
        setiteamdata(itemData);

        try {
          const response = await axios.post(`${process.env.REACT_APP_API}/cart`, payload,
            {
              headers: {
                'Authorization': `${getMidCookies.token}`
              }
            });

          if (response?.status == 201) {
            fetchItems()
            // localStorage.setItem("cart", JSON.stringify([...cart, { id: item.id, amount: 1, price: item.priceText, img: item.img, name: item.name, uID: UidData }]));
          }
          toast.success("Item is added to your cart", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          const payloads = {
            mobile: 8770529849,
            password: "Admin@123"
          }
          const responses = await axios.post(`${process.env.REACT_APP_API}/login`, payloads)
          console.log('responses: ', responses.data);
        } catch (error) {
          console.error('Add to cart is not working', error);
        }
      } else {
        // Optionally, show a message that the item is already in the cart
        toast.warn("Item is already added to your cart", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      }
    } else {
      setShowLoginModal(!showLoginModal);
      toast.warn("Please Login", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" name="description" content="Slow weight gain or picky eaters? Explore top-rated cattle feed supplements for a healthier, more productive herd. Learn More!
"/>
        <title>Maximize Profits, Minimize Waste: Essential Cattle Feed Supplements | Cattle weight gain supplements
        </title>
        <link rel="canonical" href="https://www.rumeno.in/veterinary-products/cattle-feed-supplements" />
      </Helmet>

      <div className="desk-nav">
        <Navbar size={cart?.length} />
      </div>
      <div className="mob-nav">
        <ResponsiveNavbar size={cart?.length} />
      </div>
      <section className="container-fluid service-bg overflow-hidden">
        <div
          className="section-header text-center mx-auto mb-3 pt-5"
          data-wow-delay="0.1s"
        >
          <div
            className="d-flex justify-content-center pt-5 mt-lg-5"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="mx-2">
              <div className="services-line-largeleft"></div>
              <div className="services-line-smallleft"></div>
            </div>
            <span className="label-title">Cattle Feed Supplements</span>
            <div className="mx-2">
              <div className="services-line-largeright"></div>
              <div className="services-line-smallright"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid category-section">
          <div className="row category-menu justify-content-end mx-1 mt-3">
            <div className="col-lg-9 bg-white shadow ">
              <h4 className="mt-2 text-center mb-0 fw-bold">CATEGORY MENU</h4>
              <hr className="my-2" />
              <ul>
                <li><Link className="text-decoration-none text-dark">Goat Vaccine</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Accessories</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Deworm</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Food</Link></li>
                <li><Link className="text-decoration-none text-dark">Goat Medicine</Link></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-start">

            {uniqueItemsArray.map((item, index) => (
              <div key={index} className="col-lg-3 text-center border bg-white mx-2  my-3  shadow">
                <img src={item.img[0]} className="w-100 mt-2" height={250} alt="loading" />
                <h5 className="my-3  fw-bold m-auto text-center text-trun-head">{item.name}</h5>
                <p className="mt-2 text-trun">{item.Shortdescription}</p>
                <hr className="my-0" />
                <div className="d-flex justify-content-between mx-2 align-item-center">
                  <button
                    className="btn text-white border-0 w-auto gradient-custom-2 my-4 p-2"
                    onClick={() => AddToCarts(item)}
                  >
                    Add to Cart
                  </button>
                  <Link className="text-decoration-none fs-6 text-success d-flex align-items-center  px-1 rounded" to={`/veterinary-products/${item.imgText.replace(/ /g, '-')}/${item.id}`} >
                    <span
                      className=""
                    >
                      View More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </Link>

                </div>
              </div>
            ))}



            <Login
              showModal={showLoginModal}
              closeModal={setShowLoginModal}
              openRegistrationModal={openRegistration}
              OpenSendOtpModal={OpenSendOtp}
            />
            <Registration
              showModal={showRegistrationModal}
              closeModal={closeRegistrationModal}
            />
            <SendOtp showModal={showOtp} closeModal={CloseSendOtp} />
          </div>

        </div>
        <div className="row bg-white shadow mx-3 my-4 justify-content-center">
          <div className="col-lg-11 my-4">
            <h1 className="my-4 text-center">
              Enhancing Cattle Well-being and Growth with Rumeno's Cattle Feed Supplements
            </h1>
            <h2 className="my-2">Overview</h2>
            <p>
              Rumeno Farmotech produces high-quality animal feed supplements to enhance livestock health and productivity. Their cattle feed supplements includes mineral combinations and calcium supplements, ensuring robust growth and nourishment for cows and buffaloes. With a commitment to research-driven solutions, Rumeno Farmotech offers a broad range of products for your lovely cattle, like

            </p>
            <hr className="my-4" />
            <h3 className="fw-bold">1. Cattle Weight Gain Supplements</h3>
            <p>
              Cattle need the proper balance of nutrients to acquire weight.
              Consider the following weight-gain supplements:
            </p>
            <h4>A. High-Intensity Foods</h4>
            <p>
              <strong>Corn:</strong> Feeds based on corn are high in energy and
              aid in the growth of cattle's mass. They are especially helpful
              when  cattle are being finished.
            </p>
            <p>
              <strong>Barley: </strong> An additional grain high in energy that
              encourages weight gain.
            </p>
            <h4>B. Supplements with Protein</h4>
            <p>
              A common protein supplement for cattle is soybean meal. It offers
              the vital amino acids required for the growth of muscle.
              Cottonseed Meal: Packed in fiber and protein, this meal promotes
              weight gain.
            </p>
            <h4>C. Vitamin and Mineral Supplements</h4>
            <p>
              Calcium and phosphorus are necessary for healthy bones and general
              growth. Vitamin E: Promotes the growth of muscles and immunity.
            </p>
            <hr className="my-4" />
            <h3 className="fw-bold">2. Supplements for Cattle Protein</h3>
            <p>
              Cattle require protein for both growth and maintenance because it
              is the building block of muscle. Consider the following protein
              supplements:
            </p>
            <h4>A. Meal Made of Soy</h4>
            <p>
              Soybean meal is a dependable source of protein, as previously
              noted
            </p>
            <p>
              <strong>Alfalfa Hay:</strong> Protein and fiber are both present
              in high-quality alfalfa hay.
            </p>
            <hr className="my-4" />
            <h3 className="fw-bold">
              3. RumenO Farmotech: A Reputable Brand in Supplements for Cattle
            </h3>
            <p>
              In the cattle business, <Link to="/home" className="d-inline text-dark text-decoration-none">Rumeno Farmotech</Link> is a well-known brand
              that provides a selection of premium supplements. This is why
              their products are unique:
            </p>
            <h4>A. Formulas Backed by Research</h4>
            <p>
              RumenO Farmotech makes research investments to create potent
              mixtures. Their supplements are made to specifically address the
              requirements of cattle.
            </p>
            <h4>B. Dietary Balance</h4>
            <p>
              RumenO Farmotech products offer balanced nutrition for weight
              gain, protein intake, and general wellness.
            </p>
            <h4>C. Licks and Mineral Blocks</h4>
            <p>
              Cattle may easily obtain necessary minerals with RumenO
              Farmotech's handy mineral blocks and licks.
            </p>
            <h4>In summary</h4>
            <p>
              As a farmer raising cattle, give your animals' wellbeing and
              growth in weight first priority. You should think about adding
              supplements from RumenO Farmotech to your feeding regimen. Recall
              that profitable and prosperous farms are the result of having
              healthy and well-fed livestock!
            </p>
          </div>
        </div>
        <Accordion defaultActiveKey="0" flush>
          {FAQ.map((item, index) => (
            <Accordion.Item className="m-3" key={index} eventKey={index.toString()}>
              <Accordion.Header><strong className="mx-2">Q.{index + 1} </strong> {item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </section>
      <Footer />
    </>
  );
};

export default CattleCategoryPage;
