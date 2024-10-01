import client from '@/db';
// import { PrismaClient } from '@prisma/client';
// const client = new PrismaClient();

async function insertDataintoDB() {

  const phonesData = [
    {
      name: "iPhone 15",
      regularPrice: 69999,
      salePrice: 66400,
      link: "https://amzn.to/3N5i0XM",
      priority: 10,
      note: "latest iPhone model",
    },
    {
      name: "iPhone 15 Pro",
      regularPrice: 109900,
      salePrice: 99999,
      link: "https://www.flipkart.com/apple-iphone-15-pro-natural-titanium-128-gb/p/itm7ffb1e9990edd",
      priority: 20,
      note: "premium iPhone with pro features",
    },
    {
      name: "iPhone 15 Pro Max",
      regularPrice: 139999,
      salePrice: 119999,
      link: "https://www.flipkart.com/apple-iphone-15-pro-max-natural-titanium-256-gb/p/itm9d44960698192",
      priority: 30,
      note: "larger pro model with better camera",
    },
    {
      name: "CMF Phone 1",
      regularPrice: 14999,
      salePrice: 13999,
      link: "https://www.flipkart.com/cmf-nothing-phone-1-light-green-128-gb/p/itmeef68c7ce70bf",
      priority: 40,
      note: "budget-friendly smartphone",
    },
    {
      name: "Samsung Galaxy M35",
      regularPrice: 24999,
      salePrice: 14999,
      link: "https://amzn.to/47OCpK7",
      priority: 50,
      note: "mid-range Samsung phone with good battery life",
    },
    {
      name: "Moto g85 5G",
      regularPrice: 18732,
      salePrice: 16999,
      link: "https://www.flipkart.com/motorola-g85-5g-olive-green-128-gb/p/itm1c4b849213a0e",
      priority: 60,
      note: "5G phone with decent specs",
    },
    {
      name: "Poco X6 Pro",
      regularPrice: 24999,
      salePrice: 25999,
      link: "https://amzn.to/3ZEprMX",
      priority: 70,
      note: "performance-focused phone",
    },
    {
      name: "Poco F6 5G",
      regularPrice: 33999,
      salePrice: 31499,
      link: "https://amzn.to/47H8Nyp",
      priority: 80,
      note: "powerful gaming phone",
    },
    {
      name: "OnePlus Nord 4",
      regularPrice: 29999,
      salePrice: 27999,
      link: "https://amzn.to/3ZJlnLG",
      priority: 90,
      note: "mid-range OnePlus with smooth performance",
    },
    {
      name: "Samsung Galaxy S23 FE 5G",
      regularPrice: 37999,
      salePrice: 29999,
      link: "https://www.flipkart.com/samsung-galaxy-s23-fe-mint-128-gb/p/itmfde87b854d383",
      priority: 100,
      note: "flagship experience at a lower price",
    },
    {
      name: "Pixel 8",
      regularPrice: 71999,
      salePrice: 36999,
      link: "https://www.flipkart.com/google-pixel-8-hazel-256-gb/p/itm67e2a2531aaac",
      priority: 110,
      note: "excellent camera and software",
    },
    {
      name: "OnePlus 12R",
      regularPrice: 42999,
      salePrice: 40999,
      link: "https://amzn.to/3N3NUUp",
      priority: 120,
      note: "OnePlus flagship killer",
    },
    {
      name: "Samsung Galaxy S23 5G",
      regularPrice: 49999,
      salePrice: 37999,
      link: "https://www.flipkart.com/samsung-galaxy-s23-5g-green-128-gb/p/itm7cdd081996dc8",
      priority: 130,
      note: "compact flagship device",
    },
    {
      name: "Nothing Phone 2",
      regularPrice: 44999,
      salePrice: 37999,
      link: "https://www.flipkart.com/nothing-phone-2-dark-grey-128-gb/p/itmc1490711c3eb9",
      priority: 140,
      note: "unique design with flagship specs",
    },
    {
      name: "Motorola Razr 40",
      regularPrice: 59999,
      salePrice: 44499,
      link: "https://amzn.to/47Hmi15",
      priority: 150,
      note: "flip phone with a modern twist",
    },
    {
      name: "Samsung Galaxy S24 (8+128GB)",
      regularPrice: 62999,
      salePrice: 62999,
      link: "https://amzn.to/3ZEppoj",
      priority: 160,
      note: "latest Samsung flagship",
    },
    {
      name: "Pixel 9",
      regularPrice: 79999,
      salePrice: 79999,
      link: "https://www.flipkart.com/google-pixel-9-obsidian-256-gb/p/itm330ed8ebeefe1",
      priority: 170,
      note: "high-end Google smartphone",
    },
    {
      name: "Samsung Galaxy S23 Ultra",
      regularPrice: 74999,
      salePrice: 69999,
      link: "https://amzn.to/4eJZrEt",
      priority: 180,
      note: "ultimate Samsung flagship",
    }
  ]
  
  const laptopData = [
    {
      name: "MacBook Air M1",
      regularPrice: 62990,
      salePrice: 51990,
      link: "https://amzn.to/3Y3syNv",
      priority: 10,
      note: "lightweight laptop with great performance",
    },
    {
      name: "Apple MacBook Air M2",
      regularPrice: 94990,
      salePrice: 77599,
      link: "https://www.flipkart.com/apple-2022-macbook-air-m2-8-gb-256-gb-ssd-mac-os-monterey-mly33hn-a/p/itm0946c05e6335c",
      priority: 20,
      note: "latest MacBook Air with M2 chip",
    },
    {
      name: "Lenovo IdeaPad Slim 3 Intel Core i3 12th Gen 15.6",
      regularPrice: 58990,
      salePrice: 34990,
      link: "https://amzn.to/4dnDvxO",
      priority: 30,
      note: "affordable laptop for everyday use",
    },
    {
      name: "Dell 15 Thin & Light Laptop, 12th Gen Intel Core i3",
      regularPrice: 48990,
      salePrice: 33990,
      link: "https://amzn.to/3XDjSMe",
      priority: 40,
      note: "thin and light laptop for students",
    },
    {
      name: "ASUS Vivobook Go 15 (2023), AMD Ryzen 5 7520U, 15.6",
      regularPrice: 50990,
      salePrice: 37990,
      link: "https://amzn.to/3BlzDjD",
      priority: 50,
      note: "solid performance at an affordable price",
    },
    {
      name: "Acer Aspire Lite AMD Ryzen 7 5700U 16 GB RAM/512 GB SSD",
      regularPrice: 72990,
      salePrice: 39990,
      link: "https://amzn.to/3zKaHl5",
      priority: 60,
      note: "powerful laptop with great value",
    },
    {
      name: "HP Laptop 15s, 12th Gen Intel Core i7-1255U",
      regularPrice: 78778,
      salePrice: 56240,
      link: "https://amzn.to/4drJyBn",
      priority: 70,
      note: "high-performance laptop for professionals",
    },
    {
      name: "ASUS TUF A15 (3050, 75w, TGP)",
      regularPrice: 61999,
      salePrice: 59740,
      link: "https://amzn.to/3XLXbFT",
      priority: 80,
      note: "gaming laptop with strong performance",
    },
    {
      name: "Lenovo LOQ i5 HX 6GB 3050",
      regularPrice: 66999,
      salePrice: 65990,
      link: "https://amzn.to/3Y1lZec",
      priority: 90,
      note: "powerful gaming laptop",
    },
    {
      name: 'Lenovo IdeaPad Pro 5 Intel Evo Core Ultra 9 185H Built-in AI',
      regularPrice: 146890,
      salePrice: 99999,
      link: 'https://amzn.to/3XI2lT9',
      priority: 100,
      note: 'high-performance laptop with AI features'
    },
    {
      name: 'PS 5 Slim',
      regularPrice: 54999,
      salePrice: 47240,
      link: 'https://amzn.to/3XHwou8',
      priority: 110,
      note: 'slim edition gaming console'
    }
  ];
  
  
  const twsAndHeadphonesData = [
    {
        name: 'Apple AirPods (2nd Gen)',
        regularPrice: 10990,
        salePrice: 7499,
        link: 'https://www.flipkart.com/apple-airpods-2nd-gen-charging-case-bluetooth-headset-mic/p/itm8f1b2b0173ce4',
        priority: 10,
        note: 'classic AirPods with charging case'
    },
    {
        name: 'Apple AirPods Pro (2nd Gen With USB-C)',
        regularPrice: 24900,
        salePrice: 16500,
        link: 'https://www.flipkart.com/apple-airpods-pro-2nd-generation-magsafe-case-usb-c-bluetooth-headset/p/itm60c8f5a308352',
        priority: 20,
        note: 'premium AirPods with USB-C support'
    },
    {
        name: 'boAt Nirvana Ion',
        regularPrice: 1699,
        salePrice: 1399,
        link: 'https://amzn.to/4gLZhOH',
        priority: 30,
        note: 'budget-friendly TWS earbuds'
    },
    {
        name: 'OnePlus Nord Buds 3',
        regularPrice: 2799,
        salePrice: 2299,
        link: 'https://amzn.to/3zBNzoU',
        priority: 40,
        note: 'affordable TWS earbuds'
    },
    {
        name: 'JBL 245NC',
        regularPrice: 8999,
        salePrice: 2999,
        link: 'https://amzn.to/3N2YhId',
        priority: 50,
        note: 'noise-canceling Bluetooth earbuds'
    },
    {
        name: 'OnePlus Buds 3',
        regularPrice: 5499,
        salePrice: 4499,
        link: 'https://amzn.to/4ejYeUd',
        priority: 60,
        note: 'wireless earbuds with good sound quality'
    },
    {
        name: 'Sony C500',
        regularPrice: 5499,
        salePrice: 4449,
        link: 'https://amzn.to/3N4Ms4s',
        priority: 70,
        note: 'mid-range wireless earbuds'
    },
    {
        name: 'Samsung Galaxy Buds2 Pro',
        regularPrice: 9999,
        salePrice: 7999,
        link: 'https://amzn.to/3MZnfbw',
        priority: 80,
        note: 'premium wireless earbuds'
    },
    {
        name: 'Sony WH-1000XM4',
        regularPrice: 22990,
        salePrice: 19990,
        link: 'https://amzn.to/3BnDMTZ',
        priority: 90,
        note: 'high-quality noise-canceling headphones'
    },
    {
        name: 'Sony WH-1000XM5',
        regularPrice: 29749,
        salePrice: 24990,
        link: 'https://amzn.to/4elpodE',
        priority: 100,
        note: 'latest noise-canceling headphones'
    }
  ]
  
  const smartwatchesData = [
    {
        name: 'Apple Watch Series 8',
        regularPrice: 41999,
        salePrice: 38999,
        link: 'https://www.flipkart.com/apple-watch-series-8-gps-ecg-app-temperature-sensor-ipx6-fall-crash-detection-41mm/p/itmf9b88c0762b00',
        priority: 10,
        note: 'smartwatch with advanced health tracking'
    },
    {
        name: 'Noise Twist Round dial Smart Watch with Bluetooth Calling',
        regularPrice: 4999,
        salePrice: 1099,
        link: 'https://amzn.to/4gFd21v',
        priority: 20,
        note: 'affordable smartwatch with Bluetooth calling'
    },
    {
        name: 'Amazfit Active 42mm Smartwatch',
        regularPrice: 10999,
        salePrice: 6999,
        link: 'https://amzn.to/4gE45Fz',
        priority: 30,
        note: 'smartwatch with fitness tracking features'
    },
    {
        name: 'OnePlus Watch 2R',
        regularPrice: 17999,
        salePrice: 14999,
        link: 'https://amzn.to/3ZIHbXv',
        priority: 40,
        note: 'stylish smartwatch with long battery life'
    },
    {
        name: 'Samsung Galaxy Watch 4 Classic',
        regularPrice: 9999,
        salePrice: 8999,
        link: 'https://amzn.to/3ZHhTt5',
        priority: 50,
        note: 'classic smartwatch with health tracking'
    },
    {
        name: 'Samsung Galaxy Watch 7 (40mm)',
        regularPrice: 32999,
        salePrice: 27249,
        link: 'https://amzn.to/3N1RPkD',
        priority: 60,
        note: 'premium smartwatch with AMOLED display'
    }
  ]
  
  const tabletsData = [
    {
      name: 'Samsung Galaxy Tab A9+',
      regularPrice: 20999,
      salePrice: 19999,
      link: 'https://amzn.to/4gTf4v8',
      priority: 10,
      note: 'affordable tablet with good display'
    },
    {
        name: 'Samsung Galaxy Tab S9 FE',
        regularPrice: 31999,
        salePrice: 19999,
        link: 'https://amzn.to/4gGCB2e',
        priority: 20,
        note: 'feature-rich tablet with S-Pen support'
    },
    {
        name: 'Xiaomi Pad 6 Tablet',
        regularPrice: 26999,
        salePrice: 22998,
        link: 'https://amzn.to/3Bq1RJV',
        priority: 30,
        note: 'budget-friendly tablet with good performance'
    },
    {
        name: 'Apple iPad (10th Gen)',
        regularPrice: 28999,
        salePrice: 28499,
        link: 'https://amzn.to/3YbTtXz',
        priority: 40,
        note: 'latest iPad with sleek design'
    },
    {
        name: 'Apple 2022 iPad Air M1 Chip',
        regularPrice: 59999,
        salePrice: 57499,
        link: 'https://amzn.to/4ejpK4h',
        priority: 50,
        note: 'powerful iPad with M1 chip'
    }
  ];
  
  
    for (const pho of phonesData) {
      await client.mobile.create({
        data: pho,
      });
    }

    for (const lap of laptopData) {
      await client.laptop.create({
        data: lap,
      });
    }

    for (const tab of tabletsData) {
      await client.tablet.create({
        data: tab,
      });
    }

    for (const smartw of smartwatchesData) {
      await client.smartwatch.create({
        data: smartw,
      });
    }

    for (const tah of twsAndHeadphonesData) {
      await client.twsAndHeadphones.create({
        data: tah,
      });
    }
  
    console.log("data inserted successfully!");
  }
  
  export default insertDataintoDB;